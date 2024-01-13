import { FC } from 'react';
import { Text, View } from 'react-native';
import { TypeRootStackParamList } from './navigation.types';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '@/hooks/useAuth';
import { routes } from './routes';
import Auth from '@/components/screens/auth/Auth';

const Stack = createStackNavigator<TypeRootStackParamList>();

type Props = {};

export const PrivateNavigation: FC<Props> = () => {
  const { user } = useAuth();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#1E1C2E',
          },
        }}
      >
        {user ? (
          routes.map(route => <Stack.Screen key={route.name} {...route} />)
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </>
  );
};
