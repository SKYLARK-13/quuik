import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,

    // width: Theme.getScreenWidth,
    // height: Theme.getScreenHeight + 50,
    width: '100%',
    height: '100%',
  },
  screenTop: {
    flex: 1,
    resizeMode: 'stretch',
    flexDirection: 'column',
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
    marginTop: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },

  signButton: {
    width: '100%',
    marginTop: 40,

    alignItems: 'center',
  },
  service: {
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
});

export {styles};
