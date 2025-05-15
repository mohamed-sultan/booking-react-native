import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

const AppText: React.FC<TextProps> = ({style, children, ...props}) => {
  return (
    <Text {...props} style={[styles.defaultStyle, style]}>
      {children}
    </Text>
  );
};
export default AppText;
const styles = StyleSheet.create({
  defaultStyle: {
  },
});

