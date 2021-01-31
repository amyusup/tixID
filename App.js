import React from 'react';
import MainNavigator from './src/navigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
