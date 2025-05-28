import React, { useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Alert,
  Text,
  ScrollView,
  View,
} from 'react-native';
import Heading from '@atoms/Heading';
import UserInfoForm from '@organisms/UserInfoForm';
import PoweredBy from '@molecules/PoweredBy';
import Button from '@atoms/Button';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import useThemeStore, { useThemeColors } from '@store/useTheme';
import { ROUTES } from '@navigation/AppNavigator';
import { useFormState } from '@store/useFormState';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';
import { lightColors } from '@constants/colors';
import { t } from 'i18next';
import ThemeToggleButton from '@molecules/ThemeToggleButton';

const UserInfoFormScreen = ({ navigation }: any) => {
  const formRef = useRef<any>(null);
  const colors = useThemeColors();
  const setActiveForm = useFormState(state => state.setActiveForm);

  const styles = getStyles(colors);

  const handleContinue = async () => {
    const isValid = await formRef.current?.trigger();
    if (isValid) {
      setActiveForm(1);
      navigation.navigate(ROUTES.SELECTIONS);
    } else {
      // Alert.alert('Form is invalid', 'Please correct the highlighted fields.');
    }
  };
  const isDark = useThemeStore(state => state.isDark);

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? '#000' : '#fff'}
      />
      <SafeAreaView style={styles.container}>
      <View  style={styles.container}>
        <ThemeToggleButton />
        <ProgressBarWithExit
          progress={0.25}
          onExit={() => navigation.goBack()}
        />
        <Heading style={styles.heading}>
          Please confirm or add to the below your personal information
        </Heading>
        <ScrollView>
          <UserInfoForm ref={formRef} />  
        </ScrollView>
        <PoweredBy /> 
        <Button style={{marginTop: hp(2)}} title="Continue" onPress={handleContinue} />
        </View>
        </SafeAreaView> 
    </>
  );
};

export default UserInfoFormScreen;

export const getStyles = (colors = lightColors) =>
  StyleSheet.create({
   container: {
    flexGrow: 1,
    padding: wp(6),
    backgroundColor: colors.LightBackground,
    justifyContent: 'space-between',
    paddingBottom: hp(2),
    paddingHorizontal:20,
    borderStartColor:'red'
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: hp(2.3),
    marginTop: hp(4),
    marginBottom: hp(3),
    color: colors.PrimaryText,

    fontWeight:700
  },
  btn: {
    marginTop: hp(2.5),
  },
  });
