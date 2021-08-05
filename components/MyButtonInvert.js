import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyButtonInvert = props => {
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
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: 'red',
  },
});

export default MyButtonInvert;
