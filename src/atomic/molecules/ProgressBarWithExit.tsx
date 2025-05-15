import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProgressBar from '@atoms/ProgressBar';
import ExitButton from '@atoms/ExitButton';
import {lightColors} from '@constants/colors';

const ProgressBarWithExit = ({
  progress = 0.25,
  color = lightColors.PrimaryBackground,
  onExit,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} color={color} />
      </View>
      <View>
        <ExitButton onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressContainer: {
    flex: 1,
    marginRight: 16,
  },
});

export default ProgressBarWithExit;
