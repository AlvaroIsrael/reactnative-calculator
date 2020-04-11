import React, {useState} from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import Button from './pages/button/button';
import Display from './pages/display/display';
import color from './utils/color';
import css from './StyleGlobal';

export default function App() {

  const [displayValue, setDisplayValue] = useState('0');

  const buttons = [
    {label: 'C', color: color.DARK_GRAY, size: 'single'},
    {label: '+/-', color: color.DARK_GRAY, size: 'single'},
    {label: '%', color: color.DARK_GRAY, size: 'single'},
    {label: '÷', color: color.ORANGE, size: 'single'},
    {label: '7', color: color.GRAY, size: 'single'},
    {label: '8', color: color.GRAY, size: 'single'},
    {label: '9', color: color.GRAY, size: 'single'},
    {label: 'x', color: color.ORANGE, size: 'single'},
    {label: '4', color: color.GRAY, size: 'single'},
    {label: '5', color: color.GRAY, size: 'single'},
    {label: '6', color: color.GRAY, size: 'single'},
    {label: '-', color: color.ORANGE, size: 'single'},
    {label: '1', color: color.GRAY, size: 'single'},
    {label: '2', color: color.GRAY, size: 'single'},
    {label: '3', color: color.GRAY, size: 'single'},
    {label: '+', color: color.ORANGE, size: 'single'},
    {label: '0', color: color.GRAY, size: 'double'},
    {label: ',', color: color.GRAY, size: 'single'},
    {label: '=', color: color.ORANGE, size: 'single'},
  ];

  return (
    <>
      <StatusBar barStyle='light-content' style={css.statusBar}/>
      <SafeAreaView style={css.container}>
        <Display value={displayValue}/>
        <View style={css.buttons}>
          {buttons.map(buttonConfig => (
            <Button key={buttonConfig.label}
                    label={buttonConfig.label}
                    color={buttonConfig.color}
                    size={buttonConfig.size}/>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
