import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import * as Icons from '@phosphor-icons/react';

import { useTheme } from '@react-bulk/core';
import { Button } from '@react-bulk/web';

import IconCustom from '../utils/helper';
import { UiNavigationProps } from '../utils/types';

import useIsMobile from '../hooks/useIsMobile';

export default function UiNavigation(props: UiNavigationProps) {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const pathName = usePathname();
  const isActive = props.href && pathName.startsWith(props.href);

  const typeButton = isActive ? 'solid' : 'text';
  const colorIcon = isActive ? 'white' : theme.color('primary');

  const Icon = IconCustom(props.icon);
  return (
    <Button
      component={NextLink}
      startAddon={Icon && <Icon size={24} color={colorIcon} />}
      variant={typeButton}
      justifyContent="flex-start"
      {...props}
    >
      {!isMobile && props.title}
    </Button>
  );
}
