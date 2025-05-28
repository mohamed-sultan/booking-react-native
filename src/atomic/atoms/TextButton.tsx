import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import useThemeStore, { useThemeColors } from '@store/useTheme';

const TextButton = ({ label, selected = false, onPress }: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selectedButton]}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(TextButton);

const getStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      paddingVertical: 28,
      paddingHorizontal: 24,
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 15,
    marginBottom:25
    },
    selectedButton: {
      backgroundColor: colors.lightBlue, 
      borderColor: colors.PrimaryBackground,
    },
    text: {
      fontSize: 16,
      textAlign: 'left',
      color: colors.PrimaryText,
      fontWeight: 'bold',
    },
  });
