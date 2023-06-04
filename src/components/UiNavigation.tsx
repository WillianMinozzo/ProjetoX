import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import * as Icons from '@phosphor-icons/react';

import { useTheme } from '@react-bulk/core';
import { Button } from '@react-bulk/web';

import { UiNavigationProps } from '../utils/types';

export default function UiNavigation(props: UiNavigationProps) {
  const theme = useTheme();

  const pathName = usePathname();
  const isActive = props.href && pathName.startsWith(props.href);

  const typeButton = isActive ? 'solid' : 'text';
  const colorIcon = isActive ? 'white' : theme.color('primary');

  const IconCustom = Object.entries(Icons).find(([name]) => {
    return name === props.icon;
  })?.[1] as Icons.Icon;

  return (
    <Button
      component={NextLink}
      href={props.href}
      startAddon={IconCustom && <IconCustom size={24} color={colorIcon} />}
      variant={typeButton}
      justifyContent="flex-start"
      {...props}
    >
      {props.title}
    </Button>
  );
}
