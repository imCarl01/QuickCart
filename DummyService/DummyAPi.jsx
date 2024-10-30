import axios from "axios";

const dummyApi_Url = "https://dummyjson.com"
const dummAPI_CART_URL ="https://dummyjson.com/carts"
const fakeApi_URL = "https://fakestoreapi.com/products"

export const products = async(target) => {
    try {
      const response = await axios.get(`${dummyApi_Url}/${target}`);
      // console.log('Full API Response:', response);  
      return response.data.products;  
    } catch (error) {
      console.log('Error fetching deals:', error);
      throw error;
    }
  };

export const cartProducts = async()=> {
  try {
    const response =await axios.get(`${dummAPI_CART_URL}`)
    console.log("Cart API", response)
    return response.data.carts.products; 
    
  } catch (error) {
    console.log('Error fetching cartProduct:', error);
    throw error;
  }
} 
export const fakeProduct = async()=>{
  try {
    const response =await axios.get(`${fakeApi_URL}`);
    // console.log('FakeAPI Response:', response);
    return response.data
  } catch (error) {
    console.log('Error fetching deals:', error);
    throw error;
  }
}
  