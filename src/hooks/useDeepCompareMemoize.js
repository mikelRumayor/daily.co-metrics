import { useRef } from 'react';
import isEqual from 'lodash.isequal';

/*
  useDeepCompareMemoize hooks memoizes the deep compare results.
  This is to avoid extra computation when the params have not changed.
*/
function useDeepCompareMemoize(value) {
  const ref = useRef();

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

export default useDeepCompareMemoize;
