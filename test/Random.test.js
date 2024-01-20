"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {describe, it, expect} from 'vitest';
const config_json_1 = __importDefault(require("../src/data/config.json"));
const Random_1 = __importDefault(require("../src/Random"));
describe("Testa as funções de Random", () => {
    it("Testa getRandomSeed", () => {
        const seed = Random_1.default.getRandomSeed();
        expect(seed).toHaveProperty("seed");
    });
    it("Testa getRandomAmount", () => {
        const amount = Random_1.default.getRandomAmount();
        expect(amount).toBeGreaterThanOrEqual(config_json_1.default.minAmount);
        expect(amount).toBeLessThanOrEqual(config_json_1.default.maxAmount);
    });
    it("Testa getRandomHours", () => {
        const hours = Random_1.default.getRandomHours();
        expect(hours).toBeGreaterThanOrEqual(config_json_1.default.minHours * 60 * 60 * 1000);
        expect(hours).toBeLessThanOrEqual(config_json_1.default.maxHours * 60 * 60 * 1000);
    });
});
