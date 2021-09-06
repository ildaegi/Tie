import React from 'react';

import { createBottomTabOption } from '../../../types/navigation';
import { Text, Title } from '../../../components/ui/Texts';
import BasicTop from '../../templates/BasicTop';

export const TestScreenOptions = createBottomTabOption({ icon: 'hammer', text: '테스트' });
export type TestScreenParams = undefined;
export default function Test() {
  return (
    <BasicTop
      contants={
        <>
          <Title style={{}}>{testScreenConstants.title}</Title>
          <Text style={{ marginTop: 10 }}>{testScreenConstants.description}</Text>
          <Text style={{}}>{testScreenConstants.information}</Text>
        </>
      }
    />
  );
}

const testScreenConstants = {
  title: 'test 1',
  description: 'test 2',
  information: 'test 3',
};
