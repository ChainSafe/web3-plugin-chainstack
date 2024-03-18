web3-plugin-chainstack
===========
The Chainstack Web3.js plugin provides a seamless integration for interacting with the Chainstack platform through various functions. This plugin allows users to access organization, project, network, node, and identity details. By utilizing this plugin, developers can easily retrieve information from the Chainstack platform. Additionally this Plugin allows to use Chainstack provider with credentials. 

Here are some key functions for interacting with the Chainstack platform API:
- Using password protected Chainstack provider.
- getOrganization: Retrieve organization details.
- getProjects: Get details of projects.
- getProject: Obtain specific project details.
- getNetworks: Retrieve network details.
- getNetwork: Get details of a specific network.
- getNodes: Access node details.
- getNode: Retrieve information about a specific node.
- getIdentities: Get identity details.
- getIdentity: Obtain information about a specific identity.

Plugin usage by the users
------------
At your typescript project first run:
`yarn add web3 @chainsafe/web3-plugin-chainstack`

Here is how to use the plugin:
```ts
import { Web3 } from 'web3';
import { ChainstackPlugin } from '@chainsafe/web3-plugin-chainstack';

async function main() {
  const web3 = new Web3("https://nd-422-757-666.p2pify.com/0a9d79d93fb2f4a4b1e04695da2b77a7/");


  // If you only want to get Chainstack platform functions use API key
  const chainstackAuth = {
    // generate one from: https://console.chainstack.com/user/settings/api-keys
    apiKey: 'API_KEY',
  };

  web3.registerPlugin(new ChainstackPlugin(chainstackAuth));
  
  //once plugin is registered all of plugin functions can be used as:
  const nodesInfo = await web3.chainstack.getNodes();

}

```

Features
------------
- Password protected provider:

For using Chainstack password protected provider create Chainstack Auth object for plugin as:

```ts
    const web3 = new Web3();

    const userAuth: ChainstackAuth = {
      username: 'user',
      password: 'pass',
    };

    const chainstackPlugin = new ChainstackPlugin('https://ethereum-mainnet.core.chainstack.com', userAuth);
    web3.registerPlugin(chainstackPlugin);

    const result = await web3.eth.getBlockNumber();

```

-  Chainstack platform functions:

For interacting with Chainstack platform API first create plugin with API key as:
```ts
    const web3 = new Web3();

    const userAuth: ChainstackAuth = {
      apiKey: 'key'
    };

    const chainstackPlugin = new ChainstackPlugin(userAuth);
    web3.registerPlugin(chainstackPlugin);

    const project = await web3.chainstack.getProject('PROJ_ID');
    console.log(project);

```

Following functions are avalible in for interacting with Chainstack platform API:

 **getOrganization**
   - Description: Get the organization details.
   - Returns: Promise of Organization.
   - Example:
     ```js
     const org = await web3.chainstack.getOrganization();
     console.log(org);
     ```

 **getProjects**
   - Description: Get the projects details.
   - Returns: Promise of ProjectsResponse.
   - Example:
     ```js
     const projects = await web3.chainstack.getProjects();
     console.log(projects);
     ```

 **getProject**
   - Description: Get the project details.
   - Parameters: projectId
   - Example:
     ```js
     const project = await web3.chainstack.getProject('PR_ID');
     console.log(project);
     ```

 **getNetworks**
   - Description: Get the network details.
   - Returns: Promise of NetworksResponse.
   - Example:
     ```js
     const networks = await web3.chainstack.getNetworks();
     console.log(networks);
     ```

 **getNetwork**
   - Description: Get the network details.
   - Parameters: networkId
   - Example:
     ```js
     const network = await web3.chainstack.getNetwork('NW_ID');
     console.log(network);
     ```

 **getNodes**
   - Description: Get the node details.
   - Returns: Promise of RpcNodesResponse.
   - Example:
     ```js
     const nodes = await web3.chainstack.getNodes();
     console.log(nodes);
     ```

**getNode**
  - Description: Get the node details.
  - Parameters: nodeId
  - Returns: Promise of RpcNode or undefined.
  - Example:
      ```js
      const node = await web3.chainstack.getNode('NODE_ID');
      console.log(node);
      ```

 **getIdentities**
  - Description: Get the identity details.
  - Returns: Promise of IdentitiesResponse.
  - Example:
      ```js
      const identities = await web3.chainstack.getIdentities();
      console.log(identities);
      ```

 **getIdentity**
  - Description: Get the identity details.
  - Parameters: identityId
  - Returns: Promise of Identity or undefined.
  - Example:
      ```js
      const identity = await web3.chainstack.getIdentity('ID_ID');
      console.log(identity);
      ```


Testing
------------

For Unit tests:

Run: `yarn test:unit`



For E2E tests:


Add following environment variables:

`CS_KEY` : its for Chainstack API Key, You can generate one from: https://console.chainstack.com/user/settings/api-keys
`CS_USER` : User name for Chainstack provider
`CS_PASS`: User password for Chainstack provider

The environment variables can be saved to `.env` file at the root. 

Once environment variables are set:

Run: `yarn test:e2e`


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
