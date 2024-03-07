export type Creator = {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  organization: {
    id: string;
    name: string;
  };
};

export type Organization = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  networks: number;
  creator: Creator;
  created_at: string;
};
export type ProjectsResponse = {
  count: number;
  next: null; // TODO: Check the case when next is not null
  previous: null; // TODO: Check the case when previous is not null
  results: Project[];
};

export type RpcNode = {
  configuration: {
    archive: boolean;
    client: string;
  };
  created_at: string;
  creator: Creator;
  details: {
    api_namespaces: string[];
    auth_key: string;
    auth_password: string;
    auth_username: string;
    beacon_endpoint: string;
    https_endpoint: string;
    mode: string;
    version: string;
    wss_endpoint: string;
  };
  id: string;
  name: string;
  network: string;
  organization: string;
  provider: string;
  region: string;
  role: string;
  status: string;
  type: string;
};
export type RpcNodesResponse = {
  count: number;
  next: null; // TODO: Check the case when next is not null
  previous: null; // TODO: Check the case when previous is not null
  results: RpcNode[];
};

export type Network = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};
export type NetworksResponse = {
  count: number;
  next: null; // TODO: Check the case when next is not null
  previous: null; // TODO: Check the case when previous is not null

  results: Array<{
    configuration: {
      network: string;
    };
    created_at: string;
    creator: Creator;
    details: {};
    id: string;
    name: string;
    nodes: RpcNode[];
    project: string;
    protocol: string;
    status: string;
  }>;
};

export type Identity = {
  id: string;
  name: string;
  protocol: string;
  createdAt: string;
  updatedAt: string;
};

export type IdentitiesResponse = {
  count: number;
  next: null; // TODO: Check the case when next is not null
  previous: null; // TODO: Check the case when previous is not null
  results: Identity[];
};
