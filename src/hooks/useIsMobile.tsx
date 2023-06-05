import { useEffect, useState } from 'react';
import { useDimensions } from '@react-bulk/web';

const useIsMobile = (): boolean => {
  const { width } = useDimensions();

  return width < 768;
};

export default useIsMobile;
