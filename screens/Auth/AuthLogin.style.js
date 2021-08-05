import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'stretch',
    // width: Theme.getScreenWidth,
    // height: Theme.getScreenHeight + 50,
    width: '100%',
    height: '100%',
  },
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  logoContainer: {
    height: 200,
    padding: 5,
    marginTop: 90,

    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },
  logoText: {
    color: '#bd060c',
    marginTop: 30,
    fontSize: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  remember: {
    marginTop: 15,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  remText: {
    color: '#808080',
  },
  signButton: {
    width: '100%',
    marginTop: 40,

    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
    height: 80,
    width: '100%',

    justifyContent: 'space-around',
    paddingHorizontal: 60,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 60,
    height: 60,
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 50,
  },
  img: {
    width: 20,
    height: 20,
  },
});
export {styles};
