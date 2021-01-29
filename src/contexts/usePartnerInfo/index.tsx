import { useEffect, useState } from 'react';
import { PartnerInfo, Maybe } from 'utils/types';

export const usePartnerInfo = (ipfsHashRaw: string | undefined) => {
  const [partnerInfo, setPartnerInfo] = useState<Maybe<PartnerInfo>>(null);

  useEffect(() => {
    if (!ipfsHashRaw) {
      setPartnerInfo(null);
      return;
    }

    const fetchConfig = async () => {
      const ipfsHash = ipfsHashRaw.replace(/[^A-Za-z0-9]/g, '');
      const response = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
      const data: PartnerInfo = await response.json();
      console.log('response', data);

      setPartnerInfo(data);
    };

    fetchConfig();
  }, [ipfsHashRaw]);

  return { partnerInfo };
};
