import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "log.txt");

if (!existsSync(filePath)) {
    console.log("file dont exist.");
    process.exit(1);
}


readFile(filePath, "utf8", countWords);

function countWords(err, data) {
    if (err) {
        console.log("err: ", err);
    } else {

        const wordCount = data.trim().split(/\s+/).length;
        console.log(`nums of words:  ${wordCount}`);
    }
}



