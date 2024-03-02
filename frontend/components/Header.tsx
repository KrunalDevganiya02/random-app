import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View>
      <Text style={styles.text}>Choice Maker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'blue',
  },
});
