import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import useTheme, { useThemeColors } from '@store/useTheme';
import AppText from '@molecules/AppText';
import {lightColors} from '@constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  minLength?: number;
  maxLength?: number;
}

const InputField = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  minLength,
  maxLength,
}: InputFieldProps) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
      {error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

export default InputField;


export const getStyles = (colors = lightColors) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
      borderWidth: 1,
      padding: 10,
      borderRadius: 12,
      borderColor: colors.border,
      backgroundColor: colors.LightBackground,
    },
    label: {
      fontSize: hp(2.3),
      color: colors.LightText,
      marginBottom: 8,
    },
    input: {
      fontSize: hp(2.4),
      color: colors.PrimaryText,
    },
    errorText: {
      color: colors.error,
      fontSize: hp(2.3),
      marginTop: 4,
    },
  });
