import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, 'grades.xlsx');

function calculateAverageGrades(filePath) {

    const workbook = XLSX.readFile(filePath);
    

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    

    const data = XLSX.utils.sheet_to_json(sheet);
    

    const sum = data.reduce((acc, row) => {

        return acc + row['grade'];
    }, 0);
    

    const average = sum / data.length;
    
    return average;
}

const averageGrade = calculateAverageGrades(filePath);
console.log(`grade  ${averageGrade.toFixed(2)}`);