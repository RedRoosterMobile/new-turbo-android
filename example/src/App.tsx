import React, { forwardRef, useRef, useImperativeHandle } from 'react';


import { Button, StyleSheet, Text, View } from 'react-native';
import {
  NewTurboAndroidView,
  NewTurboAndroidModuleType,
  NewTurboAndroidProps,
  getViewId,
  exampleMethod
  
} from 'react-native-new-turbo-android';

export default function App() {
  const handleNumberSend = (event: any) => {
    console.log(event.nativeEvent.nativeNumber);
  };
  console.log('RENDER');
  // module method
  NewTurboAndroidModuleType.multiply(3, 7).then((result:any) => {
    console.log('3 * 7 = ', result);
  });
  console.log('view');
  let ref = useRef(null);
  //React.forwardRef((props, ref) => (
  //const refView = React.createRef<View>();
  const clickedText = (event:any)=>{
    console.log('EVENT',event.nativeEvent);
    // trying to call a method on the view..
    // ref?.current?.exampleMethod();
    console.log('REF', ref);
    console.log('VIEW-ID', getViewId(ref));
    exampleMethod(getViewId(ref),'testParam');
    
  };
  let turboRef = useRef<typeof NewTurboAndroidView>(null);
  return (
    <View style={styles.container}>
      <Button title="a title?" onPress={clickedText}>click me!</Button>
      <NewTurboAndroidView
        ref={ref}
        color="#ff0000"
        initialNumber={627.0}
        style={styles.randomNumberGeneratorView}
        onNumberSend={handleNumberSend}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomNumberGeneratorView: {
    width: '100%',
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
