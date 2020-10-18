import React from "react";
import HistoryList from "./history/HistoryList";
import PokemonsList from "./list/PokemonsList";
import { Col, Container, Row } from "reactstrap";

export default function HomeContainer() {
  return (
    <Container>
      <Row>
        <Col xs={9}>
          <PokemonsList />
        </Col>
        <Col xs={3}>
          <HistoryList />
        </Col>
      </Row>
    </Container>
  );
}
