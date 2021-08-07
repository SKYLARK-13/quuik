import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {Checkbox} from 'react-native-paper';
import MyButton from '../../components/MyButton';
import {styles} from './AuthLogin.style';
import MyButtonInvert from '../../components/MyButtonInvert';
import {Icon} from 'react-native-elements';
import Firebase from '../../config/Firebase';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  updateEmail,
  updatePassword,
  login,
  getUser,
} from '../../store/actions/user';
const AuthLogin = props => {
  const [checked, setChecked] = useState(false);

  componentDidMount = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.getUser(user.uid);
        if (props.user != null) {
          props.navigation.navigate('Home');
        }
      }
    });
  };

  const handleLogin = () => {
    props.login();

    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../../images/login.png')}
        style={styles.background}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Icon name="person" color="red" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="red"
              value={props.user.email}
              autoCapitalize="none"
              onChangeText={email => props.updateEmail(email)}
            />
          </View>
          <View style={styles.input}>
            <Icon name="lock" color="red" />
            <TextInput
              value={props.user.password}
              onChangeText={password => props.updatePassword(password)}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="red"
            />
          </View>
          <View style={styles.remember}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {}}
              color="red"
            />
            <Text style={styles.remText}>Remember me</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.signButton}>
          <MyButton title="Sign In" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.img} source={require('../../images/fb.png')} />
          </View>
          <View style={styles.iconContainer}>
            <Image style={styles.img} source={require('../../images/tw.png')} />
          </View>
          <View style={styles.iconContainer}>
            <Image style={styles.img} source={require('../../images/gp.png')} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.signButton}
          onPress={() => props.navigation.navigate('Signup')}>
          <MyButtonInvert title="Sign Up" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateEmail, updatePassword, login, getUser},
    dispatch,
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);
