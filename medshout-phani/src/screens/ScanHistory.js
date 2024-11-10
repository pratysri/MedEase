// src/screens/ScanHistory.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScanHistory = () => {
  const [history, setHistory] = useState([
    { id: '1', name: 'Aspirin 100MG', dosage: '3 times a day', purpose: 'Pain Relief', specialInstructions: 'Take with Food' },
    { id: '2', name: 'Ibuprofen 200MG', dosage: '2 times a day', purpose: 'Inflammation', specialInstructions: 'Take after meals' },
    { id: '3', name: 'Acetaminophen 500MG', dosage: '4 times a day', purpose: 'Pain Reliever', specialInstructions: 'Do not exceed 4g/day' },
    { id: '4', name: 'Amoxicillin 250MG', dosage: '3 times a day', purpose: 'Antibiotic', specialInstructions: 'Take on an empty stomach' },
    { id: '5', name: 'Lisinopril 20MG', dosage: 'Once a day', purpose: 'Blood Pressure', specialInstructions: 'Take at the same time each day' },
    { id: '6', name: 'Metformin 500MG', dosage: 'Twice a day', purpose: 'Diabetes', specialInstructions: 'Take with meals' },
    { id: '7', name: 'Simvastatin 40MG', dosage: 'Once a day', purpose: 'Cholesterol', specialInstructions: 'Take in the evening' },
    { id: '8', name: 'Atorvastatin 20MG', dosage: 'Once a day', purpose: 'Cholesterol', specialInstructions: 'Avoid grapefruit' },
    { id: '9', name: 'Omeprazole 20MG', dosage: 'Once a day', purpose: 'Acid Reflux', specialInstructions: 'Take 30 minutes before a meal' },
    { id: '10', name: 'Levothyroxine 50MCG', dosage: 'Once a day', purpose: 'Thyroid', specialInstructions: 'Take on an empty stomach' },
    { id: '11', name: 'Hydrochlorothiazide 25MG', dosage: 'Once a day', purpose: 'Blood Pressure', specialInstructions: 'Take in the morning' },
    { id: '12', name: 'Zoloft 50MG', dosage: 'Once a day', purpose: 'Depression', specialInstructions: 'May cause drowsiness' },
    { id: '13', name: 'Cetirizine 10MG', dosage: 'Once a day', purpose: 'Allergy Relief', specialInstructions: 'Can cause drowsiness' },
    { id: '14', name: 'Ciprofloxacin 500MG', dosage: 'Twice a day', purpose: 'Antibiotic', specialInstructions: 'Avoid dairy products' },
    { id: '15', name: 'Clindamycin 300MG', dosage: '4 times a day', purpose: 'Antibiotic', specialInstructions: 'Take with water' },
    { id: '16', name: 'Prednisone 20MG', dosage: 'Once a day', purpose: 'Anti-inflammatory', specialInstructions: 'Take with food' },
    { id: '17', name: 'Naproxen 250MG', dosage: 'Twice a day', purpose: 'Pain Relief', specialInstructions: 'Take with food or milk' },
    { id: '18', name: 'Losartan 50MG', dosage: 'Once a day', purpose: 'Blood Pressure', specialInstructions: 'Avoid potassium supplements' },
    { id: '19', name: 'Gabapentin 300MG', dosage: '3 times a day', purpose: 'Nerve Pain', specialInstructions: 'May cause dizziness' },
    { id: '20', name: 'Fluoxetine 20MG', dosage: 'Once a day', purpose: 'Depression', specialInstructions: 'Take in the morning' },
  ]);

  const navigation = useNavigation();

  const handlePress = (medication) => {
    navigation.navigate('Medication', { medication });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scan History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.historyItem} onPress={() => handlePress(item)}>
            <Text style={styles.historyText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  historyText: {
    fontSize: 18,
  },
});

export default ScanHistory;
