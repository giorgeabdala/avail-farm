import { getDecimals, initialize, formatNumberToBalance, getKeyringFromSeed, isValidAddress } from "avail-js-sdk";
import config from "./data/config.json";
import {createApi} from './api';
import {Err, Ok, Result} from "ts-results";


export default class TransferUseCase {

    public async execute(seedSender: string, seedReceiver: string, amount: number) : Promise<Result<string, string>> {

        console.log("Creating API");
        //const api = await initialize(config.endPoint);
        const api = await createApi(config.endPoint);
        console.log("API created");
        console.log("Creating sender and receiver keys");
        const options = { app_id: 0, nonce: -1 }
        const sender = getKeyringFromSeed(seedSender);
        const receiver = getKeyringFromSeed(seedReceiver);
        const decimals = getDecimals(api);
        const balance = formatNumberToBalance(amount, decimals);

        console.log("Checking if sender and receiver addresses are valid");
        if (!isValidAddress(sender.address)) return new Err("Invalid sender address");
        if (!isValidAddress(receiver.address)) return new Err("Invalid receiver address");
        if (amount <= 0) return new Err("Amount must be greater than 0");

        console.log(`Transferring ${amount} from ${sender.address} to ${receiver.address}`);
        const transfer = api.tx.balances.transfer(receiver.address, balance);
        const hash = await transfer.signAndSend(sender, options);

        console.log(`Transfer ${amount} from ${sender.address} to ${receiver.address} with hash ${hash}`);
        return new Ok(hash.toString());
    }
}