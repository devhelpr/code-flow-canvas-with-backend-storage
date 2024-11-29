import { FlowAppElement } from "@devhelpr/app-canvas";
import { Flow } from "@devhelpr/visual-programming-system";
import {
  NodeInfo,
  RegisterNodeFactoryFunction,
} from "@devhelpr/web-flow-executor";
import { getExternalTestNode } from "./flows/external-test-node";

const storageProvider = {
  getFlow: async (_flowId: string) => {
    return new Promise<Flow<NodeInfo>>((resolve, _reject) => {
      fetch("/flow")
        .then((response) => {
          return response.json();
        })
        .then((flow) => {
          resolve(flow as Flow<NodeInfo>);
        });
    });
  },
  saveFlow: async (_flowId: string, flow: any) => {
    fetch("/flow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flow),
    }).then((response) => {
      return response.json();
    });
  },
};
new FlowAppElement(
  "#root",
  storageProvider,
  false,
  20,
  32,
  undefined,
  (registerNodeFactory: RegisterNodeFactoryFunction) => {
    registerNodeFactory("test-external-node", getExternalTestNode());
  },
  undefined,
  true,
  undefined,
  true
);
