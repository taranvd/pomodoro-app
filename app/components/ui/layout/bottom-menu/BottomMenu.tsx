import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { TypeNav } from './menu.interface';
import { menuData } from './menu.data';
import MenuItem from './MenuItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IBottomMenu {
  nav: TypeNav;
  currentRout?: string;
}

const BottomMenu: FC<IBottomMenu> = props => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="pt-5 px-3 flex-row justify-between items-center w-full"
      style={{
        paddingBottom: bottom + 10,
      }}
    >
      {menuData.map(item => (
        <MenuItem item={item} key={item.path} {...props} />
      ))}
    </View>
  );
};

export default BottomMenu;
