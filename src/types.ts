export type Creator = {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  organization: Organization;
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
  members: number;
  networks: number;
  creator: Creator;
  created_at: string;
};

export type ProjectsResponse = {
  count: number;
  next: string; // TODO: Check the case when next is not null
  previous: string; // TODO: Check the case when previous is not null
  results: Project[];
};

export type RpcNode = {
  configuration: NodeConfiguration;
  created_at: string;
  creator: Creator;
  details: NodeDetails;
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

export type NodeConfiguration = {
  archive: boolean;
  client: string;
};

export type NodeDetails = {
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

export type RpcNodesResponse = {
  count: number;
  next: string; // TODO: Check the case when next is not null
  previous: string; // TODO: Check the case when previous is not null
  results: RpcNode[];
};

export type Network = {
  configuration: {};
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;

  project?: string;
  protocol?: string;
  details?: {};
  status?: string;
  creator?: Creator;
  nodes?: Node[];
};

export type NetworksResponse = {
  count: number;
  next: string; // TODO: Check the case when next is not null
  previous: string; // TODO: Check the case when previous is not null
  results: Networks[];
};

export type Networks = {
  created_at: string;
  creator: Creator;
  details: {};
  id: string;
  name: string;
  nodes: RpcNode[];
  project: string;
  protocol: string;
  status: string;
  configuration: {
    network: string;
  };
};

export type Identity = {
  email: string;
  created_at: string;
  updated_at: string;
  id: string;
  name: string;
  protocol: string;
  createdAt: string;
  updatedAt: string;
};

export type IdentitiesResponse = {
  count: number;
  next: string; // TODO: Check the case when next is not null
  previous: string; // TODO: Check the case when previous is not null
  results: Identity[];
};
