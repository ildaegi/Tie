import React from 'react';

import { createBottomTabOption } from '../../../types/navigation';
import { Title } from '../../../components/ui/Texts';
import BasicCenter from '../../../components/templates/BasicCenter';

export const HomeScreenOptions = createBottomTabOption({ icon: 'home', text: '홈' });
export type HomeScreenParams = undefined;
export default function Home() {
  return <BasicCenter contants={<Title>home 1</Title>} />;
}
