import { Web3PluginBase } from 'web3';
import axios, { AxiosRequestConfig } from 'axios';
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

  public constructor(public chainstackAuth: ChainstackAuth, public endPoint = 'https://api.chainstack.com/v1') {
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
      const response = await this.sendRequest(`${this.endPoint}/organization`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/projects/`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/projects/${projectId}/`, this.getRequestConfig()); 
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/networks/`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/networks/${networkId}/`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/nodes/`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/nodes/${nodeId}/`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(`${this.endPoint}/identities/`, this.getRequestConfig());
      return response.data;
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
      const response = await this.sendRequest(
        `${this.endPoint}/identities/${identityId}/`,
        this.getRequestConfig()
      );
      
      return response.data;
  }

  async sendRequest(url: string, config:AxiosRequestConfig){
    return axios.get(url, config);
  }

}

// Module Augmentation
declare module 'web3' {
  interface Web3 {
    chainstack: ChainstackPlugin;
  }
}
