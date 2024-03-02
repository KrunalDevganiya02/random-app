import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';

const Name = ({navigation}: any) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [userName, setUserName] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [pass, setPass] = React.useState('');
  console.log('name file open');

  const handleHistory = async () => {
    if (!userName) {
      Alert.alert('Please Enter your name');
    } else {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://random-api.cialabs.tech/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: String(userName),
            }),
          },
        );
      } catch (error) {
        console.log('failed to register', error);
      }
      await navigation.navigate('History', {
        namee: userName,
      });
      await setTimeout(() => {
        setIsLoading(false); // After the loading time, set isLoading to false
      }, 1000);
    }
  };

  const handleNavigate = async () => {
    if (!userName) {
      Alert.alert('Please Enter your name');
    } else {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://random-api.cialabs.tech/register',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: String(userName),
            }),
          },
        );
      } catch (error) {
        console.log('failed to register', error);
      }

      await navigation.navigate('Details', {
        namee: userName,
      });
      await setTimeout(() => {
        setIsLoading(false); // After the loading time, set isLoading to false
      }, 1000);
    }
  };

  const onChangeText = (inputText: string) => {
    setUserName(inputText);
  };

  return (
    <ScrollView>
      <View
        style={[
          {width: windowWidth},
          {height: windowHeight},
          styles.container,
        ]}>
        <Text style={styles.heading}>Enter Your Name</Text>

        <TextInput
          style={styles.inputStyle}
          onChangeText={setUserName}
          value={userName}
          placeholder="Enter your name here"
          keyboardType="default"
        />

        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.btn}> Go to Make Choice </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHistory}>
          <Text style={styles.btn}> Go to Your history </Text>
        </TouchableOpacity>

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btn: {
    margin: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 20,
    width: '75%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 40,
    borderRadius: 20,
    color: 'blue',
    fontSize: 20,
  },
});

export default Name;
