import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ParamList } from './index';

type StackNavigatorScreenProps = {
  component: () => JSX.Element;
  options: StackNavigationOptions;
};

export function StackNavigatorGenerator<
  P extends ParamList,
  O extends Record<string, unknown> = Record<string, unknown>,
>(
  screens: {
    [K in Readonly<keyof P>]: StackNavigatorScreenProps;
  },
) {
  return { Stack: createStackNavigator<P & O>(), screens };
}
