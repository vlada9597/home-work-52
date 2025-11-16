// Фейкове API: повертає список круасанів. Замість цього ви згодом підключите axios з baseApi.


export const fetchProductsFromServer = async () => {
// Імітуємо мережеву затримку
await new Promise(res => setTimeout(res, 400))
return [
  {
    id: 'c1',
    title: 'Класичний круасан',
    description: 'Тонкий, масляний, з хрусткою скоринкою',
    price: 124,
    image: '/images/classic croissant.jpg'
  },
  {
    id: 'c2',
    title: 'Круасан з шоколадом',
    description: 'Ніжний круасан з начинкою з шоколадної пасти',
    price: 232,
    image: '/images/chocolate croissant.jpg'
  },
  {
    id: 'c3',
    title: 'Мигдальний круасан',
    description: 'З посипкою з мигдалю та вершковим кремом',
    price: 240,
    image: '/images/almond croissant.jpg'
   }
 ]
}
