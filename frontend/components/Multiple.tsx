import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const Multiple = ({route}: any) => {
  const {namee} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [catagory, setCatagory] = useState('');
  const [Choice, setChoice] = useState('');
  const [numberOfInputs, setNumberOfInputs] = useState(1);
  const [inputValues, setInputValues] = useState(
    Array(numberOfInputs).fill(''),
  );

  const handleInputChange = (index: number, text: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = text;
    setInputValues(newInputValues);
  };

  const handleButtonPress = async () => {
    console.log(inputValues);

    if (inputValues.some(value => value === '')) {
      Alert.alert('Please fill in all input fields');
    } else {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://random-api.cialabs.tech/choices',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              category: catagory,
              items: inputValues,
              tags: [],
              user_email: namee,
            }),
          },
        );

        const ch = await response.json();
        await setChoice(ch);
      } catch (error) {
        console.error('Error sending data:', error);
        console.log('Error sending data');
        Alert.alert('error to send date');
      }
      await setTimeout(() => {
        setIsLoading(false); // After the loading time, set isLoading to false
      }, 100);
    }
  };

  const renderInputFields = () => {
    return Array.from({length: numberOfInputs}, (_, index) => (
      <TextInput
        key={index}
        style={styles.textBox}
        keyboardType="default"
        placeholder={` Enter Item ${index + 1}`}
        // placeholderTextColor="black"
        onChangeText={text => handleInputChange(index, text)}
        value={inputValues[index]}
      />
    ));
  };

  return (
    <ScrollView>
      <View style={styles.bgc}>
        <Text style={styles.choice}>Welcome , {namee}</Text>

        <Text style={styles.choice}>Enter Your Catagory</Text>
        <TextInput
          style={styles.textBox}
          keyboardType="default"
          placeholder={` Enter Catagory here`}
          onChangeText={setCatagory}
          value={catagory}
        />

        <Text style={styles.choice}>Enter Your Choice</Text>

        {renderInputFields()}

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setNumberOfInputs(numberOfInputs + 1)}>
          <Text style={styles.text}> Add Inputs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={handleButtonPress}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}

        <Text style={styles.choice}>
          {Choice ? 'You should go with \n' + JSON.stringify(Choice) : '.'}
        </Text>
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
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  choice: {
    backgroundColor: 'white',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  bgc: {
    backgroundColor: 'white',
  },

  textBox: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 9,
    marginHorizontal: 40,
    color: 'blue',
    fontSize: 20,
    borderRadius: 20,
  },

  btn: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 9,
    padding: 8,
    fontWeight: 'bold',
    marginHorizontal: '30%',
    borderRadius: 20,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 20,
  },
});

export default Multiple;
