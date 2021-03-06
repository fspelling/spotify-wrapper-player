import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbuns from '../src/album-list';

describe('Album-List', () => {
    it('Deveria existir album-list', () => {
        expect(renderAlbuns).to.be.an.object;
    });

    const data = [
        {
            "album_type": "album",
            "artists": [{
                "name": "Incubus",
            }],
            "id": "6peEdPVO73WtgGah5sEhX4",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
                "width": 300
            }, {
                "height": 64,
                "url": "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
                "width": 64
            }],
            "name": "The Essential Incubus",
            "type": "album",
        }
    ];

    const data2 = [
        {
            "album_type": "album",
            "artists": [{
                "name": "Incubus",
            }],
            "id": "6peEdPVO73WtgGah5sEhX4",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
                "width": 300
            }, {
                "height": 64,
                "url": "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
                "width": 64
            }],
            "name": "The Essential Incubus",
            "type": "album",
        },
        {
            "album_type": "album",
            "artists": [{
                "name": "Incubus",
            }],
            "id": "6peEdPVO73WtgGah5sEhX4",
            "images": [{
                "height": 640,
                "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
                "width": 640
            }, {
                "height": 300,
                "url": "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
                "width": 300
            }, {
                "height": 64,
                "url": "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
                "width": 64
            }],
            "name": "The Essential Incubus",
            "type": "album",
        }
    ];

    const componente = `
    <div class="list-item">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>`;
   const componente2 = `
    <div class="list-item">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${data[0].name}</p>
        <p class="list-subtitle">${data[0].artists[0].name}</p>
      </div>
    </div>`;

    it('Deveria montar componente de album-list passando os dados da library', () => {
        const elemento = document.createElement('div');
        renderAlbuns(data, elemento);

        expect(elemento.innerHTML).to.be.eql(componente);
    });

    it('Deveria encontrar o componente mesmo tendo mais de um album', () => {
        const elemento2 = document.createElement('div');
        renderAlbuns(data2, elemento2);

        expect(elemento2.innerHTML).to.be.eql(componente2);
    });
});