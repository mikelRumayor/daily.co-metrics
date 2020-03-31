import { useEffect } from 'react';

import useDeepCompareMemoize from './useDeepCompareMemoize';

/*
  useDeepCompareEffect hook is useEffect with deep comparison instead of shallow
  JSON.stringify should work but it is not recomended for performace issues
  when the nested objects have more than 1 levels.
*/
export function useDeepCompareEffect(callback, dependencies) {
  return useEffect(callback, useDeepCompareMemoize(dependencies));
}

export default useDeepCompareEffect;
