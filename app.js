const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://ваш-сервис.onrender.com';

// Режим веб-хука (для продакшена)
const bot = new TelegramBot(token, {
    webHook: {
        port: PORT
    }
});

// Настраиваем webhook
bot.setWebHook(`${URL}/bot${token}`);

// Обработчики команд и сообщений
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я  Ксюшин бот.');
});

// Остальные обработчики...

console.log(`Бот запущен в режиме webhook на порту ${PORT}`);