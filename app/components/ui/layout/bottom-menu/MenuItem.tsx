import { AntDesign } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import type { IMenuItem, TypeNav } from './menu.interface';
import { AppConstants } from '@/app.constants';

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNav;
  currentRoute?: string;
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
  const isActive = currentRoute === item.path;

  return (
    <Pressable className="w-[24%]" onPress={() => nav(item.path)}>
      <AntDesign
        name={item.iconName}
        size={26}
        color={isActive ? AppConstants.primary : '#8D8A97'}
      />
    </Pressable>
  );
};

export default MenuItem;
