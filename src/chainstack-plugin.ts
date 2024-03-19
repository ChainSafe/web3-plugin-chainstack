import { HttpProvider, Web3Context, Web3PluginBase, validator } from "web3";
import { HttpProviderOptions } from "web3-providers-http";
import { ClientOptions, WebSocketProvider } from "web3-providers-ws";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ChainstackAuth } from "./chainstack-auth";
import {
  IdentitiesResponse,
  Identity,
  Network,
  NetworksResponse,
  Organization,
  Project,
  ProjectsResponse,
  RpcNode,
  RpcNodesResponse,
} from "./types";

export class ChainstackPlugin extends Web3PluginBase {
  public pluginNamespace = "chainstack";

  public platformAPIEndPoint: string;
  public chainstackAuth: ChainstackAuth;
  public providerEndPoint?: string;

  constructor(
    chainstackAuthOrProviderEndPoint: ChainstackAuth | string,
    chainstackAuth?: ChainstackAuth,
    platformAPIEndPoint: string = "https://api.chainstack.com/v1"
  ) {
    super();

    if (typeof chainstackAuthOrProviderEndPoint === "string") {
      this.providerEndPoint = chainstackAuthOrProviderEndPoint;
      this.chainstackAuth = chainstackAuth as ChainstackAuth;
    } else {
      this.chainstackAuth = chainstackAuthOrProviderEndPoint;
    }

    this.platformAPIEndPoint = platformAPIEndPoint;
  }

  // This link overrides link in base class
  public link(parentContext: Web3Context): void {
    if (!validator.isNullish(this.providerEndPoint)) {
      const credentialsGiven =
        !validator.isNullish(this.chainstackAuth?.username) &&
        !validator.isNullish(this.chainstackAuth?.password);

      let newProvider = undefined;

      if (typeof this.providerEndPoint === "string") {
        if (/^http(s)?:\/\//i.test(this.providerEndPoint)) {
          const options: HttpProviderOptions | undefined = credentialsGiven
            ? {
                providerOptions: {
                  headers: {
                    Authorization:
                      "Basic " +
                      btoa(
                        `${this.chainstackAuth.username ?? ""}:${
                          this.chainstackAuth.password ?? ""
                        }`
                      ),
                  },
                },
              }
            : undefined;

          newProvider = new HttpProvider(this.providerEndPoint, options);
        } else if (/^ws(s)?:\/\//i.test(this.providerEndPoint)) {
          const options: ClientOptions | undefined = credentialsGiven
            ? {
                headers: {
                  Authorization:
                    "Basic " +
                    btoa(
                      `${this.chainstackAuth.username ?? ""}:${
                        this.chainstackAuth?.password ?? ""
                      }`
                    ),
                },
              }
            : undefined;

          newProvider = new WebSocketProvider(this.providerEndPoint, options);
        }
        parentContext.requestManager.setProvider(newProvider);
      }
    }

    super.link(parentContext);
  }

  private getRequestConfig(): { headers: { Authorization: string } } {
    return {
      headers: {
        Authorization: `Bearer ${this.chainstackAuth.apiKey ?? ""}`,
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
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/organization`,
      this.getRequestConfig()
    );
    return response.data as Organization;
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
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/projects/`,
      this.getRequestConfig()
    );
    return response.data as ProjectsResponse;
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
  public async getProject(projectId: string): Promise<Project> {
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/projects/${projectId}/`,
      this.getRequestConfig()
    );
    return response.data as Project;
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
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/networks/`,
      this.getRequestConfig()
    );
    return response.data as NetworksResponse;
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
  public async getNetwork(networkId: string): Promise<Network> {
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/networks/${networkId}/`,
      this.getRequestConfig()
    );
    return response.data as Network;
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
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/nodes/`,
      this.getRequestConfig()
    );
    return response.data as RpcNodesResponse;
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
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/nodes/${nodeId}/`,
      this.getRequestConfig()
    );
    return response.data as RpcNode;
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
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/identities/`,
      this.getRequestConfig()
    );
    return response.data as IdentitiesResponse;
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
  public async getIdentity(identityId: string): Promise<Identity> {
    const response = await this.sendRequest(
      `${this.platformAPIEndPoint}/identities/${identityId}/`,
      this.getRequestConfig()
    );

    return response.data as Identity;
  }

  async sendRequest(
    url: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const response = await axios.get(url, config);

    if (response.status == 200) return response;
    else throw new Error(JSON.stringify(response.data));
  }
}

// Module Augmentation
declare module "web3" {
  interface Web3 {
    chainstack: ChainstackPlugin;
  }
}
