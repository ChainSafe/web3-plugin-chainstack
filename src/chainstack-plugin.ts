import { Web3PluginBase } from 'web3';
import axios from 'axios';
import { ChainstackAuth } from './chainstack-auth';
import {
  IdentitiesResponse,
  NetworksResponse,
  Organization,
  ProjectsResponse,
  RpcNode,
  RpcNodesResponse,
} from './types';

export class ChainstackPlugin extends Web3PluginBase {
  public pluginNamespace = 'chainstack';

  public constructor(public chainstackAuth: ChainstackAuth) {
    super();
  }

  private getRequestConfig() {
    return {
      headers: {
        Authorization: `Bearer ${this.chainstackAuth.apiKey}`,
      },
    };
  }

  /**
   * Get the organization details
   * @returns {Promise<Organization>} - The organization details
   * @example
   * ```js
   * const org = await web3.chainstack.getOrganization();
   * console.log(org);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getOrganization(): Promise<Organization> {
    try {
      const response = await axios.get(`https://api.chainstack.com/v1/organization`, this.getRequestConfig());

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the projects details
   * @returns {Promise<Project>} - The organization details
   * @example
   * ```js
   * const org = await web3.chainstack.getProjects();
   * console.log(org);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getProjects(): Promise<ProjectsResponse> {
    try {
      const response = await axios.get('https://api.chainstack.com/v1/projects/', this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the project details
   * @param projectId
   * @returns
   * @example
   * ```js
   * const project = await web3.chainstack.getProject('PR-298-224-574');
   * console.log(project);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   *
   */
  public async getProject(projectId: string) {
    try {
      const response = await axios.get(`https://api.chainstack.com/v1/projects/${projectId}/`, this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the network details
   * @returns {Promise<Network[]>} - The network details
   * @example
   * ```js
   * const networks = await web3.chainstack.getNetworks();
   * console.log(networks);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getNetworks(): Promise<NetworksResponse> {
    try {
      const response = await axios.get('https://api.chainstack.com/v1/networks/', this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the network details
   * @param networkId
   * @returns
   * @example
   * ```js
   * const network = await web3.chainstack.getNetwork('ND-298-224-574');
   * console.log(network);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getNetwork(networkId: string) {
    try {
      const response = await axios.get(`https://api.chainstack.com/v1/networks/${networkId}/`, this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the node details
   * @returns {Promise<RpcNodes>} - The node details
   * @example
   * ```js
   * const nodes = await web3.chainstack.getNodes();
   * console.log(nodes);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getNodes(): Promise<RpcNodesResponse> {
    try {
      const response = await axios.get('https://api.chainstack.com/v1/nodes/', this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the node details
   * @returns {Promise<RpcNode | undefined>} - The node details
   * @example
   * ```js
   * const nodes = await web3.chainstack.getNode('ND-298-224-574');
   * console.log(nodes);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getNode(nodeId: string): Promise<RpcNode | undefined> {
    try {
      const response = await axios.get(`https://api.chainstack.com/v1/nodes/${nodeId}/`, this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the identity details
   * @returns {Promise<Identity[]>} - The identity details
   * @example
   * ```js
   * const identities = await web3.chainstack.getIdentities();
   * console.log(identities);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getIdentities(): Promise<IdentitiesResponse> {
    try {
      const response = await axios.get('https://api.chainstack.com/v1/identities/', this.getRequestConfig());
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get the identity details
   * @returns {Promise<Identity | undefined>} - The identity details
   * @example
   * ```js
   * const identity = await web3.chainstack.getIdentity('ID-298-224-574');
   * console.log(identity);
   * ```
   * @category Chainstack
   * @see {@link https://docs.chainstack.com/docs/guide-get-the-most-out-of-the-chainstack-platform-api#understand-and-leverage-api-endpoints}
   */
  public async getIdentity(identityId: string) {
    try {
      const response = await axios.get(
        `https://api.chainstack.com/v1/identities/${identityId}/`,
        this.getRequestConfig()
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Module Augmentation
declare module 'web3' {
  interface Web3 {
    chainstack: ChainstackPlugin;
  }
}
