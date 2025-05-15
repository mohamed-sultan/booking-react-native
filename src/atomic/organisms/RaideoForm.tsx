import React, {forwardRef, useImperativeHandle} from 'react';
import {View} from 'react-native';
import TextButton from '@atoms/TextButton';
import AppText from '@molecules/AppText';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStateStore, useFormState } from '@store/useFormState';

interface RaideoFormProps {
  onSubmit?: (data: RaideoFormValues) => void;
}

interface RaideoFormValues {
  option: 'yes' | 'no' | '';
}

const schema = yup.object().shape({
  option: yup.string().oneOf(['yes', 'no'], 'Please select an option').required('Please select an option'),
});

const RaideoForm = forwardRef(({ onSubmit}: RaideoFormProps, ref) => {
  const option = useFormState((state:FormStateStore) => state.option);
  const setOption = useFormState((state:FormStateStore) => state.setOption);

  const {
    control,
    formState: {errors, isValid},
    getValues,
    trigger,
    reset,
    setValue,
    handleSubmit,
  } = useForm<RaideoFormValues>({
    resolver: yupResolver(schema) as any,
    defaultValues: {option: option || ''},
    mode: 'onChange',
  });

  // Sync form state to Zustand on change
  const handleSelect = (val: 'yes' | 'no') => {
    setValue('option', val, {shouldValidate: true});
    setOption(val);
  };

  useImperativeHandle(ref, () => ({
    isValid,
    getValues,
    trigger,
    reset,
    submit: handleSubmit(onSubmit || (() => {})),
  }), [isValid, getValues, trigger, reset, handleSubmit, onSubmit]);

  return (
    <View >
      <Controller
        control={control}
        name="option"
        render={({field: {value}}) => (
          <>
            <TextButton
              label="Yes"
              selected={value === 'yes'}
              onPress={() => handleSelect('yes')}
            />
            <TextButton
              label="No"
              selected={value === 'no'}
              onPress={() => handleSelect('no')}
            />
          </>
        )}
      />
      {errors.option && (
        <AppText >{errors.option.message}</AppText>
      )}
    </View>
  );
});

export default RaideoForm;
