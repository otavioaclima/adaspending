
const fs = require('fs');
const path = require('path');

function convert(tsFile, varName, outFile) {
    const content = fs.readFileSync(tsFile, 'utf8');
    const marker = `export const ${varName}`;
    const markerIndex = content.indexOf(marker);
    if (markerIndex === -1) {
        console.error(`Marker not found: ${marker}`);
        return;
    }
    
    const equalIndex = content.indexOf('=', markerIndex);
    const startIndex = content.indexOf('[', equalIndex);
    const endIndex = content.lastIndexOf(']');
    
    // We need to be careful with the last ] because it might be inside a function if there are trailing functions
    // But in intersectData.ts there are no trailing functions.
    // In vendorProfiles.ts there is.
    
    let arrayStr = '';
    if (varName === 'vendorProfiles') {
        // Find matching ] for the [ at startIndex
        let depth = 0;
        for (let i = startIndex; i < content.length; i++) {
            if (content[i] === '[') depth++;
            else if (content[i] === ']') depth--;
            if (depth === 0) {
                arrayStr = content.substring(startIndex, i + 1);
                break;
            }
        }
    } else {
        arrayStr = content.substring(startIndex, endIndex + 1);
    }

    try {
        // Evaluate the string to get a real JS object (handles comments and trailing commas)
        const data = eval(arrayStr);
        fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
        console.log(`Converted ${varName} to ${outFile}`);
    } catch (e) {
        console.error(`Error in ${varName}:`, e);
    }
}

convert(
    path.join(__dirname, '../src/data/intersectData.ts'),
    'intersectProjects',
    path.join(__dirname, '../public/data/intersectData.json')
);

convert(
    path.join(__dirname, '../src/data/vendorProfiles.ts'),
    'vendorProfiles',
    path.join(__dirname, '../public/data/vendorProfiles.json')
);
