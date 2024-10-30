import { StyleSheet, Text, View, TextInput, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../Components/Wrapper';
import { products, fakeProduct } from '../../DummyService/DummyAPi';


const target = "products"

export default function BigSave({navigation}) {
    const [search, setSearch] = useState('');
    const [theDeals, setTheDeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [theFakeProduct, setFakeProduct] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
  
    // Fetch dummyApi products
    useEffect(() => {
      const getProduct = async () => {
        try {
          const data = await products(target);
          setTheDeals(data); // Take the first 5 products
        } catch (error) {
          console.log('Error fetching products:', error);
        } finally {
          setIsLoading(false);
        }
      };
      getProduct();
    }, []);
  
    if (isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#29a2ea" />
          <Text>Loading BigSave...</Text>
        </View>
      );
    }
  
    const renderItemDeals = ({ item }) => (
      <View style={styles.dealContainer}>
        <Text style={styles.badge}>-{item.discountPercentage}%</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {item.images && item.images.length > 0 ? (
            <Image source={{ uri: item.images[0] }} style={styles.dealImage} />
          ) : (
            <Text>No Image</Text>
          )}
        </View>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Description",{item})}>
          <Text style={styles.dealButton}>View Deal</Text>
        </TouchableOpacity>
      </View>
    );
 
  
    return (
      <Wrapper >  
        <View style={styles.dealContainer2}>
  
          <FlatList
            data={theDeals}
            renderItem={renderItemDeals}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            // refreshing={refreshing}
            // onRefresh={handleRefresh}
            
          />
        </View>
        
      </Wrapper>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    headStyle:{
      position:"static",
      top: 0,
      left: 0,
      right: 0,
      zIndex:10,
      backgroundColor:"#fff"
  },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    appName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#007BFF',
    },
    inputs: {
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: '#f2f2f2',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dealContainer: {
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
    badge: {
      color: '#ff0000',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    dealImage: {
      width: "100%",
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
    },
    price: {
      fontSize: 15,
      fontWeight: '400',
      marginBottom: 5,
      color: '#343a40',
    },
    dealButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: 10,
      textAlign: 'center',
      borderRadius: 5,
    },
    dealContainer2: {
      flexDirection: 'column',
    },
    viewMore: {
      fontSize: 15,
      textAlign: 'right',
      color: '#343a40',
    },
    bestDealHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#343a40',
    },
    allCategories: {
      marginHorizontal: 5,
      marginTop: 5,
    },
    dealHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
  });
  