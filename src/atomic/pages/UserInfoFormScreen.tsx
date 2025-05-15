import React, {useRef} from 'react';
import {SafeAreaView, StatusBar, Alert, Text} from 'react-native';
import Heading from '@atoms/Heading';
import UserInfoForm from '@organisms/UserInfoForm';
import PoweredBy from '@molecules/PoweredBy';
import Button from '@atoms/Button';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import  { useThemeColors } from '@store/useTheme';
import { ROUTES } from '@navigation/AppNavigator';
import { useFormState } from '@store/useFormState';

import {StyleSheet} from 'react-native';
import {lightColors} from '@constants/colors';

const UserInfoFormScreen = ({navigation}: any) => {
  const formRef = useRef<any>(null);
  const colors = useThemeColors();
  const setActiveForm = useFormState((state) => state.setActiveForm);

  const styles = getStyles(colors);


  const handleContinue = async () => {
    const isValid = await formRef.current?.trigger();
    if (isValid) {
      setActiveForm(1);
      navigation.navigate(ROUTES.SELECTIONS);
    } else {
      Alert.alert('Form is invalid', 'Please correct the highlighted fields.');
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <ProgressBarWithExit
          progress={0.25}
          onExit={() => navigation.goBack()}
        />
        <Heading style={styles.heading}>
          Please confirm or add to the below your personal information
        </Heading>

        <UserInfoForm ref={formRef} />
        <Text>{JSON.stringify(formRef.current)}</Text>
        <PoweredBy />
        <Button
          title="Continue"
          onPress={handleContinue}
        />
      </SafeAreaView>
    </>
  );
};

export default UserInfoFormScreen;





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
      fontSize: 19,
      marginTop: 30,
      marginBottom: 13,
      color: colors.PrimaryText,
    },
  });
