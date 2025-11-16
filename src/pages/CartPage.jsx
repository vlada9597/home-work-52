import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { changeQty, removeFromCart, clearCart } from '../features/cart/cartSlice'


export default function CartPage(){
const dispatch = useAppDispatch()
const { items, totalQty, totalPrice } = useAppSelector(s => s.cart)
const list = Object.values(items)


return (
<div className="container">
<h1>Кошик</h1>
{list.length === 0 ? (
<p>Кошик порожній</p>
) : (
<div style={{display:'grid',gap:12}}>
{list.map(it => (
<div key={it.product.id} className="card" style={{display:'flex',gap:12,alignItems:'center'}}>
<img src={it.product.image} alt="" style={{width:100,height:80,objectFit:'cover'}}/>
<div style={{flex:1}}>
<div style={{fontWeight:700}}>{it.product.title}</div>
<div className="small">{it.product.price} грн</div>
</div>
<div style={{display:'flex',alignItems:'center',gap:8}}>
<input type="number" min="0" value={it.qty} onChange={e => dispatch(changeQty({id: it.product.id, qty: Number(e.target.value)}))} style={{width:60,padding:6}}/>
<button className="button" onClick={() => dispatch(removeFromCart(it.product.id))}>Видалити</button>
</div>
</div>
))}
<div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div>Всього ({totalQty} шт)</div>
<div style={{fontWeight:700}}>{totalPrice} грн</div>
</div>
<div style={{display:'flex',gap:12}}>
<button className="button">Оформити замовлення</button>
<button className="button" onClick={() => dispatch(clearCart())}>Очистити</button>
</div>
</div>
)}
</div>
)
}