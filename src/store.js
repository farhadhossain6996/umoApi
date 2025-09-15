import { configureStore } from '@reduxjs/toolkit'

import addtocart  from './slices/addToCartSlice'

export default configureStore({
  reducer: {
   cart:addtocart
  },
})