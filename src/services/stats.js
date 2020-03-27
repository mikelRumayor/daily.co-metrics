import rest from 'Providers/rest';

function send(id, stats) {
  return rest.create(`/stat/:${id}`, stats);
}

export default {
  send,
};
