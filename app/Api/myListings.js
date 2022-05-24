import client from '../Api/client';
const endpoint = '/my/listings';

const getMyListings = () => client.get(endpoint);

export default { getMyListings }