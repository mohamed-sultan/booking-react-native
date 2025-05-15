import React, { Suspense } from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StarterScreen, UserInfoFormScreen, SelectionsScreen, BookingConfirmationScreen } from '@pages/index';


export type RootStackParamList = {
  'Starter': undefined;
  'UserInfoForm': undefined;
  'Selections': undefined;
  'BookingConfirmation': undefined;
};

export const ROUTES = {
  STARTER: 'Starter',
  USER_INFO_FORM: 'UserInfoForm',
  SELECTIONS: 'Selections',
  BOOKING_CONFIRMATION: 'BookingConfirmation',
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Suspense fallback={null}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={ROUTES.STARTER}>
          <Stack.Screen name={ROUTES.STARTER} component={StarterScreen} />
          <Stack.Screen name={ROUTES.USER_INFO_FORM} component={UserInfoFormScreen} />
          <Stack.Screen name={ROUTES.SELECTIONS} component={SelectionsScreen} />
          <Stack.Screen
            name={ROUTES.BOOKING_CONFIRMATION}
            component={BookingConfirmationScreen}
          />
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
};

export default AppNavigator;
