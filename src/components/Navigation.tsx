import { Button } from '@react-bulk/web';
import NextLink from 'next/link';
import * as Icon from '@phosphor-icons/react';
import { useTheme } from '@react-bulk/core';
import { FunctionComponent, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  title: string;
  href: string;
  icon?: string;
}

export default function Navigation({ title, href, icon }: NavLinkProps) {
  const theme = useTheme();

  const pathName = usePathname();
  const isActive = pathName.startsWith(href);

  const typeButton = isActive ? 'button' : 'text';
  const colorIcon = isActive ? 'white' : theme.color('primary');

  // @ts-ignore
  const IconCustom = icon ? Icon[icon] : null;

  return (
    <Button
      component={NextLink}
      href={href}
      startAddon={IconCustom ? <IconCustom size={24} color={colorIcon} /> : null}
      variant={typeButton}
      justifyContent="flex-start"
    >
      {title}
    </Button>
  );
}
