var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "01201bfb7bb02e9fff1802da90858cef2078c5d0";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + params)
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err)
    })
  }
};

module.exports = helpers;
