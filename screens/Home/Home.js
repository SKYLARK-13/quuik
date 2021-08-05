import React from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <View style={styles.homeHeader}>
          <Image
            source={require('../../images/menu.png')}
            style={styles.menuIcon}
          />
          <TextInput
            style={styles.search}
            placeholder="Search for restaurants, cuisines.."
            placeholderTextColor="white"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuIcon: {
    height: 25,
    width: 25,
  },
  search: {
    backgroundColor: '#737373',
    padding: 10,

    height: 30,
    borderRadius: 20,
  },
});

export default Home;
