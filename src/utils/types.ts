import { ReactNode } from 'react';

import { ButtonProps } from '@react-bulk/core';

export type PagesProps = {
  children?: ReactNode;
};

export type FormSingleProps = {} & PagesProps;

export type FormRightProps = { menuRight: ReactNode; body: ReactNode } & PagesProps;

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
