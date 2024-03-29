import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer";
//สร้าง context
const CartContext = createContext()
const initState = {
    products: products,
    total: 0,
    amount: 0
}
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initState)

    function formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function removeItem(id) {
        //console.log("ลบสินค้ารหัส = " + id)
        dispatch({ type: "REMOVE", payload: id })
    }

    function addQuantity(id) {
        //console.log("เพิ่มปริมาณสินค้า = " + id)
        dispatch({ type: "ADD", payload: id })
    }

    function subtractQuantity(id) {
        //console.log("ลดปริมาณสินค้า = " + id)
        dispatch({ type: "SUBTRACT", payload: id })
    }
    
    useEffect(() => {
        console.log("คำนวนหาผลรวม")
        dispatch({ type: "CALCULATE_TOTAL" })
    }, [state.products])

    return (
        <CartContext.Provider value={{ ...state, formatMoney, removeItem, addQuantity, subtractQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
//การนำ context ไปใช้งานด้านนอก
export const useCart = () => {
    return useContext(CartContext)
}