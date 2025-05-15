import React from 'react';
import { View } from 'react-native';
import TextButton from '@atoms/TextButton';
import AppText from '@molecules/AppText';
import { t } from 'i18next';

interface RaideoFormProps {
  value: 'yes' | 'no' | '';
  onChange: (val: 'yes' | 'no') => void;
  error?: string;
}

const RaideoForm: React.FC<RaideoFormProps> = ({ value, onChange, error }) => {
  return (
    <View>
      <TextButton
        label={t('answer.yes')}
        selected={value === 'yes'}
        onPress={() => onChange('yes')}
      />
      <TextButton
        label={t('answer.no')}
        selected={value === 'no'}
        onPress={() => onChange('no')}
      />
      {error && <AppText>{error}</AppText>}
    </View>
  );
};

export default RaideoForm;
