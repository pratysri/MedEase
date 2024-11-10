// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToScan = () => {
    navigation.navigate('Scan'); // Navigate to Scan Screen
  };
  
  const goToHistory = () => {
    navigation.navigate('History'); // Navigate to History Screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to MedShout</Text>
      <TouchableOpacity style={styles.button} onPress={goToScan}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToHistory}>
        <Text style={styles.buttonText}>Scan History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 30,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
