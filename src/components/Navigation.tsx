import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import * as Icons from '@phosphor-icons/react';

import { useTheme } from '@react-bulk/core';
import { Button } from '@react-bulk/web';

interface NavLinkProps {
  title: string;
  href?: string;
  icon?: string;
}

export default function Navigation({ title, href, icon }: NavLinkProps) {
  const theme = useTheme();

  const pathName = usePathname();
  const isActive = href && pathName.startsWith(href);

  const typeButton = isActive ? 'button' : 'text';
  const colorIcon = isActive ? 'white' : theme.color('primary');

  const IconCustom = Object.entries(Icons).find(([name]) => {
    return name === icon;
  })?.[1] as Icons.Icon;

  return (
    <Button
      component={NextLink}
      href={href}
      startAddon={IconCustom && <IconCustom size={24} color={colorIcon} />}
      variant={typeButton}
      justifyContent="flex-start"
    >
      {title}
    </Button>
  );
}
