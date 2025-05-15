import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import  { useThemeColors } from '@store/useTheme';

const ExitButton = ({onPress}: {onPress: () => void}) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="close" size={20} color={colors.PrimaryText} />
    </TouchableOpacity>
  );
};
export default React.memo(ExitButton);

const getStyles = (colors: any) => StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 9,
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

