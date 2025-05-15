import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import ArrowUp from './ArrowRight';
import { useThemeColors } from '@store/useTheme';

const AlternativeOptionButton = ({onPress}: any) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  return (
    <TouchableOpacity
       accessibilityRole="button"
      style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>I'd prefer to speak with a GP</Text>
      <ArrowUp size={18} />
    </TouchableOpacity>
  );
};

export default React.memo(AlternativeOptionButton);

const getStyles = (colors: any) => StyleSheet.create({
  button: {
    backgroundColor: colors.LightBackground,
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.PrimaryText,
  },
});

