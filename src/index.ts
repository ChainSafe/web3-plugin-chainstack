import { Web3PluginBase } from "web3";

declare type ChainstackAPI = { 
  debug_traceBlockByHash: (blockHash: string, tracer: { tracer: string }) => Promise<{result: {
    "result": Map<string, number>
  }[]}>;
}

export class ChainstackPlugin extends Web3PluginBase<ChainstackAPI> {
  public pluginNamespace = "chainstack";

  public async traceBlockByHash(blockHash: string) {

    // Specify the type of tracer: 4byteTracer, callTracer, or prestateTracer
    const tracer = { tracer: '4byteTracer' };
    const res = await this.requestManager.send({
        // plugin has access to web3.js internal features like request manager
        method: 'debug_traceBlockByHash',
        params: [blockHash, tracer],
    });
    return res;
  }
}

// Module Augmentation
declare module "web3" {
  interface Web3Context {
    chainstack: ChainstackPlugin;
  }
}
