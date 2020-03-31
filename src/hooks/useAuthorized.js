import meetings from 'Services/meetings';
import { useLocation } from 'Components/Router';

import useFetcher from './useFetcher';

/*
  UseAuthorized hook validates is the meeting-tokens are valid or not
*/
const useAuthorized = () => {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  //useFetcher hook retrieves if the tokes is valid
  const [{ data: { valid } = {}, loading }] = useFetcher(
    meetings.validateToken,
    token,
  );

  if (loading || valid) return token;
  return false;
};

export default useAuthorized;
