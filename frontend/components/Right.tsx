import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const right = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>All Rights Reserved &copy; at CIA LABS </Text>
      </View>
    </SafeAreaView>
  );
};

export default right;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
