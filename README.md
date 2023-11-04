web3-plugin-chainstack
===========
This is a sample repository for how to make a web3.js plugin for custom RPC providers like chainstack.

It currently implement https://docs.chainstack.com/reference/ethereum-traceblockbyhash for the `4byteTracer`. **Feel free to open PRs to add more functionality. Or sponsor this work**


Plugin usage by the users
------------
At your typescript project first run:
`yarn add web3 @conx3/web3-plugin-chainstack`

And here is how to use the plugin:
```ts
import { Web3 } from 'web3';
import { ChainstackPlugin } from '@conx3/web3-plugin-chainstack';

async function main() {
  const web3 = new Web3("https://nd-422-757-666.p2pify.com/0a9d79d93fb2f4a4b1e04695da2b77a7/");
  web3.registerPlugin(new ChainstackPlugin());

  const hash = "0x66103840578be3bc9c865e0961c4a4de31b5df7a45dcd13ffe2679ff9c7315d8";
  const response = await web3.chainstack.traceBlockByHash(hash);

  console.log(response);
}
main();

```


Publish a new version to the npm registry
------------
Run: `yarn build && npm publish --access public`

Contributing
------------

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
-------

[MIT](https://choosealicense.com/licenses/mit/)
