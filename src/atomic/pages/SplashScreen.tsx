import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Button from '../atoms/Button';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({onComplete}: SplashScreenProps) => {
  return (
    <View style={styles.splashContainer}>
      <LottieView
        source={require('../../../assets/animations/animation.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Button style={styles.button} textStyle={styles.buttonText} title="Start" onPress={onComplete} />
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
    marginTop: 32,
    height: heightPercentageToDP(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default SplashScreen;
