import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import useTheme, { useThemeColors } from '@store/useTheme';
import AppText from '@molecules/AppText';
import { lightColors } from '@constants/colors';
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
    <View style={styles.wrapper}>
      <View style={[styles.container, error && styles.errorWrapper]}>
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
      </View>
      {error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

export default InputField;

export const getStyles = (colors = lightColors) =>
  StyleSheet.create({
    wrapper: {
      marginBottom: hp(2),
    },
    errorWrapper: {
      borderColor: colors.error,
    },
    container: {
      borderWidth: 0.7,
      paddingHorizontal: wp(2.7),
      paddingVertical: hp(1.5),
      borderRadius:12,
      borderColor: colors.border, 
      backgroundColor: colors.LightBackground,
    },
    label: {
      fontSize: 14,
      color: colors.LightText,
      fontWeight: 700,
      marginBottom:10
    },
    input: {
      fontSize: 16,
      color: colors.PrimaryText,
      marginBottom: 5,
    },
    errorText: {
      color: colors.error,
      fontSize: hp(1.3),
      marginTop: 4,
      fontWeight:600
    },
  });
