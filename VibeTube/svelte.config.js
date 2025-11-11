// 1. Импортируем адаптер-auto
import adapter from '@sveltejs/adapter-auto'; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // ... (остальные настройки)
    kit: {
        // Указываем, какой адаптер использовать
        adapter: adapter(), 
        paths: {
            // Если вы публикуете на Vercel, вам больше не нужен префикс /vibe-tube
            // (если только вы не используете собственный домен или другую сложную конфигурацию).
            // Для первого развертывания лучше оставить base пустым.
            base: '', 
        }
    }
};

export default config;