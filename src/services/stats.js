import rest from 'Providers/rest';

function sendStats(id, stats) {
  return rest.create(`/stat/:${id}`, stats);
}

export default {
  sendStats
};
