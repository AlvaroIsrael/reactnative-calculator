import React from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import css from './index';

export default function Button(props) {
  const stylesButton = [css.button];
  if (props.double) {
    stylesButton.push(css.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(css.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(css.operationButton);
  }
  if (props.operationTop) {
    stylesButton.push(css.operationButtonTop);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
}
