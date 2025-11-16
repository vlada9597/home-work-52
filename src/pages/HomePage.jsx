import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchProducts } from '../features/products/productsSlice'
import ProductCard from '../components/ProductCard'
import { addToCart } from '../features/cart/cartSlice'


export default function HomePage(){
const dispatch = useAppDispatch()
const { items, status } = useAppSelector(s => s.products)


useEffect(()=>{
if (status === 'idle') dispatch(fetchProducts())
}, [dispatch, status])


const handleAdd = product => {
dispatch(addToCart(product))
}


return (
<main className="container">
<h1>Найсмачніші круасани</h1>
{status === 'loading' && <p>Завантаження...</p>}
{status === 'failed' && <p>Не вдалося завантажити продукти.</p>}
<div className="products-grid" style={{marginTop:16}}>
{items.map(p => (
<ProductCard key={p.id} product={p} onAdd={handleAdd} />
))}
</div>
</main>
)
}