import { createConfig, http } from 'wagmi'
import { mainnet, sepolia, baseSepolia } from 'wagmi/chains'
import { createClient, http as viemhttp } from 'viem'
import { createStorage } from 'wagmi'
import { metaMask, coinbaseWallet, injected } from 'wagmi/connectors'


const storage = createStorage({ storage: localStorage })

export const config = createConfig({
  chains: [mainnet, sepolia, baseSepolia],
  connectors: [metaMask(), coinbaseWallet()],
  storage: createStorage({ storage: window.localStorage }), 
  transports: {
    [mainnet.id]: http('https://mainnet.example.com'),
    [sepolia.id]: http('https://sepolia.example.com'),
    [baseSepolia.id]: http('https://base-sepolia.blockpi.network/v1/rpc/public'),
  },

})

const useWagmi = () => {

  const contract = 
    return (
        
    );
}

export default useWagmi;