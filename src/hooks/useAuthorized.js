import meetings from 'Services/meetings';
import { useLocation } from 'Components/Router';

import useFetcher from './useFetcher';

const useAuthorized = () => {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');
  const [{ data: { valid } = {}, loading }] = useFetcher(
    meetings.validateToken,
    token,
  );

  if (loading || valid) return token;
  return false;
};

export default useAuthorized;
