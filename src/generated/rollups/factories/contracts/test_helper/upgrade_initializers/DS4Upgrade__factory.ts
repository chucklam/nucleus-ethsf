/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS4Upgrade,
  DS4UpgradeInterface,
} from "../../../../contracts/test_helper/upgrade_initializers/DS4Upgrade";

const _abi = [
  {
    inputs: [],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060c88061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d55ec69714602d575b600080fd5b7ff85303be6bcde94f0463a6aa7a400c61c189a370c649530913625784ad517b1c547fff42502b340deee9bf2882182aa543c5e13678ef8c456702ec177872cd324d08805464010000000090920463ffffffff1663ffffffff1990921691909117905500fea2646970667358221220f8f61065ead49ea231508e1e458ef69d285f21f0ee33991fe309fe2f6a1ce13064736f6c634300080d0033";

type DS4UpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS4UpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS4Upgrade__factory extends ContractFactory {
  constructor(...args: DS4UpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS4Upgrade> {
    return super.deploy(overrides || {}) as Promise<DS4Upgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS4Upgrade {
    return super.attach(address) as DS4Upgrade;
  }
  override connect(signer: Signer): DS4Upgrade__factory {
    return super.connect(signer) as DS4Upgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS4UpgradeInterface {
    return new utils.Interface(_abi) as DS4UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS4Upgrade {
    return new Contract(address, _abi, signerOrProvider) as DS4Upgrade;
  }
}
