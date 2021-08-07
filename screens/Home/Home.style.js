import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
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
  imageBackground: {
    flex: 1,
    // width: Theme.getScreenWidth,
    // height: Theme.getScreenHeight + 50,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  homeHeader: {
    width: '90%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  menuIcon: {
    height: 25,
    width: 25,
  },
  searchContainer: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#960925',
    justifyContent: 'flex-start',
  },
  search: {
    fontSize: 14,
  },
  middleScreen: {
    width: '100%',

    flex: 1,
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    width: '100%',
    height: '25%',
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  filtersContainer: {
    width: '100%',
    height: '4%',
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cafeCardContainer: {
    width: '100%',
    height: 400,
    // padding: 10,
    paddingHorizontal: 10,
  },
});

export {styles};
