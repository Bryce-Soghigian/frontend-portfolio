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
      title="Karpenter"
      importName="go mod init Azure/karpenter"
      description="Karpenter is a project offering intelligent workload considiation and autoscaling for Kubernetes. Karpenter is a Kubernetes controller that watches for pods that have a specific label and provisions new nodes for them. Karpenter is a Kubernetes controller that watches for pods that have a specific label and provisions new nodes for them."
      technology="GO | Scheduling Algorithms | Kubernetes"
      titlecolor={blue}
      infoColor={blue}
      imageLink="https://karpenter.sh/background_hu39a8b615144b4974ecd457a3ed8f03fc_140560_960x540_fill_catmullrom_top_3.png"
      projectLink="https://github.com/Azure/karpenter"
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
    <ProjectRight 
      isNavLink={false}
      title="Kubernetes"
      importName="go mod init k8s.io/kubernetes"
      description="Contributing to the scheduling sig. Working on the scheduler and the scheduler framework. The scheduler is the Kubernetes component that is responsible for selecting a node for each pod, while obeying all of the specified requirements."
      technology="GO | Scheduling Algorithms | Kubernetes"
      titlecolor={blue}
      infoColor={blue}
      imageLink="https://iili.io/H51SewP.png"
      projectLink="https://github.com/kubernetes/kubernetes"
      />
      <ReactPlanetary />
      <BryBryCli />
      <BackButton />
    </OpenContainer>
  );
}
