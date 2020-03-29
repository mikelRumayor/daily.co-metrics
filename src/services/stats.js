import rest from 'Providers/rest';

function get(id) {
  return rest.read(`/stats/${id}`);
}

function send(id, stats) {
  return rest.create(`/stats/${id}`, stats);
}

export default {
  get,
  send,
};
