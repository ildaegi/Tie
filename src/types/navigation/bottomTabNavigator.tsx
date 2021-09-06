import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ParamList } from './index';
import { IconSet } from '../icon';

import color from '../../constants/color';

import { Text } from '../../components/ui/Texts';

type BottomTabNavigatorScreenProps = {
  component: () => JSX.Element;
  options: BottomTabNavigationOptions;
};
export function BottomTabNavigatorGenerator<
  P extends ParamList,
  O extends Record<string, unknown> = Record<string, unknown>,
>(
  screens: {
    [K in Readonly<keyof P>]: BottomTabNavigatorScreenProps;
  },
) {
  return { BottomTab: createBottomTabNavigator<P & O>(), screens };
}

type createBottomTabOptionProps = (props: {
  icon: IconSet;
  text: string;
}) => BottomTabNavigationOptions;
export const createBottomTabOption: createBottomTabOptionProps = ({ icon, text }) => ({
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons name={icon} size={18} color={focused ? color.mainColor : color.black} />
  ),
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? color.mainColor : color.black, fontSize: 14 }}>{text}</Text>
  ),
});
