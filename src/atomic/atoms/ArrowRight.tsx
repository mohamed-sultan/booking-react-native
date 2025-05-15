import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ArrowUp = ({size}: any) => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-forward" size={size} />
    </View>
  );
};

export default React.memo(ArrowUp);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    bottom: 2,
    top: 2,
  },
});
