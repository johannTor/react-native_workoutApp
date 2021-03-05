import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    zIndex: 100
  },
  inputTitle: {
    paddingVertical: 20,
    fontSize: 20,
    color: '#fff'
  },
  inputContainer: {
    width: '80%',
    minHeight: '30%',
    alignItems: 'center'
  },
  workoutInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 8,
    marginBottom: 16,
    width: '80%',
    backgroundColor: '#fff'
  },
  listComponent: {
    width: '80%',
    flexGrow: 0,
    height: Dimensions.get('window').height / 3,
    backgroundColor: '#828282',
    padding: 8,
    marginVertical: 8,
    borderRadius: 10
  },
  inputBtns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 8
  },
  dateBtn: {
    backgroundColor: 'rgba(43,166,234,0.7)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 12
  },
  chosenDate: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 12
  },
  saveBtn: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 40,
    padding: 16
  },
  cancelBtn: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#ff9999',
    borderRadius: 40,
    padding: 16
  },
  chosen: {

  }
});

export default styles;