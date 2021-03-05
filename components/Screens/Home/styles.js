import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: Dimensions.get('window').height,
    backgroundColor: '#4d4d4d'
  },
  quote: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 14,
    paddingHorizontal: 50,
    lineHeight: 24,
    fontStyle: 'italic'
  },
  author: {
    color: 'white',
    textAlign: 'center'
  },
  homeLinks: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 0.6
  },
  navButton: {
    backgroundColor: '#2BA6EA',
    width: '50%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default styles;