import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cafeContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5,
    marginVertical: 5,
  },
  left: {
    width: '30%',
  },
  leftImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  middle: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-around',

    padding: 5,
  },
  right: {
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
  rating: {
    backgroundColor: '#00bf00',
    width: 40,
    borderRadius: 10,
    alignItems: 'center',
    padding: 2.5,
  },
});

export {styles};
