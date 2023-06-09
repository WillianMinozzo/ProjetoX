import { ButtonProps } from '@react-bulk/core';
import { ReactNode } from 'react';

export type PagesProps = {
  children?: ReactNode;
};

export type FormSingleProps = {} & PagesProps;

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
