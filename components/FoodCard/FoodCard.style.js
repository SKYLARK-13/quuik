import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardCover: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardCoverContainer: {
    marginTop: 15,
    width: 300,
    height: 180,
    elevation: 5,
    shadowColor: 'black',
    // backgroundColor: 'black',
    marginHorizontal: 8,
  },
  cardTop: {
    paddingHorizontal: 20,
    marginTop: 40,
    height: 80,
    justifyContent: 'space-between',
  },
  cardBottom: {
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  thumbContainer: {
    flexDirection: 'row',

    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export {styles};
