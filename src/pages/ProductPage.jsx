import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addToCart } from '../features/cart/cartSlice'


export default function ProductPage(){
const { id } = useParams()
const dispatch = useAppDispatch()
const product = useAppSelector(s => s.products.items.find(i => i.id === id))


if (!product) return <div className="container">Продукт не знайдено</div>


return (
<div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
<div className="card">
<img src={product.image} alt="" />
</div>
<div>
<h2>{product.title}</h2>
<p>{product.description}</p>
<div className="price">{product.price} грн</div>
<div style={{marginTop:20}}>
<button className="button" onClick={() => dispatch(addToCart(product))}>Додати в кошик</button>
</div>
</div>
</div>
)
}