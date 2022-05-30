/* eslint-disable no-console */
import Moralis from 'moralis';

export const EvmApi = () => {
  return (
    <div>
      <h2>EVM Api</h2>

      <button
        onClick={() => {
          Moralis.EvmApi.native
            .getBlock({
              block_number_or_hash: '1000000',
            })
            .then(console.log);
        }}
      >
        getBlock
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.account
            .getNativeBalance({
              address: '0x7dE3085b3190B3a787822Ee16F23be010f5F8686',
            })
            .then(console.log);
        }}
      >
        getNativeBalance
      </button>

      <button
        onClick={async () => {
          console.log(
            await Moralis.EvmApi.resolve.resolveDomain({
              domain: 'brad.crypto',
            }),
            '<== resolved',
          );
        }}
      >
        resolveDomain
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.resolve
            .resolveAddress({
              address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
            })
            .then(console.log);
        }}
      >
        resolveAddress
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.defi
            .getPairReserves({
              pair_address: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            })
            .then(console.log);
        }}
      >
        getPairReserves
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.native
            .getLogsByAddress({
              address: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            })
            .then(console.log);
        }}
      >
        getLogsByAddress
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.info.web3ApiVersion({}).then(console.log);
        }}
      >
        web3ApiVersion
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.token
            .getWalletTokenIdTransfers({
              address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
              tokenId: '18',
            })
            .then(console.log);
        }}
      >
        getWalletTokenIdTransfers
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.token
            .getNFTLowestPrice({
              address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
              days: 3,
            })
            .then(console.log);
        }}
      >
        getNFTLowestPrice
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.token
            .getNFTTrades({
              address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
            })
            .then(console.log);
        }}
      >
        getNFTTrades
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.info.endpointWeights({}).then(console.log);
        }}
      >
        endpointWeights
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.token
            .getTokenAddressTransfers({
              address: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            })
            .then(console.log);
        }}
      >
        getTokenAddressTransfers
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.account
            .getTransactions({
              address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
            })
            .then(console.log);
        }}
      >
        getTransactions
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.account
            .getTokenTransfers({
              address: '0x3d6c0e79a1239df0039ec16Cc80f7A343b6C530e',
            })
            .then(console.log);
        }}
      >
        getTokenTransfers
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.token
            .getNFTMetadata({
              address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
            })
            .then(console.log);
        }}
      >
        getNFTMetadata
      </button>

      <button
        onClick={() => {
          Moralis.EvmApi.native
            .getBlock({
              chain: "bsc",
              block_number_or_hash: "2"
            })
            .then(console.log);
        }}
      >
        getBlock
      </button>
      
    </div>
  );
};