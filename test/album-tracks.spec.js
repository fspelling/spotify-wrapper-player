import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/album-tracks';
import convertToHumanTime from '../src/convert-human-time';

describe('Album-Tracks', () => {
    const data = [
        {
            "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
            "track_number": 1,
            "name": "Around The World",
            "duration_ms": 238733
        }
    ];

    const data2 = [
        {
            "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
            "track_number": 1,
            "name": "Around The World",
            "duration_ms": 238733
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
            "track_number": 1,
            "name": "Around The World",
            "duration_ms": 238733
        }
    ];

    const componente = `<div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4"><p class="music-number">1</p><p class="music-title">Around The World</p><p class="music-duration">${convertToHumanTime(238733)}</p></div>`;

    const componente2 = `<div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4"><p class="music-number">1</p><p class="music-title">Around The World</p><p class="music-duration">${convertToHumanTime(238733)}</p></div><div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4"><p class="music-number">1</p><p class="music-title">Around The World</p><p class="music-duration">${convertToHumanTime(238733)}</p></div>`;

    it('Deveria montar componente de album-tracks passando os dados da library', () => {
        const elemento = document.createElement('div');
        renderAlbumTracks(data, elemento);

        expect(elemento.innerHTML).to.be.eql(componente);
    });

    it('Deveria encontrar o componente mesmo tendo mais de um album', () => {
        const elemento2 = document.createElement('div');
        renderAlbumTracks(data2, elemento2);

        expect(elemento2.innerHTML).to.be.eql(componente2);
    });
});