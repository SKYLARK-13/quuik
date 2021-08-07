import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Filters.style';
const Filters = props => {
  return (
    <View style={styles.filterCover}>
      <Text style={{fontSize: 10}}>{props.title}</Text>
    </View>
  );
};

export default Filters;
