import {
  getContractInstance,
  toggleContractStatus,
  getPresaleStatus,
  setContractRate,
  tokenToWei,
  getRate,
  setEnddate,
  toTimestamp,
  getEndDate,
} from "./connectors";
import projectConfig from "../constants/project.config";

export const defaultState = { status: false, rate: false, withdraw: false, enddate: false };

const errocode = {
  loading: false,
  show: true,
  status: false,
};

export const toggleStatus = async (web3: any, callback: Function) => {
  const { library, chainId, account } = web3;
  try {
    const contractInstance = await getContractInstance(library, chainId, account);
    const response = await toggleContractStatus(contractInstance, account);
    response.wait().then(async () => {
      const status = await getPresaleStatus(contractInstance);
      callback({
        status,
        toast: {
          message: `Successfuly turned ${projectConfig.status[!status]}`,
          loading: false,
          title: "Presale Status",
          show: true,
          status,
        },
      });
    });
  } catch ({ message, code }) {
    callback({
      status: false,
      toast: { ...errocode, message, title: code },
    });
  }
};

export const submitTokenRate = async (web3: any, rate: string, callback: Function) => {
  const weiValue = tokenToWei(rate);
  const { library, chainId, account } = web3;

  try {
    const contractInstance = await getContractInstance(library, chainId, account);
    const response = await setContractRate(contractInstance, account, weiValue);
    response.wait().then(async () => {
      const data = await getRate(contractInstance);
      callback({
        status: true,
        data,
        toast: {
          message: `Presale rate updated`,
          loading: false,
          title: "Presale Rate",
          show: true,
          status: true,
        },
      });
    });
  } catch ({ message, code }) {
    callback({
      status: false,
      toast: { ...errocode, message, title: code },
    });
  }
};

export const submitEndDate = async (web3: any, date: string, callback: Function) => {
  const timestamp = toTimestamp(date);

  const { library, chainId, account } = web3;

  try {
    const contractInstance = await getContractInstance(library, chainId, account);
    const response = await setEnddate(contractInstance, account, timestamp);
    response.wait().then(async () => {
      const data = await getEndDate(contractInstance);
      callback({
        status: true,
        data,
        toast: {
          message: `Presale rate updated`,
          loading: false,
          title: "Presale Rate",
          show: true,
          status: true,
        },
      });
    });
  } catch ({ message, code }) {
    callback({
      status: false,
      toast: { ...errocode, message, title: code },
    });
  }
};
