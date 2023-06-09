import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { useTheme } from '@react-bulk/core';
import { Button } from '@react-bulk/web';

import IconCustom from '../utils/helper';
import { UiNavigationProps } from '../utils/types';

import useIsMobile from '../hooks/useIsMobile';

export default function UiNavigation(props: UiNavigationProps) {
  const { href, icon, title } = props;
  const theme = useTheme();
  const isMobile = useIsMobile();

  const pathName = usePathname();
  const isActive = href && pathName.startsWith(href);

  const typeButton = isActive ? 'solid' : 'text';
  const colorIcon = isActive ? 'white' : theme.color('primary');

  const Icon = IconCustom(icon);
  return (
    <Button
      component={NextLink}
      startAddon={Icon && <Icon size={24} color={colorIcon} />}
      variant={typeButton}
      justifyContent="flex-start"
      {...props}
    >
      {!isMobile && title}
    </Button>
  );
}
