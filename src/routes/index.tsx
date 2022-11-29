import React from "react";
import { RoutesGR } from "../modules/GR/routes";
import { RoutesHolerite } from "../modules/Holerite/routes";

const Routes: React.FC = () => {
  return (
    <>
      <RoutesGR />
      <RoutesHolerite />
    </>
  );
};

export default Routes;
