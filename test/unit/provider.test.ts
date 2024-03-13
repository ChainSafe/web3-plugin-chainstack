
import { ChainstackPlugin } from '../../src/chainstack-plugin';
import { Web3 } from 'web3';


describe('ChainstackPlugin Provider Test', () => {

  const user = 'testUser';
  const pass = 'testPassword';

  it('should set the provider in web3 requestManager', () => {
    let web3 = new Web3();

    const providerURL = 'https://example-chainstack-provider-url.com';
    const chainstackPlugin = new ChainstackPlugin(providerURL);
    web3.registerPlugin(chainstackPlugin);

    expect((web3.requestManager.provider as any).clientUrl).toBe(providerURL);
  });

  it('should set the correct request headers with username and password for HTTP Provider', async () => {
    let web3 = new Web3();

    const providerURL = 'https://example-chainstack-provider-url.com';

    const chainstackPlugin = new ChainstackPlugin(providerURL, { username: user, password: pass });
    web3.registerPlugin(chainstackPlugin);

    const obj = (web3.requestManager.provider as any).httpProviderOptions;

    // Ensure that the Authorization header is set correctly
    const expectedAuthorizationHeader = 'Basic ' + btoa(`${user}:${pass}`);
    
    expect(obj.providerOptions.headers['Authorization']).toEqual(expectedAuthorizationHeader);
    
  });
});

