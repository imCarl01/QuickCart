import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const Wrap = ({ children, style }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={[styles.wrap, style]}>{children}</ScrollView>
  )
}

const styles = StyleSheet.create({
    wrap: {
        width:"100%",
        // padding: 20,
        paddingVertical:20,
        paddingHorizontal:10,
        flexWrap:"wrap",       // margin: 5,
        backgroundColor: '#fff', 
        shadowColor: '#000', 
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5, 
      },
})

export default Wrap;


