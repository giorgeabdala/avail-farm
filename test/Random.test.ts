import config from '../src/data/config.json';
import Random from "../src/Random";
import accounts from "../src/data/accounts.json";


describe("Testa as funções de Random", () => {
    it("Testa getRandomSeed", () => {
        const seed = Random.getRandomSeed();
        console.log(seed);
        expect(typeof seed).toBe("string");
    });

    it("Testa getRandomAmount", () => {
        const amount = Random.getRandomAmount();
        console.log(config);
        console.log(amount);
        expect(amount).toBeGreaterThanOrEqual(config.minAmount);
        expect(amount).toBeLessThanOrEqual(config.maxAmount);
    });

    it("Testa getRandomHours", () => {
        const hours = Random.getRandomHours();
        console.log(hours);
        expect(hours).toBeGreaterThanOrEqual(config.minHours * 60 * 60 * 1000);
        expect(hours).toBeLessThanOrEqual(config.maxHours * 60 * 60 * 1000);
    });



} )
