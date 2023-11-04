import Web3, { core } from "web3";
import { ChainstackPlugin } from "../src";

describe("ChainstackPlugin Tests", () => {
  it("should register ChainstackPlugin plugin on Web3Context instance", () => {
    const web3Context = new core.Web3Context("https://nd-422-757-666.p2pify.com/0a9d79d93fb2f4a4b1e04695da2b77a7/");
    web3Context.registerPlugin(new ChainstackPlugin());
    expect(web3Context.chainstack).toBeDefined();
  });

  describe("ChainstackPlugin method tests", () => {

    let web3: Web3;

    beforeAll(() => {
      web3 = new Web3("https://nd-422-757-666.p2pify.com/0a9d79d93fb2f4a4b1e04695da2b77a7/");
      web3.registerPlugin(new ChainstackPlugin());
    });

    afterAll(() => {
    });

    it("should call traceBlockByHash method with expected param", async () => {
      const hash = "0x66103840578be3bc9c865e0961c4a4de31b5df7a45dcd13ffe2679ff9c7315d8";
      const response = await web3.chainstack.traceBlockByHash(hash);
      // expect response.result to be an array of the following shape:
      // [
      //   {
      //     result: {
      //       "result": Map<string, number>
      //     }
      //   } 
      // ]
      expect(response).toBeDefined();

      
      console.log(response);
    });
  });
});
