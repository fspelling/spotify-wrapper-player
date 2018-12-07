import { expect } from 'chai';
import convertToHumanTime from '../src/convert-human-time';

describe('ConvertToHumanTime', () => {
    // 0ms === 0:00
    it('Deveria retornar 0ms e convertendo 0:00', () => {
        expect(convertToHumanTime(0)).to.be.equal('0:00');
    });

    // 1000ms === 0:01
    it('Deveria retornar 1000ms e convertendo 0:01', () => {
        expect(convertToHumanTime(1000)).to.be.equal('0:01');
    });

    // 11000ms === 0:11
    it('Deveria retornar 11000ms e convertendo 0:11', () => {
        expect(convertToHumanTime(11000)).to.be.equal('0:11');
    });

    // 60000ms === 1:00
    it('Deveria retornar 60000ms e convertendo 1:00', () => {
        expect(convertToHumanTime(60000)).to.be.equal('1:00');
    });
});