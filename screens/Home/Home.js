import React from 'react';
import {
  View,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Firebase from '../../config/Firebase';
import {Icon} from 'react-native-elements';
import AddCard from '../../components/AddCard/AddCard';
import FoodCard from '../../components/FoodCard/FoodCard';
import Filters from '../../components/Filters/Filters';
import CafeCard from '../../components/CafeCard/CafeCard';
import {styles} from './Home.style';
const Home = props => {
  // const handleSignout = () => {
  //   Firebase.auth().signOut();
  //   props.navigation.navigate('Login');
  // };

  return (
    <TouchableWithoutFeedback
      style={styles.main}
      onPress={Keyboard.dismiss}
      accessible={false}>
      <View style={styles.screen}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../images/homeback.png')}>
          <View style={styles.homeHeader}>
            <Image
              source={require('../../images/menu.png')}
              style={styles.menuIcon}
            />
            <View style={styles.searchContainer}>
              <Icon name="search" color="white" />
              <TextInput
                style={styles.search}
                placeholder="Search for restaurants, cuisines.."
                placeholderTextColor="white"
                color="white"
              />
            </View>
          </View>
          <AddCard />

          <View style={styles.scrollContainer}>
            <ScrollView
              // contentContainerStyle={{flexGrow: 1}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.container}>
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </ScrollView>
          </View>
          <View style={styles.filtersContainer}>
            <Filters title="Filter" />
            <Filters title="Ratings: 4.0+" />
            <Filters title="Rating" />
            <Filters title="Cost" />
          </View>
          <View style={styles.cafeCardContainer}>
            <CafeCard />
            <CafeCard />
            <CafeCard />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
