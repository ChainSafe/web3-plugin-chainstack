import { ChainstackPlugin } from "../../src/chainstack-plugin";

// eslint-disable-next-line
require("dotenv").config();

describe("ChainstackPlugin PlatformAPI", () => {
  let chainstackPlugin: ChainstackPlugin;

  beforeEach(() => {
    const chainstackAuth = {
      // generate one from: https://console.chainstack.com/user/settings/api-keys
      apiKey: process.env.CS_KEY,
    };
    chainstackPlugin = new ChainstackPlugin(chainstackAuth);
  });

  describe("getOrganization", () => {
    it("should return the organization details", async () => {
      // Call the method
      const org = await chainstackPlugin.getOrganization();

      // Verify the result
      expect(typeof org.id).toBe("string");
      expect(typeof org.name).toBe("string");
    });
  });

  let projectId = "";
  describe("getProjects", () => {
    it("should return the projects details", async () => {
      // Call the method
      const projects = await chainstackPlugin.getProjects();
      projectId = projects.results[0].id;

      // Verify the result
      expect(typeof projects.count).toBe("number");
      const firstProject = projects.results[0];
      expect(typeof firstProject.id).toBe("string");
      expect(typeof firstProject.name).toBe("string");
      expect(typeof firstProject.description).toBe("string");
      expect(typeof firstProject.networks).toBe("number");
      expect(typeof firstProject.type).toBe("string");
      expect(typeof firstProject.created_at).toBe("string");
      expect(typeof firstProject.creator.email).toBe("string");
      expect(typeof firstProject.creator.first_name).toBe("string");
      expect(typeof firstProject.creator.id).toBe("string");
      expect(typeof firstProject.creator.last_name).toBe("string");
      expect(typeof firstProject.creator.organization.id).toBe("string");
      expect(typeof firstProject.creator.organization.name).toBe("string");
    });

    it("should return the project details for a given projectId", async () => {
      // Call the method
      const project = await chainstackPlugin.getProject(projectId);

      // Verify the result
      expect(typeof project.id).toBe("string");
      expect(typeof project.name).toBe("string");
      expect(typeof project.description).toBe("string");
      expect(typeof project.networks).toBe("number");
      expect(typeof project.type).toBe("string");
      expect(typeof project.created_at).toBe("string");
      expect(typeof project.creator.email).toBe("string");
      expect(typeof project.creator.first_name).toBe("string");
      expect(typeof project.creator.id).toBe("string");
      expect(typeof project.creator.last_name).toBe("string");
      expect(typeof project.creator.organization.id).toBe("string");
      expect(typeof project.creator.organization.name).toBe("string");
    });
  });

  describe("getNetworks", () => {
    let networkId = "";

    it("should return the network details", async () => {
      // Call the method
      const networks = await chainstackPlugin.getNetworks();
      networkId = networks.results[0].id;

      // Verify the result
      expect(typeof networks.count).toBe("number");
      const firstNetwork = networks.results[0];
      expect(typeof firstNetwork.configuration.network).toBe("string");
      expect(typeof firstNetwork.created_at).toBe("string");
      expect(typeof firstNetwork.creator.email).toBe("string");
      expect(typeof firstNetwork.creator.first_name).toBe("string");
      expect(typeof firstNetwork.creator.id).toBe("string");
      expect(typeof firstNetwork.creator.last_name).toBe("string");
      expect(typeof firstNetwork.creator.organization.id).toBe("string");
      expect(typeof firstNetwork.creator.organization.name).toBe("string");
      expect(typeof firstNetwork.details).not.toBeUndefined();
      expect(typeof firstNetwork.id).toBe("string");
      expect(typeof firstNetwork.name).toBe("string");
      expect(Array.isArray(firstNetwork.nodes)).toBe(true);
      const firstNode = firstNetwork.nodes[0];
      expect(typeof firstNode.configuration.archive).toBe("boolean");
      expect(typeof firstNode.configuration.client).toBe("string");
      expect(typeof firstNode.created_at).toBe("string");
      expect(typeof firstNode.creator.email).toBe("string");
      expect(typeof firstNode.creator.first_name).toBe("string");
      expect(typeof firstNode.creator.id).toBe("string");
      expect(typeof firstNode.creator.last_name).toBe("string");
      expect(typeof firstNode.creator.organization.id).toBe("string");
      expect(typeof firstNode.creator.organization.name).toBe("string");
      expect(typeof firstNode.details.api_namespaces[0]).toBe("string");
      expect(typeof firstNode.details.auth_key).toBe("string");
      expect(typeof firstNode.details.auth_password).toBe("string");
      expect(typeof firstNode.details.auth_username).toBe("string");
      expect(typeof firstNode.details.beacon_endpoint).toBe("string");
      expect(typeof firstNode.details.https_endpoint).toBe("string");
      expect(typeof firstNode.details.mode).toBe("string");
      expect(typeof firstNode.details.version).toBe("string");
      expect(typeof firstNode.details.wss_endpoint).toBe("string");
      expect(typeof firstNode.id).toBe("string");
      expect(typeof firstNode.name).toBe("string");
      expect(typeof firstNode.network).toBe("string");
      expect(typeof firstNode.organization).toBe("string");
      expect(typeof firstNode.provider).toBe("string");
      expect(typeof firstNode.region).toBe("string");
      expect(typeof firstNode.role).toBe("string");
      expect(typeof firstNode.status).toBe("string");
      expect(typeof firstNode.type).toBe("string");
      expect(typeof firstNetwork.project).toBe("string");
      expect(typeof firstNetwork.protocol).toBe("string");
      expect(typeof firstNetwork.status).toBe("string");
    });

    it("should return the network details for a given networkId", async () => {
      // Call the method
      const network = await chainstackPlugin.getNetwork(networkId);

      // Verify the result
      expect(typeof network.created_at).toBe("string");
      expect(typeof network.details).not.toBeUndefined();
      expect(typeof network.id).toBe("string");
      expect(typeof network.name).toBe("string");
      expect(Array.isArray(network.nodes)).toBe(true);
      expect(typeof network.project).toBe("string");
      expect(typeof network.protocol).toBe("string");
      expect(typeof network.status).toBe("string");
    });
  });

  describe("getNodes", () => {
    it("should return the node details", async () => {
      // Call the method
      const nodes = await chainstackPlugin.getNodes();

      // Verify the result
      expect(typeof nodes.count).toBe("number");
      const firstNode = nodes.results[0];
      expect(typeof firstNode.configuration.archive).toBe("boolean");
      expect(typeof firstNode.configuration.client).toBe("string");
      expect(typeof firstNode.created_at).toBe("string");
      expect(typeof firstNode.creator.email).toBe("string");
      expect(typeof firstNode.creator.first_name).toBe("string");
      expect(typeof firstNode.creator.id).toBe("string");
      expect(typeof firstNode.creator.last_name).toBe("string");
      expect(typeof firstNode.creator.organization.id).toBe("string");
      expect(typeof firstNode.creator.organization.name).toBe("string");
      expect(typeof firstNode.details.api_namespaces[0]).toBe("string");
      expect(typeof firstNode.details.auth_key).toBe("string");
      expect(typeof firstNode.details.auth_password).toBe("string");
      expect(typeof firstNode.details.auth_username).toBe("string");
      expect(typeof firstNode.details.beacon_endpoint).toBe("string");
      expect(typeof firstNode.details.https_endpoint).toBe("string");
      expect(typeof firstNode.details.mode).toBe("string");
      expect(typeof firstNode.details.version).toBe("string");
      expect(typeof firstNode.details.wss_endpoint).toBe("string");
      expect(typeof firstNode.id).toBe("string");
      expect(typeof firstNode.name).toBe("string");
      expect(typeof firstNode.network).toBe("string");
      expect(typeof firstNode.organization).toBe("string");
      expect(typeof firstNode.provider).toBe("string");
      expect(typeof firstNode.region).toBe("string");
      expect(typeof firstNode.role).toBe("string");
      expect(typeof firstNode.status).toBe("string");
      expect(typeof firstNode.type).toBe("string");
    });
    it("should return the node details for a given nodeId", async () => {
      // Call the method
      const nodes = await chainstackPlugin.getNodes();
      const nodeId = nodes.results[0].id;
      const node = await chainstackPlugin.getNode(nodeId);

      // Verify the result
      expect(typeof node?.configuration.archive).toBe("boolean");
      expect(typeof node?.configuration.client).toBe("string");
      expect(typeof node?.created_at).toBe("string");
      expect(typeof node?.creator.email).toBe("string");
      expect(typeof node?.creator.first_name).toBe("string");
      expect(typeof node?.creator.id).toBe("string");
      expect(typeof node?.creator.last_name).toBe("string");
      expect(typeof node?.creator.organization.id).toBe("string");
      expect(typeof node?.creator.organization.name).toBe("string");
      expect(typeof node?.details.api_namespaces[0]).toBe("string");
      expect(typeof node?.details.auth_key).toBe("string");
      expect(typeof node?.details.auth_password).toBe("string");
      expect(typeof node?.details.auth_username).toBe("string");
      expect(typeof node?.details.beacon_endpoint).toBe("string");
      expect(typeof node?.details.https_endpoint).toBe("string");
      expect(typeof node?.details.mode).toBe("string");
      expect(typeof node?.details.version).toBe("string");
      expect(typeof node?.details.wss_endpoint).toBe("string");
      expect(typeof node?.id).toBe("string");
      expect(typeof node?.name).toBe("string");
      expect(typeof node?.network).toBe("string");
      expect(typeof node?.organization).toBe("string");
      expect(typeof node?.provider).toBe("string");
      expect(typeof node?.region).toBe("string");
      expect(typeof node?.role).toBe("string");
      expect(typeof node?.status).toBe("string");
      expect(typeof node?.type).toBe("string");
    });
  });

  describe("getIdentities", () => {
    it("should return the identity details", async () => {
      // Call the method
      const identities = await chainstackPlugin.getIdentities();

      // Verify the result
      expect(typeof identities.count).toBe("number");
      if (identities.results && identities.results.length > 0) {
        const firstIdentity = identities.results[0];
        expect(typeof firstIdentity.id).toBe("string");
        expect(typeof firstIdentity.name).toBe("string");
      }
    });

    it("should return the identity details for a given identityId", async () => {
      // Call the method
      const identities = await chainstackPlugin.getIdentities();
      const identityId = identities.results?.[0]?.id;
      if (identityId) {
        const identity = await chainstackPlugin.getIdentity(identityId);

        // Verify the result
        expect(typeof identity.id).toBe("string");
        expect(typeof identity.name).toBe("string");
        expect(typeof identity.email).toBe("string");
        expect(typeof identity.created_at).toBe("string");
        expect(typeof identity.updated_at).toBe("string");
      }
    });
  });
});
