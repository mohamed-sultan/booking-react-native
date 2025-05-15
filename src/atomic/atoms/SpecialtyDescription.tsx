import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import TipIcon from './TipIcon';
import  { useThemeColors } from '@store/useTheme';

const SpecialtyDescription = ({title, description}: any) => {
  const colors = useThemeColors();

  const styles = getStyles(colors);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TipIcon size={19} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
export default React.memo(SpecialtyDescription);

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    marginBottom: 24,
    backgroundColor: colors.LightBackground,
    paddingHorizontal: 13,
    borderRadius: 12,
    paddingVertical: 16,
    opacity: 0.7,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: colors.PrimaryText,
  },
  description: {
    fontSize: 14,
    color: colors.PrimaryText,
    lineHeight: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

