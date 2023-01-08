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
      importName="go mod init k8s.io/kubernetes"
      description="Currently read through the kubernetes open source code particularly the eviction api and stats api parts of it so we can create effective kubernetes operators at AKS :)"
      technology="GO | Scheduling Algorithms | Kubernetes"
      titlecolor={blue}
      infoColor={blue}
      imageLink="https://iili.io/H51SewP.png"
      projectLink="https://github.com/kubernetes/kubernetes"
      />
      <ProjectRight
      isNavLink={false}
      title="Cluster-Autoscaler"
      importName="go mod init k8s.io/autoscaler"
      description="Contributor to the kubernetes cluster-autoscaler project. Working on scheduling and resource balancing for the autoscaler."
      technology="GO | KUBERNETES | Azure"
      imageLink="https://i.imgur.com/m6x4Ypo.png"
      titlecolor={lightblue}
      infoColor={lightblue}
      projectLink="https://github.com/kubernetes/autoscaler"
      />
      <ProjectLeft
      isNavLink={false}
      title="Azure-Cloud-Provider"
      importName="go mod init k8s.io/azure-cloud-provider"
      description="Contributor to the kubernetes azure cloud provider project. Cloud Provider is a Kubernetes component that allows Kubernetes to interact with the azure resource provider."
      imageLink="https://i.imgur.com/LOoZuJK.jpg"
      titlecolor={blue}
      infoColor={blue}
      projectLink="https://github.com/kubernetes-sigs/cloud-provider-azure"
    />
      <ReactPlanetary />
      <BryBryCli />
      <BackButton />
    </OpenContainer>
  );
}
