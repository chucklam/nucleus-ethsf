/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS5Facet,
  DS5FacetInterface,
} from "../../../../contracts/test_helper/facets/DS5Facet";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610256806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630849cc991461005c578063142edc7a146100915780631af78671146100a45780632b4db5fa146100e3578063eee9375514610147575b600080fd5b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcb545b60405190815260200160405180910390f35b61007f61009f3660046101cf565b610186565b61007f6100b23660046101cf565b60009081527fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddca602052604090205490565b6101456100f13660046101cf565b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcb80546001810182556000919091527fd48c8049647240bd595b8d80301a0c12025608ced102fbd85ec915428d9fea380155565b005b6101456101553660046101e8565b60009182527fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddca602052604090912055565b60007fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddca60010182815481106101bd576101bd61020a565b90600052602060002001549050919050565b6000602082840312156101e157600080fd5b5035919050565b600080604083850312156101fb57600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fdfea26469706673582212203264f85c42f60179417e78927a7b94ec9a98193a5791336d091d0b613df7323664736f6c634300080d0033";

type DS5FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS5FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS5Facet__factory extends ContractFactory {
  constructor(...args: DS5FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS5Facet> {
    return super.deploy(overrides || {}) as Promise<DS5Facet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS5Facet {
    return super.attach(address) as DS5Facet;
  }
  override connect(signer: Signer): DS5Facet__factory {
    return super.connect(signer) as DS5Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS5FacetInterface {
    return new utils.Interface(_abi) as DS5FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS5Facet {
    return new Contract(address, _abi, signerOrProvider) as DS5Facet;
  }
}
