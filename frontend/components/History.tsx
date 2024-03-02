import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const History = ({route}: any) => {
  const {namee} = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isLoading, setIsLoading] = useState(false);

  const [Data, setData] = useState([]);
  let k = 0;

  const getHistory = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        'https://random-api.cialabs.tech/history/' + namee,
      );
      const data = await res.json();
      setData(data.history);
    } catch (error) {
      console.log('error to fetch', error);
    }
    await setTimeout(() => {
      setIsLoading(false); // After the loading time, set isLoading to false
    }, 100);
  };

  return (
    <ScrollView>
      <View style={[{width: windowWidth}, {height: windowHeight}, styles.bgc]}>
        <Text style={styles.heading}>{namee}'s History</Text>

        <View style={styles.centr}>
          <TouchableOpacity onPress={getHistory}>
            <Text style={styles.btn}>Get History</Text>
          </TouchableOpacity>
        </View>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}

        {Data.map(i => (
          <View style={styles.container} key={++k}>
            <Text style={styles.valueText}>
              {Data ? 'Category : ' + i.category : '...'}
            </Text>
            <Text style={styles.valueText}>
              {Data ? 'Items : ' + i.items : '...'}
            </Text>
            <Text style={styles.valueText}>
              {Data ? 'Selected Item : ' + i.selected_item : '...'}
            </Text>
          </View>
        ))}
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
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
  },
  keyText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  valueText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  bgc: {
    backgroundColor: 'white',
  },
  heading: {
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
  },
  btn: {
    margin: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    width: '50%',
  },
  centr: {
    alignItems: 'center',
  },
});

export default History;
