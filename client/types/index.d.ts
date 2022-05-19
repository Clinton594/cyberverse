declare global {
  interface Array<T> {
    asyncForEach(callback: CallableFunction);
    chunk(a: number);
  }
  // interface Window{
  //   ethereum?: any
  // }
}

interface Itoast {
  title: string | unknown;
  message: string | unknown;
  status: boolean | unknown;
  loading: boolean;
  show: boolean;
}

interface Iresponse {
  status: boolean;
  data: any | undefined;
  toast: Itoast;
}

// Initial state for Presale
interface IinitialState {
  wallet: string;
  loading: boolean;
  balance: number;
  isConnected: boolean;
  walletIsVisible: boolean;
  chainId: number;
  isAdmin: boolean;
}

// Admin contract
interface IContract {
  status: boolean;
  rate: number;
  totalContributors: number;
  tokenSold: number;
  contractBalance: number;
  enddate: string;
  contributorsList: object[];
}

interface Icard {
  value: number | string;
  name: string;
  key: string;
  icon: string;
  variant: string;
}

interface IStore {
  presale: any;
  status: any;
  contract: any;
}

export type { Iresponse, Itoast, IinitialState, IContract, Icard, IStore };
