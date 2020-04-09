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
    backgroundColor: '#787A7D',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#525152',
    color: '#FFFFFF',
  },
  operationButton: {
    color: '#FFFFFF',
    backgroundColor: '#FF9E2D',
  },
  operationButtonTop: {
    color: '#FFFFFF',
    backgroundColor: '#48494A',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
