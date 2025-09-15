import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {
     
    //  console.log(state.value);
    //  console.log(action.payload);
       
// state.value.push(action.payload)

let alldata = state.value.find(item=> item.title ===action.payload.title)
if(alldata){
  alldata.quantity+=1
}else{
  state.value.push({...action.payload,quantity:1})
}
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { addtocart } = addToCartSlice.actions

export default addToCartSlice.reducer