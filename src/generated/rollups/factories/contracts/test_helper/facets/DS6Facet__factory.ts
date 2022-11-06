/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS6Facet,
  DS6FacetInterface,
} from "../../../../contracts/test_helper/facets/DS6Facet";

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
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "setX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102d5806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80632b4db5fa1161005b5780632b4db5fa146101095780634018d9aa1461016d5780635197c7aa1461019f578063eee93755146101c657600080fd5b80630849cc9914610082578063142edc7a146100b75780631af78671146100ca575b600080fd5b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcb545b60405190815260200160405180910390f35b6100a56100c536600461024e565b610205565b6100a56100d836600461024e565b60009081527fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddca602052604090205490565b61016b61011736600461024e565b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcb80546001810182556000919091527fd48c8049647240bd595b8d80301a0c12025608ced102fbd85ec915428d9fea380155565b005b61016b61017b36600461024e565b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcc55565b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcc546100a5565b61016b6101d4366004610267565b60009182527fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddca602052604090912055565b60007fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddca600101828154811061023c5761023c610289565b90600052602060002001549050919050565b60006020828403121561026057600080fd5b5035919050565b6000806040838503121561027a57600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220d9a4fff283f93f91d295c2097893f4f1e31c9c41473a65226a21657c1ed06f6664736f6c634300080d0033";

type DS6FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS6FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS6Facet__factory extends ContractFactory {
  constructor(...args: DS6FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS6Facet> {
    return super.deploy(overrides || {}) as Promise<DS6Facet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS6Facet {
    return super.attach(address) as DS6Facet;
  }
  override connect(signer: Signer): DS6Facet__factory {
    return super.connect(signer) as DS6Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS6FacetInterface {
    return new utils.Interface(_abi) as DS6FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS6Facet {
    return new Contract(address, _abi, signerOrProvider) as DS6Facet;
  }
}
