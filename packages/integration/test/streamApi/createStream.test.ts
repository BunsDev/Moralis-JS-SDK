import { MoralisStreams } from '@moralisweb3/streams';
import { cleanStreamsApi, setupStreamApi } from './setup';

describe('Create stream', () => {
  let StreamApi: MoralisStreams;

  beforeAll(() => {
    StreamApi = setupStreamApi();
  });

  afterAll(() => {
    cleanStreamsApi();
  });

  it('should create a stream ', async () => {
    const result = await StreamApi.add({
      chains: ['0x3'],
      tag: 'test',
      description: 'test-1',
      webhookUrl: 'https://webhook.site/4f1b1b1b-1b1b-4f1b-1b1b-1b1b1b1b1b1b',
      networkType: 'evm',
    });

    expect(result).toBeDefined();
    expect(result.result.description).toEqual('test-1');
  });

  it('should default to evm networkType', async () => {
    const result = await StreamApi.add({
      chains: ['0x3'],
      tag: 'test',
      description: 'test-1',
      webhookUrl: 'https://webhook.site/4f1b1b1b-1b1b-4f1b-1b1b-1b1b1b1b1b1b',
    });

    expect(result).toBeDefined();
    expect(result.result.description).toEqual('test-1');
  });

  it('should create a stream with advanced options', async () => {
    const result = await StreamApi.add({
      chains: ['0x3'],
      tag: 'test',
      description: 'test-2',
      webhookUrl: 'https://webhook.site/4f1b1b1b-1b1b-4f1b-1b1b-1b1b1b1b1b1b',
      networkType: 'evm',
      advancedOptions: [
        {
          topic0: 'SomeEvent(address,uint256)',
          filter: { eq: ['myCoolTopic', '0x0000000000000000000000000000000000000000'] },
          includeNativeTxs: true,
        },
      ],
      abi: [],
      allAddresses: true,
      includeContractLogs: true,
      includeInternalTxs: true,
      includeNativeTxs: true,
      topic0: ['SomeEvent(address,uint256)'],
    });

    expect(result).toBeDefined();
    expect(result.result.description).toEqual('test-2');
  });

  it('should not create stream', async () => {
    const failedResult = await StreamApi.add({
      chains: ['0x3'],
      tag: 'test',
      description: 'test',
      webhookUrl: 'https://webhook.site/4f1b1b1b-1b1b-4f1b-1b1b-1b1b1b1b1b1b',
      networkType: 'evm',
    })
      .then()
      .catch((err: any) => {
        return err;
      });

    expect(failedResult).toBeDefined();
    expect(
      StreamApi.add({
        chains: ['invalid_chain'],
        tag: 'test',
        description: 'test',
        webhookUrl: 'https://webhook.site/4f1b1b1b-1b1b-4f1b-1b1b-1b1b1b1b1b1b',
        networkType: 'evm',
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"[C0005] Invalid provided chain, value must be a positive number, or a hex-string starting with '0x'"`,
    );
  });
});
