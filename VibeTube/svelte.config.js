import adapter from '@sveltejs/adapter-netlify';
import { readFileSync, writeFileSync } from 'fs'; // Импортируем fs

// Функция для копирования файла _redirects
function netlifyRedirects() {
    return {
        name: 'netlify-redirects',
        // Выполняется после завершения сборки адаптера
        async finalize({ outDir }) {
            const redirectFile = readFileSync('_redirects', 'utf-8');
            writeFileSync(`${outDir}/_redirects`, redirectFile);
        }
    };
}
