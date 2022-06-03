import React from "react";
import styled from "styled-components";
import ReactPlanetary from "./ReactPlanetary";
import BryBryCli from "./BryBryCli";
import BackButton from "../BackButton";
import ProjectRight from "../ProjectRight";
import ProjectLeft from "../ProjectLeft";
export default function OpenHome() {

  const blue = "#1e90ff";
  const lightblue = "#61dbfb";
  const OpenContainer = styled.div``;
  return (
    <OpenContainer>
      <ProjectLeft 
      isNavLink={false}
      title="Kubernetes"
      importName="go mod init kubernetes"
      description="Currently read through the kubernetes open source code particularly the eviction api and stats api parts of it so we can create effective kubernetes operators at AKS :)"
      technology="GO | CADVISOR | UNIX"
      titlecolor={blue}
      infoColor={blue}
      imageLink="https://i.imgur.com/LOoZuJK.jpg"
      projectLink="https://github.com/kubernetes/kubernetes"
      />
      <ProjectRight
      isNavLink={false}
      title="Kubernetes Autoscaler"
      importName="go mod init k8s.io/autoscaler"
      description="Contributor to the Kubernetes Autoscaler Component soon :O"
      technology="GO | KUBERNETES"
      imageLink="https://i.imgur.com/m6x4Ypo.png"
      titlecolor={lightblue}
      infoColor={lightblue}
      projectLink="https://github.com/kubernetes/autoscaler"
      />
      <ReactPlanetary />
      <BryBryCli />
      <BackButton />
    </OpenContainer>
  );
}
