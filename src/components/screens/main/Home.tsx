import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import Color from '../../../constants/color';

import { Title, Text } from '../../../components/ui/Texts';
import BasicCenter from '../../../components/templates/BasicCenter';

export const HomeScreenOptions: BottomTabNavigationOptions = {};
export type HomeScreenParams = undefined;
export default function Home() {
  return <BasicCenter contants={<Title>여기는 채팅을 할 수 있는 화면입니다.</Title>} />;
}
