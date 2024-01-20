import { getDecimals, initialize, formatNumberToBalance, getKeyringFromSeed, isValidAddress } from "avail-js-sdk";
import config from "./data/config.json";
import {Err, Ok, Result} from "ts-results";


export default class TransferUseCase {

    public async execute(seedSender: string, seedReceiver: string, amount: number) : Promise<Result<string, string>> {
        const api = await initialize(config.endPoint);
        const options = { app_id: 0, nonce: -1 }
        const sender = getKeyringFromSeed(seedSender);
        const receiver = getKeyringFromSeed(seedReceiver);
        const decimals = getDecimals(api);
        const balance = formatNumberToBalance(amount, decimals);

        console.log(`Transfer ${amount} from ${sender.address} to ${receiver.address}`);

        if (!isValidAddress(sender.address)) return new Err("Invalid sender address");
        if (!isValidAddress(receiver.address)) return new Err("Invalid receiver address");
        if (amount <= 0) return new Err("Amount must be greater than 0");

        const transfer = api.tx.balances.transfer(receiver.address, balance);
        const hash = await transfer.signAndSend(sender, options);

        console.log(`Transfer ${amount} from ${sender.address} to ${receiver.address} with hash ${hash}`);
        return new Ok(hash.toString());
    }
}