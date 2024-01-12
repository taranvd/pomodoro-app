import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu';
import { useAuth } from '@/hooks/useAuth';
import { useNavigationContainerRef } from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

type Props = {};

export const Navigation: FC<Props> = () => {
  const { user } = useAuth();
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(
    undefined
  );

  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name);

    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    );

    return () => {
      navRef.removeListener('state', listener);
    };
  }, []);

  return (
    <>
      {user && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRout={currentRoute} />
      )}
    </>
  );
};
