import axios from 'axios'


// Базова конфігурація, готова для заміни BASE_URL
export const api = axios.create({
baseURL: 'https://example.com/api',
timeout: 5000
})


// Для локальної роботи ми не викликаємо реальний бекенд — productsApi.js має фейкову реалізацію.
// Але в реальному проєкті тут можна додати інтерсептори, обробку помилок тощо.