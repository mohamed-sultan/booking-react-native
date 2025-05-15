import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {lightColors} from '@constants/colors';

const Confirmed = ({size}: any) => {
  return (
    <View>
      <Icon name="checkmark-circle" size={size} color={lightColors.success} />
    </View>
  );
};

export default React.memo(Confirmed);
