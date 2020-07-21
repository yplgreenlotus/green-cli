
const axios = require('axios')

const fetchRepoList = async () => {
  // const { data } = await axios.get('https://api.github.com/users/yplgreenlotus');
  const { data } = await axios.get('https://api.github.com/users/yplgreenlotus/repos');
  // const { data } = await axios.get('https://api.github.com/repos/yplgreenlotus/green-cli');
  return data;
};



module.exports = { fetchRepoList }