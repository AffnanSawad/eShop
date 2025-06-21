import { createSlice } from "@reduxjs/toolkit";

// Initial default state
const initialState = {
  products: [],

  totalQuantity : 0 ,
  totalPrice : 0 
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     
    addToCart( state , action ){

      const newItem = action.payload ;

      const ItemIndex = state.products.find( (item)=> item.id === newItem.id );

      if(ItemIndex){

        ItemIndex.quantity++ ;
        ItemIndex.totalPrice++ ;
      
      }

      else{

        state.products.push({

          id: newItem.id ,
          name : newItem.name ,
          price : newItem.price ,
          image : newItem.image ,
          quantity: 1 ,
          totalPrice : newItem.price
        })

      }
     
      state.totalPrice += newItem.price ;
      state.totalQuantity++

    },

    removeFromCart( state , action ){
            
      const id = action.payload ;

      const findItem = state.products.find( (item)=> item.id === id );

      if(findItem){
       
        state.totalPrice -= findItem.price ;

        state.totalQuantity -= findItem.quantity ;

        state.products = state.products.filter( item => item.id !== id)

      }

    },


  inCreaseQuatity( state , action) {
    
     const id = action.payload ;

      const findItem = state.products.find( (item)=> item.id === id );
      
      if(findItem){

        findItem.quantity++ ;
        findItem.totalPrice += findItem.price ;
        state.totalQuantity++;
        state.totalPrice += findItem.price
      }


  },


  
  deCreaseQuatity( state , action) {
    
     const id = action.payload ;

      const findItem = state.products.find( (item)=> item.id === id );
      
      if(findItem.quantity > 1 ){
      if(findItem){

        findItem.quantity-- ;
        findItem.totalPrice -= findItem.price ;
        state.totalQuantity--;
        state.totalPrice -= findItem.price
      }

    }
  },

  clearCart: (state) => {
      state.products = [];
    },

  


  },
});

export const { setProducts , addToCart , removeFromCart , inCreaseQuatity, deCreaseQuatity , clearCart } = cartSlice.actions;
export default cartSlice.reducer;
