import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import MyButton from '../../components/MyButton';
import {styles} from './AuthSignup.style';
import {signup} from '../../store/actions/index';
import {useDispatch} from 'react-redux';

const AuthSignup = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailInput = email => {
    setEmail(email);
    console.log(email);
  };

  const handlePasswordInput = password => {
    setPassword(password);
  };

  const addUser = async () => {
    await dispatch(signup(email, password));
    props.navigation.navigate('AuthLogin');
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={50}
      style={styles.screenTop}>
      <View style={styles.screen}>
        <ImageBackground
          source={require('../../images/login.png')}
          style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../images/logo.png')}
              style={styles.logo}
            />
          </View>
          <ScrollView style={{width: '100%', flex: 1}}>
            <View style={styles.inputContainer}>
              <View style={styles.input}>
                <TextInput placeholder="FULL NAME" placeholderTextColor="red" />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder="EMAIL"
                  value={email}
                  onChangeText={handleEmailInput}
                  placeholderTextColor="red"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder="MOBILE NUMBER"
                  placeholderTextColor="red"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder="PASSWORD"
                  value={password}
                  onChangeText={handlePasswordInput}
                  secureTextEntry={true}
                  placeholderTextColor="red"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder="CONFIRM PASSWORD"
                  placeholderTextColor="red"
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity onPress={addUser}>
            <View style={styles.signButton}>
              <MyButton title="Confirm" />
            </View>
          </TouchableOpacity>
          <View style={styles.service}>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthSignup;
