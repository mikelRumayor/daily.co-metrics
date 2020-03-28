import rest from 'Providers/rest';

function send(id, stats) {
  return rest.create(`/stats/${id}`, stats);
}

export default {
  send,
};
