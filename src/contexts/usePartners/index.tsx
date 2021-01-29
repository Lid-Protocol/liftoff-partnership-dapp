import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Partner, PartnershipStatus } from 'utils/types';

const query = gql`
  query GetPartners($tokenSaleId: String!) {
    partners {
      id
      partnerId
      controller
      ipfsHash
      partnershipRequests(where: { tokenSale: $tokenSaleId }) {
        id
        partnerId
        tokenSaleId
        feeBP
        isApproved
      }
    }
  }
`;

type GraphResponse = {
  partners: Partner[];
};

type Partners = {
  request: Partner[];
  accepted: Partner[];
};

export const usePartners = (tokenSaleId: string) => {
  const [partners, setPartners] = useState<Partners>({
    request: [],
    accepted: []
  });

  const { data, error, loading, refetch } = useQuery<GraphResponse>(query, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    variables: {
      tokenSaleId
    }
  });

  useEffect(() => {
    if (!data || data.partners.length === 0) {
      setPartners({
        request: [],
        accepted: []
      });
      return;
    }
    const newPartners = data.partners.reduce(
      (arry, partner) => {
        const status: PartnershipStatus =
          partner.partnershipRequests.length === 1 &&
          partner.partnershipRequests[0].isApproved
            ? 'accepted'
            : 'request';
        return {
          ...arry,
          [status]: [...arry[status], partner]
        };
      },
      {
        request: [] as Partner[],
        accepted: [] as Partner[]
      }
    );

    setPartners(newPartners);
  }, [data]);

  return { partners, error, loading, refetch };
};
