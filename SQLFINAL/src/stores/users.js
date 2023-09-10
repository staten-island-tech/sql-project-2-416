import { defineStore } from 'pinia'

//This file (just like the shop.js file) also uses Pinia. 
//The purpose of this file is to track the user's items in the cart, their login status, and whether or not their cart is filled through Pinia's state management.

export const userInformation = defineStore('settings', {
  state: () => {
    return {
      user: {
        email: null,
        loggedIn: false,
        cartLoaded: false
      },
      totalCount: 0, // ??
      realShoppingCart: [] //??
    }
  }
})
 
// ?? The reason why totalCount and realShoppingCart needed to stay seperate was because the store was designed for duplicate items
//to stack upon one another, instead of falling into seperate spaces for the cart. The realShoppingCart array was used to display
// every amiibo seperately, while a "count" quality within the Supabase table tracking every user's amiibo would be updated respectively.
//totalCount is used to give the user their total price by being incremented every item the user adds an item to their cart and being 
//multiplied by 30. Every amiibo is priced strictly at 30 dollars, so this is allowed. A system for if every amiibo was NOT priced at 
//30 dollars would possibly be to add its price to a state-managed variable (such as totalCount) to give the user the total amount in their
//cart. For subtracting from the total price, the delete button of every amiibo pressed on would have to link back to the price of that amiibo
//and delete that specific amount from the totalCount. 
