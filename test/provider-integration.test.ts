import Web3 from 'web3';
import { ChainstackPlugin } from '../src/chainstack-plugin';
import { ChainstackAuth } from 'src/chainstack-auth';
require('dotenv').config();

describe('ChainstackPlugin Provider', () => {
  let userAuth: ChainstackAuth;
  let httpProvider: string;
  let wsProvider: string;

  beforeAll(() => {

    userAuth = {
      username: process.env.CS_USER,
      password: process.env.CS_PASS,
    };

    httpProvider = process.env.HTTP_Provider || 
        "https://ethereum-mainnet.core.chainstack.com";

    wsProvider = process.env.WSS_Provider || 
        "wss://ethereum-mainnet.core.chainstack.com/ws";

  });

  it('should allow password protected HTTP provider usage', async () => {
    const web3 = new Web3();

    const chainstackPlugin = new ChainstackPlugin(httpProvider, userAuth);
    web3.registerPlugin(chainstackPlugin);

    const result = await web3.eth.getBlockNumber();

    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(typeof result).toBe('bigint');
  });

  it('should allow password protected Websocket provider usage', async () => {
    const web3 = new Web3();

    const chainstackPlugin = new ChainstackPlugin(wsProvider, userAuth);
    web3.registerPlugin(chainstackPlugin);

    const result = await web3.eth.getBlockNumber();

    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(typeof result).toBe('bigint');

    web3.provider?.disconnect();

  });

});