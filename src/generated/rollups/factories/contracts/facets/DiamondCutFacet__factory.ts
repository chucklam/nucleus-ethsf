/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../../../contracts/facets/DiamondCutFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061125e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e366004610d90565b610045565b005b61004d61027b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e547fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9061ffff8116908190600090600716156100bc5750600381901c60009081526001840160205260409020545b60005b888110156101b35761019c83838c8c858181106100de576100de610e42565b90506020028101906100f09190610e58565b6100fe906020810190610e78565b8d8d8681811061011057610110610e42565b90506020028101906101229190610e58565b610133906040810190602001610ea9565b8e8e8781811061014557610145610e42565b90506020028101906101579190610e58565b610165906040810190610ec4565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061030992505050565b9093509150806101ab81610f24565b9150506100bf565b508282146101cf5760028401805461ffff191661ffff84161790555b60078216156101f157600382901c600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738989898989604051610228959493929190610fcc565b60405180910390a16102708787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610af792505050565b505050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b031633146103075760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084015b60405180910390fd5b565b600080807fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c905060008451116103955760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201526a1858d95d081d1bc818dd5d60aa1b60648201526084016102fe565b60008560028111156103a9576103a9610f3d565b03610516576103d0866040518060600160405280602481526020016111b560249139610d0a565b60005b84518110156105105760008582815181106103f0576103f0610e42565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c156104895760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b60648201526084016102fe565b6001600160e01b031980831660008181526020879052604090206001600160601b031960608d901b168e17905560e060058e901b811692831c199c909c1690821c179a8190036104ed5760038c901c600090815260018601602052604081209b909b555b8b6104f781610f24565b9c5050505050808061050890610f24565b9150506103d3565b50610aeb565b600185600281111561052a5761052a610f3d565b03610759576105518660405180606001604052806028815260200161120160289139610d0a565b60005b845181101561051057600085828151811061057157610571610e42565b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c3081036106065760405162461bcd60e51b815260206004820152602f60248201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60448201526e3aba30b1363290333ab731ba34b7b760891b60648201526084016102fe565b896001600160a01b0316816001600160a01b03160361068d5760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e000000000000000060648201526084016102fe565b6001600160a01b0381166107095760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e207468617420646f65736e2774206578697374000000000000000060648201526084016102fe565b506001600160e01b031990911660009081526020849052604090206bffffffffffffffffffffffff919091166001600160601b031960608a901b161790558061075181610f24565b915050610554565b600285600281111561076d5761076d610f3d565b03610a93576001600160a01b038616156107e85760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b60648201526084016102fe565b600388901c6007891660005b8651811015610a735760008a90036108305782610810816110f5565b60008181526001870160205260409020549b5093506007925061083e9050565b8161083a816110f5565b9250505b6000806000808a858151811061085657610856610e42565b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c6108f65760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e277420657869737400000000000000000060648201526084016102fe565b30606082901c036109605760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b60648201526084016102fe565b600587901b8f901b94506001600160e01b0319808616908316146109b6576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166bffffffffffffffffffffffff83161790555b6001600160e01b031991909116600090815260208990526040812055600381901c611fff16925060051b60e0169050858214610a1b576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c179055610a3f565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b84600003610a5d57600086815260018801602052604081208190559c505b5050508080610a6b90610f24565b9150506107f4565b5080610a8083600861110c565b610a8a919061112b565b99505050610aeb565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b60648201526084016102fe565b50959694955050505050565b6001600160a01b038216610b7e57805115610b7a5760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d7074790000000060648201526084016102fe565b5050565b6000815111610bf55760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f74206164647265737328302900000060648201526084016102fe565b6001600160a01b0382163014610c2757610c27826040518060600160405280602881526020016111d960289139610d0a565b600080836001600160a01b031683604051610c42919061116f565b600060405180830381855af49150503d8060008114610c7d576040519150601f19603f3d011682016040523d82523d6000602084013e610c82565b606091505b509150915081610d0457805115610cad578060405162461bcd60e51b81526004016102fe9190611181565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b60648201526084016102fe565b50505050565b813b8181610d045760405162461bcd60e51b81526004016102fe9190611181565b80356001600160a01b0381168114610d4257600080fd5b919050565b60008083601f840112610d5957600080fd5b50813567ffffffffffffffff811115610d7157600080fd5b602083019150836020828501011115610d8957600080fd5b9250929050565b600080600080600060608688031215610da857600080fd5b853567ffffffffffffffff80821115610dc057600080fd5b818801915088601f830112610dd457600080fd5b813581811115610de357600080fd5b8960208260051b8501011115610df857600080fd5b60208301975080965050610e0e60208901610d2b565b94506040880135915080821115610e2457600080fd5b50610e3188828901610d47565b969995985093965092949392505050565b634e487b7160e01b600052603260045260246000fd5b60008235605e19833603018112610e6e57600080fd5b9190910192915050565b600060208284031215610e8a57600080fd5b610e9382610d2b565b9392505050565b803560038110610d4257600080fd5b600060208284031215610ebb57600080fd5b610e9382610e9a565b6000808335601e19843603018112610edb57600080fd5b83018035915067ffffffffffffffff821115610ef657600080fd5b6020019150600581901b3603821315610d8957600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610f3657610f36610f0e565b5060010190565b634e487b7160e01b600052602160045260246000fd5b818352600060208085019450826000805b86811015610f975782356001600160e01b03198116808214610f84578384fd5b8952509683019691830191600101610f64565b50959695505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6060808252818101869052600090600560808085019089831b8601018a855b8b8110156110c257878303607f190184528135368e9003605e1901811261101157600080fd5b8d016001600160a01b0361102482610d2b565b1684526020611034818301610e9a565b6003811061105257634e487b7160e01b600052602160045260246000fd5b8582015260408281013536849003601e1901811261106f57600080fd5b8301803567ffffffffffffffff81111561108857600080fd5b808a1b360385131561109957600080fd5b8a838901526110ad8b890182868501610f53565b98840198975050509301925050600101610feb565b50506001600160a01b038916602087015285810360408701526110e681888a610fa3565b9b9a5050505050505050505050565b60008161110457611104610f0e565b506000190190565b600081600019048311821515161561112657611126610f0e565b500290565b6000821982111561113e5761113e610f0e565b500190565b60005b8381101561115e578181015183820152602001611146565b83811115610d045750506000910152565b60008251610e6e818460208701611143565b60208152600082518060208401526111a0816040850160208701611143565b601f01601f1916919091016040019291505056fe4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a26469706673582212204b8b2c4cc9333af346d73b2e4a6dca4f76dd4c5bea51a13e8742c5f94ad18f9f64736f6c634300080d0033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}