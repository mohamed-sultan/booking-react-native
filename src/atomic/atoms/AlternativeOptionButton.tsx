import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useThemeColors } from '@store/useTheme';
import { t } from 'i18next';
import Arrow from '@svg/Arrow';

const AlternativeOptionButton = ({ onPress, style }: any) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{t('preference.button')}</Text>
      <Arrow />
    </TouchableOpacity>
  );
};

export default React.memo(AlternativeOptionButton);

const getStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.lighterBg,
      borderRadius: 8,
      paddingVertical: 12,
      marginBottom: 32,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      paddingHorizontal: 16,
    },
    buttonText: {
      fontSize: 14,
      textAlign: 'center',
      color: colors.darkText,
      fontWeight: '600',
    },
  });
