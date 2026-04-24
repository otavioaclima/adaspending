import { intersectProjects } from './src/data/intersectData.js';

const totalAllocation = intersectProjects.reduce((sum, p) => sum + p.totalAmount, 0);
const totalSpent = intersectProjects.reduce((sum, p) => sum + p.amountSpent, 0);
const remaining = totalAllocation - totalSpent;

console.log('Total Allocation:', totalAllocation);
console.log('Total Spent:', totalSpent);
console.log('Remaining:', remaining);
