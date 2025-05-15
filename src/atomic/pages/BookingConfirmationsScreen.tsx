import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, ScrollView, Text } from 'react-native';
import Heading from '@atoms/Heading';
import PoweredBy from '@molecules/PoweredBy';
import Button from '@atoms/Button';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import AlternativeOptionButton from '@atoms/AlternativeOptionButton';
import SpecialtyDescription from '@atoms/SpecialtyDescription';
import useTheme, { useThemeColors } from '@store/useTheme';
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
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ThemeToggleButton from '@molecules/ThemeToggleButton';

const BookingConfirmationScreen = () => {
  const [visible, setVisible] = useState(false);
  const colors = useThemeColors();

  const styles = getStyles(colors);
  const {toggleTheme, isDark} = useTheme();

  useEffect(() => {
    setTimeout(() => setVisible(true), 50); // slight delay ensures it mounts after initial render
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={isDark ? 'black' : 'white'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
        animated={true}
      />
      <SafeAreaView style={styles.container}>
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
          <Animated.View entering={FadeIn}>
            <View style={styles.confirmedContainer}>
              <Confirmed />
            </View>
          </Animated.View>
          <AppText style={styles.recommendationText}>
            {t('recommendation.intro')}{' '}
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
          <PoweredBy />
          <Button
            title={t('navigation.done')}
            onPress={() => {}}
            style={styles.btn}
          />
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
      fontSize: hp(3),
      fontWeight: 'bold',
      textAlign: 'left',
      lineHeight: hp(4),
      marginTop: hp(2.5),
      marginBottom: 0,
    },
    recommendationText: {
      fontSize: hp(2.2),
      color: colors.PrimaryText,
      textAlign: 'center',
      marginTop: hp(2.5),
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
      marginTop: hp(2.5),
      bottom: hp(2.5),
      position: 'absolute',
      width: '100%',
      alignSelf: 'center',
    },
  });
