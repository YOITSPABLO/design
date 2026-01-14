
export enum AppView {
  LANDING = 'LANDING',
  CONSOLE = 'CONSOLE',
  SUMMARY = 'SUMMARY'
}

export interface TokenItem {
  id: string;
  name: string;
  type: 'TOKEN' | 'NFT' | 'CNFT';
  iconUrl: string;
  selected: boolean;
}

export interface TransactionLog {
  id: string;
  timestamp: string;
  message: string;
  amount: number;
}
