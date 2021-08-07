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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateEmail, updatePassword, signup} from '../../store/actions/user';

const AuthSignup = props => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  // const handleEmailInput = email => {
  //   setEmail(email);
  //   console.log(email);
  // };
  // const handlePasswordInput = password => {
  //   setPassword(password);
  // };

  const handleSignUp = () => {
    props.signup();
    props.navigation.navigate('Home');
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
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image
              style={styles.back}
              source={require('../../images/back.png')}
            />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../images/logo.png')}
              style={styles.logo}
            />
          </View>
          <ScrollView style={{width: '100%', flex: 1}}>
            <View style={styles.inputContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="FULL NAME"
                  placeholderTextColor="red"
                  // value={this.state.name}
                  // onChangeText={name => this.setState({name})}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={props.user.email}
                  onChangeText={email => props.updateEmail(email)}
                  placeholder="EMAIL"
                  autoCapitalize="none"
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
                  value={props.user.password}
                  onChangeText={password => props.updatePassword(password)}
                  placeholder="PASSWORD"
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
          <TouchableOpacity onPress={handleSignUp}>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateEmail, updatePassword, signup}, dispatch);
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignup);
