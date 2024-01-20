"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const avail_js_sdk_1 = require("avail-js-sdk");
const config_json_1 = __importDefault(require("./data/config.json"));
const ts_results_1 = require("ts-results");
class TransferUseCase {
    execute(seedSender, seedReceiver, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const api = yield (0, avail_js_sdk_1.initialize)(config_json_1.default.endPoint);
            const options = { app_id: 0, nonce: -1 };
            const sender = (0, avail_js_sdk_1.getKeyringFromSeed)(seedSender);
            const receiver = (0, avail_js_sdk_1.getKeyringFromSeed)(seedReceiver);
            const decimals = (0, avail_js_sdk_1.getDecimals)(api);
            const balance = (0, avail_js_sdk_1.formatNumberToBalance)(amount, decimals);
            console.log(`Transfer ${amount} from ${sender.address} to ${receiver.address}`);
            if (!(0, avail_js_sdk_1.isValidAddress)(sender.address))
                return new ts_results_1.Err("Invalid sender address");
            if (!(0, avail_js_sdk_1.isValidAddress)(receiver.address))
                return new ts_results_1.Err("Invalid receiver address");
            if (amount <= 0)
                return new ts_results_1.Err("Amount must be greater than 0");
            const transfer = api.tx.balances.transfer(receiver.address, balance);
            const hash = yield transfer.signAndSend(sender, options);
            console.log(`Transfer ${amount} from ${sender.address} to ${receiver.address} with hash ${hash}`);
            return new ts_results_1.Ok(hash.toString());
        });
    }
}
exports.default = TransferUseCase;
