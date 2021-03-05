import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#4d4d4d',
    alignItems: 'center'
  },
  addBtn: {
    width: '40%',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 40,
    padding: 16,
    marginVertical: 24
  },
  addBtnText: {
    fontSize: 16,
    textAlign: 'center'
  },
  listComponent: {
    width: '80%',
    flexGrow: 0,
    height: Dimensions.get('window').height / 2,
    backgroundColor: '#828282',
    padding: 8,
    marginVertical: 16,
    borderRadius: 10
  }
});

export default styles;