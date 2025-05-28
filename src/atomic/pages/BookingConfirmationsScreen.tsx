import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, ScrollView, Text } from 'react-native';
import Heading from '@atoms/Heading';
import PoweredBy from '@molecules/PoweredBy';
import Button from '@atoms/Button';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import AlternativeOptionButton from '@atoms/AlternativeOptionButton';
import SpecialtyDescription from '@atoms/SpecialtyDescription';
import useTheme, { useThemeColors } from '@store/useTheme';
import { useFormState } from '@store/useFormState';
import { ROUTES } from '@navigation/AppNavigator';
import AppText from '@molecules/AppText';
import { StyleSheet } from 'react-native';
import { lightColors } from '@constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Confirmed from '@svg/Confirmed';
import { t } from 'i18next';
import Animated, {
 
  ZoomIn,

} from 'react-native-reanimated';
import ThemeToggleButton from '@molecules/ThemeToggleButton';

const BookingConfirmationScreen = ({ navigation }: any) => {
  const colors = useThemeColors();
  const resetFormState = useFormState(state => state.resetFormState);

  const styles = getStyles(colors);
  const {toggleTheme, isDark} = useTheme();

  const handleDonePress = () => {
    resetFormState();
    navigation.navigate(ROUTES.STARTER);
  };

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
        <ProgressBarWithExit progress={1} />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.LightBackground}
          />
          <Heading style={styles.confirmationHeading}>
            {t('booking.confirmed')}
          </Heading>
          <Animated.View entering={ZoomIn.delay(200)}>
            <View style={styles.confirmedContainer}>
              <Confirmed /> 
            </View>
          </Animated.View>
          <AppText style={styles.recommendationText}>
            {t('recommendation.intro')}
            <AppText style={styles.boldText}>
              {t('recommendation.specialist')} 
            </AppText>
            .
          </AppText>
          <View style={styles.specialtyContainer}>
            <SpecialtyDescription 
              title={t('recommendation.specialist')}
              description={t('recommendation.description')}
            />
          </View>
          <AppText style={styles.recommendationText}>
            {t('preference.prompt')}
          </AppText>
          <View>
            <AlternativeOptionButton
              style={styles.alternativeOptionButton}
              onPress={() => {}}
            />
          </View>
        </ScrollView>

          <View style={styles.btnContainer}>
            <View style={styles.poweredByContainer}>

          <PoweredBy />
            </View>
          <Button
            title={t('navigation.done')}
            onPress={handleDonePress}
            style={styles.btn}
          />
        </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BookingConfirmationScreen;

export const getStyles = (colors = lightColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(6),
      backgroundColor: colors.LightBackground,
    },
    scrollContent: {
      flexGrow: 1,
    },
    confirmationHeading: {
      fontSize: 22,
      fontWeight: 700,
      textAlign: 'left',
      lineHeight: hp(4),
      marginTop: hp(2.5),
      marginBottom: 0,
    },
    recommendationText: {
      fontSize: 16,
      color: colors.PrimaryText,
      textAlign: 'center',
      marginTop: hp(2.5),
      lineHeight:28
    },
    boldText: {
      fontWeight: 'bold',
      color: colors.PrimaryText,
    },
    confirmedContainer: {
      alignItems: 'center',
      marginTop: hp(2.5),
    },
    specialtyContainer: {
      marginTop: hp(2.5),
    },
    btn: {
      marginTop: hp(2.5),
    },
    alternativeOptionButton: {
      marginTop: hp(2.5),
    },
    btnContainer: {
      marginTop: hp(2),
      bottom: hp(0),
      position: 'absolute',
      width: '100%',
      alignSelf: 'center',
    },
    poweredByContainer: {
    }
  });
