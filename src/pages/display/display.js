import React from 'react';
import {Text, View} from 'react-native';
import css from './index';

export default function Display(props) {
  return (<View style={css.display}>
    <Text style={css.displayValue}
          numberOfLines={1}>{props.value}</Text>
  </View>);
}
