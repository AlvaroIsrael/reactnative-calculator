import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#525152',
    color: '#FFFFFF',
  },
  buttonGray: {
    backgroundColor: '#787A7D',
  },
  buttonOrange: {
    backgroundColor: '#FF9E2D',
  },
  buttonDarkGray: {
    backgroundColor: '#48494A',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
});
