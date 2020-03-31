import http from './http';

const ERRORS = {
  CANCELED: 'CANCELED',
  MALFORMED_CONTENT: 'MALFORMED_CONTENT',
  NETWORK: 'NETWORK',
  NOT_FOUND: 'NOT_FOUND',
  SCHEMA: 'SCHEMA',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  UNKNOWN: 'UNKNOWN',
};

export const OPERATION = {
  create: 'create',
  delete: 'delete',
  read: 'read',
  update: 'update',
};

export function method(operation) {
  const TO_HTTP_METHOD = {
    create: 'post',
    delete: 'delete',
    read: 'get',
    update: 'put',
  };

  return TO_HTTP_METHOD[operation] || operation;
}

// Provider that wraps HTTP to provide rest functionality such as error management.
// In case that this provider is changed in the future the source code should not be affected.
export async function rest(resource, operation, content, options = {}) {
  const { data, status } = await http(
    resource,
    method(operation),
    content,
    options,
  );

  if (status === 400) {
    throw new Error(
      (data.error && data.error.message) ||
        data.message ||
        ERRORS.MALFORMED_CONTENT,
    );
  }

  if (status === 401) {
    throw new Error(ERRORS.UNAUTHORIZED);
  }

  if (status === 404) {
    throw new Error(ERRORS.NOT_FOUND);
  }

  if ((status < 200 || status >= 300) && status !== 304) {
    throw new Error(ERRORS.UNKNOWN);
  }

  if (typeof data === 'object' && 'error' in data) {
    throw new Error(data.error || data.message);
  }

  return data;
}

Object.values(OPERATION).forEach(operation => {
  rest[operation] = (resource, content, options) =>
    rest(resource, operation, content, options);
});

export default rest;
