import React, {forwardRef, useImperativeHandle} from 'react';
import {Text, View} from 'react-native';
import InputField from '../molecules/InputField';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useFormState } from '@store/useFormState';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required').min(3, 'Full Name must be at least 3 characters'),
  contactNumber: yup
    .string()
    .optional()
    .matches(/^\d*$/, 'Contact Number must be numbers only')
    .min(7, 'Contact Number must be at least 7 digits')
    .max(10, 'Contact Number must be at most 10 digits'),

  email: yup
    .string()
    .email('Invalid email address')
    .required('Email Address is required'),
});

const UserInfoForm = forwardRef((props, ref) => {
  const fullName = useFormState((state) => state.fullName);
  const contactNumber = useFormState((state) => state.contactNumber);
  const email = useFormState((state) => state.email);
  const setFullName = useFormState((state) => state.setFullName);
  const setContactNumber = useFormState((state) => state.setContactNumber);
  const setEmail = useFormState((state) => state.setEmail);

  const {
    control,
    formState: {errors, isValid},
    getValues,
    trigger,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName,
      contactNumber,
      email,
    },
    mode: 'onChange',
  });

  useImperativeHandle(ref, () => ({
    isValid,
    getValues,
    trigger,
    reset,
  }), [isValid, getValues, trigger, reset]);

  return (
    <View>
      <Text>{ isValid ? 'ok' : 'not'}</Text>
      <Controller
        control={control}
        name="fullName"
        render={({field: {onChange, value},fieldState: {error}}) => (
          <InputField
            label="Full Name"
            value={value}
            onChangeText={(val) => {
              onChange(val);
              setFullName(val);
            }}
            error={error?.message}
            minLength={3}
          />
        )}
      />
      <Controller
        control={control}
        name="contactNumber"
        render={({field: {onChange, value},fieldState: {error}}) => (
          <InputField
            label="Contact Number"
            value={value ?? ''}
            onChangeText={(val) => {
              onChange(val);
              setContactNumber(val);
            }}
            error={error?.message}
            minLength={7}
            maxLength={10}
            keyboardType="numeric"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value},fieldState: {error}}) => (
          <InputField
            label="Email Address"
            value={value}
            onChangeText={(val) => {
              onChange(val);
              setEmail(val);
            }}
            error={error?.message}
          />
        )}
      />
    </View>
  );
});

export default UserInfoForm;
