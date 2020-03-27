import { useCallback, useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';

import useDeepCompareEffect from 'Hooks/useDeepCompareEffect';

const STATE = {
  IDLE: 1,
  LOADING: 2,
  READY: 4,
};

function reducer(state, action) {
  switch (action.type) {
    case STATE.IDLE:
      return {
        ...state,
        data: undefined,
        error: undefined,
        loading: true,
        promise: undefined,
      };

    case STATE.LOADING:
      return {
        ...state,
        error: undefined,
        loading: true,
        promise: action.promise,
      };

    case STATE.READY:
      return {
        ...state,
        data: action.data,
        error: action.error,
        loading: false,
        promise: undefined,
      };

    default:
      return state;
  }
}

const initialState = reducer({}, { type: STATE.IDLE });

const useFetcher = (query, params) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id, setID] = useState(() => uuid());

  const refetch = useCallback(() => {
    setID(uuid());
  }, [setID]);

  useDeepCompareEffect(() => {
    let current = true;
    let promise = {};

    (async () => {
      try {
        promise = query(params);

        dispatch({ promise, type: STATE.LOADING });

        const data = await promise;

        if (current) {
          dispatch({ data, type: STATE.READY });
        }
      } catch (error) {
        if (current) {
          dispatch({ error, type: STATE.READY });
        }
      }
    })();

    return () => {
      current = false;

      if (typeof promise.cancel === 'function') {
        promise.cancel();
      } else if (typeof query.cancel === 'function') {
        query.cancel();
      }
    };
  }, [id, params, query]);

  return { ...state, refetch };
};

export default useFetcher;
