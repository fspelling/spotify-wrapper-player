import convertToHumanTime from '../src/convert-human-time';

function createComponent(tracks) {
  return tracks.map(track => `<div class="music" data-track-preview="${track.preview_url}"><p class="music-number">${track.track_number}</p><p class="music-title">${track.name}</p><p class="music-duration">${convertToHumanTime(track.duration_ms)}</p></div>`).join('');
}
export default function renderAlbumTracks(data, element) {
  const markup = createComponent(data);
  element.innerHTML = markup;
}