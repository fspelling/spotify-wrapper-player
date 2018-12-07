import spotify from './spotify';
import renderAlbuns from './album-list';
import renderAlbumInfo from './album-info';
import renderAlbumTracks from './album-tracks';

const albums = spotify.search.albums('Incubus');
const albumList = document.getElementById('album-list');
const albumTracks = document.getElementById('album-tracks');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbuns(data, albumList));
album.then(data => renderAlbumInfo(data, albumInfo)).then(data => renderAlbumTracks(data, albumTracks));