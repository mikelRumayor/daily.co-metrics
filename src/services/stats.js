import rest from 'Providers/rest';

function get(id) {
  return rest.read(`/stats/${id}`);
}

function send(id, participantId, stats) {
  return rest.create(`/stats/${id}/${participantId}`, stats);
}

export default {
  get,
  send,
};
