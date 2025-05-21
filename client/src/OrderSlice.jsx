import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, actions) => {
            const data = state.cart.filter(key => key._id == actions.payload._id)
            if (data.length >= 1) {
                toast.error("Product already added!!!");
            }
            else {
                state.cart.push({...actions.payload, qnty: 1});
                toast.success(`${actions.payload.name} added to cart!`);
            }
        },
        qntyDec:(state , action )=>{
            for(var i= 0 ; i< state.cart.length ; i++){
                if(state.cart[i]._id ==action.payload._id){
                    if(state.cart[i].qnty <=1){
                        console.log("iteam should not be less than 1")
                    }
                }
            }
        },
        proDelete : (state , actions)=>{
            state.cart = state.cart.filter(key =>key._id)
        }

    }
});

export const { 
    addtoCart, 
    qntyInc, 
    qntyDec, 
    proDelete 
} = cartSlice.actions;

export default cartSlice.reducer;