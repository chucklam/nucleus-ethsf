/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface InputFacetInterface extends utils.Interface {
  functions: {
    "addInput(bytes)": FunctionFragment;
    "getCurrentInbox()": FunctionFragment;
    "getInput(uint256)": FunctionFragment;
    "getNumberOfInputs()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addInput"
      | "getCurrentInbox"
      | "getInput"
      | "getNumberOfInputs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addInput",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentInbox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInput",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfInputs",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentInbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfInputs",
    data: BytesLike
  ): Result;

  events: {
    "InputAdded(uint256,uint256,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InputAdded"): EventFragment;
}

export interface InputAddedEventObject {
  epochNumber: BigNumber;
  inputIndex: BigNumber;
  sender: string;
  timestamp: BigNumber;
  input: string;
}
export type InputAddedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, string],
  InputAddedEventObject
>;

export type InputAddedEventFilter = TypedEventFilter<InputAddedEvent>;

export interface InputFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InputFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * offchain code is responsible for making sure      that input size is power of 2 and multiple of 8 since
     * add input to processed by next epoch
     * @param _input input to be understood by offchain machine
     */
    addInput(
      _input: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * get inbox currently receiveing inputs
     */
    getCurrentInbox(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get input inside inbox of currently proposed claim
     * @param _index index of input inside that inbox
     */
    getInput(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get number of inputs inside inbox of currently proposed claim
     */
    getNumberOfInputs(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  /**
   * offchain code is responsible for making sure      that input size is power of 2 and multiple of 8 since
   * add input to processed by next epoch
   * @param _input input to be understood by offchain machine
   */
  addInput(
    _input: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * get inbox currently receiveing inputs
   */
  getCurrentInbox(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
   * get input inside inbox of currently proposed claim
   * @param _index index of input inside that inbox
   */
  getInput(
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
   * get number of inputs inside inbox of currently proposed claim
   */
  getNumberOfInputs(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    /**
     * offchain code is responsible for making sure      that input size is power of 2 and multiple of 8 since
     * add input to processed by next epoch
     * @param _input input to be understood by offchain machine
     */
    addInput(
      _input: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * get inbox currently receiveing inputs
     */
    getCurrentInbox(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get input inside inbox of currently proposed claim
     * @param _index index of input inside that inbox
     */
    getInput(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get number of inputs inside inbox of currently proposed claim
     */
    getNumberOfInputs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "InputAdded(uint256,uint256,address,uint256,bytes)"(
      epochNumber?: PromiseOrValue<BigNumberish> | null,
      inputIndex?: PromiseOrValue<BigNumberish> | null,
      sender?: null,
      timestamp?: null,
      input?: null
    ): InputAddedEventFilter;
    InputAdded(
      epochNumber?: PromiseOrValue<BigNumberish> | null,
      inputIndex?: PromiseOrValue<BigNumberish> | null,
      sender?: null,
      timestamp?: null,
      input?: null
    ): InputAddedEventFilter;
  };

  estimateGas: {
    /**
     * offchain code is responsible for making sure      that input size is power of 2 and multiple of 8 since
     * add input to processed by next epoch
     * @param _input input to be understood by offchain machine
     */
    addInput(
      _input: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * get inbox currently receiveing inputs
     */
    getCurrentInbox(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get input inside inbox of currently proposed claim
     * @param _index index of input inside that inbox
     */
    getInput(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get number of inputs inside inbox of currently proposed claim
     */
    getNumberOfInputs(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * offchain code is responsible for making sure      that input size is power of 2 and multiple of 8 since
     * add input to processed by next epoch
     * @param _input input to be understood by offchain machine
     */
    addInput(
      _input: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * get inbox currently receiveing inputs
     */
    getCurrentInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get input inside inbox of currently proposed claim
     * @param _index index of input inside that inbox
     */
    getInput(
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * currentInputBox being zero means that the inputs for      the claimed epoch are on input box one
     * get number of inputs inside inbox of currently proposed claim
     */
    getNumberOfInputs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
