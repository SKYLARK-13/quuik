import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {styles} from './AddCard.style';
const AddCard = () => {
  return (
    <View style={styles.floatingAdd}>
      <ImageBackground
        style={styles.addBack}
        imageStyle={{borderRadius: 8, opacity: 0.6}}
        source={require('../../images/add.png')}>
        <View style={styles.addBackContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputBoxHead}>Lorem Ipsum is simply</Text>
            <Text style={styles.inputBoxDesc}>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry
            </Text>
          </View>
          <View style={styles.starBox}>
            <View style={styles.heartContainer}>
              <Image
                style={styles.heart}
                source={require('../../images/heart.png')}
              />
              <Text style={styles.heartNumber}>609</Text>
            </View>
            <Image
              style={styles.star}
              source={require('../../images/stars.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddCard;
