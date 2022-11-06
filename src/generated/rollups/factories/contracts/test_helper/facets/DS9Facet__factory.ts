/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS9Facet,
  DS9FacetInterface,
} from "../../../../contracts/test_helper/facets/DS9Facet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "addArrayElement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getArrayElement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getArrayLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
    ],
    name: "getMappingEntry",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getX",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getY",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "key",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setMappingEntry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "x",
        type: "uint32",
      },
    ],
    name: "setX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "y",
        type: "uint32",
      },
    ],
    name: "setY",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610398806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80631af78671116100665780631af786711461015b5780632b4db5fa1461019a5780635197c7aa146101fc578063eb421e2f14610217578063eee937551461024e57600080fd5b80630849cc99146100985780630b7f1665146100ce578063142edc7a146101025780631468db5e14610115575b600080fd5b7f5ec71f1de84ac97dcb4fa9dee8ec0041b0b869b58ab1882dcca1632a34f94b7e545b6040519081526020015b60405180910390f35b60008051602061034383398151915254640100000000900463ffffffff165b60405163ffffffff90911681526020016100c5565b6100bb6101103660046102c4565b61028d565b6101596101233660046102dd565b600080516020610343833981519152805467ffffffff00000000191664010000000063ffffffff90931692909202919091179055565b005b6100bb6101693660046102c4565b60009081527f5ec71f1de84ac97dcb4fa9dee8ec0041b0b869b58ab1882dcca1632a34f94b7d602052604090205490565b6101596101a83660046102c4565b7f5ec71f1de84ac97dcb4fa9dee8ec0041b0b869b58ab1882dcca1632a34f94b7e80546001810182556000919091527f8b215a2a4b15e8211c3e0181657d2529a314ef8a9bf7bd3b9c01cdf7698503a20155565b6000805160206103438339815191525463ffffffff166100ed565b6101596102253660046102dd565b600080516020610343833981519152805463ffffffff191663ffffffff92909216919091179055565b61015961025c36600461030a565b60009182527f5ec71f1de84ac97dcb4fa9dee8ec0041b0b869b58ab1882dcca1632a34f94b7d602052604090912055565b600060008051602061034383398151915260020182815481106102b2576102b261032c565b90600052602060002001549050919050565b6000602082840312156102d657600080fd5b5035919050565b6000602082840312156102ef57600080fd5b813563ffffffff8116811461030357600080fd5b9392505050565b6000806040838503121561031d57600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fdfe5ec71f1de84ac97dcb4fa9dee8ec0041b0b869b58ab1882dcca1632a34f94b7ca264697066735822122000e5a548a8f810e1f0f9eb127f3840ede105f0800e6f83f081e7dd941f12e0ca64736f6c634300080d0033";

type DS9FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS9FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS9Facet__factory extends ContractFactory {
  constructor(...args: DS9FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS9Facet> {
    return super.deploy(overrides || {}) as Promise<DS9Facet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS9Facet {
    return super.attach(address) as DS9Facet;
  }
  override connect(signer: Signer): DS9Facet__factory {
    return super.connect(signer) as DS9Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS9FacetInterface {
    return new utils.Interface(_abi) as DS9FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS9Facet {
    return new Contract(address, _abi, signerOrProvider) as DS9Facet;
  }
}
