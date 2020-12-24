import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import color from '../../utils/color';

export default StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: color.MORTAR_GRAY,
    color: color.WHITE,
  },
  buttonGray: {
    backgroundColor: color.BOULDER_GRAY,
  },
  buttonOrange: {
    backgroundColor: color.ORANGE,
  },
  buttonDarkGray: {
    backgroundColor: color.TUNA_GRAY,
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
});
