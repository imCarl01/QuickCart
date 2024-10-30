// import React, { useRef, useState } from 'react';
// import { Paystack, paystackProps } from 'react-native-paystack-webview';
// import { View, TouchableOpacity, Text, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Wrapper from '../../Components/Wrapper';


// export default function Payment() {

//     const paystackWebViewRef = useRef(paystackProps.PayStackRef);
//     const route = useRoute();
//     const navigation = useNavigation();
  
//     // Get the total amount and cart items passed from CartScreen
//     // const { totalAmount, cartItems } = route.params;
  
//     // State to hold user input
//     const [billingEmail, setBillingEmail] = useState('');
//     const [billingName, setBillingName] = useState('');
//     const [billingMobile, setBillingMobile] = useState('');
  
//     // const renderCartItem = ({ item }) => (
//     //   <View style={styles.itemContainer}>
//     //     <Text style={styles.itemName}>{item.strMeal}</Text>
//     //     <Text style={styles.itemPrice}>₦{item.price.toFixed(2)}</Text>
//     //   </View>
//     // );
  
//     const handlePayment = () => {
//       if (!billingEmail || !billingMobile || !billingName) {
//         Alert.alert("Error", "Please fill in all the required fields.");
//         return; // Prevents the transaction from starting
//       }
//       paystackWebViewRef.current.startTransaction();
//     };
  
//     return (
//       <Wrapper style={styles.container}>
  
  
//          {/* Input fields for user details */}
//          <TextInput
//           style={styles.input}
//           placeholder="Enter Email"
//           keyboardType="email-address"
//           value={billingEmail}
//           onChangeText={setBillingEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Name"
//           value={billingName}
//           onChangeText={setBillingName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Mobile Number"
//           keyboardType="phone-pad"
//           value={billingMobile}
//           onChangeText={setBillingMobile}
//         />
//         <Text style={styles.title}>Payment Summary</Text>
  
//         <FlatList
//           data={cartItems}
//           renderItem={renderCartItem}
//           keyExtractor={(item) => item.idMeal.toString()}
//           style={styles.itemList}
//         />
  
//         <Text style={styles.totalLabel}>Total Amount:</Text>
//         <Text style={styles.totalAmount}>₦{totalAmount.toFixed(2)}</Text>
  
       
  
//         <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
//           <Text style={styles.payButtonText}>Pay Now</Text>
//         </TouchableOpacity>
  
//         <Paystack
//           paystackKey=""
//           billingEmail={billingEmail}
//           billingName={billingName}
//           billingMobile={billingMobile}
//           currency='NGN'
//           amount={totalAmount.toFixed(2)}
//           onCancel={(e) => {
//             console.log(e);
//           }}
//           onSuccess={(res) => {
//             console.log(res);
//             navigation.navigate("Home");
//           }}
//           ref={paystackWebViewRef}
//         />
//       </Wrapper>

//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f5f5f5',
//       },
//       title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color: '#333',
//         textAlign: 'center',
//       },
//       itemList: {
//         marginBottom: 20,
//       },
//       itemContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingVertical: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//       },
//       itemName: {
//         fontSize: 18,
//         color: '#333',
//       },
//       itemPrice: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#333',
//       },
//       totalLabel: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginTop: 10,
//         color: '#666',
//         textAlign: 'center',
//       },
//       totalAmount: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#000',
//         marginBottom: 30,
//         textAlign: 'center',
//       },
//       input: {
//         height: 50,
//         borderColor: '#ddd',
//         borderWidth: 1,
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         marginBottom: 20,
//         fontSize: 18,
//       },
//       payButton: {
//         backgroundColor: '#ff8c00',
//         paddingVertical: 15,
//         paddingHorizontal: 40,
//         borderRadius: 8,
//         alignSelf: 'center',
//       },
//       payButtonText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         textAlign: 'center',
//       },
// })
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Payment() {
  return (
    <View>
      <Text>Payment</Text>
    </View>
  )
}

const styles = StyleSheet.create({})