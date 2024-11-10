// src/screens/ScanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  // Request camera permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Reset scanned state whenever the screen is focused
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setScanned(false); // Reset the scanned state on focus
    });
    return unsubscribe;
  }, [navigation]);

  // Simulated medication data based on barcode (in real use, look up data here)
  const getMedicationData = (barcodeData) => {
    return {
      name: 'Aspirin 100MG',
      dosage: '3 times a day',
      purpose: 'Pain Relief',
      specialInstructions: 'Take with Food',
    };
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true); // Prevent immediate re-scanning

    // Get the medication data (replace with actual lookup if needed)
    const medication = getMedicationData(data);

    // Navigate to MedicationScreen with medication data
    navigation.navigate('Medication', { medication });
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
      
      {scanned && (
        <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.buttonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('History')}>
        <Text style={styles.navButtonText}>Go to History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
  },
  navButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ScanScreen;
