import adapter from '@sveltejs/adapter-netlify'; // Используем Netlify адаптер

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // ... (другие настройки)
    kit: {
        adapter: adapter(), 
        paths: {
            // Оставляем пустым для корневого домена Netlify
            base: '', 
        }
    }
};

export default config;