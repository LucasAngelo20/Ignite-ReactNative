import React from "react";
import { View, Text } from "react-native";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo />
          <User>
            <UserGreeting>Olá, </UserGreeting>
            <UserName>Lucas</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  );
}
