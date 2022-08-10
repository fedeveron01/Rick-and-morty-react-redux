import * as React from 'react';

import TodoApp from './screens/TodoApp';
import RickMorty from './screens/RickMorty';
import Favourites from './screens/Favourites';
import Home from './screens/Home';
// redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'

  
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/integration/react'


import Ionicons from '@expo/vector-icons/Ionicons';

import Toast from 'react-native-toast-message';


const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  
  })
let persistor = persistStore(store)




const App = () => {
  const Tab = createBottomTabNavigator();



  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
       <NavigationContainer>
      <Tab.Navigator >
      <Tab.Screen options={{ 
                  headerShown:false,
                    tabBarIcon: ({size, color}) => (<Ionicons name="home" showHeader color={color} size={size} />),
                    
                }} name = "Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} options={{                    tabBarIcon: ({size, color}) => (<Ionicons name="star" showHeader color={color} size={size} />) }} />

      </Tab.Navigator>
      </NavigationContainer>
      <Toast/>
      </PersistGate>
      </Provider>
  );
}

export default App;

