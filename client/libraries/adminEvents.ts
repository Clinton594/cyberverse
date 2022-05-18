import { getContractInstance, toggleContractStatus, getPresaleStatus } from "./connectors";
import projectConfig from "../constants/project.config";

export const defaultState = { status: false, rate: false };

export const toggleStatus = async (web3, callback: Function) => {
  const { library, chainId, account } = web3;
  try {
    const contractInstance = await getContractInstance(library, chainId, account);
    const response = await toggleContractStatus(contractInstance, account);
    response.wait().then(async () => {
      const status = await getPresaleStatus(contractInstance);
      callback({
        status,
        data: {
          message: `Successfuly turned ${projectConfig.status[!status]}`,
          loading: false,
          title: "Presale Status",
          show: true,
          status,
        },
      });
    });
  } catch (error) {
    callback({
      status: false,
      data: {
        message: error.message,
        loading: false,
        title: error.code,
        show: true,
        status: false,
      },
    });
  }
};
