import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product, onAdd }) {
  const navigate = useNavigate()

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price} грн</div>
      <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
        <button className="button" onClick={() => navigate(`/product/${product.id}`)}>
          Детальніше
        </button>
        <button className="button" onClick={() => onAdd(product)}>
          Додати
        </button>
      </div>
    </div>
  )
}