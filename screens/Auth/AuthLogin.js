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
import {login} from '../../store/actions';
import {useDispatch} from 'react-redux';
const AuthLogin = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checked, setChecked] = useState(false);

  const handleEmailInput = email => {
    setEmail(email);
    console.log(email);
  };

  const handlePasswordInput = password => {
    setPassword(password);
  };

  const loginUser = async () => {
    await dispatch(login(email, password));
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
              value={email}
              onChangeText={handleEmailInput}
            />
          </View>
          <View style={styles.input}>
            <Icon name="lock" color="red" />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={handlePasswordInput}
              placeholderTextColor="red"
            />
          </View>
          <View style={styles.remember}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="red"
            />
            <Text style={styles.remText}>Remember me</Text>
          </View>
        </View>
        <TouchableOpacity onPress={loginUser} style={styles.signButton}>
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
          onPress={() => {
            props.navigation.navigate('AuthSignup');
          }}>
          <MyButtonInvert title="Sign Up" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default AuthLogin;
