import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useAuth } from '../../Context/AuthContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Wrapper from '../../Components/Wrapper';


export default function Cart() {
  const { cart, setCart} = useAuth();
  const [quantities, setQuantities] = useState({});
  const {deleteFromCart} = useAuth(); 
  const navigation = useNavigation();

  const handleIncrease = (title) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [title]: (prevQuantities[title] || 1) + 1,
    }));
  };

  const handleDecrease = (title) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [title]: Math.max((prevQuantities[title] || 1) - 1, 0),
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = quantities[item.title] || 1; // Default to 1 if not modified
      return total + item.price * quantity;
    }, 0);
  };

  const renderCartItem = ({ item }) => (
    <View key={item.title} style={styles.cartItem}>
      <Image source={{ uri: item.images[0] }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>Amount:${item.price.toFixed(2)}</Text>
        <Text style={styles.quantityText}>Quantity: {quantities[item.title] || 1}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => handleIncrease(item.title)}>
          <Text style={styles.controlButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDecrease(item.title)}>
          <Text style={styles.controlButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteFromCart(item.title)} >
          <MaterialIcons name="delete" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  

  return (
    <Wrapper style={styles.container}>
      <View 
      style={{flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center", }}>
      <Text style={styles.header}>Cart Items:</Text>
      <Text style={styles.totalText}>Total:${calculateTotal().toFixed(2)}</Text>
      </View>
      
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.title.toString()}
      />

      <View style={styles.totalContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Payment", 
                {totalAmount: calculateTotal(), cartItems: cart} )}>
                <Text style={{fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',}}>Check out</Text>
              </TouchableOpacity>
            </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  itemImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 2,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '400',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '400',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  controlButton: {
    fontSize: 20,
    fontWeight: 'bold',

    paddingHorizontal: 10,
  },
  totalContainer: {
    // marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#29a2ea',
    height:50,
    justifyContent:"center",
    borderRadius: 10,
  },
  total:{
    borderWidth:1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  }
});