import { useEffect } from 'react';

import useDeepCompareMemoize from './useDeepCompareMemoize';

export function useDeepCompareEffect(callback, dependencies) {
  return useEffect(callback, useDeepCompareMemoize(dependencies));
}

export default useDeepCompareEffect;
