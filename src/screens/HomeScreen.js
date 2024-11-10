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
      <View style={styles.logobox}>
        <Text style={styles.welcomeText}>MedEase</Text>
        <Text style={styles.subText}>Healthcare made simple.</Text>
      </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logobox: {
    alignItems: 'center',
    backgroundColor: '#e3e3dc',
    marginBottom: 140,
    padding: 20,
    marginTop: 0,
    width: 1000,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 1,
    backgroundColor: '#e3e3dc',
    borderRadius: 50,
  },
  subText: {
    fontSize: 20,
    fontWeight: 'regular',
    padding: 5,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 30,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 27,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
