// src/screens/MedicationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const MedicationScreen = ({ route }) => {
  const { medication } = route.params;

  const handleAudioPlayback = () => {
    Speech.speak(`${medication.name}. Dosage: ${medication.dosage}. Purpose: ${medication.purpose}. Special Instructions: ${medication.specialInstructions}`);
  };

  return (
    <View style={styles.container}>
      {/* Audio Button */}
      <TouchableOpacity style={styles.audioButton} onPress={handleAudioPlayback}>
        <Text style={styles.audioIcon}>🔊</Text>
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
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  audioButton: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  audioIcon: {
    fontSize: 24,
    color: '#000',
  },
  infoContainer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    marginBottom: 40,
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
