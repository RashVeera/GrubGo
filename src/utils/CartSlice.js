import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        items:["burger","pizza"]
    },
    reducers:{
        Additems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeitems:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});


console.log(CartSlice);
export const {Additems,removeitems,clearCart}=CartSlice.actions;
export default CartSlice.reducer;