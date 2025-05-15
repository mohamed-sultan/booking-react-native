import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import i18n from '../config/i18n';

type LanguageCode = 'en' | 'ar' | string;

const useLanguage = (): void => {
  const getLang = async (): Promise<void> => {
    try {
      const lang = await AsyncStorage.getItem('@CACHED_LANG');

      if (lang !== null) {
        const languageCode = lang as LanguageCode;

        if (i18n.language !== languageCode) {
          await i18n.changeLanguage(languageCode);
        }
      } else {
        if (!I18nManager.isRTL) {
          I18nManager.allowRTL(true);
          I18nManager.forceRTL(true);

          RNRestart.Restart();
        }
      }
    } catch (error) {
      console.error('Error getting language:', error);
    }
  };

  useEffect(() => {
    getLang();
  }, []);
};

export default useLanguage;
