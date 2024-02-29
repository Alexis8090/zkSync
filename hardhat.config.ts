import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";


// upgradable plugin
import '@matterlabs/hardhat-zksync-upgradable';

import {HardhatUserConfig} from 'hardhat/config';

const config: HardhatUserConfig = {

    zksolc: {
        version: "1.3.16", // should be early version
        settings: {
            // optimizer: {
            //     enabled: true, // optional. True by default
            //     mode: '3' // optional. 3 by default, z to optimize bytecode size
            // }
        }
    },

    defaultNetwork: 'zkSyncMainnet',
    networks: {
        zkSyncMainnet: {
            url: "https://mainnet.era.zksync.io",
            ethNetwork: "mainnet",
            zksync: true,
            verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'  // Verification endpoint
        },
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: "goerli", // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
            zksync: true,
            verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'  // Verification endpoint
        },
    },
    etherscan: {
        apiKey: {
            goerli: process.env.GOERLI_API_KEY!,
            ftmTestnet: process.env.FANTOM_API_KEY!,
            bsc: process.env.BSC_API_KEY!,
            linea: process.env.LINEA_API_KEY!,
            mainnet: "VR6KQV3XDKVHRBG13K18SMISBMDN7KH6NM",
            zkSyncMainnet: "A466JX86H3Q8A6VGESTW24VW95S34ZDSX3"
        }
    },
    solidity: {
        // 0.8.18 ~ 0.8.22
        version: '0.8.18',
        // Or below
        settings: {}
        // settings: {
        //     optimizer: {
        //         enabled: true,
        //         runs: 200
        //     },
        //     evmVersion: "london"
        // }
    }
};

export default config;