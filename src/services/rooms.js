import rest from 'Providers/rest';

function create(values) {
  return rest.create('/rooms', values);
}

function getById(id) {
  return rest.read(`/rooms/:${id}`);
}

export default {
  create,
  getById,
};
