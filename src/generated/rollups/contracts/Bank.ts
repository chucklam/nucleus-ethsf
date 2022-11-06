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
} from "../common";

export interface BankInterface extends utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "depositTokens(address,uint256)": FunctionFragment;
    "getToken()": FunctionFragment;
    "transferTokens(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "depositTokens"
      | "getToken"
      | "transferTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferTokens",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferTokens",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface DepositEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, string, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Bank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BankInterface;

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
     * get balance of `_owner`
     * @param _owner account owner
     */
    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * you may need to call `token.approve(bank, _value)`
     * transfer `_value` tokens from caller to bankincrease the balance of `_to` by `_value`
     * @param _to account that will have their balance increased by `_value`
     * @param _value amount of tokens to be transfered
     */
    depositTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * returns the token used internally
     */
    getToken(overrides?: CallOverrides): Promise<[string]>;

    /**
     * transfer `_value` tokens from bank to `_to`decrease the balance of caller by `_value`
     * @param _to account that will receive `_value` tokens
     * @param _value amount of tokens to be transfered
     */
    transferTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * get balance of `_owner`
   * @param _owner account owner
   */
  balanceOf(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * you may need to call `token.approve(bank, _value)`
   * transfer `_value` tokens from caller to bankincrease the balance of `_to` by `_value`
   * @param _to account that will have their balance increased by `_value`
   * @param _value amount of tokens to be transfered
   */
  depositTokens(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * returns the token used internally
   */
  getToken(overrides?: CallOverrides): Promise<string>;

  /**
   * transfer `_value` tokens from bank to `_to`decrease the balance of caller by `_value`
   * @param _to account that will receive `_value` tokens
   * @param _value amount of tokens to be transfered
   */
  transferTokens(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * get balance of `_owner`
     * @param _owner account owner
     */
    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * you may need to call `token.approve(bank, _value)`
     * transfer `_value` tokens from caller to bankincrease the balance of `_to` by `_value`
     * @param _to account that will have their balance increased by `_value`
     * @param _value amount of tokens to be transfered
     */
    depositTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * returns the token used internally
     */
    getToken(overrides?: CallOverrides): Promise<string>;

    /**
     * transfer `_value` tokens from bank to `_to`decrease the balance of caller by `_value`
     * @param _to account that will receive `_value` tokens
     * @param _value amount of tokens to be transfered
     */
    transferTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,address,uint256)"(
      from?: null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): DepositEventFilter;
    Deposit(
      from?: null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): DepositEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    /**
     * get balance of `_owner`
     * @param _owner account owner
     */
    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * you may need to call `token.approve(bank, _value)`
     * transfer `_value` tokens from caller to bankincrease the balance of `_to` by `_value`
     * @param _to account that will have their balance increased by `_value`
     * @param _value amount of tokens to be transfered
     */
    depositTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * returns the token used internally
     */
    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * transfer `_value` tokens from bank to `_to`decrease the balance of caller by `_value`
     * @param _to account that will receive `_value` tokens
     * @param _value amount of tokens to be transfered
     */
    transferTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * get balance of `_owner`
     * @param _owner account owner
     */
    balanceOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * you may need to call `token.approve(bank, _value)`
     * transfer `_value` tokens from caller to bankincrease the balance of `_to` by `_value`
     * @param _to account that will have their balance increased by `_value`
     * @param _value amount of tokens to be transfered
     */
    depositTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * returns the token used internally
     */
    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * transfer `_value` tokens from bank to `_to`decrease the balance of caller by `_value`
     * @param _to account that will receive `_value` tokens
     * @param _value amount of tokens to be transfered
     */
    transferTokens(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}