import instance from './auth-api';

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await instance.post('/contacts', body);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
