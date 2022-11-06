/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface LibValidatorManager1Interface extends utils.Interface {
  functions: {};

  events: {
    "ClaimReceived(uint8,bytes32[2],address[2])": EventFragment;
    "DisputeEnded(uint8,bytes32[2],address[2])": EventFragment;
    "NewEpoch(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisputeEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewEpoch"): EventFragment;
}

export interface ClaimReceivedEventObject {
  result: number;
  claims: [string, string];
  validators: [string, string];
}
export type ClaimReceivedEvent = TypedEvent<
  [number, [string, string], [string, string]],
  ClaimReceivedEventObject
>;

export type ClaimReceivedEventFilter = TypedEventFilter<ClaimReceivedEvent>;

export interface DisputeEndedEventObject {
  result: number;
  claims: [string, string];
  validators: [string, string];
}
export type DisputeEndedEvent = TypedEvent<
  [number, [string, string], [string, string]],
  DisputeEndedEventObject
>;

export type DisputeEndedEventFilter = TypedEventFilter<DisputeEndedEvent>;

export interface NewEpochEventObject {
  claim: string;
}
export type NewEpochEvent = TypedEvent<[string], NewEpochEventObject>;

export type NewEpochEventFilter = TypedEventFilter<NewEpochEvent>;

export interface LibValidatorManager1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibValidatorManager1Interface;

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

  functions: {};

  callStatic: {};

  filters: {
    "ClaimReceived(uint8,bytes32[2],address[2])"(
      result?: null,
      claims?: null,
      validators?: null
    ): ClaimReceivedEventFilter;
    ClaimReceived(
      result?: null,
      claims?: null,
      validators?: null
    ): ClaimReceivedEventFilter;

    "DisputeEnded(uint8,bytes32[2],address[2])"(
      result?: null,
      claims?: null,
      validators?: null
    ): DisputeEndedEventFilter;
    DisputeEnded(
      result?: null,
      claims?: null,
      validators?: null
    ): DisputeEndedEventFilter;

    "NewEpoch(bytes32)"(claim?: null): NewEpochEventFilter;
    NewEpoch(claim?: null): NewEpochEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
