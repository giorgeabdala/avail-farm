"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_json_1 = __importDefault(require("./data/accounts.json"));
const config_json_1 = __importDefault(require("./data/config.json"));
class Random {
    static getRandomSeed() {
        return accounts_json_1.default[Math.floor(Math.random() * accounts_json_1.default.length)];
    }
    //retorna um número aleatório entre config.minAmount e config.maxAmount
    static getRandomAmount() {
        return Math.floor(Math.random() * (config_json_1.default.maxAmount - config_json_1.default.minAmount + 1)) + config_json_1.default.minAmount;
    }
    //retorna uma quantidade de horas aleatoria entre config.minHours e config.maxHours
    static getRandomHours() {
        const hours = Math.floor(Math.random() * (config_json_1.default.maxHours - config_json_1.default.minHours + 1)) + config_json_1.default.minHours;
        return hours * 60 * 60 * 1000;
    }
}
exports.default = Random;
