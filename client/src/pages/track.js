import React from "react";
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";

export default Track = () => {
    const { trackId = '' } = useParams();
    return <Layout></Layout>;
}