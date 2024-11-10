// src/screens/ScanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true); // Prevent multiple scans
    try {
      // Use `data` as the NDC (assuming the barcode matches the NDC format)
      const rxcui = await fetchRxCUI(data);
      if (rxcui) {
        const medicationInfo = await fetchMedicationDetails(rxcui);
        // Navigate to MedicationScreen with the fetched medication data
        navigation.navigate('Medication', { medication: medicationInfo });
      } else {
        Alert.alert("Error", "Medication not found in RxNorm database");
      }
    } catch (error) {
      console.error("Error fetching medication info:", error);
      Alert.alert("Error", "Could not fetch medication info");
    }
  };

  const fetchRxCUI = async (ndc) => {
    try {
      const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui?idtype=NDC&id=${ndc}`);
      const rxcui = response.data.idGroup?.rxnormId?.[0];
      return rxcui;
    } catch (error) {
      console.error("Error fetching RxCUI:", error);
      return null;
    }
  };

  const fetchMedicationDetails = async (rxcui) => {
    try {
      const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/properties`);
      const properties = response.data.properties;
      return {
        name: properties.name,
        dosage: properties.strength || "Not specified",
        purpose: properties.synonym || "Not specified",
        specialInstructions: properties.className || "No special instructions",
      };
    } catch (error) {
      console.error("Error fetching medication details:", error);
      return null;
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.instructionText}>Scan the medication barcode</Text>

      {scanned && (
        <Button
          title="Tap to Scan Again"
          onPress={() => setScanned(false)}
          color="#FFD700"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    position: 'absolute',
    bottom: 50,
    fontSize: 18,
    color: '#fff',
  },
});

export default ScanScreen;
