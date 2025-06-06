import React from 'react';
import {View, StyleSheet} from 'react-native';
import  { useThemeColors } from '@store/useTheme';

interface ProgressBarBaseProps {
  progress?: number;
}

const ProgressBarBase = ({
  progress = 0.25,
}: ProgressBarBaseProps) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return (
    <View style={styles.barBackground}>
      <View
        style={[
          styles.progressFill,
          {width: `${progress * 100}%`, backgroundColor: colors.PrimaryBackground},
        ]}
      />
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  barBackground: {
    height: 6,
    backgroundColor: colors.lightGray,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});

const ProgressBar = React.memo(ProgressBarBase);
export default ProgressBar;
