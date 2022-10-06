import React from 'react';
import type { MutableRefObject, LegacyRef } from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
  NativeModules,
  NativeSyntheticEvent,
  findNodeHandle,
  ViewProps
} from 'react-native';
// ref stuff
// https://github.com/Krunal-K-SimformSolutions/react-native-audio-waveform/blob/bfb240e033f24271d0b3c09570e12dfde0b1e0d0/src/player/AudioPlayerWaveformViewUtils.ts
// https://github.com/dominicstop/react-native-ios-utilities/blob/d824a00b7597f74ea300f824407c5d269a3f630e/src/native_components/RNIWrapperView.ts
// https://github.com/mcdonnelljoel09/ios-context-menu-react-native/blob/77be3f0375b21fba78b310a2b1070f951cc0c52a/src/native_components/RNIWrapperView.ts
// https://github.com/openland/openland-apps/blob/754eb7bbb3d0111390144fcc81acd1a13a660a31/packages/openland-mobile/components/AndroidTwoDScrollView.ts


export const getViewId = (ref?: MutableRefObject<any>): number | null => {
  const viewId = ref ? findNodeHandle(ref.current) : null;
  return viewId;
};

const ComponentName = 'NewTurboAndroidView';
const getCommand = (cmd: string): any => {
  if (true && Platform.OS === 'ios') {
    return UIManager.getViewManagerConfig('NewTurboAndroidView').Commands[
      cmd
    ];
  } else {
    return cmd;
  }
}
export const exampleMethod = (nodeHandle:number, param:any) => {

  UIManager.dispatchViewManagerCommand(
    nodeHandle,
    //UIManager.getViewManagerConfig('NewTurboAndroidView').Commands.exampleMethod,
    getCommand('exampleMethod'),
    [param]
  );
};




const LINKING_ERROR =
  `The package 'react-native-new-turbo-android' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export type NewTurboAndroidProps =  ViewProps & {
  ref?: LegacyRef<NewTurboAndroidProps>,
  color: string;
  style: ViewStyle;
  initialNumber: number;
  onNumberSend: (event: NativeSyntheticEvent<{ nativeNumber: number }>) => void;
};


export const NewTurboAndroidView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NewTurboAndroidProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

/*
export const NewTurboAndroidView = forwardRef(
  NewTurboAndroidViewNoRef
);*/

// export NewTurboAndroidViewManager;
// module method..
type NewTurboAndroidModuleType = {
  multiply(a: number, b: number): Promise<number>;
};
const { NewTurboAndroidModule } = NativeModules;
export { NewTurboAndroidModule as NewTurboAndroidModuleType };

/*
import {
  requireNativeComponent,
  ViewStyle,
  NativeSyntheticEvent,
  //ViewProps,
  NativeModules,
} from 'react-native';

type NewTurboAndroidProps = {
  color: string;
  style: ViewStyle;
  initialNumber: number;
  onNumberSend: (event: NativeSyntheticEvent<{ nativeNumber: number }>) => void;
};

export const NewTurboAndroidViewManager =
  requireNativeComponent<NewTurboAndroidProps>('NewTurboAndroidView');

// export NewTurboAndroidViewManager;
// module method..
type NewTurboAndroidModuleType = {
  multiply(a: number, b: number): Promise<number>;
};
const { NewTurboAndroidModule } = NativeModules;
export { NewTurboAndroidModule as NewTurboAndroidModuleType };

*/