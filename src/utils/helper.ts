import * as Icons from '@phosphor-icons/react';

export default function IconCustom(iconName?: string) {
  if (!iconName) {
    return null;
  }
  const IconCustom = Object.entries(Icons).find(([name]) => {
    return name === iconName;
  })?.[1] as Icons.Icon;

  return IconCustom;
}
