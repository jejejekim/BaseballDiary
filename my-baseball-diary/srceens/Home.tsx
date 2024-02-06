import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Test = styled.View`
    flex:1;
    justify-content: "center";
    align-items: "center";
`;

const Home = () =>(
    <Test>
        <Text>Home</Text>
    </Test>
);

export default Home;