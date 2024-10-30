import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderWithSearch = ({ appName = 'QuickCart', search, setSearch }) => {
  return (
    <View style={styles.headSyle}>
    
      <View style={styles.header}>
        <Text style={styles.appName}>{appName}</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={styles.inputs}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default HeaderWithSearch;
