import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import IPokemonRowProps from "./list/IPokemonRowProps";

export default function PokemonRow(props: IPokemonRowProps) {
  return (
    <Row className="pockemonrow">
      <Col size={12} sizes="sm">
        <Link
          className="pockemonlink"
          onClick={props.OnClick}
          to={"/details/" + props.Pokemon.Id}
        >
          {props.Pokemon.Name}
        </Link>
      </Col>
    </Row>
  );
}
