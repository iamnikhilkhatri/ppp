const ROOT_URL = 'https://api.getpoorti.com/api/v1/';
const API_URLS = {
  login: ROOT_URL + 'user/login',
  user: ROOT_URL + 'user/',
  register: ROOT_URL + 'user/signup',
  forget: ROOT_URL + 'user/reset',
  verify: ROOT_URL + 'user/verifyOtp',
  reset: ROOT_URL + 'user/pass',
  addNominee: ROOT_URL + 'user/NomUpdate',
  createRd: 'https://api.getpoorti.com/shivalik/RD',
  invested: ROOT_URL + 'user/investment',
  intrest: ROOT_URL + 'user/intrest',
  goldRecived:ROOT_URL+'user/gold'
};
export default API_URLS;
