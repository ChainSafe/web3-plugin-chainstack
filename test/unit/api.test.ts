import { Web3 } from 'web3';
import { ChainstackPlugin } from '../../src/chainstack-plugin';
import axios from 'axios';

describe('ChainstackPlugin unit test', () => {
  let web3 : Web3;
  const APIKey = 'testMockKey';

  beforeEach(() => {
    web3 = new Web3();
    web3.registerPlugin(new ChainstackPlugin({apiKey: APIKey}));
  });

  it('should set the authorization header with the correct format', async () => {
    const expectedConfig = {
      headers: {
        Authorization: `Bearer ${APIKey}`,
      },
    };

    jest.spyOn(axios, 'get').mockImplementation((_url, config) => {
      expect(config).toEqual(expectedConfig);
      return Promise.resolve({ data: {} });
    });

    await web3.chainstack.getOrganization(); 
  });

  it('should get organization details', async () => {
    const organization = { name: 'Test Org', id: '123' };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: organization });

    const result = await web3.chainstack.getOrganization();

    expect(result).toEqual(organization);
  });

  it('should get projects details', async () => {
    const projects = [{ name: 'Project 1', id: 'P1' }, { name: 'Project 2', id: 'P2' }];
    jest.spyOn(axios, 'get').mockResolvedValue({ data: projects });

    const result = await web3.chainstack.getProjects();

    expect(result).toEqual(projects);
  });

  it('should get project details', async () => {
    const projectId = 'PR-298-224-574';
    const projectDetails = { name: 'Project X', id: projectId };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: projectDetails });

    const result = await web3.chainstack.getProject(projectId);

    expect(result).toEqual(projectDetails);
  });

  it('should get networks details', async () => {
    const networks = [{ name: 'Network A', id: 'N1' }, { name: 'Network B', id: 'N2' }];
    jest.spyOn(axios, 'get').mockResolvedValue({ data: networks });

    const result = await web3.chainstack.getNetworks();

    expect(result).toEqual(networks);
  });

  it('should get network details', async () => {
    const networkId = 'ND-298-224-574';
    const networkDetails = { name: 'Network X', id: networkId };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: networkDetails });

    const result = await web3.chainstack.getNetwork(networkId);

    expect(result).toEqual(networkDetails);
  });

  it('should get nodes details', async () => {
    const nodes = [{ name: 'Node A', id: 'ND1' }, { name: 'Node B', id: 'ND2' }];
    jest.spyOn(axios, 'get').mockResolvedValue({ data: nodes });

    const result = await web3.chainstack.getNodes();

    expect(result).toEqual(nodes);
  });

  it('should get node details', async () => {
    const nodeId = 'ND-298-224-574';
    const nodeDetails = { name: 'Node X', id: nodeId };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: nodeDetails });

    const result = await web3.chainstack.getNode(nodeId);

    expect(result).toEqual(nodeDetails);
  });

  it('should get identities details', async () => {
    const identities = [{ name: 'Identity A', id: 'ID1' }, { name: 'Identity B', id: 'ID2' }];
    jest.spyOn(axios, 'get').mockResolvedValue({ data: identities });

    const result = await web3.chainstack.getIdentities();

    expect(result).toEqual(identities);
  });

  it('should get identity details', async () => {
    const identityId = 'ID-298-224-574';
    const identityDetails = { name: 'Identity X', id: identityId };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: identityDetails });

    const result = await web3.chainstack.getIdentity(identityId);

    expect(result).toEqual(identityDetails);
  });
});