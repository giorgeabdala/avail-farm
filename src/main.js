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
const TransferUseCase_1 = __importDefault(require("./TransferUseCase"));
const Random_1 = __importDefault(require("./Random"));
class Main {
    static transfer() {
        return __awaiter(this, void 0, void 0, function* () {
            const seedSender = Random_1.default.getRandomSeed();
            const seedReceiver = Random_1.default.getRandomSeed();
            const amount = Random_1.default.getRandomAmount();
            const transferUseCase = new TransferUseCase_1.default();
            const resultOrError = yield transferUseCase.execute(seedSender.seed, seedReceiver.seed, amount);
            if (resultOrError.err) {
                console.log(resultOrError.val);
                return;
            }
            console.log("Transfer successful");
            process.exit(0);
        });
    }
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const hours = Random_1.default.getRandomHours();
                console.log(`Waiting ${hours} hours`);
                yield new Promise(r => setTimeout(r, hours));
                yield this.transfer();
            }
        });
    }
}
exports.default = Main;
Main.main().then(r => console.log("Done")).catch(e => console.log(e));
