import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {styles} from './FoodCard.style';
const FoodCard = () => {
  return (
    <View style={styles.cardCoverContainer}>
      <ImageBackground
        style={styles.cardCover}
        imageStyle={{borderRadius: 8, opacity: 0.6}}
        source={require('../../images/food.png')}>
        <View style={styles.cardTop}>
          <Text style={{fontSize: 14, color: 'white'}}>BEAST THE HEAT</Text>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            CHICKEN ROLL
          </Text>
          <Text style={{fontSize: 14, color: 'white'}}>ONLY ON QUUIK</Text>
        </View>
        <View style={styles.cardBottom}>
          <Text style={{fontSize: 14, color: 'white'}}>Order now</Text>
          <View style={styles.thumbContainer}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../images/like.png')}
            />
            <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
              10k
            </Text>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../images/dislike.png')}
            />
            <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
              780
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FoodCard;
