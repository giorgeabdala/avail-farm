import accounts from './data/accounts.json';
import config from './data/config.json';

export default class Random {

    public static getRandomSeed() {
        const index = Math.floor(Math.random() * accounts.length);
        return accounts[index];
    }

    //retorna um número aleatório entre config.minAmount e config.maxAmount
    public static getRandomAmount() {
        const amount =  Math.random() * (config.maxAmount - config.minAmount) + config.minAmount;
        return parseFloat(amount.toFixed(2));

    }

    //retorna uma quantidade de horas aleatoria entre config.minHours e config.maxHours
    public static getRandomHours() {
        const timestamp = Math.random() * (config.maxHours - config.minHours) + config.minHours;
        const hours = (timestamp * 60 * 60 * 1000).toFixed(0);
        return parseInt(hours);
    }
}