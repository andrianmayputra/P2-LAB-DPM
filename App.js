import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

export default function App() {  
  return (  
    <View style={styles.container}>  
      {/* Teks di Tengah Layar */}  
      <Text style={styles.centerText}>Teks di Tengah Layar</Text>  

      {/* Kotak di Sisi Kiri dan Kanan */}  
      <View style={styles.boxContainer}>  
        <View style={styles.box1} />  
        <View style={styles.box2} />  
      </View>  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
  centerText: {  
    fontSize: 24,  
    color: 'blue',  
    fontWeight: 'bold',  
    marginBottom: 20,  
  },  
  boxContainer: {  
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    width: '80%',  
  },  
  box1: {  
    width: 100,  
    height: 100,  
    backgroundColor: 'red',  // Warna bebas  
  },  
  box2: {  
    width: 100,  
    height: 100,  
    backgroundColor: 'green',  // Warna bebas  
  },  
});  
