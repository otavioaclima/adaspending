
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function tsToJson(tsFile, varName, outFile) {
    const content = fs.readFileSync(tsFile, 'utf8');
    
    // Create a temporary JS file
    let jsContent = content
        .replace(/export interface [\s\S]*?}/g, '') // Remove interfaces
        .replace(/export const (\w+): [\s\S]*? = \[/g, 'const $1 = [') // Replace export const with const
        .replace(/export function [\s\S]*$/g, ''); // Remove trailing functions
        
    jsContent += `\nconsole.log(JSON.stringify(${varName}, null, 2));`;
    
    const tmpFile = path.join(__dirname, 'tmp_convert.js');
    fs.writeFileSync(tmpFile, jsContent);
    
    try {
        const json = execSync(`node "${tmpFile}"`, { maxBuffer: 10 * 1024 * 1024 }).toString();
        fs.writeFileSync(outFile, json);
        console.log(`Successfully converted ${varName} to ${outFile}`);
    } catch (e) {
        console.error(`Error converting ${varName}:`, e.message);
    } finally {
        if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    }
}

tsToJson(
    path.join(__dirname, '../src/data/intersectData.ts'),
    'intersectProjects',
    path.join(__dirname, '../public/data/intersectData.json')
);

tsToJson(
    path.join(__dirname, '../src/data/vendorProfiles.ts'),
    'vendorProfiles',
    path.join(__dirname, '../public/data/vendorProfiles.json')
);
