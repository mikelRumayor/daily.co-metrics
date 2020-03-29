import rest from 'Providers/rest';

function createToken(values) {
  return rest.create('/meetings', values);
}

function validateToken(token) {
  return rest.read(`/meetings/${token}`);
}

export default {
  createToken,
  validateToken,
};
