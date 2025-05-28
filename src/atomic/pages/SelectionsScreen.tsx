import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Heading from '@atoms/Heading';
import PoweredBy from '@molecules/PoweredBy';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import ButtonGroup from '@atoms/ButtonGroup';
import useThemeStore, { useThemeColors } from '@store/useTheme';
import { FormStateStore, useFormState } from '@store/useFormState';
import RaideoForm from '@organisms/RaideoForm';
import { ROUTES } from '../../navigation/AppNavigator';
import { StyleSheet } from 'react-native';
import { lightColors } from '@constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { t } from 'i18next';
import ThemeToggleButton from '@molecules/ThemeToggleButton';

interface RaideoFormValues {
  option: 'yes' | 'no' | '';
}

const schema = yup.object().shape({
  option: yup
    .string()
    .oneOf(['yes', 'no'], 'Please select an option')
    .required('Please select an option'),
});

const SelectionsScreen = ({ navigation }: any) => {
  const colors = useThemeColors();
  const styles = getStyles(colors);
  const option = useFormState((state: FormStateStore) => state.option);
  const setOption = useFormState((state: FormStateStore) => state.setOption);
  const setActiveForm = useFormState(state => state.setActiveForm);
  
  const {
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<RaideoFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { option: option || '' },
    mode: 'onChange',
  });

  const handleSelect = (val: 'yes' | 'no') => {
    setValue('option', val, { shouldValidate: true });
    setOption(val);
  };

  const handleContinue = () => {
    setActiveForm(2);
    navigation.navigate(ROUTES.BOOKING_CONFIRMATION);
  };

  const handlePrevious = () => {
    navigation.navigate(ROUTES.USER_INFO_FORM);
  };
  const isDark = useThemeStore(state => state.isDark);

  return (
    <>
      <StatusBar
        backgroundColor={isDark ? 'black' : 'white'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
        animated={true}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          
       
        <ThemeToggleButton />

        <ProgressBarWithExit progress={0.5} />
        <Heading style={styles.heading}>{t('question.allergies')}</Heading>
        <Controller
          control={control}
          name="option"
          render={({ field: { value } }) => (
            <RaideoForm
              value={value}
              onChange={handleSelect}
              error={errors.option?.message}
            />
          )}
        /> 
        <View style={styles.buttonGroup}>
          <PoweredBy />

          <ButtonGroup
            disabled={!isValid}
            onPrevious={handlePrevious}
            onContinue={handleContinue}
            continueDisabled={!isValid}
            style={styles.btns}
          />
          </View>
          </View>
      </SafeAreaView>
    </>
  );
};

export const getStyles = (colors = lightColors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(6),
    backgroundColor: colors.LightBackground,
  },
  buttonGroup: {
    bottom: hp(5),
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: hp(3),
    marginTop: hp(5),
    marginBottom: hp(2.8),
    color: colors.PrimaryText,
    fontWeight: 'bold',
  },
  btns: {
    marginTop: hp(4),
  },
  });

export default SelectionsScreen;
