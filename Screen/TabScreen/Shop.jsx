import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator,TouchableOpacity,SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../Components/Wrapper'
import HeaderWithSearch from '../../Components/Header';

export default function Shop() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API data
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/carts'); // Replace with your API URL
        const data = await response.json(); // Assuming the response is JSON
        setCartData(data.carts); // Assuming `carts` is the main array
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCartData();
  }, []);

  // If data is loading, show a spinner
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#29a2ea" />
        <Text>Loading carts...</Text>
      </View>
    );
  }

  // Render each product in the cart
  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productDiscount}>{item.discountPercentage}%</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <View style={styles.productDetails}>
        {/* <Text style={styles.productTitle}>{item.title}</Text> */}
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        {/* <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.productTotal}>Total: ${item.discountedTotal.toFixed(2)}</Text> */}
      <TouchableOpacity>
        <Text style={styles.dealButton}>View Deal</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Wrapper >
      <View>
        <HeaderWithSearch/>
        <FlatList
          data={cartData[4]?.products} // Assuming you're displaying the first cart
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          nestedScrollEnabled
        />
      </View>

    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    width: "45%",
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  dealButton:{
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  productDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: '#343a40',
  },
  productQuantity: {
    fontSize: 14,
    color: '#6c757d',
  },
  productDiscount: {
    fontSize: 14,
    color: '#ff0000',
  },
  productTotal: {
    fontSize: 14,
    color: '#007bff',
  },
});