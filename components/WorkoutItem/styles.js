import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    minHeight: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 8
  },
  listText: {
    color: '#fff',
    fontSize: 16
  },
  remBtn: {
    fontSize: 22,
    color:'#ff6666',
    padding: 8,
  }
});

export default styles;