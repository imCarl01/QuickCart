import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import Wrapper from '../../Components/Wrapper';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../Context/AuthContext';

export default function Description() {
  const route = useRoute()
  const { item } = route.params || {};
  const {addToCart} = useAuth()

  // Show a loading message or a placeholder if item is undefined
  if (!item) {
    return (
      <View style={styles.container}>
        <Text>item details are unavailable.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
          <Image source={{ uri: item.images[0] }} style={styles.image} />
          
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.badge}>{item.rating.rate}% off</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.info}>Brand: {item.brand}</Text>
          <Text style={styles.info}>Category: {item.category}</Text>
          <Text style={styles.info}>Warranty: {item.warrantyInformation}</Text>
      </View>

      
      <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:20}}>
        {/* <View>
          <Image source={require('../../assets/QuickCartIcon.png')} style={{width:50,height:50,borderRadius:50,}}/>
        </View> */}
        <TouchableOpacity onPress={()=>addToCart(item)} style={{backgroundColor:"red", justifyContent:"center",alignItems:"center",padding:20,borderRadius:20, }}>
          <Text style={{color:"#fff", fontWeight:"bold",fontSize:15}}>Add to Cart</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 20, fontWeight: '500', marginBottom: 10 },
  image: { width: '100%', height: 300, marginBottom: 10 },
  price: { fontSize: 25, color: '#000', marginBottom: 10, fontWeight:"bold"},
  description: { fontSize: 16, marginBottom: 10, textAlign:"justify", },
  info: { fontSize: 14, color: '#555', marginBottom: 5 },
  badge:{  color: '#ff0000',fontWeight: 'bold',}
});
