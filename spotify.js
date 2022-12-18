//Get playlists
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '1678dc48a1e94d21b385766b57757793',
  clientSecret: '8dd1ed9a706746db92aa7ed57dcb3fc2',
  redirectUri: 'localhost:3000'
});

spotifyApi.setAccessToken("BQCFLEzBlaQN-q8LsrqR_G4MPz-yuHtlUhWt-O8LqpCnc7go6UZoRo4JzLNzgZAV2d1Xt4uIBtk7oMaMc7eEVlPKKxUYPjdh2_0yXMBbkJRPmTRoOnc");

const getPlaylists = () => {
  spotifyApi.searchPlaylists('chillstep')
    .then(function (data) {
      result = data.body.playlists.items
      elements = result.forEach(item => {
        console.log(item.body);
      });
      return elements;
    }, function (err) {
      console.log('There was an error: \n', err);
      return err;
    });
}


module.exports = { playlists: getPlaylists() };