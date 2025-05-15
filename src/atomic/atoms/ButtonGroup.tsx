import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import { useThemeColors } from '@store/useTheme';
import { t } from 'i18next';

const ButtonGroup = ({ onPrevious, onContinue, disabled, style }: any) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  return (
    <View style={[styles.container, style]}>
      <Button
        title={t('navigation.previous')}
        onPress={onPrevious}
        style={styles.secondaryButton}
        textStyle={styles.secondaryButtonText}
      />
      <Button
        disabled={disabled}
        title={t('navigation.continue')}
        onPress={onContinue}
        style={styles.primaryButton}
      />
    </View>
  );
};
export default React.memo(ButtonGroup);

const getStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 15,
    },
    primaryButton: {
      flex: 0.5,
    },
    secondaryButton: {
      flex: 0.5,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.PrimaryBackground,
    },
    secondaryButtonText: {
      color: colors.PrimaryBackground,
    },
  });
