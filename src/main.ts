import TransferUseCase from "./TransferUseCase";
import Random from "./Random";


export default class Main {

    private static async transfer(){
        const seedSender = Random.getRandomSeed();
        const seedReceiver = Random.getRandomSeed();
        const amount = Random.getRandomAmount();

        const transferUseCase = new TransferUseCase();
        const resultOrError = await transferUseCase.execute(seedSender.seed, seedReceiver.seed, amount);

        if (resultOrError.err) {
            console.log(resultOrError.val);
            return;
        }


        console.log("Transfer successful");
        process.exit(0);

    }

    public static async main() {
        while (true) {
            const hours = Random.getRandomHours();
            console.log(`Waiting ${hours} hours`);

            await new Promise(r => setTimeout(r, hours));
            await this.transfer();



        }

    }
}

Main.main().then(r => console.log("Done")).catch(e => console.log(e));

