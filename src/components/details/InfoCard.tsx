import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";
import IInfoCardProps from "./IInfoCardProps";

export default function InfoCard(props: IInfoCardProps) {
  return (
    <Card className="infocard">
      <CardTitle className="infocardtitle">{props.title}</CardTitle>
      <CardText className="infocardtext">{props.description}</CardText>
    </Card>
  );
}
