import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://node.medialand.tw/' ,
});

export const fetchInitialMessages = ({ commit }) => {
  // axios issus ? , need full-URI
  return axiosInstance.get( 'http://localhost:5000/api/initialMessages').then(response => {
    commit("INITIAL_MESSAGES", response.data);
  }).catch(err => {
    console.log(err);
  });
}

export const fetchMessages = ({ commit }, lastFetchedMessageDate) => {
  axiosInstance.get('/api/fetchMessages?lastFetchedMessageDate=' + lastFetchedMessageDate).then(response => {
    commit("FETCH_MESSAGES", response.data);
  }).catch(err => {
    console.log(err);
  });
}