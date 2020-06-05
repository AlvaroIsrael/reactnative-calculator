import React, {useState} from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import css from './index';
import color from '../../utils/color';

export default function Button(props) {

  const [displayValue, setDisplayValue] = useState('0');

  const operation = () => {

    return addDigit;
  };

  const addDigit = () => {
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay;

    if (props.label === '.' && !clearDisplay
      && this.state.displayValue.includes('.')) {
      return;
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + props.label;
    this.setState({displayValue, clearDisplay: false});

    if (props.label !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  const buttonBase = [css.button];

  if (props.size === 'double') {
    buttonBase.push(css.buttonDouble);
  }

  switch (props.color) {
    case color.ORANGE:
      buttonBase.push(css.buttonOrange);
      break;
    case color.DARK_GRAY:
      buttonBase.push(css.buttonDarkGray);
      break;
    default:
      buttonBase.push(css.buttonGray);
      break;
  }

  return (
    <TouchableHighlight onPress={addDigit}>
      <Text style={buttonBase}>{props.label}</Text>
    </TouchableHighlight>
  );
}
