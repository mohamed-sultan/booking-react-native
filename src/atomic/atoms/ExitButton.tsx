import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { useThemeColors } from '@store/useTheme';
import Button from '@svg/Button';

const ExitButton = ({ onPress }: { onPress: () => void }) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Button />
    </TouchableOpacity>
  );
};
export default React.memo(ExitButton);

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.LightBackground,
      width: 34,
      height: 34,
      borderRadius: 10,
      textAlign: 'center',
    },
    text: {
      fontSize: 15,
      fontWeight: '600',
    },
  });
