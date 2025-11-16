import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
name: 'cart',
initialState: {
items: {}, // { [productId]: { product, qty } }
totalQty: 0,
totalPrice: 0
},
reducers: {
addToCart: (state, action) => {
const product = action.payload
const existing = state.items[product.id]
if (existing) {
existing.qty += 1
} else {
state.items[product.id] = { product, qty: 1 }
}
state.totalQty += 1
state.totalPrice = Object.values(state.items).reduce((s, it) => s + it.product.price * it.qty, 0)
},
removeFromCart: (state, action) => {
const id = action.payload
const existing = state.items[id]
if (!existing) return
state.totalQty -= existing.qty
delete state.items[id]
state.totalPrice = Object.values(state.items).reduce((s, it) => s + it.product.price * it.qty, 0)
},
changeQty: (state, action) => {
const { id, qty } = action.payload
const existing = state.items[id]
if (!existing) return
state.totalQty += qty - existing.qty
existing.qty = qty
if (existing.qty <= 0) delete state.items[id]
state.totalPrice = Object.values(state.items).reduce((s, it) => s + it.product.price * it.qty, 0)
},
clearCart: state => {
state.items = {}
state.totalQty = 0
state.totalPrice = 0
}
}
})


export const { addToCart, removeFromCart, changeQty, clearCart } = cartSlice.actions
export default cartSlice.reducer