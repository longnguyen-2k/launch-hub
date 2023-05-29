import { Card, Col, Row, Switch, Tag } from "antd";
import styles from "../../styles/talent.module.css";
import CardTalent from "./CardTalent";
import { useState } from "react";
export default function CardTalentList() {
  const item = {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing 1",
    imageUrl:
      "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
  };
  return (
    <div>

      <Col key={"index"} xs={24} sm={12}>
        <CardTalent />
      </Col>
    </div>
  );
}
