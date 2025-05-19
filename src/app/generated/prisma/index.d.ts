
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Mcp
 * 
 */
export type Mcp = $Result.DefaultSelection<Prisma.$McpPayload>
/**
 * Model AgentMcp
 * 
 */
export type AgentMcp = $Result.DefaultSelection<Prisma.$AgentMcpPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model StoreItem
 * 
 */
export type StoreItem = $Result.DefaultSelection<Prisma.$StoreItemPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanType: {
  FREE: 'FREE',
  PRO: 'PRO',
  ELITE: 'ELITE'
};

export type PlanType = (typeof PlanType)[keyof typeof PlanType]


export const AgentStatus: {
  RUNNING: 'RUNNING',
  STOPPED: 'STOPPED',
  ERROR: 'ERROR'
};

export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus]


export const TriggerType: {
  SCHEDULED: 'SCHEDULED',
  EVENT_SOCIAL: 'EVENT_SOCIAL',
  EVENT_PRICE: 'EVENT_PRICE',
  EVENT_CHAIN: 'EVENT_CHAIN'
};

export type TriggerType = (typeof TriggerType)[keyof typeof TriggerType]


export const ItemType: {
  AGENT_TEMPLATE: 'AGENT_TEMPLATE',
  MCP_SERVICE: 'MCP_SERVICE'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]

}

export type PlanType = $Enums.PlanType

export const PlanType: typeof $Enums.PlanType

export type AgentStatus = $Enums.AgentStatus

export const AgentStatus: typeof $Enums.AgentStatus

export type TriggerType = $Enums.TriggerType

export const TriggerType: typeof $Enums.TriggerType

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mcp`: Exposes CRUD operations for the **Mcp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mcps
    * const mcps = await prisma.mcp.findMany()
    * ```
    */
  get mcp(): Prisma.McpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentMcp`: Exposes CRUD operations for the **AgentMcp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentMcps
    * const agentMcps = await prisma.agentMcp.findMany()
    * ```
    */
  get agentMcp(): Prisma.AgentMcpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeItem`: Exposes CRUD operations for the **StoreItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreItems
    * const storeItems = await prisma.storeItem.findMany()
    * ```
    */
  get storeItem(): Prisma.StoreItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Subscription: 'Subscription',
    Agent: 'Agent',
    Mcp: 'Mcp',
    AgentMcp: 'AgentMcp',
    Trigger: 'Trigger',
    Log: 'Log',
    StoreItem: 'StoreItem',
    ChatMessage: 'ChatMessage',
    ChatSession: 'ChatSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscription" | "agent" | "mcp" | "agentMcp" | "trigger" | "log" | "storeItem" | "chatMessage" | "chatSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Mcp: {
        payload: Prisma.$McpPayload<ExtArgs>
        fields: Prisma.McpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.McpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.McpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>
          }
          findFirst: {
            args: Prisma.McpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.McpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>
          }
          findMany: {
            args: Prisma.McpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>[]
          }
          create: {
            args: Prisma.McpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>
          }
          createMany: {
            args: Prisma.McpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.McpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>[]
          }
          delete: {
            args: Prisma.McpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>
          }
          update: {
            args: Prisma.McpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>
          }
          deleteMany: {
            args: Prisma.McpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.McpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.McpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>[]
          }
          upsert: {
            args: Prisma.McpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpPayload>
          }
          aggregate: {
            args: Prisma.McpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMcp>
          }
          groupBy: {
            args: Prisma.McpGroupByArgs<ExtArgs>
            result: $Utils.Optional<McpGroupByOutputType>[]
          }
          count: {
            args: Prisma.McpCountArgs<ExtArgs>
            result: $Utils.Optional<McpCountAggregateOutputType> | number
          }
        }
      }
      AgentMcp: {
        payload: Prisma.$AgentMcpPayload<ExtArgs>
        fields: Prisma.AgentMcpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentMcpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentMcpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>
          }
          findFirst: {
            args: Prisma.AgentMcpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentMcpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>
          }
          findMany: {
            args: Prisma.AgentMcpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>[]
          }
          create: {
            args: Prisma.AgentMcpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>
          }
          createMany: {
            args: Prisma.AgentMcpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentMcpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>[]
          }
          delete: {
            args: Prisma.AgentMcpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>
          }
          update: {
            args: Prisma.AgentMcpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>
          }
          deleteMany: {
            args: Prisma.AgentMcpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentMcpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentMcpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>[]
          }
          upsert: {
            args: Prisma.AgentMcpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentMcpPayload>
          }
          aggregate: {
            args: Prisma.AgentMcpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentMcp>
          }
          groupBy: {
            args: Prisma.AgentMcpGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentMcpGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentMcpCountArgs<ExtArgs>
            result: $Utils.Optional<AgentMcpCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      StoreItem: {
        payload: Prisma.$StoreItemPayload<ExtArgs>
        fields: Prisma.StoreItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          findFirst: {
            args: Prisma.StoreItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          findMany: {
            args: Prisma.StoreItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          create: {
            args: Prisma.StoreItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          createMany: {
            args: Prisma.StoreItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          delete: {
            args: Prisma.StoreItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          update: {
            args: Prisma.StoreItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          deleteMany: {
            args: Prisma.StoreItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          upsert: {
            args: Prisma.StoreItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          aggregate: {
            args: Prisma.StoreItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreItem>
          }
          groupBy: {
            args: Prisma.StoreItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreItemCountArgs<ExtArgs>
            result: $Utils.Optional<StoreItemCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subscription?: SubscriptionOmit
    agent?: AgentOmit
    mcp?: McpOmit
    agentMcp?: AgentMcpOmit
    trigger?: TriggerOmit
    log?: LogOmit
    storeItem?: StoreItemOmit
    chatMessage?: ChatMessageOmit
    chatSession?: ChatSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    agents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | UserCountOutputTypeCountAgentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    mcps: number
    triggers: number
    logs: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcps?: boolean | AgentCountOutputTypeCountMcpsArgs
    triggers?: boolean | AgentCountOutputTypeCountTriggersArgs
    logs?: boolean | AgentCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountMcpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentMcpWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type McpCountOutputType
   */

  export type McpCountOutputType = {
    agents: number
  }

  export type McpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | McpCountOutputTypeCountAgentsArgs
  }

  // Custom InputTypes
  /**
   * McpCountOutputType without action
   */
  export type McpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpCountOutputType
     */
    select?: McpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * McpCountOutputType without action
   */
  export type McpCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentMcpWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    currentPoints: number | null
  }

  export type UserSumAggregateOutputType = {
    currentPoints: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    email: string | null
    hashedPassword: string | null
    systemPrompt: string | null
    iconUrl: string | null
    currentPoints: number | null
    autoRecharge: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    username: string | null
    email: string | null
    hashedPassword: string | null
    systemPrompt: string | null
    iconUrl: string | null
    currentPoints: number | null
    autoRecharge: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    username: number
    email: number
    hashedPassword: number
    systemPrompt: number
    iconUrl: number
    currentPoints: number
    autoRecharge: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    currentPoints?: true
  }

  export type UserSumAggregateInputType = {
    currentPoints?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    hashedPassword?: true
    systemPrompt?: true
    iconUrl?: true
    currentPoints?: true
    autoRecharge?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    hashedPassword?: true
    systemPrompt?: true
    iconUrl?: true
    currentPoints?: true
    autoRecharge?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    username?: true
    email?: true
    hashedPassword?: true
    systemPrompt?: true
    iconUrl?: true
    currentPoints?: true
    autoRecharge?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    username: string
    email: string
    hashedPassword: string | null
    systemPrompt: string | null
    iconUrl: string | null
    currentPoints: number
    autoRecharge: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    hashedPassword?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    currentPoints?: boolean
    autoRecharge?: boolean
    agents?: boolean | User$agentsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    hashedPassword?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    currentPoints?: boolean
    autoRecharge?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    hashedPassword?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    currentPoints?: boolean
    autoRecharge?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    username?: boolean
    email?: boolean
    hashedPassword?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    currentPoints?: boolean
    autoRecharge?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "username" | "email" | "hashedPassword" | "systemPrompt" | "iconUrl" | "currentPoints" | "autoRecharge", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | User$agentsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      agents: Prisma.$AgentPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      username: string
      email: string
      hashedPassword: string | null
      systemPrompt: string | null
      iconUrl: string | null
      currentPoints: number
      autoRecharge: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agents<T extends User$agentsArgs<ExtArgs> = {}>(args?: Subset<T, User$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly systemPrompt: FieldRef<"User", 'String'>
    readonly iconUrl: FieldRef<"User", 'String'>
    readonly currentPoints: FieldRef<"User", 'Int'>
    readonly autoRecharge: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.agents
   */
  export type User$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    dailyPoints: number | null
    swapFee: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    dailyPoints: number | null
    swapFee: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    planType: $Enums.PlanType | null
    startDate: Date | null
    endDate: Date | null
    dailyPoints: number | null
    swapFee: number | null
    userId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    planType: $Enums.PlanType | null
    startDate: Date | null
    endDate: Date | null
    dailyPoints: number | null
    swapFee: number | null
    userId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    planType: number
    startDate: number
    endDate: number
    dailyPoints: number
    swapFee: number
    userId: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    dailyPoints?: true
    swapFee?: true
  }

  export type SubscriptionSumAggregateInputType = {
    dailyPoints?: true
    swapFee?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    planType?: true
    startDate?: true
    endDate?: true
    dailyPoints?: true
    swapFee?: true
    userId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    planType?: true
    startDate?: true
    endDate?: true
    dailyPoints?: true
    swapFee?: true
    userId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    planType?: true
    startDate?: true
    endDate?: true
    dailyPoints?: true
    swapFee?: true
    userId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    planType: $Enums.PlanType
    startDate: Date
    endDate: Date | null
    dailyPoints: number
    swapFee: number
    userId: string
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planType?: boolean
    startDate?: boolean
    endDate?: boolean
    dailyPoints?: boolean
    swapFee?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planType?: boolean
    startDate?: boolean
    endDate?: boolean
    dailyPoints?: boolean
    swapFee?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planType?: boolean
    startDate?: boolean
    endDate?: boolean
    dailyPoints?: boolean
    swapFee?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planType?: boolean
    startDate?: boolean
    endDate?: boolean
    dailyPoints?: boolean
    swapFee?: boolean
    userId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "planType" | "startDate" | "endDate" | "dailyPoints" | "swapFee" | "userId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      planType: $Enums.PlanType
      startDate: Date
      endDate: Date | null
      dailyPoints: number
      swapFee: number
      userId: string
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly planType: FieldRef<"Subscription", 'PlanType'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly dailyPoints: FieldRef<"Subscription", 'Int'>
    readonly swapFee: FieldRef<"Subscription", 'Float'>
    readonly userId: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    status: $Enums.AgentStatus | null
    systemPrompt: string | null
    iconUrl: string | null
    userId: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    status: $Enums.AgentStatus | null
    systemPrompt: string | null
    iconUrl: string | null
    userId: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    status: number
    systemPrompt: number
    iconUrl: number
    userId: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    status?: true
    systemPrompt?: true
    iconUrl?: true
    userId?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    status?: true
    systemPrompt?: true
    iconUrl?: true
    userId?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    status?: true
    systemPrompt?: true
    iconUrl?: true
    userId?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    status: $Enums.AgentStatus
    systemPrompt: string | null
    iconUrl: string | null
    userId: string
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    userId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    mcps?: boolean | Agent$mcpsArgs<ExtArgs>
    triggers?: boolean | Agent$triggersArgs<ExtArgs>
    logs?: boolean | Agent$logsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    userId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    userId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    systemPrompt?: boolean
    iconUrl?: boolean
    userId?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "status" | "systemPrompt" | "iconUrl" | "userId", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    mcps?: boolean | Agent$mcpsArgs<ExtArgs>
    triggers?: boolean | Agent$triggersArgs<ExtArgs>
    logs?: boolean | Agent$logsArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      mcps: Prisma.$AgentMcpPayload<ExtArgs>[]
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
      status: $Enums.AgentStatus
      systemPrompt: string | null
      iconUrl: string | null
      userId: string
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mcps<T extends Agent$mcpsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$mcpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    triggers<T extends Agent$triggersArgs<ExtArgs> = {}>(args?: Subset<T, Agent$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends Agent$logsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly description: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'AgentStatus'>
    readonly systemPrompt: FieldRef<"Agent", 'String'>
    readonly iconUrl: FieldRef<"Agent", 'String'>
    readonly userId: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.mcps
   */
  export type Agent$mcpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    where?: AgentMcpWhereInput
    orderBy?: AgentMcpOrderByWithRelationInput | AgentMcpOrderByWithRelationInput[]
    cursor?: AgentMcpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentMcpScalarFieldEnum | AgentMcpScalarFieldEnum[]
  }

  /**
   * Agent.triggers
   */
  export type Agent$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Agent.logs
   */
  export type Agent$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Mcp
   */

  export type AggregateMcp = {
    _count: McpCountAggregateOutputType | null
    _min: McpMinAggregateOutputType | null
    _max: McpMaxAggregateOutputType | null
  }

  export type McpMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    type: string | null
    author: string | null
  }

  export type McpMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    type: string | null
    author: string | null
  }

  export type McpCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    type: number
    author: number
    tags: number
    _all: number
  }


  export type McpMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    type?: true
    author?: true
  }

  export type McpMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    type?: true
    author?: true
  }

  export type McpCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    type?: true
    author?: true
    tags?: true
    _all?: true
  }

  export type McpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mcp to aggregate.
     */
    where?: McpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcps to fetch.
     */
    orderBy?: McpOrderByWithRelationInput | McpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: McpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mcps
    **/
    _count?: true | McpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: McpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: McpMaxAggregateInputType
  }

  export type GetMcpAggregateType<T extends McpAggregateArgs> = {
        [P in keyof T & keyof AggregateMcp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMcp[P]>
      : GetScalarType<T[P], AggregateMcp[P]>
  }




  export type McpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McpWhereInput
    orderBy?: McpOrderByWithAggregationInput | McpOrderByWithAggregationInput[]
    by: McpScalarFieldEnum[] | McpScalarFieldEnum
    having?: McpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: McpCountAggregateInputType | true
    _min?: McpMinAggregateInputType
    _max?: McpMaxAggregateInputType
  }

  export type McpGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    type: string
    author: string
    tags: string[]
    _count: McpCountAggregateOutputType | null
    _min: McpMinAggregateOutputType | null
    _max: McpMaxAggregateOutputType | null
  }

  type GetMcpGroupByPayload<T extends McpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<McpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof McpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], McpGroupByOutputType[P]>
            : GetScalarType<T[P], McpGroupByOutputType[P]>
        }
      >
    >


  export type McpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    author?: boolean
    tags?: boolean
    agents?: boolean | Mcp$agentsArgs<ExtArgs>
    storeItem?: boolean | Mcp$storeItemArgs<ExtArgs>
    _count?: boolean | McpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcp"]>

  export type McpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    author?: boolean
    tags?: boolean
  }, ExtArgs["result"]["mcp"]>

  export type McpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    author?: boolean
    tags?: boolean
  }, ExtArgs["result"]["mcp"]>

  export type McpSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    author?: boolean
    tags?: boolean
  }

  export type McpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "type" | "author" | "tags", ExtArgs["result"]["mcp"]>
  export type McpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | Mcp$agentsArgs<ExtArgs>
    storeItem?: boolean | Mcp$storeItemArgs<ExtArgs>
    _count?: boolean | McpCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type McpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type McpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $McpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mcp"
    objects: {
      agents: Prisma.$AgentMcpPayload<ExtArgs>[]
      storeItem: Prisma.$StoreItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
      type: string
      author: string
      tags: string[]
    }, ExtArgs["result"]["mcp"]>
    composites: {}
  }

  type McpGetPayload<S extends boolean | null | undefined | McpDefaultArgs> = $Result.GetResult<Prisma.$McpPayload, S>

  type McpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<McpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: McpCountAggregateInputType | true
    }

  export interface McpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mcp'], meta: { name: 'Mcp' } }
    /**
     * Find zero or one Mcp that matches the filter.
     * @param {McpFindUniqueArgs} args - Arguments to find a Mcp
     * @example
     * // Get one Mcp
     * const mcp = await prisma.mcp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McpFindUniqueArgs>(args: SelectSubset<T, McpFindUniqueArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mcp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McpFindUniqueOrThrowArgs} args - Arguments to find a Mcp
     * @example
     * // Get one Mcp
     * const mcp = await prisma.mcp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McpFindUniqueOrThrowArgs>(args: SelectSubset<T, McpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mcp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpFindFirstArgs} args - Arguments to find a Mcp
     * @example
     * // Get one Mcp
     * const mcp = await prisma.mcp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McpFindFirstArgs>(args?: SelectSubset<T, McpFindFirstArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mcp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpFindFirstOrThrowArgs} args - Arguments to find a Mcp
     * @example
     * // Get one Mcp
     * const mcp = await prisma.mcp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McpFindFirstOrThrowArgs>(args?: SelectSubset<T, McpFindFirstOrThrowArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mcps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mcps
     * const mcps = await prisma.mcp.findMany()
     * 
     * // Get first 10 Mcps
     * const mcps = await prisma.mcp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mcpWithIdOnly = await prisma.mcp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends McpFindManyArgs>(args?: SelectSubset<T, McpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mcp.
     * @param {McpCreateArgs} args - Arguments to create a Mcp.
     * @example
     * // Create one Mcp
     * const Mcp = await prisma.mcp.create({
     *   data: {
     *     // ... data to create a Mcp
     *   }
     * })
     * 
     */
    create<T extends McpCreateArgs>(args: SelectSubset<T, McpCreateArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mcps.
     * @param {McpCreateManyArgs} args - Arguments to create many Mcps.
     * @example
     * // Create many Mcps
     * const mcp = await prisma.mcp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends McpCreateManyArgs>(args?: SelectSubset<T, McpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mcps and returns the data saved in the database.
     * @param {McpCreateManyAndReturnArgs} args - Arguments to create many Mcps.
     * @example
     * // Create many Mcps
     * const mcp = await prisma.mcp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mcps and only return the `id`
     * const mcpWithIdOnly = await prisma.mcp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends McpCreateManyAndReturnArgs>(args?: SelectSubset<T, McpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mcp.
     * @param {McpDeleteArgs} args - Arguments to delete one Mcp.
     * @example
     * // Delete one Mcp
     * const Mcp = await prisma.mcp.delete({
     *   where: {
     *     // ... filter to delete one Mcp
     *   }
     * })
     * 
     */
    delete<T extends McpDeleteArgs>(args: SelectSubset<T, McpDeleteArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mcp.
     * @param {McpUpdateArgs} args - Arguments to update one Mcp.
     * @example
     * // Update one Mcp
     * const mcp = await prisma.mcp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends McpUpdateArgs>(args: SelectSubset<T, McpUpdateArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mcps.
     * @param {McpDeleteManyArgs} args - Arguments to filter Mcps to delete.
     * @example
     * // Delete a few Mcps
     * const { count } = await prisma.mcp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends McpDeleteManyArgs>(args?: SelectSubset<T, McpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mcps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mcps
     * const mcp = await prisma.mcp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends McpUpdateManyArgs>(args: SelectSubset<T, McpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mcps and returns the data updated in the database.
     * @param {McpUpdateManyAndReturnArgs} args - Arguments to update many Mcps.
     * @example
     * // Update many Mcps
     * const mcp = await prisma.mcp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mcps and only return the `id`
     * const mcpWithIdOnly = await prisma.mcp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends McpUpdateManyAndReturnArgs>(args: SelectSubset<T, McpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mcp.
     * @param {McpUpsertArgs} args - Arguments to update or create a Mcp.
     * @example
     * // Update or create a Mcp
     * const mcp = await prisma.mcp.upsert({
     *   create: {
     *     // ... data to create a Mcp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mcp we want to update
     *   }
     * })
     */
    upsert<T extends McpUpsertArgs>(args: SelectSubset<T, McpUpsertArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mcps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpCountArgs} args - Arguments to filter Mcps to count.
     * @example
     * // Count the number of Mcps
     * const count = await prisma.mcp.count({
     *   where: {
     *     // ... the filter for the Mcps we want to count
     *   }
     * })
    **/
    count<T extends McpCountArgs>(
      args?: Subset<T, McpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], McpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mcp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends McpAggregateArgs>(args: Subset<T, McpAggregateArgs>): Prisma.PrismaPromise<GetMcpAggregateType<T>>

    /**
     * Group by Mcp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends McpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: McpGroupByArgs['orderBy'] }
        : { orderBy?: McpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, McpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mcp model
   */
  readonly fields: McpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mcp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__McpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agents<T extends Mcp$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Mcp$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storeItem<T extends Mcp$storeItemArgs<ExtArgs> = {}>(args?: Subset<T, Mcp$storeItemArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mcp model
   */
  interface McpFieldRefs {
    readonly id: FieldRef<"Mcp", 'String'>
    readonly createdAt: FieldRef<"Mcp", 'DateTime'>
    readonly updatedAt: FieldRef<"Mcp", 'DateTime'>
    readonly name: FieldRef<"Mcp", 'String'>
    readonly description: FieldRef<"Mcp", 'String'>
    readonly type: FieldRef<"Mcp", 'String'>
    readonly author: FieldRef<"Mcp", 'String'>
    readonly tags: FieldRef<"Mcp", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Mcp findUnique
   */
  export type McpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * Filter, which Mcp to fetch.
     */
    where: McpWhereUniqueInput
  }

  /**
   * Mcp findUniqueOrThrow
   */
  export type McpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * Filter, which Mcp to fetch.
     */
    where: McpWhereUniqueInput
  }

  /**
   * Mcp findFirst
   */
  export type McpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * Filter, which Mcp to fetch.
     */
    where?: McpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcps to fetch.
     */
    orderBy?: McpOrderByWithRelationInput | McpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mcps.
     */
    cursor?: McpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mcps.
     */
    distinct?: McpScalarFieldEnum | McpScalarFieldEnum[]
  }

  /**
   * Mcp findFirstOrThrow
   */
  export type McpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * Filter, which Mcp to fetch.
     */
    where?: McpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcps to fetch.
     */
    orderBy?: McpOrderByWithRelationInput | McpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mcps.
     */
    cursor?: McpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mcps.
     */
    distinct?: McpScalarFieldEnum | McpScalarFieldEnum[]
  }

  /**
   * Mcp findMany
   */
  export type McpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * Filter, which Mcps to fetch.
     */
    where?: McpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mcps to fetch.
     */
    orderBy?: McpOrderByWithRelationInput | McpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mcps.
     */
    cursor?: McpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mcps.
     */
    skip?: number
    distinct?: McpScalarFieldEnum | McpScalarFieldEnum[]
  }

  /**
   * Mcp create
   */
  export type McpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * The data needed to create a Mcp.
     */
    data: XOR<McpCreateInput, McpUncheckedCreateInput>
  }

  /**
   * Mcp createMany
   */
  export type McpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mcps.
     */
    data: McpCreateManyInput | McpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mcp createManyAndReturn
   */
  export type McpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * The data used to create many Mcps.
     */
    data: McpCreateManyInput | McpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mcp update
   */
  export type McpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * The data needed to update a Mcp.
     */
    data: XOR<McpUpdateInput, McpUncheckedUpdateInput>
    /**
     * Choose, which Mcp to update.
     */
    where: McpWhereUniqueInput
  }

  /**
   * Mcp updateMany
   */
  export type McpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mcps.
     */
    data: XOR<McpUpdateManyMutationInput, McpUncheckedUpdateManyInput>
    /**
     * Filter which Mcps to update
     */
    where?: McpWhereInput
    /**
     * Limit how many Mcps to update.
     */
    limit?: number
  }

  /**
   * Mcp updateManyAndReturn
   */
  export type McpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * The data used to update Mcps.
     */
    data: XOR<McpUpdateManyMutationInput, McpUncheckedUpdateManyInput>
    /**
     * Filter which Mcps to update
     */
    where?: McpWhereInput
    /**
     * Limit how many Mcps to update.
     */
    limit?: number
  }

  /**
   * Mcp upsert
   */
  export type McpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * The filter to search for the Mcp to update in case it exists.
     */
    where: McpWhereUniqueInput
    /**
     * In case the Mcp found by the `where` argument doesn't exist, create a new Mcp with this data.
     */
    create: XOR<McpCreateInput, McpUncheckedCreateInput>
    /**
     * In case the Mcp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<McpUpdateInput, McpUncheckedUpdateInput>
  }

  /**
   * Mcp delete
   */
  export type McpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    /**
     * Filter which Mcp to delete.
     */
    where: McpWhereUniqueInput
  }

  /**
   * Mcp deleteMany
   */
  export type McpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mcps to delete
     */
    where?: McpWhereInput
    /**
     * Limit how many Mcps to delete.
     */
    limit?: number
  }

  /**
   * Mcp.agents
   */
  export type Mcp$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    where?: AgentMcpWhereInput
    orderBy?: AgentMcpOrderByWithRelationInput | AgentMcpOrderByWithRelationInput[]
    cursor?: AgentMcpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentMcpScalarFieldEnum | AgentMcpScalarFieldEnum[]
  }

  /**
   * Mcp.storeItem
   */
  export type Mcp$storeItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    where?: StoreItemWhereInput
  }

  /**
   * Mcp without action
   */
  export type McpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
  }


  /**
   * Model AgentMcp
   */

  export type AggregateAgentMcp = {
    _count: AgentMcpCountAggregateOutputType | null
    _min: AgentMcpMinAggregateOutputType | null
    _max: AgentMcpMaxAggregateOutputType | null
  }

  export type AgentMcpMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    agentId: string | null
    mcpId: string | null
  }

  export type AgentMcpMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    agentId: string | null
    mcpId: string | null
  }

  export type AgentMcpCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    configuration: number
    agentId: number
    mcpId: number
    _all: number
  }


  export type AgentMcpMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    agentId?: true
    mcpId?: true
  }

  export type AgentMcpMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    agentId?: true
    mcpId?: true
  }

  export type AgentMcpCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    configuration?: true
    agentId?: true
    mcpId?: true
    _all?: true
  }

  export type AgentMcpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentMcp to aggregate.
     */
    where?: AgentMcpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentMcps to fetch.
     */
    orderBy?: AgentMcpOrderByWithRelationInput | AgentMcpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentMcpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentMcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentMcps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentMcps
    **/
    _count?: true | AgentMcpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMcpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMcpMaxAggregateInputType
  }

  export type GetAgentMcpAggregateType<T extends AgentMcpAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentMcp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentMcp[P]>
      : GetScalarType<T[P], AggregateAgentMcp[P]>
  }




  export type AgentMcpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentMcpWhereInput
    orderBy?: AgentMcpOrderByWithAggregationInput | AgentMcpOrderByWithAggregationInput[]
    by: AgentMcpScalarFieldEnum[] | AgentMcpScalarFieldEnum
    having?: AgentMcpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentMcpCountAggregateInputType | true
    _min?: AgentMcpMinAggregateInputType
    _max?: AgentMcpMaxAggregateInputType
  }

  export type AgentMcpGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    configuration: JsonValue | null
    agentId: string
    mcpId: string
    _count: AgentMcpCountAggregateOutputType | null
    _min: AgentMcpMinAggregateOutputType | null
    _max: AgentMcpMaxAggregateOutputType | null
  }

  type GetAgentMcpGroupByPayload<T extends AgentMcpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentMcpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentMcpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentMcpGroupByOutputType[P]>
            : GetScalarType<T[P], AgentMcpGroupByOutputType[P]>
        }
      >
    >


  export type AgentMcpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean
    agentId?: boolean
    mcpId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    mcp?: boolean | McpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentMcp"]>

  export type AgentMcpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean
    agentId?: boolean
    mcpId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    mcp?: boolean | McpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentMcp"]>

  export type AgentMcpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean
    agentId?: boolean
    mcpId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    mcp?: boolean | McpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agentMcp"]>

  export type AgentMcpSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    configuration?: boolean
    agentId?: boolean
    mcpId?: boolean
  }

  export type AgentMcpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "configuration" | "agentId" | "mcpId", ExtArgs["result"]["agentMcp"]>
  export type AgentMcpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    mcp?: boolean | McpDefaultArgs<ExtArgs>
  }
  export type AgentMcpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    mcp?: boolean | McpDefaultArgs<ExtArgs>
  }
  export type AgentMcpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
    mcp?: boolean | McpDefaultArgs<ExtArgs>
  }

  export type $AgentMcpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentMcp"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
      mcp: Prisma.$McpPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      configuration: Prisma.JsonValue | null
      agentId: string
      mcpId: string
    }, ExtArgs["result"]["agentMcp"]>
    composites: {}
  }

  type AgentMcpGetPayload<S extends boolean | null | undefined | AgentMcpDefaultArgs> = $Result.GetResult<Prisma.$AgentMcpPayload, S>

  type AgentMcpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentMcpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentMcpCountAggregateInputType | true
    }

  export interface AgentMcpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentMcp'], meta: { name: 'AgentMcp' } }
    /**
     * Find zero or one AgentMcp that matches the filter.
     * @param {AgentMcpFindUniqueArgs} args - Arguments to find a AgentMcp
     * @example
     * // Get one AgentMcp
     * const agentMcp = await prisma.agentMcp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentMcpFindUniqueArgs>(args: SelectSubset<T, AgentMcpFindUniqueArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentMcp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentMcpFindUniqueOrThrowArgs} args - Arguments to find a AgentMcp
     * @example
     * // Get one AgentMcp
     * const agentMcp = await prisma.agentMcp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentMcpFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentMcpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentMcp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpFindFirstArgs} args - Arguments to find a AgentMcp
     * @example
     * // Get one AgentMcp
     * const agentMcp = await prisma.agentMcp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentMcpFindFirstArgs>(args?: SelectSubset<T, AgentMcpFindFirstArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentMcp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpFindFirstOrThrowArgs} args - Arguments to find a AgentMcp
     * @example
     * // Get one AgentMcp
     * const agentMcp = await prisma.agentMcp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentMcpFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentMcpFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentMcps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentMcps
     * const agentMcps = await prisma.agentMcp.findMany()
     * 
     * // Get first 10 AgentMcps
     * const agentMcps = await prisma.agentMcp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentMcpWithIdOnly = await prisma.agentMcp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentMcpFindManyArgs>(args?: SelectSubset<T, AgentMcpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentMcp.
     * @param {AgentMcpCreateArgs} args - Arguments to create a AgentMcp.
     * @example
     * // Create one AgentMcp
     * const AgentMcp = await prisma.agentMcp.create({
     *   data: {
     *     // ... data to create a AgentMcp
     *   }
     * })
     * 
     */
    create<T extends AgentMcpCreateArgs>(args: SelectSubset<T, AgentMcpCreateArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentMcps.
     * @param {AgentMcpCreateManyArgs} args - Arguments to create many AgentMcps.
     * @example
     * // Create many AgentMcps
     * const agentMcp = await prisma.agentMcp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentMcpCreateManyArgs>(args?: SelectSubset<T, AgentMcpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentMcps and returns the data saved in the database.
     * @param {AgentMcpCreateManyAndReturnArgs} args - Arguments to create many AgentMcps.
     * @example
     * // Create many AgentMcps
     * const agentMcp = await prisma.agentMcp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentMcps and only return the `id`
     * const agentMcpWithIdOnly = await prisma.agentMcp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentMcpCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentMcpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentMcp.
     * @param {AgentMcpDeleteArgs} args - Arguments to delete one AgentMcp.
     * @example
     * // Delete one AgentMcp
     * const AgentMcp = await prisma.agentMcp.delete({
     *   where: {
     *     // ... filter to delete one AgentMcp
     *   }
     * })
     * 
     */
    delete<T extends AgentMcpDeleteArgs>(args: SelectSubset<T, AgentMcpDeleteArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentMcp.
     * @param {AgentMcpUpdateArgs} args - Arguments to update one AgentMcp.
     * @example
     * // Update one AgentMcp
     * const agentMcp = await prisma.agentMcp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentMcpUpdateArgs>(args: SelectSubset<T, AgentMcpUpdateArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentMcps.
     * @param {AgentMcpDeleteManyArgs} args - Arguments to filter AgentMcps to delete.
     * @example
     * // Delete a few AgentMcps
     * const { count } = await prisma.agentMcp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentMcpDeleteManyArgs>(args?: SelectSubset<T, AgentMcpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentMcps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentMcps
     * const agentMcp = await prisma.agentMcp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentMcpUpdateManyArgs>(args: SelectSubset<T, AgentMcpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentMcps and returns the data updated in the database.
     * @param {AgentMcpUpdateManyAndReturnArgs} args - Arguments to update many AgentMcps.
     * @example
     * // Update many AgentMcps
     * const agentMcp = await prisma.agentMcp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentMcps and only return the `id`
     * const agentMcpWithIdOnly = await prisma.agentMcp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentMcpUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentMcpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentMcp.
     * @param {AgentMcpUpsertArgs} args - Arguments to update or create a AgentMcp.
     * @example
     * // Update or create a AgentMcp
     * const agentMcp = await prisma.agentMcp.upsert({
     *   create: {
     *     // ... data to create a AgentMcp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentMcp we want to update
     *   }
     * })
     */
    upsert<T extends AgentMcpUpsertArgs>(args: SelectSubset<T, AgentMcpUpsertArgs<ExtArgs>>): Prisma__AgentMcpClient<$Result.GetResult<Prisma.$AgentMcpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentMcps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpCountArgs} args - Arguments to filter AgentMcps to count.
     * @example
     * // Count the number of AgentMcps
     * const count = await prisma.agentMcp.count({
     *   where: {
     *     // ... the filter for the AgentMcps we want to count
     *   }
     * })
    **/
    count<T extends AgentMcpCountArgs>(
      args?: Subset<T, AgentMcpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentMcpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentMcp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentMcpAggregateArgs>(args: Subset<T, AgentMcpAggregateArgs>): Prisma.PrismaPromise<GetAgentMcpAggregateType<T>>

    /**
     * Group by AgentMcp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentMcpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentMcpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentMcpGroupByArgs['orderBy'] }
        : { orderBy?: AgentMcpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentMcpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentMcpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentMcp model
   */
  readonly fields: AgentMcpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentMcp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentMcpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mcp<T extends McpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, McpDefaultArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentMcp model
   */
  interface AgentMcpFieldRefs {
    readonly id: FieldRef<"AgentMcp", 'String'>
    readonly createdAt: FieldRef<"AgentMcp", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentMcp", 'DateTime'>
    readonly configuration: FieldRef<"AgentMcp", 'Json'>
    readonly agentId: FieldRef<"AgentMcp", 'String'>
    readonly mcpId: FieldRef<"AgentMcp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgentMcp findUnique
   */
  export type AgentMcpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * Filter, which AgentMcp to fetch.
     */
    where: AgentMcpWhereUniqueInput
  }

  /**
   * AgentMcp findUniqueOrThrow
   */
  export type AgentMcpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * Filter, which AgentMcp to fetch.
     */
    where: AgentMcpWhereUniqueInput
  }

  /**
   * AgentMcp findFirst
   */
  export type AgentMcpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * Filter, which AgentMcp to fetch.
     */
    where?: AgentMcpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentMcps to fetch.
     */
    orderBy?: AgentMcpOrderByWithRelationInput | AgentMcpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentMcps.
     */
    cursor?: AgentMcpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentMcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentMcps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentMcps.
     */
    distinct?: AgentMcpScalarFieldEnum | AgentMcpScalarFieldEnum[]
  }

  /**
   * AgentMcp findFirstOrThrow
   */
  export type AgentMcpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * Filter, which AgentMcp to fetch.
     */
    where?: AgentMcpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentMcps to fetch.
     */
    orderBy?: AgentMcpOrderByWithRelationInput | AgentMcpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentMcps.
     */
    cursor?: AgentMcpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentMcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentMcps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentMcps.
     */
    distinct?: AgentMcpScalarFieldEnum | AgentMcpScalarFieldEnum[]
  }

  /**
   * AgentMcp findMany
   */
  export type AgentMcpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * Filter, which AgentMcps to fetch.
     */
    where?: AgentMcpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentMcps to fetch.
     */
    orderBy?: AgentMcpOrderByWithRelationInput | AgentMcpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentMcps.
     */
    cursor?: AgentMcpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentMcps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentMcps.
     */
    skip?: number
    distinct?: AgentMcpScalarFieldEnum | AgentMcpScalarFieldEnum[]
  }

  /**
   * AgentMcp create
   */
  export type AgentMcpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentMcp.
     */
    data: XOR<AgentMcpCreateInput, AgentMcpUncheckedCreateInput>
  }

  /**
   * AgentMcp createMany
   */
  export type AgentMcpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentMcps.
     */
    data: AgentMcpCreateManyInput | AgentMcpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentMcp createManyAndReturn
   */
  export type AgentMcpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * The data used to create many AgentMcps.
     */
    data: AgentMcpCreateManyInput | AgentMcpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentMcp update
   */
  export type AgentMcpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentMcp.
     */
    data: XOR<AgentMcpUpdateInput, AgentMcpUncheckedUpdateInput>
    /**
     * Choose, which AgentMcp to update.
     */
    where: AgentMcpWhereUniqueInput
  }

  /**
   * AgentMcp updateMany
   */
  export type AgentMcpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentMcps.
     */
    data: XOR<AgentMcpUpdateManyMutationInput, AgentMcpUncheckedUpdateManyInput>
    /**
     * Filter which AgentMcps to update
     */
    where?: AgentMcpWhereInput
    /**
     * Limit how many AgentMcps to update.
     */
    limit?: number
  }

  /**
   * AgentMcp updateManyAndReturn
   */
  export type AgentMcpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * The data used to update AgentMcps.
     */
    data: XOR<AgentMcpUpdateManyMutationInput, AgentMcpUncheckedUpdateManyInput>
    /**
     * Filter which AgentMcps to update
     */
    where?: AgentMcpWhereInput
    /**
     * Limit how many AgentMcps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentMcp upsert
   */
  export type AgentMcpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentMcp to update in case it exists.
     */
    where: AgentMcpWhereUniqueInput
    /**
     * In case the AgentMcp found by the `where` argument doesn't exist, create a new AgentMcp with this data.
     */
    create: XOR<AgentMcpCreateInput, AgentMcpUncheckedCreateInput>
    /**
     * In case the AgentMcp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentMcpUpdateInput, AgentMcpUncheckedUpdateInput>
  }

  /**
   * AgentMcp delete
   */
  export type AgentMcpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
    /**
     * Filter which AgentMcp to delete.
     */
    where: AgentMcpWhereUniqueInput
  }

  /**
   * AgentMcp deleteMany
   */
  export type AgentMcpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentMcps to delete
     */
    where?: AgentMcpWhereInput
    /**
     * Limit how many AgentMcps to delete.
     */
    limit?: number
  }

  /**
   * AgentMcp without action
   */
  export type AgentMcpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentMcp
     */
    select?: AgentMcpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentMcp
     */
    omit?: AgentMcpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentMcpInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.TriggerType | null
    agentId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.TriggerType | null
    agentId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    type: number
    configuration: number
    agentId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    agentId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    agentId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    configuration?: true
    agentId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    type: $Enums.TriggerType
    configuration: JsonValue
    agentId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    configuration?: boolean
    agentId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    configuration?: boolean
    agentId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    configuration?: boolean
    agentId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    configuration?: boolean
    agentId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "type" | "configuration" | "agentId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      type: $Enums.TriggerType
      configuration: Prisma.JsonValue
      agentId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly createdAt: FieldRef<"Trigger", 'DateTime'>
    readonly updatedAt: FieldRef<"Trigger", 'DateTime'>
    readonly type: FieldRef<"Trigger", 'TriggerType'>
    readonly configuration: FieldRef<"Trigger", 'Json'>
    readonly agentId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    message: string | null
    agentId: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    message: string | null
    agentId: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    createdAt: number
    message: number
    agentId: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    agentId?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    agentId?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    agentId?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    createdAt: Date
    message: string
    agentId: string
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    message?: boolean
    agentId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    message?: boolean
    agentId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    message?: boolean
    agentId?: boolean
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    message?: boolean
    agentId?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "message" | "agentId", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      agent: Prisma.$AgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      message: string
      agentId: string
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly createdAt: FieldRef<"Log", 'DateTime'>
    readonly message: FieldRef<"Log", 'String'>
    readonly agentId: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model StoreItem
   */

  export type AggregateStoreItem = {
    _count: StoreItemCountAggregateOutputType | null
    _min: StoreItemMinAggregateOutputType | null
    _max: StoreItemMaxAggregateOutputType | null
  }

  export type StoreItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    details: string | null
    type: $Enums.ItemType | null
    creator: string | null
    mcpId: string | null
  }

  export type StoreItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    details: string | null
    type: $Enums.ItemType | null
    creator: string | null
    mcpId: string | null
  }

  export type StoreItemCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    details: number
    type: number
    creator: number
    tags: number
    agentTemplate: number
    mcpId: number
    _all: number
  }


  export type StoreItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    details?: true
    type?: true
    creator?: true
    mcpId?: true
  }

  export type StoreItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    details?: true
    type?: true
    creator?: true
    mcpId?: true
  }

  export type StoreItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    details?: true
    type?: true
    creator?: true
    tags?: true
    agentTemplate?: true
    mcpId?: true
    _all?: true
  }

  export type StoreItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreItem to aggregate.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreItems
    **/
    _count?: true | StoreItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreItemMaxAggregateInputType
  }

  export type GetStoreItemAggregateType<T extends StoreItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreItem[P]>
      : GetScalarType<T[P], AggregateStoreItem[P]>
  }




  export type StoreItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreItemWhereInput
    orderBy?: StoreItemOrderByWithAggregationInput | StoreItemOrderByWithAggregationInput[]
    by: StoreItemScalarFieldEnum[] | StoreItemScalarFieldEnum
    having?: StoreItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreItemCountAggregateInputType | true
    _min?: StoreItemMinAggregateInputType
    _max?: StoreItemMaxAggregateInputType
  }

  export type StoreItemGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    details: string | null
    type: $Enums.ItemType
    creator: string
    tags: string[]
    agentTemplate: JsonValue | null
    mcpId: string | null
    _count: StoreItemCountAggregateOutputType | null
    _min: StoreItemMinAggregateOutputType | null
    _max: StoreItemMaxAggregateOutputType | null
  }

  type GetStoreItemGroupByPayload<T extends StoreItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreItemGroupByOutputType[P]>
            : GetScalarType<T[P], StoreItemGroupByOutputType[P]>
        }
      >
    >


  export type StoreItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    type?: boolean
    creator?: boolean
    tags?: boolean
    agentTemplate?: boolean
    mcpId?: boolean
    mcp?: boolean | StoreItem$mcpArgs<ExtArgs>
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    type?: boolean
    creator?: boolean
    tags?: boolean
    agentTemplate?: boolean
    mcpId?: boolean
    mcp?: boolean | StoreItem$mcpArgs<ExtArgs>
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    type?: boolean
    creator?: boolean
    tags?: boolean
    agentTemplate?: boolean
    mcpId?: boolean
    mcp?: boolean | StoreItem$mcpArgs<ExtArgs>
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    details?: boolean
    type?: boolean
    creator?: boolean
    tags?: boolean
    agentTemplate?: boolean
    mcpId?: boolean
  }

  export type StoreItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "details" | "type" | "creator" | "tags" | "agentTemplate" | "mcpId", ExtArgs["result"]["storeItem"]>
  export type StoreItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcp?: boolean | StoreItem$mcpArgs<ExtArgs>
  }
  export type StoreItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcp?: boolean | StoreItem$mcpArgs<ExtArgs>
  }
  export type StoreItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcp?: boolean | StoreItem$mcpArgs<ExtArgs>
  }

  export type $StoreItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreItem"
    objects: {
      mcp: Prisma.$McpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
      details: string | null
      type: $Enums.ItemType
      creator: string
      tags: string[]
      agentTemplate: Prisma.JsonValue | null
      mcpId: string | null
    }, ExtArgs["result"]["storeItem"]>
    composites: {}
  }

  type StoreItemGetPayload<S extends boolean | null | undefined | StoreItemDefaultArgs> = $Result.GetResult<Prisma.$StoreItemPayload, S>

  type StoreItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreItemCountAggregateInputType | true
    }

  export interface StoreItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreItem'], meta: { name: 'StoreItem' } }
    /**
     * Find zero or one StoreItem that matches the filter.
     * @param {StoreItemFindUniqueArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreItemFindUniqueArgs>(args: SelectSubset<T, StoreItemFindUniqueArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreItemFindUniqueOrThrowArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreItemFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindFirstArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreItemFindFirstArgs>(args?: SelectSubset<T, StoreItemFindFirstArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindFirstOrThrowArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreItemFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreItems
     * const storeItems = await prisma.storeItem.findMany()
     * 
     * // Get first 10 StoreItems
     * const storeItems = await prisma.storeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreItemFindManyArgs>(args?: SelectSubset<T, StoreItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreItem.
     * @param {StoreItemCreateArgs} args - Arguments to create a StoreItem.
     * @example
     * // Create one StoreItem
     * const StoreItem = await prisma.storeItem.create({
     *   data: {
     *     // ... data to create a StoreItem
     *   }
     * })
     * 
     */
    create<T extends StoreItemCreateArgs>(args: SelectSubset<T, StoreItemCreateArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreItems.
     * @param {StoreItemCreateManyArgs} args - Arguments to create many StoreItems.
     * @example
     * // Create many StoreItems
     * const storeItem = await prisma.storeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreItemCreateManyArgs>(args?: SelectSubset<T, StoreItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreItems and returns the data saved in the database.
     * @param {StoreItemCreateManyAndReturnArgs} args - Arguments to create many StoreItems.
     * @example
     * // Create many StoreItems
     * const storeItem = await prisma.storeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreItems and only return the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreItemCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreItem.
     * @param {StoreItemDeleteArgs} args - Arguments to delete one StoreItem.
     * @example
     * // Delete one StoreItem
     * const StoreItem = await prisma.storeItem.delete({
     *   where: {
     *     // ... filter to delete one StoreItem
     *   }
     * })
     * 
     */
    delete<T extends StoreItemDeleteArgs>(args: SelectSubset<T, StoreItemDeleteArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreItem.
     * @param {StoreItemUpdateArgs} args - Arguments to update one StoreItem.
     * @example
     * // Update one StoreItem
     * const storeItem = await prisma.storeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreItemUpdateArgs>(args: SelectSubset<T, StoreItemUpdateArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreItems.
     * @param {StoreItemDeleteManyArgs} args - Arguments to filter StoreItems to delete.
     * @example
     * // Delete a few StoreItems
     * const { count } = await prisma.storeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreItemDeleteManyArgs>(args?: SelectSubset<T, StoreItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreItems
     * const storeItem = await prisma.storeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreItemUpdateManyArgs>(args: SelectSubset<T, StoreItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreItems and returns the data updated in the database.
     * @param {StoreItemUpdateManyAndReturnArgs} args - Arguments to update many StoreItems.
     * @example
     * // Update many StoreItems
     * const storeItem = await prisma.storeItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreItems and only return the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreItemUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreItem.
     * @param {StoreItemUpsertArgs} args - Arguments to update or create a StoreItem.
     * @example
     * // Update or create a StoreItem
     * const storeItem = await prisma.storeItem.upsert({
     *   create: {
     *     // ... data to create a StoreItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreItem we want to update
     *   }
     * })
     */
    upsert<T extends StoreItemUpsertArgs>(args: SelectSubset<T, StoreItemUpsertArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemCountArgs} args - Arguments to filter StoreItems to count.
     * @example
     * // Count the number of StoreItems
     * const count = await prisma.storeItem.count({
     *   where: {
     *     // ... the filter for the StoreItems we want to count
     *   }
     * })
    **/
    count<T extends StoreItemCountArgs>(
      args?: Subset<T, StoreItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreItemAggregateArgs>(args: Subset<T, StoreItemAggregateArgs>): Prisma.PrismaPromise<GetStoreItemAggregateType<T>>

    /**
     * Group by StoreItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreItemGroupByArgs['orderBy'] }
        : { orderBy?: StoreItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreItem model
   */
  readonly fields: StoreItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mcp<T extends StoreItem$mcpArgs<ExtArgs> = {}>(args?: Subset<T, StoreItem$mcpArgs<ExtArgs>>): Prisma__McpClient<$Result.GetResult<Prisma.$McpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreItem model
   */
  interface StoreItemFieldRefs {
    readonly id: FieldRef<"StoreItem", 'String'>
    readonly createdAt: FieldRef<"StoreItem", 'DateTime'>
    readonly updatedAt: FieldRef<"StoreItem", 'DateTime'>
    readonly name: FieldRef<"StoreItem", 'String'>
    readonly description: FieldRef<"StoreItem", 'String'>
    readonly details: FieldRef<"StoreItem", 'String'>
    readonly type: FieldRef<"StoreItem", 'ItemType'>
    readonly creator: FieldRef<"StoreItem", 'String'>
    readonly tags: FieldRef<"StoreItem", 'String[]'>
    readonly agentTemplate: FieldRef<"StoreItem", 'Json'>
    readonly mcpId: FieldRef<"StoreItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StoreItem findUnique
   */
  export type StoreItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem findUniqueOrThrow
   */
  export type StoreItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem findFirst
   */
  export type StoreItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreItems.
     */
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem findFirstOrThrow
   */
  export type StoreItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreItems.
     */
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem findMany
   */
  export type StoreItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter, which StoreItems to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem create
   */
  export type StoreItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreItem.
     */
    data: XOR<StoreItemCreateInput, StoreItemUncheckedCreateInput>
  }

  /**
   * StoreItem createMany
   */
  export type StoreItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreItems.
     */
    data: StoreItemCreateManyInput | StoreItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreItem createManyAndReturn
   */
  export type StoreItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The data used to create many StoreItems.
     */
    data: StoreItemCreateManyInput | StoreItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreItem update
   */
  export type StoreItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreItem.
     */
    data: XOR<StoreItemUpdateInput, StoreItemUncheckedUpdateInput>
    /**
     * Choose, which StoreItem to update.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem updateMany
   */
  export type StoreItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreItems.
     */
    data: XOR<StoreItemUpdateManyMutationInput, StoreItemUncheckedUpdateManyInput>
    /**
     * Filter which StoreItems to update
     */
    where?: StoreItemWhereInput
    /**
     * Limit how many StoreItems to update.
     */
    limit?: number
  }

  /**
   * StoreItem updateManyAndReturn
   */
  export type StoreItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The data used to update StoreItems.
     */
    data: XOR<StoreItemUpdateManyMutationInput, StoreItemUncheckedUpdateManyInput>
    /**
     * Filter which StoreItems to update
     */
    where?: StoreItemWhereInput
    /**
     * Limit how many StoreItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreItem upsert
   */
  export type StoreItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreItem to update in case it exists.
     */
    where: StoreItemWhereUniqueInput
    /**
     * In case the StoreItem found by the `where` argument doesn't exist, create a new StoreItem with this data.
     */
    create: XOR<StoreItemCreateInput, StoreItemUncheckedCreateInput>
    /**
     * In case the StoreItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreItemUpdateInput, StoreItemUncheckedUpdateInput>
  }

  /**
   * StoreItem delete
   */
  export type StoreItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
    /**
     * Filter which StoreItem to delete.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem deleteMany
   */
  export type StoreItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreItems to delete
     */
    where?: StoreItemWhereInput
    /**
     * Limit how many StoreItems to delete.
     */
    limit?: number
  }

  /**
   * StoreItem.mcp
   */
  export type StoreItem$mcpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mcp
     */
    select?: McpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mcp
     */
    omit?: McpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpInclude<ExtArgs> | null
    where?: McpWhereInput
  }

  /**
   * StoreItem without action
   */
  export type StoreItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreItemInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    role: string | null
    content: string | null
    chatSessionId: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    role: string | null
    content: string | null
    chatSessionId: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    createdAt: number
    role: number
    content: number
    chatSessionId: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    role?: true
    content?: true
    chatSessionId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    role?: true
    content?: true
    chatSessionId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    role?: true
    content?: true
    chatSessionId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    createdAt: Date
    role: string
    content: string
    chatSessionId: string
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    chatSessionId?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    chatSessionId?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    chatSessionId?: boolean
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    chatSessionId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "role" | "content" | "chatSessionId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatSession?: boolean | ChatSessionDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      chatSession: Prisma.$ChatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      role: string
      content: string
      chatSessionId: string
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatSession<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly chatSessionId: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    agentId: string | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    agentId: string | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    agentId: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    agentId?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    agentId?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    agentId?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string | null
    agentId: string | null
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    agentId?: boolean
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    agentId?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    agentId?: boolean
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    agentId?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "agentId", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string | null
      agentId: string | null
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatSession", 'DateTime'>
    readonly title: FieldRef<"ChatSession", 'String'>
    readonly agentId: FieldRef<"ChatSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    username: 'username',
    email: 'email',
    hashedPassword: 'hashedPassword',
    systemPrompt: 'systemPrompt',
    iconUrl: 'iconUrl',
    currentPoints: 'currentPoints',
    autoRecharge: 'autoRecharge'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    planType: 'planType',
    startDate: 'startDate',
    endDate: 'endDate',
    dailyPoints: 'dailyPoints',
    swapFee: 'swapFee',
    userId: 'userId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    status: 'status',
    systemPrompt: 'systemPrompt',
    iconUrl: 'iconUrl',
    userId: 'userId'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const McpScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    type: 'type',
    author: 'author',
    tags: 'tags'
  };

  export type McpScalarFieldEnum = (typeof McpScalarFieldEnum)[keyof typeof McpScalarFieldEnum]


  export const AgentMcpScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    configuration: 'configuration',
    agentId: 'agentId',
    mcpId: 'mcpId'
  };

  export type AgentMcpScalarFieldEnum = (typeof AgentMcpScalarFieldEnum)[keyof typeof AgentMcpScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    configuration: 'configuration',
    agentId: 'agentId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    message: 'message',
    agentId: 'agentId'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const StoreItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    details: 'details',
    type: 'type',
    creator: 'creator',
    tags: 'tags',
    agentTemplate: 'agentTemplate',
    mcpId: 'mcpId'
  };

  export type StoreItemScalarFieldEnum = (typeof StoreItemScalarFieldEnum)[keyof typeof StoreItemScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    role: 'role',
    content: 'content',
    chatSessionId: 'chatSessionId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    agentId: 'agentId'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PlanType'
   */
  export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType'>
    


  /**
   * Reference to a field of type 'PlanType[]'
   */
  export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AgentStatus'
   */
  export type EnumAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentStatus'>
    


  /**
   * Reference to a field of type 'AgentStatus[]'
   */
  export type ListEnumAgentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TriggerType'
   */
  export type EnumTriggerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TriggerType'>
    


  /**
   * Reference to a field of type 'TriggerType[]'
   */
  export type ListEnumTriggerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TriggerType[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    systemPrompt?: StringNullableFilter<"User"> | string | null
    iconUrl?: StringNullableFilter<"User"> | string | null
    currentPoints?: IntFilter<"User"> | number
    autoRecharge?: BoolFilter<"User"> | boolean
    agents?: AgentListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    systemPrompt?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    currentPoints?: SortOrder
    autoRecharge?: SortOrder
    agents?: AgentOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    systemPrompt?: StringNullableFilter<"User"> | string | null
    iconUrl?: StringNullableFilter<"User"> | string | null
    currentPoints?: IntFilter<"User"> | number
    autoRecharge?: BoolFilter<"User"> | boolean
    agents?: AgentListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    systemPrompt?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    currentPoints?: SortOrder
    autoRecharge?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    systemPrompt?: StringNullableWithAggregatesFilter<"User"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentPoints?: IntWithAggregatesFilter<"User"> | number
    autoRecharge?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    planType?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    dailyPoints?: IntFilter<"Subscription"> | number
    swapFee?: FloatFilter<"Subscription"> | number
    userId?: StringFilter<"Subscription"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    dailyPoints?: SortOrder
    swapFee?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    planType?: EnumPlanTypeFilter<"Subscription"> | $Enums.PlanType
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    dailyPoints?: IntFilter<"Subscription"> | number
    swapFee?: FloatFilter<"Subscription"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    dailyPoints?: SortOrder
    swapFee?: SortOrder
    userId?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    planType?: EnumPlanTypeWithAggregatesFilter<"Subscription"> | $Enums.PlanType
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    dailyPoints?: IntWithAggregatesFilter<"Subscription"> | number
    swapFee?: FloatWithAggregatesFilter<"Subscription"> | number
    userId?: StringWithAggregatesFilter<"Subscription"> | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    systemPrompt?: StringNullableFilter<"Agent"> | string | null
    iconUrl?: StringNullableFilter<"Agent"> | string | null
    userId?: StringFilter<"Agent"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    mcps?: AgentMcpListRelationFilter
    triggers?: TriggerListRelationFilter
    logs?: LogListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    systemPrompt?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    creator?: UserOrderByWithRelationInput
    mcps?: AgentMcpOrderByRelationAggregateInput
    triggers?: TriggerOrderByRelationAggregateInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    systemPrompt?: StringNullableFilter<"Agent"> | string | null
    iconUrl?: StringNullableFilter<"Agent"> | string | null
    userId?: StringFilter<"Agent"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    mcps?: AgentMcpListRelationFilter
    triggers?: TriggerListRelationFilter
    logs?: LogListRelationFilter
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    systemPrompt?: SortOrderInput | SortOrder
    iconUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    description?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    status?: EnumAgentStatusWithAggregatesFilter<"Agent"> | $Enums.AgentStatus
    systemPrompt?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    iconUrl?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    userId?: StringWithAggregatesFilter<"Agent"> | string
  }

  export type McpWhereInput = {
    AND?: McpWhereInput | McpWhereInput[]
    OR?: McpWhereInput[]
    NOT?: McpWhereInput | McpWhereInput[]
    id?: StringFilter<"Mcp"> | string
    createdAt?: DateTimeFilter<"Mcp"> | Date | string
    updatedAt?: DateTimeFilter<"Mcp"> | Date | string
    name?: StringFilter<"Mcp"> | string
    description?: StringNullableFilter<"Mcp"> | string | null
    type?: StringFilter<"Mcp"> | string
    author?: StringFilter<"Mcp"> | string
    tags?: StringNullableListFilter<"Mcp">
    agents?: AgentMcpListRelationFilter
    storeItem?: XOR<StoreItemNullableScalarRelationFilter, StoreItemWhereInput> | null
  }

  export type McpOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    author?: SortOrder
    tags?: SortOrder
    agents?: AgentMcpOrderByRelationAggregateInput
    storeItem?: StoreItemOrderByWithRelationInput
  }

  export type McpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: McpWhereInput | McpWhereInput[]
    OR?: McpWhereInput[]
    NOT?: McpWhereInput | McpWhereInput[]
    createdAt?: DateTimeFilter<"Mcp"> | Date | string
    updatedAt?: DateTimeFilter<"Mcp"> | Date | string
    name?: StringFilter<"Mcp"> | string
    description?: StringNullableFilter<"Mcp"> | string | null
    type?: StringFilter<"Mcp"> | string
    author?: StringFilter<"Mcp"> | string
    tags?: StringNullableListFilter<"Mcp">
    agents?: AgentMcpListRelationFilter
    storeItem?: XOR<StoreItemNullableScalarRelationFilter, StoreItemWhereInput> | null
  }, "id">

  export type McpOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    author?: SortOrder
    tags?: SortOrder
    _count?: McpCountOrderByAggregateInput
    _max?: McpMaxOrderByAggregateInput
    _min?: McpMinOrderByAggregateInput
  }

  export type McpScalarWhereWithAggregatesInput = {
    AND?: McpScalarWhereWithAggregatesInput | McpScalarWhereWithAggregatesInput[]
    OR?: McpScalarWhereWithAggregatesInput[]
    NOT?: McpScalarWhereWithAggregatesInput | McpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mcp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Mcp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mcp"> | Date | string
    name?: StringWithAggregatesFilter<"Mcp"> | string
    description?: StringNullableWithAggregatesFilter<"Mcp"> | string | null
    type?: StringWithAggregatesFilter<"Mcp"> | string
    author?: StringWithAggregatesFilter<"Mcp"> | string
    tags?: StringNullableListFilter<"Mcp">
  }

  export type AgentMcpWhereInput = {
    AND?: AgentMcpWhereInput | AgentMcpWhereInput[]
    OR?: AgentMcpWhereInput[]
    NOT?: AgentMcpWhereInput | AgentMcpWhereInput[]
    id?: StringFilter<"AgentMcp"> | string
    createdAt?: DateTimeFilter<"AgentMcp"> | Date | string
    updatedAt?: DateTimeFilter<"AgentMcp"> | Date | string
    configuration?: JsonNullableFilter<"AgentMcp">
    agentId?: StringFilter<"AgentMcp"> | string
    mcpId?: StringFilter<"AgentMcp"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    mcp?: XOR<McpScalarRelationFilter, McpWhereInput>
  }

  export type AgentMcpOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configuration?: SortOrderInput | SortOrder
    agentId?: SortOrder
    mcpId?: SortOrder
    agent?: AgentOrderByWithRelationInput
    mcp?: McpOrderByWithRelationInput
  }

  export type AgentMcpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId_mcpId?: AgentMcpAgentIdMcpIdCompoundUniqueInput
    AND?: AgentMcpWhereInput | AgentMcpWhereInput[]
    OR?: AgentMcpWhereInput[]
    NOT?: AgentMcpWhereInput | AgentMcpWhereInput[]
    createdAt?: DateTimeFilter<"AgentMcp"> | Date | string
    updatedAt?: DateTimeFilter<"AgentMcp"> | Date | string
    configuration?: JsonNullableFilter<"AgentMcp">
    agentId?: StringFilter<"AgentMcp"> | string
    mcpId?: StringFilter<"AgentMcp"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    mcp?: XOR<McpScalarRelationFilter, McpWhereInput>
  }, "id" | "agentId_mcpId">

  export type AgentMcpOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configuration?: SortOrderInput | SortOrder
    agentId?: SortOrder
    mcpId?: SortOrder
    _count?: AgentMcpCountOrderByAggregateInput
    _max?: AgentMcpMaxOrderByAggregateInput
    _min?: AgentMcpMinOrderByAggregateInput
  }

  export type AgentMcpScalarWhereWithAggregatesInput = {
    AND?: AgentMcpScalarWhereWithAggregatesInput | AgentMcpScalarWhereWithAggregatesInput[]
    OR?: AgentMcpScalarWhereWithAggregatesInput[]
    NOT?: AgentMcpScalarWhereWithAggregatesInput | AgentMcpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentMcp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgentMcp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentMcp"> | Date | string
    configuration?: JsonNullableWithAggregatesFilter<"AgentMcp">
    agentId?: StringWithAggregatesFilter<"AgentMcp"> | string
    mcpId?: StringWithAggregatesFilter<"AgentMcp"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    createdAt?: DateTimeFilter<"Trigger"> | Date | string
    updatedAt?: DateTimeFilter<"Trigger"> | Date | string
    type?: EnumTriggerTypeFilter<"Trigger"> | $Enums.TriggerType
    configuration?: JsonFilter<"Trigger">
    agentId?: StringFilter<"Trigger"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    configuration?: SortOrder
    agentId?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    createdAt?: DateTimeFilter<"Trigger"> | Date | string
    updatedAt?: DateTimeFilter<"Trigger"> | Date | string
    type?: EnumTriggerTypeFilter<"Trigger"> | $Enums.TriggerType
    configuration?: JsonFilter<"Trigger">
    agentId?: StringFilter<"Trigger"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    configuration?: SortOrder
    agentId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trigger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trigger"> | Date | string
    type?: EnumTriggerTypeWithAggregatesFilter<"Trigger"> | $Enums.TriggerType
    configuration?: JsonWithAggregatesFilter<"Trigger">
    agentId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    message?: StringFilter<"Log"> | string
    agentId?: StringFilter<"Log"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    agentId?: SortOrder
    agent?: AgentOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    createdAt?: DateTimeFilter<"Log"> | Date | string
    message?: StringFilter<"Log"> | string
    agentId?: StringFilter<"Log"> | string
    agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    agentId?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    message?: StringWithAggregatesFilter<"Log"> | string
    agentId?: StringWithAggregatesFilter<"Log"> | string
  }

  export type StoreItemWhereInput = {
    AND?: StoreItemWhereInput | StoreItemWhereInput[]
    OR?: StoreItemWhereInput[]
    NOT?: StoreItemWhereInput | StoreItemWhereInput[]
    id?: StringFilter<"StoreItem"> | string
    createdAt?: DateTimeFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoreItem"> | Date | string
    name?: StringFilter<"StoreItem"> | string
    description?: StringNullableFilter<"StoreItem"> | string | null
    details?: StringNullableFilter<"StoreItem"> | string | null
    type?: EnumItemTypeFilter<"StoreItem"> | $Enums.ItemType
    creator?: StringFilter<"StoreItem"> | string
    tags?: StringNullableListFilter<"StoreItem">
    agentTemplate?: JsonNullableFilter<"StoreItem">
    mcpId?: StringNullableFilter<"StoreItem"> | string | null
    mcp?: XOR<McpNullableScalarRelationFilter, McpWhereInput> | null
  }

  export type StoreItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    type?: SortOrder
    creator?: SortOrder
    tags?: SortOrder
    agentTemplate?: SortOrderInput | SortOrder
    mcpId?: SortOrderInput | SortOrder
    mcp?: McpOrderByWithRelationInput
  }

  export type StoreItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mcpId?: string
    AND?: StoreItemWhereInput | StoreItemWhereInput[]
    OR?: StoreItemWhereInput[]
    NOT?: StoreItemWhereInput | StoreItemWhereInput[]
    createdAt?: DateTimeFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeFilter<"StoreItem"> | Date | string
    name?: StringFilter<"StoreItem"> | string
    description?: StringNullableFilter<"StoreItem"> | string | null
    details?: StringNullableFilter<"StoreItem"> | string | null
    type?: EnumItemTypeFilter<"StoreItem"> | $Enums.ItemType
    creator?: StringFilter<"StoreItem"> | string
    tags?: StringNullableListFilter<"StoreItem">
    agentTemplate?: JsonNullableFilter<"StoreItem">
    mcp?: XOR<McpNullableScalarRelationFilter, McpWhereInput> | null
  }, "id" | "mcpId">

  export type StoreItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    type?: SortOrder
    creator?: SortOrder
    tags?: SortOrder
    agentTemplate?: SortOrderInput | SortOrder
    mcpId?: SortOrderInput | SortOrder
    _count?: StoreItemCountOrderByAggregateInput
    _max?: StoreItemMaxOrderByAggregateInput
    _min?: StoreItemMinOrderByAggregateInput
  }

  export type StoreItemScalarWhereWithAggregatesInput = {
    AND?: StoreItemScalarWhereWithAggregatesInput | StoreItemScalarWhereWithAggregatesInput[]
    OR?: StoreItemScalarWhereWithAggregatesInput[]
    NOT?: StoreItemScalarWhereWithAggregatesInput | StoreItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoreItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoreItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoreItem"> | Date | string
    name?: StringWithAggregatesFilter<"StoreItem"> | string
    description?: StringNullableWithAggregatesFilter<"StoreItem"> | string | null
    details?: StringNullableWithAggregatesFilter<"StoreItem"> | string | null
    type?: EnumItemTypeWithAggregatesFilter<"StoreItem"> | $Enums.ItemType
    creator?: StringWithAggregatesFilter<"StoreItem"> | string
    tags?: StringNullableListFilter<"StoreItem">
    agentTemplate?: JsonNullableWithAggregatesFilter<"StoreItem">
    mcpId?: StringNullableWithAggregatesFilter<"StoreItem"> | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    chatSessionId?: StringFilter<"ChatMessage"> | string
    chatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    chatSessionId?: SortOrder
    chatSession?: ChatSessionOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    chatSessionId?: StringFilter<"ChatMessage"> | string
    chatSession?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    chatSessionId?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatSessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    agentId?: StringNullableFilter<"ChatSession"> | string | null
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrderInput | SortOrder
    agentId?: SortOrderInput | SortOrder
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeFilter<"ChatSession"> | Date | string
    title?: StringNullableFilter<"ChatSession"> | string | null
    agentId?: StringNullableFilter<"ChatSession"> | string | null
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrderInput | SortOrder
    agentId?: SortOrderInput | SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
    title?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
    agentId?: StringNullableWithAggregatesFilter<"ChatSession"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
    agents?: AgentCreateNestedManyWithoutCreatorInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
    agents?: AgentUncheckedCreateNestedManyWithoutCreatorInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
    agents?: AgentUpdateManyWithoutCreatorNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
    agents?: AgentUncheckedUpdateManyWithoutCreatorNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planType?: $Enums.PlanType
    startDate?: Date | string
    endDate?: Date | string | null
    dailyPoints?: number
    swapFee: number
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planType?: $Enums.PlanType
    startDate?: Date | string
    endDate?: Date | string | null
    dailyPoints?: number
    swapFee: number
    userId: string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPoints?: IntFieldUpdateOperationsInput | number
    swapFee?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPoints?: IntFieldUpdateOperationsInput | number
    swapFee?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planType?: $Enums.PlanType
    startDate?: Date | string
    endDate?: Date | string | null
    dailyPoints?: number
    swapFee: number
    userId: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPoints?: IntFieldUpdateOperationsInput | number
    swapFee?: FloatFieldUpdateOperationsInput | number
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPoints?: IntFieldUpdateOperationsInput | number
    swapFee?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AgentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    creator: UserCreateNestedOneWithoutAgentsInput
    mcps?: AgentMcpCreateNestedManyWithoutAgentInput
    triggers?: TriggerCreateNestedManyWithoutAgentInput
    logs?: LogCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    userId: string
    mcps?: AgentMcpUncheckedCreateNestedManyWithoutAgentInput
    triggers?: TriggerUncheckedCreateNestedManyWithoutAgentInput
    logs?: LogUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutAgentsNestedInput
    mcps?: AgentMcpUpdateManyWithoutAgentNestedInput
    triggers?: TriggerUpdateManyWithoutAgentNestedInput
    logs?: LogUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    mcps?: AgentMcpUncheckedUpdateManyWithoutAgentNestedInput
    triggers?: TriggerUncheckedUpdateManyWithoutAgentNestedInput
    logs?: LogUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    userId: string
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type McpCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
    agents?: AgentMcpCreateNestedManyWithoutMcpInput
    storeItem?: StoreItemCreateNestedOneWithoutMcpInput
  }

  export type McpUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
    agents?: AgentMcpUncheckedCreateNestedManyWithoutMcpInput
    storeItem?: StoreItemUncheckedCreateNestedOneWithoutMcpInput
  }

  export type McpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
    agents?: AgentMcpUpdateManyWithoutMcpNestedInput
    storeItem?: StoreItemUpdateOneWithoutMcpNestedInput
  }

  export type McpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
    agents?: AgentMcpUncheckedUpdateManyWithoutMcpNestedInput
    storeItem?: StoreItemUncheckedUpdateOneWithoutMcpNestedInput
  }

  export type McpCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
  }

  export type McpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
  }

  export type McpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
  }

  export type AgentMcpCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agent: AgentCreateNestedOneWithoutMcpsInput
    mcp: McpCreateNestedOneWithoutAgentsInput
  }

  export type AgentMcpUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId: string
    mcpId: string
  }

  export type AgentMcpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agent?: AgentUpdateOneRequiredWithoutMcpsNestedInput
    mcp?: McpUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentMcpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId?: StringFieldUpdateOperationsInput | string
    mcpId?: StringFieldUpdateOperationsInput | string
  }

  export type AgentMcpCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId: string
    mcpId: string
  }

  export type AgentMcpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AgentMcpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId?: StringFieldUpdateOperationsInput | string
    mcpId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TriggerType
    configuration: JsonNullValueInput | InputJsonValue
    agent: AgentCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TriggerType
    configuration: JsonNullValueInput | InputJsonValue
    agentId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
    agent?: AgentUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TriggerType
    configuration: JsonNullValueInput | InputJsonValue
    agentId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    agent: AgentCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    agentId: string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    agent?: AgentUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    message: string
    agentId: string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type StoreItemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    details?: string | null
    type: $Enums.ItemType
    creator: string
    tags?: StoreItemCreatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
    mcp?: McpCreateNestedOneWithoutStoreItemInput
  }

  export type StoreItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    details?: string | null
    type: $Enums.ItemType
    creator: string
    tags?: StoreItemCreatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
    mcpId?: string | null
  }

  export type StoreItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    creator?: StringFieldUpdateOperationsInput | string
    tags?: StoreItemUpdatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
    mcp?: McpUpdateOneWithoutStoreItemNestedInput
  }

  export type StoreItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    creator?: StringFieldUpdateOperationsInput | string
    tags?: StoreItemUpdatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
    mcpId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    details?: string | null
    type: $Enums.ItemType
    creator: string
    tags?: StoreItemCreatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
    mcpId?: string | null
  }

  export type StoreItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    creator?: StringFieldUpdateOperationsInput | string
    tags?: StoreItemUpdatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoreItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    creator?: StringFieldUpdateOperationsInput | string
    tags?: StoreItemUpdatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
    mcpId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateInput = {
    id?: string
    createdAt?: Date | string
    role: string
    content: string
    chatSession: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    role: string
    content: string
    chatSessionId: string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chatSession?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chatSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    role: string
    content: string
    chatSessionId: string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    chatSessionId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    agentId?: string | null
    messages?: ChatMessageCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    agentId?: string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutChatSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    agentId?: string | null
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    systemPrompt?: SortOrder
    iconUrl?: SortOrder
    currentPoints?: SortOrder
    autoRecharge?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    currentPoints?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    systemPrompt?: SortOrder
    iconUrl?: SortOrder
    currentPoints?: SortOrder
    autoRecharge?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    systemPrompt?: SortOrder
    iconUrl?: SortOrder
    currentPoints?: SortOrder
    autoRecharge?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    currentPoints?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    dailyPoints?: SortOrder
    swapFee?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    dailyPoints?: SortOrder
    swapFee?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    dailyPoints?: SortOrder
    swapFee?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    dailyPoints?: SortOrder
    swapFee?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    dailyPoints?: SortOrder
    swapFee?: SortOrder
  }

  export type EnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type AgentMcpListRelationFilter = {
    every?: AgentMcpWhereInput
    some?: AgentMcpWhereInput
    none?: AgentMcpWhereInput
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type AgentMcpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    systemPrompt?: SortOrder
    iconUrl?: SortOrder
    userId?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    systemPrompt?: SortOrder
    iconUrl?: SortOrder
    userId?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    systemPrompt?: SortOrder
    iconUrl?: SortOrder
    userId?: SortOrder
  }

  export type EnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StoreItemNullableScalarRelationFilter = {
    is?: StoreItemWhereInput | null
    isNot?: StoreItemWhereInput | null
  }

  export type McpCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    author?: SortOrder
    tags?: SortOrder
  }

  export type McpMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    author?: SortOrder
  }

  export type McpMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    author?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type McpScalarRelationFilter = {
    is?: McpWhereInput
    isNot?: McpWhereInput
  }

  export type AgentMcpAgentIdMcpIdCompoundUniqueInput = {
    agentId: string
    mcpId: string
  }

  export type AgentMcpCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    configuration?: SortOrder
    agentId?: SortOrder
    mcpId?: SortOrder
  }

  export type AgentMcpMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
    mcpId?: SortOrder
  }

  export type AgentMcpMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agentId?: SortOrder
    mcpId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTriggerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TriggerType | EnumTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTriggerTypeFilter<$PrismaModel> | $Enums.TriggerType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    configuration?: SortOrder
    agentId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    agentId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    agentId?: SortOrder
  }

  export type EnumTriggerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TriggerType | EnumTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTriggerTypeWithAggregatesFilter<$PrismaModel> | $Enums.TriggerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTriggerTypeFilter<$PrismaModel>
    _max?: NestedEnumTriggerTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    agentId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    agentId?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    agentId?: SortOrder
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type McpNullableScalarRelationFilter = {
    is?: McpWhereInput | null
    isNot?: McpWhereInput | null
  }

  export type StoreItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    details?: SortOrder
    type?: SortOrder
    creator?: SortOrder
    tags?: SortOrder
    agentTemplate?: SortOrder
    mcpId?: SortOrder
  }

  export type StoreItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    details?: SortOrder
    type?: SortOrder
    creator?: SortOrder
    mcpId?: SortOrder
  }

  export type StoreItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    details?: SortOrder
    type?: SortOrder
    creator?: SortOrder
    mcpId?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    chatSessionId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    chatSessionId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    chatSessionId?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    agentId?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    agentId?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    agentId?: SortOrder
  }

  export type AgentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AgentCreateWithoutCreatorInput, AgentUncheckedCreateWithoutCreatorInput> | AgentCreateWithoutCreatorInput[] | AgentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutCreatorInput | AgentCreateOrConnectWithoutCreatorInput[]
    createMany?: AgentCreateManyCreatorInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type AgentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AgentCreateWithoutCreatorInput, AgentUncheckedCreateWithoutCreatorInput> | AgentCreateWithoutCreatorInput[] | AgentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutCreatorInput | AgentCreateOrConnectWithoutCreatorInput[]
    createMany?: AgentCreateManyCreatorInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AgentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AgentCreateWithoutCreatorInput, AgentUncheckedCreateWithoutCreatorInput> | AgentCreateWithoutCreatorInput[] | AgentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutCreatorInput | AgentCreateOrConnectWithoutCreatorInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutCreatorInput | AgentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AgentCreateManyCreatorInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutCreatorInput | AgentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutCreatorInput | AgentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type AgentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AgentCreateWithoutCreatorInput, AgentUncheckedCreateWithoutCreatorInput> | AgentCreateWithoutCreatorInput[] | AgentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutCreatorInput | AgentCreateOrConnectWithoutCreatorInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutCreatorInput | AgentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AgentCreateManyCreatorInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutCreatorInput | AgentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutCreatorInput | AgentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.PlanType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutAgentsInput = {
    create?: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentsInput
    connect?: UserWhereUniqueInput
  }

  export type AgentMcpCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentMcpCreateWithoutAgentInput, AgentMcpUncheckedCreateWithoutAgentInput> | AgentMcpCreateWithoutAgentInput[] | AgentMcpUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutAgentInput | AgentMcpCreateOrConnectWithoutAgentInput[]
    createMany?: AgentMcpCreateManyAgentInputEnvelope
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
  }

  export type TriggerCreateNestedManyWithoutAgentInput = {
    create?: XOR<TriggerCreateWithoutAgentInput, TriggerUncheckedCreateWithoutAgentInput> | TriggerCreateWithoutAgentInput[] | TriggerUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAgentInput | TriggerCreateOrConnectWithoutAgentInput[]
    createMany?: TriggerCreateManyAgentInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type LogCreateNestedManyWithoutAgentInput = {
    create?: XOR<LogCreateWithoutAgentInput, LogUncheckedCreateWithoutAgentInput> | LogCreateWithoutAgentInput[] | LogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAgentInput | LogCreateOrConnectWithoutAgentInput[]
    createMany?: LogCreateManyAgentInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type AgentMcpUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AgentMcpCreateWithoutAgentInput, AgentMcpUncheckedCreateWithoutAgentInput> | AgentMcpCreateWithoutAgentInput[] | AgentMcpUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutAgentInput | AgentMcpCreateOrConnectWithoutAgentInput[]
    createMany?: AgentMcpCreateManyAgentInputEnvelope
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<TriggerCreateWithoutAgentInput, TriggerUncheckedCreateWithoutAgentInput> | TriggerCreateWithoutAgentInput[] | TriggerUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAgentInput | TriggerCreateOrConnectWithoutAgentInput[]
    createMany?: TriggerCreateManyAgentInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<LogCreateWithoutAgentInput, LogUncheckedCreateWithoutAgentInput> | LogCreateWithoutAgentInput[] | LogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAgentInput | LogCreateOrConnectWithoutAgentInput[]
    createMany?: LogCreateManyAgentInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type EnumAgentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AgentStatus
  }

  export type UserUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentsInput
    upsert?: UserUpsertWithoutAgentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgentsInput, UserUpdateWithoutAgentsInput>, UserUncheckedUpdateWithoutAgentsInput>
  }

  export type AgentMcpUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentMcpCreateWithoutAgentInput, AgentMcpUncheckedCreateWithoutAgentInput> | AgentMcpCreateWithoutAgentInput[] | AgentMcpUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutAgentInput | AgentMcpCreateOrConnectWithoutAgentInput[]
    upsert?: AgentMcpUpsertWithWhereUniqueWithoutAgentInput | AgentMcpUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentMcpCreateManyAgentInputEnvelope
    set?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    disconnect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    delete?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    update?: AgentMcpUpdateWithWhereUniqueWithoutAgentInput | AgentMcpUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentMcpUpdateManyWithWhereWithoutAgentInput | AgentMcpUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentMcpScalarWhereInput | AgentMcpScalarWhereInput[]
  }

  export type TriggerUpdateManyWithoutAgentNestedInput = {
    create?: XOR<TriggerCreateWithoutAgentInput, TriggerUncheckedCreateWithoutAgentInput> | TriggerCreateWithoutAgentInput[] | TriggerUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAgentInput | TriggerCreateOrConnectWithoutAgentInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAgentInput | TriggerUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: TriggerCreateManyAgentInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAgentInput | TriggerUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAgentInput | TriggerUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type LogUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LogCreateWithoutAgentInput, LogUncheckedCreateWithoutAgentInput> | LogCreateWithoutAgentInput[] | LogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAgentInput | LogCreateOrConnectWithoutAgentInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutAgentInput | LogUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LogCreateManyAgentInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutAgentInput | LogUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LogUpdateManyWithWhereWithoutAgentInput | LogUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type AgentMcpUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AgentMcpCreateWithoutAgentInput, AgentMcpUncheckedCreateWithoutAgentInput> | AgentMcpCreateWithoutAgentInput[] | AgentMcpUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutAgentInput | AgentMcpCreateOrConnectWithoutAgentInput[]
    upsert?: AgentMcpUpsertWithWhereUniqueWithoutAgentInput | AgentMcpUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AgentMcpCreateManyAgentInputEnvelope
    set?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    disconnect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    delete?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    update?: AgentMcpUpdateWithWhereUniqueWithoutAgentInput | AgentMcpUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AgentMcpUpdateManyWithWhereWithoutAgentInput | AgentMcpUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AgentMcpScalarWhereInput | AgentMcpScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<TriggerCreateWithoutAgentInput, TriggerUncheckedCreateWithoutAgentInput> | TriggerCreateWithoutAgentInput[] | TriggerUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAgentInput | TriggerCreateOrConnectWithoutAgentInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAgentInput | TriggerUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: TriggerCreateManyAgentInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAgentInput | TriggerUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAgentInput | TriggerUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LogCreateWithoutAgentInput, LogUncheckedCreateWithoutAgentInput> | LogCreateWithoutAgentInput[] | LogUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LogCreateOrConnectWithoutAgentInput | LogCreateOrConnectWithoutAgentInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutAgentInput | LogUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LogCreateManyAgentInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutAgentInput | LogUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LogUpdateManyWithWhereWithoutAgentInput | LogUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type McpCreatetagsInput = {
    set: string[]
  }

  export type AgentMcpCreateNestedManyWithoutMcpInput = {
    create?: XOR<AgentMcpCreateWithoutMcpInput, AgentMcpUncheckedCreateWithoutMcpInput> | AgentMcpCreateWithoutMcpInput[] | AgentMcpUncheckedCreateWithoutMcpInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutMcpInput | AgentMcpCreateOrConnectWithoutMcpInput[]
    createMany?: AgentMcpCreateManyMcpInputEnvelope
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
  }

  export type StoreItemCreateNestedOneWithoutMcpInput = {
    create?: XOR<StoreItemCreateWithoutMcpInput, StoreItemUncheckedCreateWithoutMcpInput>
    connectOrCreate?: StoreItemCreateOrConnectWithoutMcpInput
    connect?: StoreItemWhereUniqueInput
  }

  export type AgentMcpUncheckedCreateNestedManyWithoutMcpInput = {
    create?: XOR<AgentMcpCreateWithoutMcpInput, AgentMcpUncheckedCreateWithoutMcpInput> | AgentMcpCreateWithoutMcpInput[] | AgentMcpUncheckedCreateWithoutMcpInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutMcpInput | AgentMcpCreateOrConnectWithoutMcpInput[]
    createMany?: AgentMcpCreateManyMcpInputEnvelope
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
  }

  export type StoreItemUncheckedCreateNestedOneWithoutMcpInput = {
    create?: XOR<StoreItemCreateWithoutMcpInput, StoreItemUncheckedCreateWithoutMcpInput>
    connectOrCreate?: StoreItemCreateOrConnectWithoutMcpInput
    connect?: StoreItemWhereUniqueInput
  }

  export type McpUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AgentMcpUpdateManyWithoutMcpNestedInput = {
    create?: XOR<AgentMcpCreateWithoutMcpInput, AgentMcpUncheckedCreateWithoutMcpInput> | AgentMcpCreateWithoutMcpInput[] | AgentMcpUncheckedCreateWithoutMcpInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutMcpInput | AgentMcpCreateOrConnectWithoutMcpInput[]
    upsert?: AgentMcpUpsertWithWhereUniqueWithoutMcpInput | AgentMcpUpsertWithWhereUniqueWithoutMcpInput[]
    createMany?: AgentMcpCreateManyMcpInputEnvelope
    set?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    disconnect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    delete?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    update?: AgentMcpUpdateWithWhereUniqueWithoutMcpInput | AgentMcpUpdateWithWhereUniqueWithoutMcpInput[]
    updateMany?: AgentMcpUpdateManyWithWhereWithoutMcpInput | AgentMcpUpdateManyWithWhereWithoutMcpInput[]
    deleteMany?: AgentMcpScalarWhereInput | AgentMcpScalarWhereInput[]
  }

  export type StoreItemUpdateOneWithoutMcpNestedInput = {
    create?: XOR<StoreItemCreateWithoutMcpInput, StoreItemUncheckedCreateWithoutMcpInput>
    connectOrCreate?: StoreItemCreateOrConnectWithoutMcpInput
    upsert?: StoreItemUpsertWithoutMcpInput
    disconnect?: StoreItemWhereInput | boolean
    delete?: StoreItemWhereInput | boolean
    connect?: StoreItemWhereUniqueInput
    update?: XOR<XOR<StoreItemUpdateToOneWithWhereWithoutMcpInput, StoreItemUpdateWithoutMcpInput>, StoreItemUncheckedUpdateWithoutMcpInput>
  }

  export type AgentMcpUncheckedUpdateManyWithoutMcpNestedInput = {
    create?: XOR<AgentMcpCreateWithoutMcpInput, AgentMcpUncheckedCreateWithoutMcpInput> | AgentMcpCreateWithoutMcpInput[] | AgentMcpUncheckedCreateWithoutMcpInput[]
    connectOrCreate?: AgentMcpCreateOrConnectWithoutMcpInput | AgentMcpCreateOrConnectWithoutMcpInput[]
    upsert?: AgentMcpUpsertWithWhereUniqueWithoutMcpInput | AgentMcpUpsertWithWhereUniqueWithoutMcpInput[]
    createMany?: AgentMcpCreateManyMcpInputEnvelope
    set?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    disconnect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    delete?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    connect?: AgentMcpWhereUniqueInput | AgentMcpWhereUniqueInput[]
    update?: AgentMcpUpdateWithWhereUniqueWithoutMcpInput | AgentMcpUpdateWithWhereUniqueWithoutMcpInput[]
    updateMany?: AgentMcpUpdateManyWithWhereWithoutMcpInput | AgentMcpUpdateManyWithWhereWithoutMcpInput[]
    deleteMany?: AgentMcpScalarWhereInput | AgentMcpScalarWhereInput[]
  }

  export type StoreItemUncheckedUpdateOneWithoutMcpNestedInput = {
    create?: XOR<StoreItemCreateWithoutMcpInput, StoreItemUncheckedCreateWithoutMcpInput>
    connectOrCreate?: StoreItemCreateOrConnectWithoutMcpInput
    upsert?: StoreItemUpsertWithoutMcpInput
    disconnect?: StoreItemWhereInput | boolean
    delete?: StoreItemWhereInput | boolean
    connect?: StoreItemWhereUniqueInput
    update?: XOR<XOR<StoreItemUpdateToOneWithWhereWithoutMcpInput, StoreItemUpdateWithoutMcpInput>, StoreItemUncheckedUpdateWithoutMcpInput>
  }

  export type AgentCreateNestedOneWithoutMcpsInput = {
    create?: XOR<AgentCreateWithoutMcpsInput, AgentUncheckedCreateWithoutMcpsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutMcpsInput
    connect?: AgentWhereUniqueInput
  }

  export type McpCreateNestedOneWithoutAgentsInput = {
    create?: XOR<McpCreateWithoutAgentsInput, McpUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: McpCreateOrConnectWithoutAgentsInput
    connect?: McpWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutMcpsNestedInput = {
    create?: XOR<AgentCreateWithoutMcpsInput, AgentUncheckedCreateWithoutMcpsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutMcpsInput
    upsert?: AgentUpsertWithoutMcpsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutMcpsInput, AgentUpdateWithoutMcpsInput>, AgentUncheckedUpdateWithoutMcpsInput>
  }

  export type McpUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<McpCreateWithoutAgentsInput, McpUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: McpCreateOrConnectWithoutAgentsInput
    upsert?: McpUpsertWithoutAgentsInput
    connect?: McpWhereUniqueInput
    update?: XOR<XOR<McpUpdateToOneWithWhereWithoutAgentsInput, McpUpdateWithoutAgentsInput>, McpUncheckedUpdateWithoutAgentsInput>
  }

  export type AgentCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AgentCreateWithoutTriggersInput, AgentUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AgentCreateOrConnectWithoutTriggersInput
    connect?: AgentWhereUniqueInput
  }

  export type EnumTriggerTypeFieldUpdateOperationsInput = {
    set?: $Enums.TriggerType
  }

  export type AgentUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AgentCreateWithoutTriggersInput, AgentUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AgentCreateOrConnectWithoutTriggersInput
    upsert?: AgentUpsertWithoutTriggersInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutTriggersInput, AgentUpdateWithoutTriggersInput>, AgentUncheckedUpdateWithoutTriggersInput>
  }

  export type AgentCreateNestedOneWithoutLogsInput = {
    create?: XOR<AgentCreateWithoutLogsInput, AgentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutLogsInput
    connect?: AgentWhereUniqueInput
  }

  export type AgentUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<AgentCreateWithoutLogsInput, AgentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutLogsInput
    upsert?: AgentUpsertWithoutLogsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutLogsInput, AgentUpdateWithoutLogsInput>, AgentUncheckedUpdateWithoutLogsInput>
  }

  export type StoreItemCreatetagsInput = {
    set: string[]
  }

  export type McpCreateNestedOneWithoutStoreItemInput = {
    create?: XOR<McpCreateWithoutStoreItemInput, McpUncheckedCreateWithoutStoreItemInput>
    connectOrCreate?: McpCreateOrConnectWithoutStoreItemInput
    connect?: McpWhereUniqueInput
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type StoreItemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type McpUpdateOneWithoutStoreItemNestedInput = {
    create?: XOR<McpCreateWithoutStoreItemInput, McpUncheckedCreateWithoutStoreItemInput>
    connectOrCreate?: McpCreateOrConnectWithoutStoreItemInput
    upsert?: McpUpsertWithoutStoreItemInput
    disconnect?: McpWhereInput | boolean
    delete?: McpWhereInput | boolean
    connect?: McpWhereUniqueInput
    update?: XOR<XOR<McpUpdateToOneWithWhereWithoutStoreItemInput, McpUpdateWithoutStoreItemInput>, McpUncheckedUpdateWithoutStoreItemInput>
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatMessageCreateNestedManyWithoutChatSessionInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatSessionInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUpdateManyWithoutChatSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput | ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput | ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatSessionInput | ChatMessageUpdateManyWithWhereWithoutChatSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput> | ChatMessageCreateWithoutChatSessionInput[] | ChatMessageUncheckedCreateWithoutChatSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatSessionInput | ChatMessageCreateOrConnectWithoutChatSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput | ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput[]
    createMany?: ChatMessageCreateManyChatSessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput | ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatSessionInput | ChatMessageUpdateManyWithWhereWithoutChatSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlanTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeFilter<$PrismaModel> | $Enums.PlanType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanType | EnumPlanTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanType[] | ListEnumPlanTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanTypeWithAggregatesFilter<$PrismaModel> | $Enums.PlanType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanTypeFilter<$PrismaModel>
    _max?: NestedEnumPlanTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAgentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusFilter<$PrismaModel> | $Enums.AgentStatus
  }

  export type NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgentStatus | EnumAgentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgentStatus[] | ListEnumAgentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgentStatusFilter<$PrismaModel>
    _max?: NestedEnumAgentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTriggerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TriggerType | EnumTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTriggerTypeFilter<$PrismaModel> | $Enums.TriggerType
  }

  export type NestedEnumTriggerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TriggerType | EnumTriggerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TriggerType[] | ListEnumTriggerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTriggerTypeWithAggregatesFilter<$PrismaModel> | $Enums.TriggerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTriggerTypeFilter<$PrismaModel>
    _max?: NestedEnumTriggerTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type AgentCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    mcps?: AgentMcpCreateNestedManyWithoutAgentInput
    triggers?: TriggerCreateNestedManyWithoutAgentInput
    logs?: LogCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    mcps?: AgentMcpUncheckedCreateNestedManyWithoutAgentInput
    triggers?: TriggerUncheckedCreateNestedManyWithoutAgentInput
    logs?: LogUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutCreatorInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutCreatorInput, AgentUncheckedCreateWithoutCreatorInput>
  }

  export type AgentCreateManyCreatorInputEnvelope = {
    data: AgentCreateManyCreatorInput | AgentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planType?: $Enums.PlanType
    startDate?: Date | string
    endDate?: Date | string | null
    dailyPoints?: number
    swapFee: number
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planType?: $Enums.PlanType
    startDate?: Date | string
    endDate?: Date | string | null
    dailyPoints?: number
    swapFee: number
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type AgentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutCreatorInput, AgentUncheckedUpdateWithoutCreatorInput>
    create: XOR<AgentCreateWithoutCreatorInput, AgentUncheckedCreateWithoutCreatorInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutCreatorInput, AgentUncheckedUpdateWithoutCreatorInput>
  }

  export type AgentUpdateManyWithWhereWithoutCreatorInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    status?: EnumAgentStatusFilter<"Agent"> | $Enums.AgentStatus
    systemPrompt?: StringNullableFilter<"Agent"> | string | null
    iconUrl?: StringNullableFilter<"Agent"> | string | null
    userId?: StringFilter<"Agent"> | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPoints?: IntFieldUpdateOperationsInput | number
    swapFee?: FloatFieldUpdateOperationsInput | number
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planType?: EnumPlanTypeFieldUpdateOperationsInput | $Enums.PlanType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dailyPoints?: IntFieldUpdateOperationsInput | number
    swapFee?: FloatFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
    agents?: AgentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
    agents?: AgentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
    agents?: AgentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
    agents?: AgentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutAgentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    username: string
    email: string
    hashedPassword?: string | null
    systemPrompt?: string | null
    iconUrl?: string | null
    currentPoints?: number
    autoRecharge?: boolean
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
  }

  export type AgentMcpCreateWithoutAgentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    mcp: McpCreateNestedOneWithoutAgentsInput
  }

  export type AgentMcpUncheckedCreateWithoutAgentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    mcpId: string
  }

  export type AgentMcpCreateOrConnectWithoutAgentInput = {
    where: AgentMcpWhereUniqueInput
    create: XOR<AgentMcpCreateWithoutAgentInput, AgentMcpUncheckedCreateWithoutAgentInput>
  }

  export type AgentMcpCreateManyAgentInputEnvelope = {
    data: AgentMcpCreateManyAgentInput | AgentMcpCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type TriggerCreateWithoutAgentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TriggerType
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedCreateWithoutAgentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TriggerType
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateOrConnectWithoutAgentInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAgentInput, TriggerUncheckedCreateWithoutAgentInput>
  }

  export type TriggerCreateManyAgentInputEnvelope = {
    data: TriggerCreateManyAgentInput | TriggerCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type LogCreateWithoutAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type LogUncheckedCreateWithoutAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type LogCreateOrConnectWithoutAgentInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutAgentInput, LogUncheckedCreateWithoutAgentInput>
  }

  export type LogCreateManyAgentInputEnvelope = {
    data: LogCreateManyAgentInput | LogCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAgentsInput = {
    update: XOR<UserUpdateWithoutAgentsInput, UserUncheckedUpdateWithoutAgentsInput>
    create: XOR<UserCreateWithoutAgentsInput, UserUncheckedCreateWithoutAgentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgentsInput, UserUncheckedUpdateWithoutAgentsInput>
  }

  export type UserUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    currentPoints?: IntFieldUpdateOperationsInput | number
    autoRecharge?: BoolFieldUpdateOperationsInput | boolean
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AgentMcpUpsertWithWhereUniqueWithoutAgentInput = {
    where: AgentMcpWhereUniqueInput
    update: XOR<AgentMcpUpdateWithoutAgentInput, AgentMcpUncheckedUpdateWithoutAgentInput>
    create: XOR<AgentMcpCreateWithoutAgentInput, AgentMcpUncheckedCreateWithoutAgentInput>
  }

  export type AgentMcpUpdateWithWhereUniqueWithoutAgentInput = {
    where: AgentMcpWhereUniqueInput
    data: XOR<AgentMcpUpdateWithoutAgentInput, AgentMcpUncheckedUpdateWithoutAgentInput>
  }

  export type AgentMcpUpdateManyWithWhereWithoutAgentInput = {
    where: AgentMcpScalarWhereInput
    data: XOR<AgentMcpUpdateManyMutationInput, AgentMcpUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentMcpScalarWhereInput = {
    AND?: AgentMcpScalarWhereInput | AgentMcpScalarWhereInput[]
    OR?: AgentMcpScalarWhereInput[]
    NOT?: AgentMcpScalarWhereInput | AgentMcpScalarWhereInput[]
    id?: StringFilter<"AgentMcp"> | string
    createdAt?: DateTimeFilter<"AgentMcp"> | Date | string
    updatedAt?: DateTimeFilter<"AgentMcp"> | Date | string
    configuration?: JsonNullableFilter<"AgentMcp">
    agentId?: StringFilter<"AgentMcp"> | string
    mcpId?: StringFilter<"AgentMcp"> | string
  }

  export type TriggerUpsertWithWhereUniqueWithoutAgentInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutAgentInput, TriggerUncheckedUpdateWithoutAgentInput>
    create: XOR<TriggerCreateWithoutAgentInput, TriggerUncheckedCreateWithoutAgentInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutAgentInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutAgentInput, TriggerUncheckedUpdateWithoutAgentInput>
  }

  export type TriggerUpdateManyWithWhereWithoutAgentInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutAgentInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    createdAt?: DateTimeFilter<"Trigger"> | Date | string
    updatedAt?: DateTimeFilter<"Trigger"> | Date | string
    type?: EnumTriggerTypeFilter<"Trigger"> | $Enums.TriggerType
    configuration?: JsonFilter<"Trigger">
    agentId?: StringFilter<"Trigger"> | string
  }

  export type LogUpsertWithWhereUniqueWithoutAgentInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutAgentInput, LogUncheckedUpdateWithoutAgentInput>
    create: XOR<LogCreateWithoutAgentInput, LogUncheckedCreateWithoutAgentInput>
  }

  export type LogUpdateWithWhereUniqueWithoutAgentInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutAgentInput, LogUncheckedUpdateWithoutAgentInput>
  }

  export type LogUpdateManyWithWhereWithoutAgentInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutAgentInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    message?: StringFilter<"Log"> | string
    agentId?: StringFilter<"Log"> | string
  }

  export type AgentMcpCreateWithoutMcpInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agent: AgentCreateNestedOneWithoutMcpsInput
  }

  export type AgentMcpUncheckedCreateWithoutMcpInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId: string
  }

  export type AgentMcpCreateOrConnectWithoutMcpInput = {
    where: AgentMcpWhereUniqueInput
    create: XOR<AgentMcpCreateWithoutMcpInput, AgentMcpUncheckedCreateWithoutMcpInput>
  }

  export type AgentMcpCreateManyMcpInputEnvelope = {
    data: AgentMcpCreateManyMcpInput | AgentMcpCreateManyMcpInput[]
    skipDuplicates?: boolean
  }

  export type StoreItemCreateWithoutMcpInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    details?: string | null
    type: $Enums.ItemType
    creator: string
    tags?: StoreItemCreatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoreItemUncheckedCreateWithoutMcpInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    details?: string | null
    type: $Enums.ItemType
    creator: string
    tags?: StoreItemCreatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoreItemCreateOrConnectWithoutMcpInput = {
    where: StoreItemWhereUniqueInput
    create: XOR<StoreItemCreateWithoutMcpInput, StoreItemUncheckedCreateWithoutMcpInput>
  }

  export type AgentMcpUpsertWithWhereUniqueWithoutMcpInput = {
    where: AgentMcpWhereUniqueInput
    update: XOR<AgentMcpUpdateWithoutMcpInput, AgentMcpUncheckedUpdateWithoutMcpInput>
    create: XOR<AgentMcpCreateWithoutMcpInput, AgentMcpUncheckedCreateWithoutMcpInput>
  }

  export type AgentMcpUpdateWithWhereUniqueWithoutMcpInput = {
    where: AgentMcpWhereUniqueInput
    data: XOR<AgentMcpUpdateWithoutMcpInput, AgentMcpUncheckedUpdateWithoutMcpInput>
  }

  export type AgentMcpUpdateManyWithWhereWithoutMcpInput = {
    where: AgentMcpScalarWhereInput
    data: XOR<AgentMcpUpdateManyMutationInput, AgentMcpUncheckedUpdateManyWithoutMcpInput>
  }

  export type StoreItemUpsertWithoutMcpInput = {
    update: XOR<StoreItemUpdateWithoutMcpInput, StoreItemUncheckedUpdateWithoutMcpInput>
    create: XOR<StoreItemCreateWithoutMcpInput, StoreItemUncheckedCreateWithoutMcpInput>
    where?: StoreItemWhereInput
  }

  export type StoreItemUpdateToOneWithWhereWithoutMcpInput = {
    where?: StoreItemWhereInput
    data: XOR<StoreItemUpdateWithoutMcpInput, StoreItemUncheckedUpdateWithoutMcpInput>
  }

  export type StoreItemUpdateWithoutMcpInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    creator?: StringFieldUpdateOperationsInput | string
    tags?: StoreItemUpdatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoreItemUncheckedUpdateWithoutMcpInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    creator?: StringFieldUpdateOperationsInput | string
    tags?: StoreItemUpdatetagsInput | string[]
    agentTemplate?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AgentCreateWithoutMcpsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    creator: UserCreateNestedOneWithoutAgentsInput
    triggers?: TriggerCreateNestedManyWithoutAgentInput
    logs?: LogCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutMcpsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    userId: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutAgentInput
    logs?: LogUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutMcpsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutMcpsInput, AgentUncheckedCreateWithoutMcpsInput>
  }

  export type McpCreateWithoutAgentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
    storeItem?: StoreItemCreateNestedOneWithoutMcpInput
  }

  export type McpUncheckedCreateWithoutAgentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
    storeItem?: StoreItemUncheckedCreateNestedOneWithoutMcpInput
  }

  export type McpCreateOrConnectWithoutAgentsInput = {
    where: McpWhereUniqueInput
    create: XOR<McpCreateWithoutAgentsInput, McpUncheckedCreateWithoutAgentsInput>
  }

  export type AgentUpsertWithoutMcpsInput = {
    update: XOR<AgentUpdateWithoutMcpsInput, AgentUncheckedUpdateWithoutMcpsInput>
    create: XOR<AgentCreateWithoutMcpsInput, AgentUncheckedCreateWithoutMcpsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutMcpsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutMcpsInput, AgentUncheckedUpdateWithoutMcpsInput>
  }

  export type AgentUpdateWithoutMcpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutAgentsNestedInput
    triggers?: TriggerUpdateManyWithoutAgentNestedInput
    logs?: LogUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutMcpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutAgentNestedInput
    logs?: LogUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type McpUpsertWithoutAgentsInput = {
    update: XOR<McpUpdateWithoutAgentsInput, McpUncheckedUpdateWithoutAgentsInput>
    create: XOR<McpCreateWithoutAgentsInput, McpUncheckedCreateWithoutAgentsInput>
    where?: McpWhereInput
  }

  export type McpUpdateToOneWithWhereWithoutAgentsInput = {
    where?: McpWhereInput
    data: XOR<McpUpdateWithoutAgentsInput, McpUncheckedUpdateWithoutAgentsInput>
  }

  export type McpUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
    storeItem?: StoreItemUpdateOneWithoutMcpNestedInput
  }

  export type McpUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
    storeItem?: StoreItemUncheckedUpdateOneWithoutMcpNestedInput
  }

  export type AgentCreateWithoutTriggersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    creator: UserCreateNestedOneWithoutAgentsInput
    mcps?: AgentMcpCreateNestedManyWithoutAgentInput
    logs?: LogCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutTriggersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    userId: string
    mcps?: AgentMcpUncheckedCreateNestedManyWithoutAgentInput
    logs?: LogUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutTriggersInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutTriggersInput, AgentUncheckedCreateWithoutTriggersInput>
  }

  export type AgentUpsertWithoutTriggersInput = {
    update: XOR<AgentUpdateWithoutTriggersInput, AgentUncheckedUpdateWithoutTriggersInput>
    create: XOR<AgentCreateWithoutTriggersInput, AgentUncheckedCreateWithoutTriggersInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutTriggersInput, AgentUncheckedUpdateWithoutTriggersInput>
  }

  export type AgentUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutAgentsNestedInput
    mcps?: AgentMcpUpdateManyWithoutAgentNestedInput
    logs?: LogUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    mcps?: AgentMcpUncheckedUpdateManyWithoutAgentNestedInput
    logs?: LogUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateWithoutLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    creator: UserCreateNestedOneWithoutAgentsInput
    mcps?: AgentMcpCreateNestedManyWithoutAgentInput
    triggers?: TriggerCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
    userId: string
    mcps?: AgentMcpUncheckedCreateNestedManyWithoutAgentInput
    triggers?: TriggerUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutLogsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutLogsInput, AgentUncheckedCreateWithoutLogsInput>
  }

  export type AgentUpsertWithoutLogsInput = {
    update: XOR<AgentUpdateWithoutLogsInput, AgentUncheckedUpdateWithoutLogsInput>
    create: XOR<AgentCreateWithoutLogsInput, AgentUncheckedCreateWithoutLogsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutLogsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutLogsInput, AgentUncheckedUpdateWithoutLogsInput>
  }

  export type AgentUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutAgentsNestedInput
    mcps?: AgentMcpUpdateManyWithoutAgentNestedInput
    triggers?: TriggerUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    mcps?: AgentMcpUncheckedUpdateManyWithoutAgentNestedInput
    triggers?: TriggerUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type McpCreateWithoutStoreItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
    agents?: AgentMcpCreateNestedManyWithoutMcpInput
  }

  export type McpUncheckedCreateWithoutStoreItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    type: string
    author: string
    tags?: McpCreatetagsInput | string[]
    agents?: AgentMcpUncheckedCreateNestedManyWithoutMcpInput
  }

  export type McpCreateOrConnectWithoutStoreItemInput = {
    where: McpWhereUniqueInput
    create: XOR<McpCreateWithoutStoreItemInput, McpUncheckedCreateWithoutStoreItemInput>
  }

  export type McpUpsertWithoutStoreItemInput = {
    update: XOR<McpUpdateWithoutStoreItemInput, McpUncheckedUpdateWithoutStoreItemInput>
    create: XOR<McpCreateWithoutStoreItemInput, McpUncheckedCreateWithoutStoreItemInput>
    where?: McpWhereInput
  }

  export type McpUpdateToOneWithWhereWithoutStoreItemInput = {
    where?: McpWhereInput
    data: XOR<McpUpdateWithoutStoreItemInput, McpUncheckedUpdateWithoutStoreItemInput>
  }

  export type McpUpdateWithoutStoreItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
    agents?: AgentMcpUpdateManyWithoutMcpNestedInput
  }

  export type McpUncheckedUpdateWithoutStoreItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    tags?: McpUpdatetagsInput | string[]
    agents?: AgentMcpUncheckedUpdateManyWithoutMcpNestedInput
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    agentId?: string | null
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title?: string | null
    agentId?: string | null
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateWithoutChatSessionInput = {
    id?: string
    createdAt?: Date | string
    role: string
    content: string
  }

  export type ChatMessageUncheckedCreateWithoutChatSessionInput = {
    id?: string
    createdAt?: Date | string
    role: string
    content: string
  }

  export type ChatMessageCreateOrConnectWithoutChatSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput>
  }

  export type ChatMessageCreateManyChatSessionInputEnvelope = {
    data: ChatMessageCreateManyChatSessionInput | ChatMessageCreateManyChatSessionInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatSessionInput, ChatMessageUncheckedUpdateWithoutChatSessionInput>
    create: XOR<ChatMessageCreateWithoutChatSessionInput, ChatMessageUncheckedCreateWithoutChatSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatSessionInput, ChatMessageUncheckedUpdateWithoutChatSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatSessionInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    role?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    chatSessionId?: StringFilter<"ChatMessage"> | string
  }

  export type AgentCreateManyCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    status?: $Enums.AgentStatus
    systemPrompt?: string | null
    iconUrl?: string | null
  }

  export type AgentUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mcps?: AgentMcpUpdateManyWithoutAgentNestedInput
    triggers?: TriggerUpdateManyWithoutAgentNestedInput
    logs?: LogUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mcps?: AgentMcpUncheckedUpdateManyWithoutAgentNestedInput
    triggers?: TriggerUncheckedUpdateManyWithoutAgentNestedInput
    logs?: LogUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAgentStatusFieldUpdateOperationsInput | $Enums.AgentStatus
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentMcpCreateManyAgentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    mcpId: string
  }

  export type TriggerCreateManyAgentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.TriggerType
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type LogCreateManyAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type AgentMcpUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    mcp?: McpUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentMcpUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    mcpId?: StringFieldUpdateOperationsInput | string
  }

  export type AgentMcpUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    mcpId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTriggerTypeFieldUpdateOperationsInput | $Enums.TriggerType
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type LogUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type AgentMcpCreateManyMcpInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId: string
  }

  export type AgentMcpUpdateWithoutMcpInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agent?: AgentUpdateOneRequiredWithoutMcpsNestedInput
  }

  export type AgentMcpUncheckedUpdateWithoutMcpInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type AgentMcpUncheckedUpdateManyWithoutMcpInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    configuration?: NullableJsonNullValueInput | InputJsonValue
    agentId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageCreateManyChatSessionInput = {
    id?: string
    createdAt?: Date | string
    role: string
    content: string
  }

  export type ChatMessageUpdateWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}