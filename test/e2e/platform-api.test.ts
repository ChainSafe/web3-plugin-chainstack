import { ChainstackPlugin } from "../../src/chainstack-plugin";

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
      expect(org).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
      });
    });
  });

  let projectId = "";
  describe("getProjects", () => {
    it("should return the projects details", async () => {
      // Call the method
      const projects = await chainstackPlugin.getProjects();

      projectId = projects.results[0].id;
      // Verify the result
      expect(projects).toMatchObject({
        count: expect.any(Number),
        results: expect.arrayContaining([
          {
            id: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            networks: expect.any(Number),
            type: expect.any(String),
            created_at: expect.any(String),
            creator: {
              email: expect.any(String),
              first_name: expect.any(String),
              id: expect.any(String),
              last_name: expect.any(String),
              organization: {
                id: expect.any(String),
                name: expect.any(String),
              },
            },
          },
        ]),
      });
    });
    describe("getProject", () => {
      it("should return the project details for a given projectId", async () => {
        // Call the method
        const project = await chainstackPlugin.getProject(projectId);

        // Verify the result
        expect(project).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          description: expect.any(String),
          networks: expect.any(Number),
          type: expect.any(String),
          created_at: expect.any(String),
          creator: {
            email: expect.any(String),
            first_name: expect.any(String),
            id: expect.any(String),
            last_name: expect.any(String),
            organization: { id: expect.any(String), name: expect.any(String) },
          },
        });
      });
    });
  });

  describe("getNetworks", () => {
    let networkId = "";
    it("should return the network details", async () => {
      // Call the method
      const networks = await chainstackPlugin.getNetworks();

      networkId = networks.results[0].id;
      // Verify the result to mach a result similar to expectedNetworks
      expect(networks).toMatchObject({
        count: expect.any(Number),
        results: expect.arrayContaining([
          {
            configuration: { network: expect.any(String) },
            created_at: expect.any(String),
            creator: {
              email: expect.any(String),
              first_name: expect.any(String),
              id: expect.any(String),
              last_name: expect.any(String),
              organization: {
                id: expect.any(String),
                name: expect.any(String),
              },
            },
            details: {},
            id: expect.any(String),
            name: expect.any(String),
            nodes: [
              {
                configuration: {
                  archive: expect.any(Boolean),
                  client: expect.any(String),
                },
                created_at: expect.any(String),
                creator: {
                  email: expect.any(String),
                  first_name: expect.any(String),
                  id: expect.any(String),
                  last_name: expect.any(String),
                  organization: {
                    id: expect.any(String),
                    name: expect.any(String),
                  },
                },
                details: {
                  api_namespaces: expect.arrayContaining([expect.any(String)]),
                  auth_key: expect.any(String),
                  auth_password: expect.any(String),
                  auth_username: expect.any(String),
                  beacon_endpoint: expect.any(String),
                  https_endpoint: expect.any(String),
                  mode: expect.any(String),
                  version: expect.any(String),
                  wss_endpoint: expect.any(String),
                },
                id: expect.any(String),
                name: expect.any(String),
                network: expect.any(String),
                organization: expect.any(String),
                provider: expect.any(String),
                region: expect.any(String),
                role: expect.any(String),
                status: expect.any(String),
                type: expect.any(String),
              },
            ],
            project: expect.any(String),
            protocol: expect.any(String),
            status: expect.any(String),
          },
        ]),
      });
    });

    describe("getNetwork", () => {
      it("should return the network details for a given networkId", async () => {
        // Call the method
        const network = await chainstackPlugin.getNetwork(networkId);

        // Verify the result
        expect(network).toMatchObject({
          configuration: { network: expect.any(String) },
          created_at: expect.any(String),
          creator: {
            email: expect.any(String),
            first_name: expect.any(String),
            id: expect.any(String),
            last_name: expect.any(String),
            organization: { id: expect.any(String), name: expect.any(String) },
          },
          details: {},
          id: expect.any(String),
          name: expect.any(String),
          nodes: [
            {
              configuration: {
                archive: expect.any(Boolean),
                client: expect.any(String),
              },
              created_at: expect.any(String),
              creator: {
                email: expect.any(String),
                first_name: expect.any(String),
                id: expect.any(String),
                last_name: expect.any(String),
                organization: {
                  id: expect.any(String),
                  name: expect.any(String),
                },
              },
              details: {
                api_namespaces: expect.arrayContaining([expect.any(String)]),
                auth_key: expect.any(String),
                auth_password: expect.any(String),
                auth_username: expect.any(String),
                beacon_endpoint: expect.any(String),
                https_endpoint: expect.any(String),
                mode: expect.any(String),
                version: expect.any(String),
                wss_endpoint: expect.any(String),
              },
              id: expect.any(String),
              name: expect.any(String),
              network: expect.any(String),
              organization: expect.any(String),
              provider: expect.any(String),
              region: expect.any(String),
              role: expect.any(String),
              status: expect.any(String),
              type: expect.any(String),
            },
          ],
          project: expect.any(String),
          protocol: expect.any(String),
          status: expect.any(String),
        });
      });
    });
  });

  describe("getNodes", () => {
    let nodeId = "";
    it("should return the node details", async () => {
      // Call the method
      const nodes = await chainstackPlugin.getNodes();
      nodeId = nodes.results[0].id;

      // Verify the result
      expect(nodes).toMatchObject(
        expect.objectContaining({
          count: expect.any(Number),
          results: expect.arrayContaining([
            {
              configuration: expect.objectContaining({
                archive: expect.any(Boolean),
                client: expect.any(String),
              }),
              created_at: expect.any(String),
              creator: expect.objectContaining({
                email: expect.any(String),
                first_name: expect.any(String),
                id: expect.any(String),
                last_name: expect.any(String),
                organization: expect.objectContaining({
                  id: expect.any(String),
                  name: expect.any(String),
                }),
              }),
              details: expect.objectContaining({
                api_namespaces: expect.arrayContaining([expect.any(String)]),
                auth_key: expect.any(String),
                auth_password: expect.any(String),
                auth_username: expect.any(String),
                beacon_endpoint: expect.any(String),
                https_endpoint: expect.any(String),
                mode: expect.any(String),
                version: expect.any(String),
                wss_endpoint: expect.any(String),
              }),
              id: expect.any(String),
              name: expect.any(String),
              network: expect.any(String),
              organization: expect.any(String),
              provider: expect.any(String),
              region: expect.any(String),
              role: expect.any(String),
              status: expect.any(String),
              type: expect.any(String),
            },
          ]),
        })
      );
    });
    describe("getNode", () => {
      it("should return the node details for a given nodeId", async () => {
        // Call the method
        const node = await chainstackPlugin.getNode(nodeId);

        // Verify the result
        expect(node).toMatchObject({
          configuration: expect.objectContaining({
            archive: expect.any(Boolean),
            client: expect.any(String),
          }),
          created_at: expect.any(String),
          creator: expect.objectContaining({
            email: expect.any(String),
            first_name: expect.any(String),
            id: expect.any(String),
            last_name: expect.any(String),
            organization: expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
            }),
          }),
          details: expect.objectContaining({
            api_namespaces: expect.arrayContaining([expect.any(String)]),
            auth_key: expect.any(String),
            auth_password: expect.any(String),
            auth_username: expect.any(String),
            beacon_endpoint: expect.any(String),
            https_endpoint: expect.any(String),
            mode: expect.any(String),
            version: expect.any(String),
            wss_endpoint: expect.any(String),
          }),
          id: expect.any(String),
          name: expect.any(String),
          network: expect.any(String),
          organization: expect.any(String),
          provider: expect.any(String),
          region: expect.any(String),
          role: expect.any(String),
          status: expect.any(String),
          type: expect.any(String),
        });
      });
    });
  });

  describe("getIdentities", () => {
    let identityId = "";
    it("should return the identity details", async () => {
      // Call the method
      const identities = await chainstackPlugin.getIdentities();

      if (identities.results && identities.results.length > 0) {
        identityId = identities.results[0].id;
      }
      // Verify the result
      expect(identities).toMatchObject({
        count: expect.any(Number),
        // TODO: Consider creating identities and testing with them.
        // I faced issues when creating identities at https://console.chainstack.com/vault/identities
        results:
          [] ||
          expect.arrayContaining([
            {
              id: expect.any(String),
              name: expect.any(String),
              email: expect.any(String),
              created_at: expect.any(String),
              updated_at: expect.any(String),
            },
          ]),
      });
    });

    // TODO: Consider creating identities and testing with them.
    // I faced issues when creating identities at https://console.chainstack.com/vault/identities
    describe.skip("getIdentity", () => {
      it("should return the identity details for a given identityId", async () => {
        // Call the method
        const identity = await chainstackPlugin.getIdentity(identityId);

        // Verify the result
        expect(identity).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
        });
      });
    });
  });
});
