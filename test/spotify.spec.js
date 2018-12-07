import { expect } from 'chai';
import spotify from '../src/spotify';

describe('spotify', function () {
    it('Deveria ser um objeto', () => {
        expect(spotify).to.be.an.object;
    });

    it('Deveria existir o metodo search', () => {
        expect(spotify.search).to.exist;
    });

    it('Deveria existir o metodo album', () => {
        expect(spotify.album).to.exist;
    });
});