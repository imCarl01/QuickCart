import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screen/StackScreen/Register';
import Login from './Screen/StackScreen/Login';
import Toast from 'react-native-toast-message';
import Home from './Screen/TabScreen/Home';
import Account from './Screen/TabScreen/Account';
import { AuthProvider, useAuth, } from './Context/AuthContext';
import Cart from './Screen/TabScreen/Cart';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Dummy from './Screen/StackScreen/Dummy';
import Shop from './Screen/TabScreen/Shop';
import Entypo from '@expo/vector-icons/Entypo';
import BigSave from './Screen/StackScreen/BigSave';
import Description from './Screen/StackScreen/Description';
import Discription2 from './Screen/StackScreen/Discription2';
import BuyInBulk from './Screen/StackScreen/BuyInBulk';
import StackWithBadge from './Screen/StackScreen/StackWithBadge';
import Payment from './Screen/StackScreen/Payment';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function TabNav(){
  const {cartCount} = useAuth()

  return(
    
    <Tabs.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:"#29a2ea"}}>
    <Tabs.Screen name='Home' component={Home} 
    options={{tabBarIcon:({color})=><Ionicons name="home-outline" size={24} color={color} />}}/>

    <Tabs.Screen name='Shop' component={Shop} 
    options={{tabBarIcon:({color})=><Entypo name="shop" size={24} color={color} />}} />

    <Tabs.Screen name='Cart' component={Cart} 
    options={{tabBarIcon:({color})=>(<Feather name="shopping-cart" size={24} color={color} />), 
    tabBarBadge: cartCount > 0 ? cartCount: null,}} />

    <Tabs.Screen name='Account' component={Account} 
    options={{tabBarIcon:({color})=><MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />}}/>
  </Tabs.Navigator>
  
  )

}
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='HomeSection' component={TabNav} />
          <Stack.Screen name='Dummy' component={Dummy} />
          <Stack.Screen name='BigSave' component={BigSave} options={{headerShown:true, headerRight:()=><StackWithBadge/>}} />
          <Stack.Screen name='BuyInBulk' component={BuyInBulk} options={{headerShown:true, headerRight:()=><StackWithBadge/>}} />
          <Stack.Screen name='Description' component={Description} options={{headerShown:true, title:"Product Details", headerRight:()=><StackWithBadge/>}} />
          <Stack.Screen name='Discription2' component={Discription2} options={{headerShown:true, title:"Product Details",headerRight:()=><StackWithBadge/>}} />
          <Stack.Screen name='Payment' component={Payment}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 