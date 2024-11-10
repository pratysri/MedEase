// src/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import MedicationScreen from './screens/MedicationScreen';
import ScanHistory from './screens/ScanHistory';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
      <Stack.Screen name="History" component={ScanHistory} options={{ title: 'Scan History' }} />
      <Stack.Screen name="Medication" component={MedicationScreen} options={{ title: 'Med Details' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
