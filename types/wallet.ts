import { Address } from "viem";

export type WalletProvider = 
  | "metamask"
  | "walletconnect"
  | "coinbase"
  | "trustwallet"
  | "rainbow"
  | "injected"
  | "unknown";

export type ChainId = number; // e.g., 1 (Ethereum Mainnet), 137 (Polygon)

export interface WalletConnection {
  address: Address; // Wallet address
  provider: WalletProvider;
  chainId: ChainId;
  isConnected: boolean;
  balance?: bigint; // Native token balance (in wei/smallest unit)
  balanceFormatted?: string; // Human-readable balance
}

export interface WalletState {
  isConnecting: boolean;
  isConnected: boolean;
  connection: WalletConnection | null;
  error: string | null;
}

export interface WalletTransaction {
  hash: string; // Transaction hash
  from: Address;
  to: Address;
  value: bigint; // Amount in wei
  status: "pending" | "confirmed" | "failed";
  blockNumber?: number;
  confirmations?: number;
  gasUsed?: bigint;
  gasPrice?: bigint;
}

export interface NetworkInfo {
  chainId: ChainId;
  name: string; // e.g., "Ethereum Mainnet"
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrl?: string;
  blockExplorerUrl?: string;
  isTestnet?: boolean;
}

export interface SupportedChain {
  id: ChainId;
  name: string;
  currency: string;
  symbol: string;
  decimals: number;
  explorerUrl: string;
  rpcUrl: string;
}

export interface WalletConnectOptions {
  autoConnect?: boolean;
  chains?: SupportedChain[];
  providers?: WalletProvider[];
}
