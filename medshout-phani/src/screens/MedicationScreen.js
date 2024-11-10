// src/screens/MedicationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Icon library for audio button
import * as Speech from 'expo-speech';

const MedicationScreen = ({ route, navigation }) => {
  const { medication } = route.params;

  const handleAudioPlayback = () => {
    Speech.speak(`${medication.name}. Dosage: ${medication.dosage}. Purpose: ${medication.purpose}. Special Instructions: ${medication.specialInstructions}`);
  };

  return (
    <View style={styles.container}>
      {/* Back Button positioned at the top left */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="arrow-back" size={28} color="black" />
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>

      {/* Audio Button */}
      <TouchableOpacity style={styles.audioButton} onPress={handleAudioPlayback}>
        <MaterialIcons name="volume-up" size={40} color="black" />
      </TouchableOpacity>

      {/* Medication Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Name: </Text>{medication.name}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Dosage: </Text>{medication.dosage}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Purpose: </Text>{medication.purpose}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Special Instructions: </Text>{medication.specialInstructions}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 500, // Positioning towards the top for easy accessibility
    left: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 20,
    borderRadius: 5,
  },
  backText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  audioButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 40,
    marginTop: 80, // Adds spacing between back button and medication info
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default MedicationScreen;
