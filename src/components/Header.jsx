import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'


export default function Header(){
const totalQty = useAppSelector(s => s.cart.totalQty)
return (
<header className="header container">
<div className="logo">Croissant Shop</div>
<nav className="nav">
<Link to="/">Головна</Link>
<Link to="/cart">Кошик ({totalQty})</Link>
</nav>
</header>
)
}