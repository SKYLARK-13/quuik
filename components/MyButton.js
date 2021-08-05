import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyButton = props => {
  return (
    <View style={styles.buttonBody}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBody: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 150,
    height: 50,
    borderRadius: 30,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    elevation: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default MyButton;
