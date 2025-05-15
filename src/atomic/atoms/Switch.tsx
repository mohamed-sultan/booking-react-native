import React from 'react';
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';

interface SwitchProps extends Pick<RNSwitchProps, 'value' | 'onValueChange' | 'disabled' | 'thumbColor' | 'trackColor'> {
}

const Switch: React.FC<SwitchProps> = (props) => {
  return <RNSwitch {...props} />;
};

export default React.memo(Switch);
