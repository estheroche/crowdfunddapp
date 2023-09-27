import { useEffect, useState } from "react";
import { useConnection } from "../context/connection";
import { Contract, ethers } from "ethers";
import { crowdFundAddress } from "../utils";
import { funAbi } from "../myAbi";
const useCampaign = () => {
  const [crowdAllcampaign, setcrowdCampaign] = useState([]);
  const [campaignCount, setCount] = useState();
  const { provider, isActive } = useConnection();

  const crowdContract = new Contract(crowdFundAddress, funAbi, provider);

  const getCampaignCount = async () => {
    try {
      const getId = await crowdContract.id();
      return ethers.formatUnits(getId, 0);
    } catch (error) {
      console.log(error);
    }
  };
  const InfoCampaign = async (count) => {
    try {
      const crowdMe = await crowdContract.crowd();
      return crowdMe;
    } catch (error) {
      console.log(error);
    }
  };

  const getAll = () => {
    Promise.all([getCampaignCount()]).then((values) => {
      InfoCampaign(values[0]);
    });

    Promise.all([InfoCampaign]).then((values) => {
      console.log(values);
    });
  };

  const bringBackMyPromise = async () => {};
  useEffect(() => {
    if (!isActive) {
      return;
    }
  }, [provider, isActive]);
  getAll();
};

export default useCampaign;
