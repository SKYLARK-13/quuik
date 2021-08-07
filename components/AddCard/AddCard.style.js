import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  floatingAdd: {
    marginTop: 15,
    width: '90%',
    height: 70,
    elevation: 15,
    shadowColor: 'black',
  },
  addBack: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',

    borderRadius: 10,
  },
  addBackContainer: {
    width: '100%',
    height: '100%',
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  inputBox: {
    width: '70%',
    height: '100%',
    flexDirection: 'column',
    paddingVertical: 7,
    justifyContent: 'space-between',
  },

  inputBoxHead: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputBoxDesc: {
    color: 'white',
    fontSize: 12,
  },
  starBox: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 8,
  },
  heartContainer: {
    width: '70%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heart: {
    height: 20,
    width: 20,
  },
  heartNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  star: {
    width: '70%',
    height: 10,
  },
});

export {styles};
