import axios from 'axios'

export const fetchInitialMessages = ({ commit }) => {
  // axios issus ? , need full-URI
  return axios.get( 'http://localhost:5000/api/initialMessages').then(response => {
    commit("INITIAL_MESSAGES", response.data);
  }).catch(err => {
    console.log(err);
  });
}

export const fetchMessages = ({ commit }, lastFetchedMessageDate) => {
  axios.get('/api/fetchMessages?lastFetchedMessageDate=' + lastFetchedMessageDate).then(response => {
    commit("FETCH_MESSAGES", response.data);
  }).catch(err => {
    console.log(err);
  });
}