import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Wrapper = ({ children, style }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}  style={[styles.wrapper, style]}>
      <StatusBar style="dark" backgroundColor='white' />
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        width:"100%",
        // padding: 20,
        paddingVertical:20,
        paddingHorizontal:10,
         marginTop:10,
        backgroundColor: '#fff', 
        shadowColor: '#000', 
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5, 
      },
})

export default Wrapper;


