/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ValidatorManagerFacet,
  ValidatorManagerFacetInterface,
} from "../../../contracts/facets/ValidatorManagerFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Result",
        name: "result",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "claims",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "address payable[2]",
        name: "validators",
        type: "address[2]",
      },
    ],
    name: "ClaimReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Result",
        name: "result",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "claims",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "address payable[2]",
        name: "validators",
        type: "address[2]",
      },
    ],
    name: "DisputeEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "claim",
        type: "bytes32",
      },
    ],
    name: "NewEpoch",
    type: "event",
  },
  {
    inputs: [],
    name: "getAgreementMask",
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
    name: "getConsensusGoalMask",
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
    name: "getCurrentClaim",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxNumValidators",
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
        internalType: "address payable",
        name: "_sender",
        type: "address",
      },
    ],
    name: "getNumberOfClaimsByAddress",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getNumberOfClaimsByIndex",
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
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "getValidatorIndex",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610506806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638219fda41161005b5780638219fda4146100c2578063cc8a2451146100d7578063d2992f54146100ea578063f6023815146100f257600080fd5b8063101494ce146100825780631fcc449e1461009c57806355564a70146100af575b600080fd5b61008a6100fa565b60405190815260200160405180910390f35b61008a6100aa3660046103ff565b610139565b61008a6100bd3660046103ff565b61015b565b6000805160206104b18339815191525461008a565b61008a6100e536600461041c565b610176565b61008a610191565b61008a6101cb565b7f8ab37fef2b2e34c4b62ff9948ee661cdcf34e209d7c20f4d1f6e83085e93b1ff546000906000805160206104b18339815191529060f81c5b91505090565b60006000805160206104b1833981519152610154818461020b565b9392505050565b60006000805160206104b183398151915261015481846102f5565b60006000805160206104b18339815191526101548184610367565b7f8ab37fef2b2e34c4b62ff9948ee661cdcf34e209d7c20f4d1f6e83085e93b1fe546000906000805160206104b183398151915290610133565b7f8ab37fef2b2e34c4b62ff9948ee661cdcf34e209d7c20f4d1f6e83085e93b1ff546000906000805160206104b18339815191529060f01c60ff16610133565b60006001600160a01b0382166102545760405162461bcd60e51b815260206004820152600960248201526806164647265737320360bc1b60448201526064015b60405180910390fd5b60005b60018401548110156102b05783600101818154811061027857610278610435565b6000918252602090912001546001600160a01b039081169084160361029e5790506102ef565b806102a881610461565b915050610257565b5060405162461bcd60e51b81526020600482015260136024820152721d985b1a59185d1bdc881b9bdd08199bdd5b99606a1b604482015260640161024b565b92915050565b6000805b600184015481101561035d5783600101818154811061031a5761031a610435565b6000918252602090912001546001600160a01b039081169084160361034b576103438482610367565b9150506102ef565b8061035581610461565b9150506102f9565b5060009392505050565b600382015460009061015490836000600882106103bb5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b604482015260640161024b565b60006103cc6001634000000061047a565b9050806103da84601e610491565b85901c1691505092915050565b6001600160a01b03811681146103fc57600080fd5b50565b60006020828403121561041157600080fd5b8135610154816103e7565b60006020828403121561042e57600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016104735761047361044b565b5060010190565b60008282101561048c5761048c61044b565b500390565b60008160001904831182151516156104ab576104ab61044b565b50029056fe8ab37fef2b2e34c4b62ff9948ee661cdcf34e209d7c20f4d1f6e83085e93b1fca26469706673582212202b700a34055d7bd57f021e5c896711657796122af288967d1a632e9fce47fadb64736f6c634300080d0033";

type ValidatorManagerFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ValidatorManagerFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ValidatorManagerFacet__factory extends ContractFactory {
  constructor(...args: ValidatorManagerFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ValidatorManagerFacet> {
    return super.deploy(overrides || {}) as Promise<ValidatorManagerFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ValidatorManagerFacet {
    return super.attach(address) as ValidatorManagerFacet;
  }
  override connect(signer: Signer): ValidatorManagerFacet__factory {
    return super.connect(signer) as ValidatorManagerFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidatorManagerFacetInterface {
    return new utils.Interface(_abi) as ValidatorManagerFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidatorManagerFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ValidatorManagerFacet;
  }
}
