import adapter from '@sveltejs/adapter-vercel'; // Используем Vercel адаптер

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // ... (остальные настройки)
    kit: {
        adapter: adapter(), 
        paths: {
            // Удаляем префикс, так как Vercel использует корневой домен
            base: '', 
        }
    }
};

export default config;