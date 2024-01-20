//import {describe, it, expect} from 'vitest';
import config from '../src/data/config.json';

import Random from "../src/Random";
import {vitest} from "vitest";


describe("Testa as funções de Random", () => {
    it("Testa getRandomSeed", () => {
        const seed = Random.getRandomSeed();
        expect(seed).toHaveProperty("seed");
    });

    it("Testa getRandomAmount", () => {
        const amount = Random.getRandomAmount();
        expect(amount).toBeGreaterThanOrEqual(config.minAmount);
        expect(amount).toBeLessThanOrEqual(config.maxAmount);
    });

    it("Testa getRandomHours", () => {
        const hours = Random.getRandomHours();
        expect(hours).toBeGreaterThanOrEqual(config.minHours * 60 * 60 * 1000);
        expect(hours).toBeLessThanOrEqual(config.maxHours * 60 * 60 * 1000);
    });



} )
