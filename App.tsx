import React, {useState} from 'react';
import AppNavigator from '@navigation/AppNavigator';
import SplashScreen from '@pages/SplashScreen';

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return <AppNavigator />;
}

export default App;
