import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import Button from '../atoms/Button';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import ThemeToggleButton from '@molecules/ThemeToggleButton';

const {width} = Dimensions.get('window');

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  return (
    <View style={styles.splashContainer}>
      <LottieView
        source={require('../../../assets/animations/animation.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        title="Start"
        onPress={onComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.7,
    height: width * 0.7,
  },
  button: {
    bottom: heightPercentageToDP(6),
    zIndex: 1000,
    position:'absolute',
    height: heightPercentageToDP(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default SplashScreen;
