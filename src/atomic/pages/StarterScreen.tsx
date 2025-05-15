import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ROUTES } from '@navigation/AppNavigator';
import { useFormState } from '@store/useFormState';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useThemeColors } from '@store/useTheme';

const StarterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const activeForm = useFormState(
    (state: { activeForm: number }) => state.activeForm,
  );
  const colors = useThemeColors();

  useEffect(() => {

    setTimeout(() => {
      if (activeForm === 1) {
        navigation.navigate(ROUTES.SELECTIONS as keyof RootStackParamList);
      } else if (activeForm === 2) { 
        navigation.navigate(
          ROUTES.BOOKING_CONFIRMATION as keyof RootStackParamList,
        );
      } else {
        navigation.navigate(ROUTES.USER_INFO_FORM as keyof RootStackParamList);
      }
    }, 1000);
  }, [activeForm, navigation]);

  return (
    <View style={styles.container}>
      <LoaderKit
        style={styles.loader}
        name={'BallClipRotate'}
        color={colors.LightText} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loader: {
    width: wp(15),
    height: hp(15),
  },
  loaderColor: {
    color: '#007AFF',
  },
});

export default StarterScreen;
