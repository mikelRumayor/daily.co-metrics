import useFetcher from "./useFetcher";

export function useData(...arg) {
  const state = useFetcher(...arg)

  return state.data
}

export default useData