import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { BottomTabNavigatorGenerator } from '../../types/navigation';
import { AppStackNavigationProps } from '../Router';
import HomeScreen, {
  HomeScreenParams,
  HomeScreenOptions,
} from '../../components/screens/main/Home';
import TestScreen, {
  TestScreenParams,
  TestScreenOptions,
} from '../../components/screens/main/Test';

export type MainTabNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabParamList>,
  AppStackNavigationProps
>;
export type MainTabParamList = {
  Home: HomeScreenParams;
  Test: TestScreenParams;
};

// tab menu visible only root screen
const { BottomTab, screens } = BottomTabNavigatorGenerator<MainTabParamList>({
  Home: {
    component: HomeScreen,
    options: HomeScreenOptions,
  },
  Test: {
    component: TestScreen,
    options: TestScreenOptions,
  },
});

export default function MainNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      {Object.entries(screens).map(([key, { component, options }], i) => (
        <BottomTab.Screen key={i} name={key} component={component} options={options} />
      ))}
    </BottomTab.Navigator>
  );
}
