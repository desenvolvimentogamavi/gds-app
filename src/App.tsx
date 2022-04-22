import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {RootNavigator} from './navigation/rootNavigation';
import {GdsTheme} from './styles/gdsTheme';

const App = () => {
  return (
    <ThemeProvider theme={GdsTheme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
