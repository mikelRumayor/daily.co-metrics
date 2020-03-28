import rest from 'Providers/rest';

function create(values) {
  return rest.create('/rooms', values);
}

function get() {
  return rest.read(`/rooms`);
}

function getById(id) {
  return rest.read(`/rooms/${id}`);
}

export default {
  create,
  get,
  getById,
};
