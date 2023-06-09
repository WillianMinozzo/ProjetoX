export const APP_KEY = 'PROJECTX';

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  if (!data) return;

  return JSON.parse(data);
}

export function setStorageItem(key: string, value: unknown) {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}