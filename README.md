TODO: Edit the and add more to this file

web3-plugin-chainstack
===========
This is a web3.js plugin for Chainstack.


Plugin usage by the users
------------
At your typescript project first run:
`yarn add web3 @chainsafe/web3-plugin-chainstack`

And here is how to use the plugin:
```ts
import { Web3 } from 'web3';
import { ChainstackPlugin } from '@chainsafe/web3-plugin-chainstack';

async function main() {
  const web3 = new Web3("https://nd-422-757-666.p2pify.com/0a9d79d93fb2f4a4b1e04695da2b77a7/");


  const chainstackAuth = {
    // generate one from: https://console.chainstack.com/user/settings/api-keys
    apiKey: 'API_KEY',
  };

  web3.registerPlugin(new ChainstackPlugin(chainstackAuth));
  
  //TODO: provide examples here
  web3.chainstack.METHOD_NAME(PARAM)
}
main();

```

Testing
------------
Add `API_KEY` environment variable to `.env` file at the root. You can generate one from: https://console.chainstack.com/user/settings/api-keys.

Run: `yarn test`


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
