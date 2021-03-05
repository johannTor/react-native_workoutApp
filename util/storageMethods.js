import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  storeData: async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch(err) {
      console.warn('Err: ', err);      
    }
  },
  readData: async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return JSON.parse(data);
    } catch(err) {
      console.warn('Err: ', err);
    }
  },
  removeValue: async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }

    console.warn('Done.')
  }
};

export default storage;