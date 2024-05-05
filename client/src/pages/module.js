import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';
import QueryResult from '../components/query-result';
import ModuleDetail from '../components/module-detail';

const GET_MODULE = gql`
  query GetModule($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId){
      title
      videoUrl
      content
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const Module = () => {
  const { trackId='', moduleId=''} = useParams();
  const { loading, error, data }= useQuery(GET_MODULE, {
    variables: {
      trackId, moduleId
    }
  });

    return (<Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>);
}

export default Module;