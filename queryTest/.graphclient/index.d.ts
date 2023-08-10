import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { HyperlaneoptimismTypes } from './sources/hyperlaneoptimism/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
    Int8: any;
};
export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
export type Dispatch = {
    id: Scalars['Bytes'];
    sender: Scalars['Bytes'];
    destination: Scalars['BigInt'];
    recipient: Scalars['Bytes'];
    message: Scalars['Bytes'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type DispatchId = {
    id: Scalars['Bytes'];
    messageId: Scalars['Bytes'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type DispatchId_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    messageId?: InputMaybe<Scalars['Bytes']>;
    messageId_not?: InputMaybe<Scalars['Bytes']>;
    messageId_gt?: InputMaybe<Scalars['Bytes']>;
    messageId_lt?: InputMaybe<Scalars['Bytes']>;
    messageId_gte?: InputMaybe<Scalars['Bytes']>;
    messageId_lte?: InputMaybe<Scalars['Bytes']>;
    messageId_in?: InputMaybe<Array<Scalars['Bytes']>>;
    messageId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    messageId_contains?: InputMaybe<Scalars['Bytes']>;
    messageId_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DispatchId_filter>>>;
    or?: InputMaybe<Array<InputMaybe<DispatchId_filter>>>;
};
export type DispatchId_orderBy = 'id' | 'messageId' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type Dispatch_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    sender?: InputMaybe<Scalars['Bytes']>;
    sender_not?: InputMaybe<Scalars['Bytes']>;
    sender_gt?: InputMaybe<Scalars['Bytes']>;
    sender_lt?: InputMaybe<Scalars['Bytes']>;
    sender_gte?: InputMaybe<Scalars['Bytes']>;
    sender_lte?: InputMaybe<Scalars['Bytes']>;
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    sender_contains?: InputMaybe<Scalars['Bytes']>;
    sender_not_contains?: InputMaybe<Scalars['Bytes']>;
    destination?: InputMaybe<Scalars['BigInt']>;
    destination_not?: InputMaybe<Scalars['BigInt']>;
    destination_gt?: InputMaybe<Scalars['BigInt']>;
    destination_lt?: InputMaybe<Scalars['BigInt']>;
    destination_gte?: InputMaybe<Scalars['BigInt']>;
    destination_lte?: InputMaybe<Scalars['BigInt']>;
    destination_in?: InputMaybe<Array<Scalars['BigInt']>>;
    destination_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    recipient?: InputMaybe<Scalars['Bytes']>;
    recipient_not?: InputMaybe<Scalars['Bytes']>;
    recipient_gt?: InputMaybe<Scalars['Bytes']>;
    recipient_lt?: InputMaybe<Scalars['Bytes']>;
    recipient_gte?: InputMaybe<Scalars['Bytes']>;
    recipient_lte?: InputMaybe<Scalars['Bytes']>;
    recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
    recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    recipient_contains?: InputMaybe<Scalars['Bytes']>;
    recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
    message?: InputMaybe<Scalars['Bytes']>;
    message_not?: InputMaybe<Scalars['Bytes']>;
    message_gt?: InputMaybe<Scalars['Bytes']>;
    message_lt?: InputMaybe<Scalars['Bytes']>;
    message_gte?: InputMaybe<Scalars['Bytes']>;
    message_lte?: InputMaybe<Scalars['Bytes']>;
    message_in?: InputMaybe<Array<Scalars['Bytes']>>;
    message_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    message_contains?: InputMaybe<Scalars['Bytes']>;
    message_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Dispatch_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Dispatch_filter>>>;
};
export type Dispatch_orderBy = 'id' | 'sender' | 'destination' | 'recipient' | 'message' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';
export type ProcessId = {
    id: Scalars['Bytes'];
    messageId: Scalars['Bytes'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type ProcessId_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    messageId?: InputMaybe<Scalars['Bytes']>;
    messageId_not?: InputMaybe<Scalars['Bytes']>;
    messageId_gt?: InputMaybe<Scalars['Bytes']>;
    messageId_lt?: InputMaybe<Scalars['Bytes']>;
    messageId_gte?: InputMaybe<Scalars['Bytes']>;
    messageId_lte?: InputMaybe<Scalars['Bytes']>;
    messageId_in?: InputMaybe<Array<Scalars['Bytes']>>;
    messageId_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    messageId_contains?: InputMaybe<Scalars['Bytes']>;
    messageId_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ProcessId_filter>>>;
    or?: InputMaybe<Array<InputMaybe<ProcessId_filter>>>;
};
export type ProcessId_orderBy = 'id' | 'messageId' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type Query = {
    dispatch?: Maybe<Dispatch>;
    dispatches: Array<Dispatch>;
    dispatchId?: Maybe<DispatchId>;
    dispatchIds: Array<DispatchId>;
    processId?: Maybe<ProcessId>;
    processIds: Array<ProcessId>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type QuerydispatchArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydispatchesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Dispatch_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Dispatch_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydispatchIdArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydispatchIdsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DispatchId_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DispatchId_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryprocessIdArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryprocessIdsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProcessId_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProcessId_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type Subscription = {
    dispatch?: Maybe<Dispatch>;
    dispatches: Array<Dispatch>;
    dispatchId?: Maybe<DispatchId>;
    dispatchIds: Array<DispatchId>;
    processId?: Maybe<ProcessId>;
    processIds: Array<ProcessId>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type SubscriptiondispatchArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondispatchesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Dispatch_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Dispatch_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondispatchIdArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondispatchIdsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DispatchId_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DispatchId_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionprocessIdArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionprocessIdsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProcessId_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProcessId_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
};
/** The type for the top-level _meta field */
export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export type _SubgraphErrorPolicy_ = 
/** Data will be returned even if the subgraph has indexing errors */
'allow'
/** If the subgraph has indexing errors, data will be omitted. The default. */
 | 'deny';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
    Dispatch: ResolverTypeWrapper<Dispatch>;
    DispatchId: ResolverTypeWrapper<DispatchId>;
    DispatchId_filter: DispatchId_filter;
    DispatchId_orderBy: DispatchId_orderBy;
    Dispatch_filter: Dispatch_filter;
    Dispatch_orderBy: Dispatch_orderBy;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Int8: ResolverTypeWrapper<Scalars['Int8']>;
    OrderDirection: OrderDirection;
    ProcessId: ResolverTypeWrapper<ProcessId>;
    ProcessId_filter: ProcessId_filter;
    ProcessId_orderBy: ProcessId_orderBy;
    Query: ResolverTypeWrapper<{}>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    _Block_: ResolverTypeWrapper<_Block_>;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    BigDecimal: Scalars['BigDecimal'];
    BigInt: Scalars['BigInt'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: Scalars['Boolean'];
    Bytes: Scalars['Bytes'];
    Dispatch: Dispatch;
    DispatchId: DispatchId;
    DispatchId_filter: DispatchId_filter;
    Dispatch_filter: Dispatch_filter;
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    Int8: Scalars['Int8'];
    ProcessId: ProcessId;
    ProcessId_filter: ProcessId_filter;
    Query: {};
    String: Scalars['String'];
    Subscription: {};
    _Block_: _Block_;
    _Meta_: _Meta_;
}>;
export type entityDirectiveArgs = {};
export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type subgraphIdDirectiveArgs = {
    id: Scalars['String'];
};
export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type derivedFromDirectiveArgs = {
    field: Scalars['String'];
};
export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export type DispatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Dispatch'] = ResolversParentTypes['Dispatch']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    destination?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    message?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type DispatchIdResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DispatchId'] = ResolversParentTypes['DispatchId']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    messageId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
    name: 'Int8';
}
export type ProcessIdResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProcessId'] = ResolversParentTypes['ProcessId']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    messageId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    dispatch?: Resolver<Maybe<ResolversTypes['Dispatch']>, ParentType, ContextType, RequireFields<QuerydispatchArgs, 'id' | 'subgraphError'>>;
    dispatches?: Resolver<Array<ResolversTypes['Dispatch']>, ParentType, ContextType, RequireFields<QuerydispatchesArgs, 'skip' | 'first' | 'subgraphError'>>;
    dispatchId?: Resolver<Maybe<ResolversTypes['DispatchId']>, ParentType, ContextType, RequireFields<QuerydispatchIdArgs, 'id' | 'subgraphError'>>;
    dispatchIds?: Resolver<Array<ResolversTypes['DispatchId']>, ParentType, ContextType, RequireFields<QuerydispatchIdsArgs, 'skip' | 'first' | 'subgraphError'>>;
    processId?: Resolver<Maybe<ResolversTypes['ProcessId']>, ParentType, ContextType, RequireFields<QueryprocessIdArgs, 'id' | 'subgraphError'>>;
    processIds?: Resolver<Array<ResolversTypes['ProcessId']>, ParentType, ContextType, RequireFields<QueryprocessIdsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;
export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
    dispatch?: SubscriptionResolver<Maybe<ResolversTypes['Dispatch']>, "dispatch", ParentType, ContextType, RequireFields<SubscriptiondispatchArgs, 'id' | 'subgraphError'>>;
    dispatches?: SubscriptionResolver<Array<ResolversTypes['Dispatch']>, "dispatches", ParentType, ContextType, RequireFields<SubscriptiondispatchesArgs, 'skip' | 'first' | 'subgraphError'>>;
    dispatchId?: SubscriptionResolver<Maybe<ResolversTypes['DispatchId']>, "dispatchId", ParentType, ContextType, RequireFields<SubscriptiondispatchIdArgs, 'id' | 'subgraphError'>>;
    dispatchIds?: SubscriptionResolver<Array<ResolversTypes['DispatchId']>, "dispatchIds", ParentType, ContextType, RequireFields<SubscriptiondispatchIdsArgs, 'skip' | 'first' | 'subgraphError'>>;
    processId?: SubscriptionResolver<Maybe<ResolversTypes['ProcessId']>, "processId", ParentType, ContextType, RequireFields<SubscriptionprocessIdArgs, 'id' | 'subgraphError'>>;
    processIds?: SubscriptionResolver<Array<ResolversTypes['ProcessId']>, "processIds", ParentType, ContextType, RequireFields<SubscriptionprocessIdsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;
export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Bytes?: GraphQLScalarType;
    Dispatch?: DispatchResolvers<ContextType>;
    DispatchId?: DispatchIdResolvers<ContextType>;
    Int8?: GraphQLScalarType;
    ProcessId?: ProcessIdResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>;
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = HyperlaneoptimismTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare function getBuiltGraphClient(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
