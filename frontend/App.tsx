import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import Multiple from './components/Multiple';
import Header from './components/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Name from './components/Name';
import History from './components/History';
import Right from './components/Right';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <Header />
      <NavigationContainer>
        {/* initialRouteName="Home" */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Name} />
          <Stack.Screen name="Details" component={Multiple} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>

      <Right />
    </>
  );
}

const styles = StyleSheet.create({
  bgc: {
    backgroundColor: 'black',
    height: 'auto',
  },
  border: {
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default App;
