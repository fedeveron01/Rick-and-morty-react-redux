
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RickMorty from './RickMorty';
import Detail from './Detail';

const Home =() => 
{

  const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName="RickMorty">
        <Stack.Screen name="RickMorty" component={RickMorty} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
  );
}

export default Home;