import React, {useRef} from 'react';
import {SafeAreaView, StatusBar, View, Text, Alert} from 'react-native';
import Heading from '@atoms/Heading';
import PoweredBy from '@molecules/PoweredBy';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import ButtonGroup from '@atoms/ButtonGroup';
import {  useThemeColors } from '@store/useTheme';
import RaideoForm from '@organisms/RaideoForm';
import { ROUTES } from '../../navigation/AppNavigator';


import {StyleSheet} from 'react-native';
import {lightColors} from '@constants/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SelectionsScreen = ({navigation}: any) => {
  const formRef = useRef<any>(null);
  const colors = useThemeColors();
  const styles = getStyles(colors);

  const isFormValid = !!formRef.current?.isValid;

  const handleContinue =  () => {
    navigation.navigate(ROUTES.BOOKING_CONFIRMATION);
  };

  const handlePrevious = () => {
    navigation.navigate(ROUTES.USER_INFO_FORM);
  };

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <ProgressBarWithExit progress={0.5} />
        <Heading style={styles.heading}>Do you have any allergies?</Heading>

        <RaideoForm ref={formRef}  />

        <PoweredBy />
        <ButtonGroup
          disabled={!isFormValid}
          onPrevious={handlePrevious}
          onContinue={handleContinue}
          continueDisabled={!isFormValid}
        />
      </SafeAreaView>
    </>
  );
};

export default SelectionsScreen;




export const getStyles = (colors = lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: colors.LightBackground,
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
    },
    heading: {
      fontSize: hp(3.5),
      marginTop: 30,
      marginBottom: 30,
      color: colors.PrimaryText,
      fontWeight: 'bold',
    },
    errorText: {
      color: colors.error,
      marginTop: 8,
      textAlign: 'center',
    },
  });
