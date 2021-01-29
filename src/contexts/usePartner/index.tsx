import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Partner } from 'utils/types';

const query = gql`
  query GetPartner($controller: String!) {
    partners(where: { controller: $controller }) {
      id
      partnerId
      controller
      ipfsHash
      partnershipRequests {
        id
        partnerId
        tokenSaleId
        feeBP
        isApproved
        tokenSale {
          id
          tokenId
          ipfsHash
          startTime
          endTime
          softCap
          hardCap
          totalSupply
          totalIgnited
          rewardSupply
          dev
          deployed
          pair
          isSparked
          name
          symbol
        }
      }
    }
  }
`;

type GraphResponse = {
  partners: Partner[];
};

export const usePartner = (controller: string) => {
  const [partner, setPartner] = useState<Maybe<Partner>>(null);

  const { data, error, loading, refetch } = useQuery<GraphResponse>(query, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    variables: {
      controller
    }
  });

  useEffect(() => {
    if (!data || !data.partners.length) {
      setPartner(null);
      return;
    }

    setPartner(data.partners[0]);
  }, [data]);

  return { partner, error, loading, refetch };
};
