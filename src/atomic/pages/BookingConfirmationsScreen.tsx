import React from 'react';
import {SafeAreaView, StatusBar, View, ScrollView, Text} from 'react-native';
import Heading from '@atoms/Heading';
import PoweredBy from '@molecules/PoweredBy';
import Button from '@atoms/Button';
import ProgressBarWithExit from '@molecules/ProgressBarWithExit';
import AlternativeOptionButton from '@atoms/AlternativeOptionButton';
import SpecialtyDescription from '@atoms/SpecialtyDescription';
import Confirmed from '@atoms/Confirmed';
import  { useThemeColors } from '@store/useTheme';
import AppText from '@molecules/AppText';
import {StyleSheet} from 'react-native';
import {lightColors} from '@constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const BookingConfirmationScreen = () => {
  const colors = useThemeColors();

  const styles = getStyles(colors);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ProgressBarWithExit progress={1} />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Heading style={styles.confirmationHeading}>
            Booking confirmed
          </Heading>
          <View style={styles.confirmedContainer}>
            <Confirmed size={140} />
          </View>

          <AppText style={styles.recommendationText}>
            Based on the information you have provided, we think you should
            speak to an <AppText style={styles.boldText}>Allergist</AppText>.
          </AppText>

          <SpecialtyDescription
            title="Allergist"
            description="An allergist is a doctor who treats allergies and immune system disorders. They diagnose and manage reactions to substances like pollen, food, or medications."
          />
          <AppText style={styles.recommendationText}>
            if you would prefer to speak to GP instead please click the button
          </AppText>
          <AlternativeOptionButton onPress={() => {}} />
        </ScrollView>

        <View>
          <PoweredBy />
          <Button title="Done" onPress={() => {}} />
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
      padding: 24,
      backgroundColor: colors.LightBackground,
    },
    scrollContent: {
      flexGrow: 1,
    },
    confirmationHeading: {
      fontSize: hp(3.8),
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'left',
      lineHeight: 32,
    },
    recommendationText: {
      fontSize: hp(2.4),
      color: colors.LightText,
      marginBottom: 24,
      lineHeight: 24,
      textAlign: 'center',
    },
    boldText: {
      fontWeight: 'bold',
      color: colors.PrimaryText,
    },
    confirmedContainer: {
      alignItems: 'center',
    },
    specialtyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
