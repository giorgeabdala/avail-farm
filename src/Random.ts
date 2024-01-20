import accounts from './data/accounts.json';
import config from './data/config.json';

export default class Random {

    public static getRandomSeed() {
        return accounts[Math.floor(Math.random() * accounts.length)];
    }

    //retorna um número aleatório entre config.minAmount e config.maxAmount
    public static getRandomAmount() {
        return Math.floor(Math.random() * (config.maxAmount - config.minAmount + 1)) + config.minAmount;
    }

    //retorna uma quantidade de horas aleatoria entre config.minHours e config.maxHours
    public static getRandomHours() {
        const hours = Math.floor(Math.random() * (config.maxHours - config.minHours + 1)) + config.minHours;
        return hours * 60 * 60 * 1000;
    }
}