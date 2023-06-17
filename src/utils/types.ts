import { ReactNode } from 'react';

import { ButtonProps } from '@react-bulk/core';

export type PagesProps = {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export type FormSingleProps = PagesProps;

export type FormMenuProps = { menuRight: ReactNode } & PagesProps;

export type UiNavigationProps = {
  title: string;
  href?: string;
  icon?: string;
} & ButtonProps;

export type UiTitleProps = {
  title: string;
  subtitle?: string;
  icon?: string;
  divider?: boolean;
};
