import {describe} from "vitest";
import Random from "../src/Random";
import TransferUseCase from "../src/TransferUseCase";
import {Ok} from "ts-results";


describe('TransferUseCase', () => {
    it('should transfer', async () => {
        const seedSender = Random.getRandomSeed();
        const seedReceiver = Random.getRandomSeed();
        const amount = Random.getRandomAmount();

        console.log(`seedSender: ${seedSender}`);
        console.log(`seedReceiver: ${seedReceiver}`);
        console.log(`amount: ${amount}`);

        const transferUseCase = new TransferUseCase();
        const resultOrError = await transferUseCase.execute(seedSender, seedReceiver, amount);

        expect(resultOrError.err).toBe(false);
        expect(resultOrError.ok).toBeTruthy();

    }
    );
} );