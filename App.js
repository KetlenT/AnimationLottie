import React from 'react';
import { SafeAreaView } from 'react-native';
import Animation from './animation.json';
import Lottie from 'lottie-react-native';

const AnimationLottie = () => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Lottie source={Animation} resizeMode='contain' autoSize autoPlay loop/>
    </SafeAreaView>);
  }
  

export default AnimationLottie;