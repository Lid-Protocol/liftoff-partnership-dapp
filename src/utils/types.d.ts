export interface IToken {
  address: string;
  decimals: number;
  symbol: string;
  image?: string;
  volume?: string;
}

export type Maybe<T> = T | null;

export interface INetwork {
  label: string;
  url: string;
  graphHttpUri: string;
  graphWsUri: string;
  contracts: {
    xEth: string;
    xLocker: string;
    liftoffEngine: string;
    liftoffInsurance: string;
    liftoffRegistration: string;
  };
  settings: {
    ethXLockBP: number;
    tokenUserBP: number;
    baseFeeBP: number;
    ethBuyBP: number;
    projectDevBP: number;
    mainFeeBP: number;
    lidPoolBP: number;
    softCapTimer: number;
    insurancePeriod: number;
    minTimeToLaunch: number;
    maxTimeToLaunch: number;
  };
}

export type NetworkId = 1 | 3;

export type KnownContracts = keyof INetwork['contracts'];

export type TokenSale = {
  id: string;
  tokenId: string;
  ipfsHash: string;
  startTime: number;
  endTime: number;
  softCap: string;
  hardCap: string;
  totalSupply: string;
  totalIgnited: string;
  rewardSupply: string;
  dev: string;
  deployed: string;
  pair: string;
  isSparked: boolean;
  name: string;
  symbol: string;
};

export type Ignitor = {
  id: string;
  address: string;
  ignited: string;
  hasClaimed: boolean;
  hasRefunded: boolean;
};

export type PartnershipStatus = 'request' | 'accepted';

export type PartnerInfo = {
  ID?: string;
  NAME: string;
  CONTROLLER: string;
  CONTACT: string;
  INFO: string;
  LOGOHASH: string;
  SOFTCAP_MIN_ETHER: string;
  FEE_BP: string;
  DESCRIPTION: string;
};

export type ProjectStatus = 'inactive' | 'active' | 'completed' | 'blacklisted';

export type ProjectConfig = {
  projectName: string;
  tokenTicker: string;
  projectDescription: string;
  websiteLink: string;
  whitepaperLink: string;
  dappLink: string;
  discord: string;
  telegram: string;
  twitter: string;
  facebook: string;
  date: string;
  time: string;
  timezone?: string;
  softCap: string;
  hardCap: string;
  totalSupply: string;
  logo: string;
};

export type TokenInsurance = {
  id: string;
  tokenId: string;
  isRegistered: boolean;
  isInitialized: boolean;
  startTime?: number;
  totalIgnited?: string;
  tokensPerEthWad?: string;
  baseXEth?: string;
  baseTokenLidPool?: string;
  redeemedXEth?: string;
  claimedXEth?: string;
  claimedTokenLidPool?: string;
  dev?: string;
  deployed?: string;
  pair?: string;
  isUnwound?: boolean;
  hasBaseFeeClaimed?: boolean;
};

export type Partner = {
  id: string;
  partnerId: string;
  controller: string;
  ipfsHash: string;
  partnershipRequests: [Partnership];
};

export type TokenSalePartnership = {
  id: string;
  tokenSaleId: string;
  totalPartnerships: string;
  totalBPForPartners: string;
  partnershipRequests: [Partnership];
};

export type Partnership = {
  id: string;
  partnerId: string;
  tokenSaleId: string;
  feeBP: string;
  isApproved: boolean;
  tokenSalePartnership?: TokenSalePartnership;
  tokenSale: TokenSale;
};

declare global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc;
  }
}
