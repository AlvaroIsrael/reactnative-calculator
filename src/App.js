import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Button from './pages/button/button';

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#525152"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttons}>
          <Button label='C' operationTop onClick={()=>{}} />
          <Button label='+/-' operationTop onClick={()=>{}} />
          <Button label='%' operationTop onClick={()=>{}} />
          <Button label='÷' operation onClick={()=>{}} />
          <Button label='7' onClick={()=>{}} />
          <Button label='8' onClick={()=>{}} />
          <Button label='9' onClick={()=>{}} />
          <Button label='*' operation  onClick={()=>{}} />
          <Button label='4' onClick={()=>{}} />
          <Button label='5' onClick={()=>{}} />
          <Button label='6' onClick={()=>{}} />
          <Button label='-' operation onClick={()=>{}} />
          <Button label='1' onClick={()=>{}} />
          <Button label='2' onClick={()=>{}} />
          <Button label='3' onClick={()=>{}} />
          <Button label='+' operation onClick={()=>{}} />
          <Button label='0' double  onClick={()=>{}} />
          <Button label=',' onClick={()=>{}} />
          <Button label='=' operation onClick={()=>{}} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525152',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
