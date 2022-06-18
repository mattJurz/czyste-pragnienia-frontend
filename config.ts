import process from 'process';

export const apiUrl =
  process.env.API_URL ||
  'https://czyste-pragnienia-backend-dev.herokuapp.com/api/graphql';
console.log('API_URL ', process.env.API_URL);
export const perPage = 2;
