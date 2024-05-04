import React from "react";
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

const Track = () => {
    const { trackId = '' } = useParams();
    return <Layout></Layout>;
}

export default Track;