import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CafeCard.style';
const CafeCard = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.cafeContainer}>
      <View style={styles.left}>
        <Image
          style={styles.leftImage}
          source={require('../../images/nug.png')}
        />
      </View>
      <View style={styles.middle}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>PIZZA HUB</Text>
        <Text style={{fontSize: 12, color: '#606263'}}>
          Pizza, Sandwiches, Fast Food
        </Text>
        <Text style={{fontSize: 12, color: '#606263'}}>$ 10 per person</Text>
        <Text style={{fontSize: 12, color: '#606263'}}>
          Street 4 Kaula Lampur
        </Text>
        <Text style={{fontSize: 16, color: '#e0002d', fontWeight: 'bold'}}>
          5 KM
        </Text>
      </View>
      <View style={styles.right}>
        <View style={styles.rating}>
          <Text style={{fontSize: 12, color: 'white'}}>3.5</Text>
        </View>
        <View style={styles.like}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../../images/heart.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CafeCard;
