
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
 * Model Jobpost
 * 
 */
export type Jobpost = $Result.DefaultSelection<Prisma.$JobpostPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model Interview
 * 
 */
export type Interview = $Result.DefaultSelection<Prisma.$InterviewPayload>
/**
 * Model RecruitmentStatus
 * 
 */
export type RecruitmentStatus = $Result.DefaultSelection<Prisma.$RecruitmentStatusPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jobposts
 * const jobposts = await prisma.jobpost.findMany()
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
   * // Fetch zero or more Jobposts
   * const jobposts = await prisma.jobpost.findMany()
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
   * `prisma.jobpost`: Exposes CRUD operations for the **Jobpost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobposts
    * const jobposts = await prisma.jobpost.findMany()
    * ```
    */
  get jobpost(): Prisma.JobpostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interview`: Exposes CRUD operations for the **Interview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interviews
    * const interviews = await prisma.interview.findMany()
    * ```
    */
  get interview(): Prisma.InterviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recruitmentStatus`: Exposes CRUD operations for the **RecruitmentStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecruitmentStatuses
    * const recruitmentStatuses = await prisma.recruitmentStatus.findMany()
    * ```
    */
  get recruitmentStatus(): Prisma.RecruitmentStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Jobpost: 'Jobpost',
    Candidate: 'Candidate',
    Interview: 'Interview',
    RecruitmentStatus: 'RecruitmentStatus',
    Offer: 'Offer'
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
      modelProps: "jobpost" | "candidate" | "interview" | "recruitmentStatus" | "offer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Jobpost: {
        payload: Prisma.$JobpostPayload<ExtArgs>
        fields: Prisma.JobpostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobpostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobpostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>
          }
          findFirst: {
            args: Prisma.JobpostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobpostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>
          }
          findMany: {
            args: Prisma.JobpostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>[]
          }
          create: {
            args: Prisma.JobpostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>
          }
          createMany: {
            args: Prisma.JobpostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobpostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>[]
          }
          delete: {
            args: Prisma.JobpostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>
          }
          update: {
            args: Prisma.JobpostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>
          }
          deleteMany: {
            args: Prisma.JobpostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobpostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobpostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>[]
          }
          upsert: {
            args: Prisma.JobpostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobpostPayload>
          }
          aggregate: {
            args: Prisma.JobpostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobpost>
          }
          groupBy: {
            args: Prisma.JobpostGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobpostGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobpostCountArgs<ExtArgs>
            result: $Utils.Optional<JobpostCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      Interview: {
        payload: Prisma.$InterviewPayload<ExtArgs>
        fields: Prisma.InterviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findFirst: {
            args: Prisma.InterviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          findMany: {
            args: Prisma.InterviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          create: {
            args: Prisma.InterviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          createMany: {
            args: Prisma.InterviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          delete: {
            args: Prisma.InterviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          update: {
            args: Prisma.InterviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          deleteMany: {
            args: Prisma.InterviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>[]
          }
          upsert: {
            args: Prisma.InterviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPayload>
          }
          aggregate: {
            args: Prisma.InterviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterview>
          }
          groupBy: {
            args: Prisma.InterviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewCountAggregateOutputType> | number
          }
        }
      }
      RecruitmentStatus: {
        payload: Prisma.$RecruitmentStatusPayload<ExtArgs>
        fields: Prisma.RecruitmentStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecruitmentStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecruitmentStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>
          }
          findFirst: {
            args: Prisma.RecruitmentStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecruitmentStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>
          }
          findMany: {
            args: Prisma.RecruitmentStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>[]
          }
          create: {
            args: Prisma.RecruitmentStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>
          }
          createMany: {
            args: Prisma.RecruitmentStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecruitmentStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>[]
          }
          delete: {
            args: Prisma.RecruitmentStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>
          }
          update: {
            args: Prisma.RecruitmentStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>
          }
          deleteMany: {
            args: Prisma.RecruitmentStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecruitmentStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecruitmentStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>[]
          }
          upsert: {
            args: Prisma.RecruitmentStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruitmentStatusPayload>
          }
          aggregate: {
            args: Prisma.RecruitmentStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecruitmentStatus>
          }
          groupBy: {
            args: Prisma.RecruitmentStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecruitmentStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecruitmentStatusCountArgs<ExtArgs>
            result: $Utils.Optional<RecruitmentStatusCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
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
    jobpost?: JobpostOmit
    candidate?: CandidateOmit
    interview?: InterviewOmit
    recruitmentStatus?: RecruitmentStatusOmit
    offer?: OfferOmit
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
   * Count Type JobpostCountOutputType
   */

  export type JobpostCountOutputType = {
    candidates: number
  }

  export type JobpostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | JobpostCountOutputTypeCountCandidatesArgs
  }

  // Custom InputTypes
  /**
   * JobpostCountOutputType without action
   */
  export type JobpostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobpostCountOutputType
     */
    select?: JobpostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobpostCountOutputType without action
   */
  export type JobpostCountOutputTypeCountCandidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
  }


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    interviews: number
    Offer: number
    RecruitmentStatus: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviews?: boolean | CandidateCountOutputTypeCountInterviewsArgs
    Offer?: boolean | CandidateCountOutputTypeCountOfferArgs
    RecruitmentStatus?: boolean | CandidateCountOutputTypeCountRecruitmentStatusArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountInterviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountOfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountRecruitmentStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecruitmentStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Jobpost
   */

  export type AggregateJobpost = {
    _count: JobpostCountAggregateOutputType | null
    _avg: JobpostAvgAggregateOutputType | null
    _sum: JobpostSumAggregateOutputType | null
    _min: JobpostMinAggregateOutputType | null
    _max: JobpostMaxAggregateOutputType | null
  }

  export type JobpostAvgAggregateOutputType = {
    id: number | null
  }

  export type JobpostSumAggregateOutputType = {
    id: number | null
  }

  export type JobpostMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    package: string | null
    type: string | null
    location: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobpostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    package: string | null
    type: string | null
    location: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobpostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    package: number
    type: number
    location: number
    category: number
    createdAt: number
    updatedAt: number
    requirement: number
    qualification: number
    _all: number
  }


  export type JobpostAvgAggregateInputType = {
    id?: true
  }

  export type JobpostSumAggregateInputType = {
    id?: true
  }

  export type JobpostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    package?: true
    type?: true
    location?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobpostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    package?: true
    type?: true
    location?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobpostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    package?: true
    type?: true
    location?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    requirement?: true
    qualification?: true
    _all?: true
  }

  export type JobpostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobpost to aggregate.
     */
    where?: JobpostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobposts to fetch.
     */
    orderBy?: JobpostOrderByWithRelationInput | JobpostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobpostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobposts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobposts
    **/
    _count?: true | JobpostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobpostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobpostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobpostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobpostMaxAggregateInputType
  }

  export type GetJobpostAggregateType<T extends JobpostAggregateArgs> = {
        [P in keyof T & keyof AggregateJobpost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobpost[P]>
      : GetScalarType<T[P], AggregateJobpost[P]>
  }




  export type JobpostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobpostWhereInput
    orderBy?: JobpostOrderByWithAggregationInput | JobpostOrderByWithAggregationInput[]
    by: JobpostScalarFieldEnum[] | JobpostScalarFieldEnum
    having?: JobpostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobpostCountAggregateInputType | true
    _avg?: JobpostAvgAggregateInputType
    _sum?: JobpostSumAggregateInputType
    _min?: JobpostMinAggregateInputType
    _max?: JobpostMaxAggregateInputType
  }

  export type JobpostGroupByOutputType = {
    id: number
    title: string
    description: string
    package: string
    type: string
    location: string
    category: string
    createdAt: Date
    updatedAt: Date
    requirement: string[]
    qualification: string[]
    _count: JobpostCountAggregateOutputType | null
    _avg: JobpostAvgAggregateOutputType | null
    _sum: JobpostSumAggregateOutputType | null
    _min: JobpostMinAggregateOutputType | null
    _max: JobpostMaxAggregateOutputType | null
  }

  type GetJobpostGroupByPayload<T extends JobpostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobpostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobpostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobpostGroupByOutputType[P]>
            : GetScalarType<T[P], JobpostGroupByOutputType[P]>
        }
      >
    >


  export type JobpostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    package?: boolean
    type?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requirement?: boolean
    qualification?: boolean
    candidates?: boolean | Jobpost$candidatesArgs<ExtArgs>
    _count?: boolean | JobpostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobpost"]>

  export type JobpostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    package?: boolean
    type?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requirement?: boolean
    qualification?: boolean
  }, ExtArgs["result"]["jobpost"]>

  export type JobpostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    package?: boolean
    type?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requirement?: boolean
    qualification?: boolean
  }, ExtArgs["result"]["jobpost"]>

  export type JobpostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    package?: boolean
    type?: boolean
    location?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requirement?: boolean
    qualification?: boolean
  }

  export type JobpostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "package" | "type" | "location" | "category" | "createdAt" | "updatedAt" | "requirement" | "qualification", ExtArgs["result"]["jobpost"]>
  export type JobpostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidates?: boolean | Jobpost$candidatesArgs<ExtArgs>
    _count?: boolean | JobpostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobpostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobpostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobpostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jobpost"
    objects: {
      candidates: Prisma.$CandidatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      package: string
      type: string
      location: string
      category: string
      createdAt: Date
      updatedAt: Date
      requirement: string[]
      qualification: string[]
    }, ExtArgs["result"]["jobpost"]>
    composites: {}
  }

  type JobpostGetPayload<S extends boolean | null | undefined | JobpostDefaultArgs> = $Result.GetResult<Prisma.$JobpostPayload, S>

  type JobpostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobpostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobpostCountAggregateInputType | true
    }

  export interface JobpostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jobpost'], meta: { name: 'Jobpost' } }
    /**
     * Find zero or one Jobpost that matches the filter.
     * @param {JobpostFindUniqueArgs} args - Arguments to find a Jobpost
     * @example
     * // Get one Jobpost
     * const jobpost = await prisma.jobpost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobpostFindUniqueArgs>(args: SelectSubset<T, JobpostFindUniqueArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobpost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobpostFindUniqueOrThrowArgs} args - Arguments to find a Jobpost
     * @example
     * // Get one Jobpost
     * const jobpost = await prisma.jobpost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobpostFindUniqueOrThrowArgs>(args: SelectSubset<T, JobpostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobpost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostFindFirstArgs} args - Arguments to find a Jobpost
     * @example
     * // Get one Jobpost
     * const jobpost = await prisma.jobpost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobpostFindFirstArgs>(args?: SelectSubset<T, JobpostFindFirstArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobpost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostFindFirstOrThrowArgs} args - Arguments to find a Jobpost
     * @example
     * // Get one Jobpost
     * const jobpost = await prisma.jobpost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobpostFindFirstOrThrowArgs>(args?: SelectSubset<T, JobpostFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobposts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobposts
     * const jobposts = await prisma.jobpost.findMany()
     * 
     * // Get first 10 Jobposts
     * const jobposts = await prisma.jobpost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobpostWithIdOnly = await prisma.jobpost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobpostFindManyArgs>(args?: SelectSubset<T, JobpostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobpost.
     * @param {JobpostCreateArgs} args - Arguments to create a Jobpost.
     * @example
     * // Create one Jobpost
     * const Jobpost = await prisma.jobpost.create({
     *   data: {
     *     // ... data to create a Jobpost
     *   }
     * })
     * 
     */
    create<T extends JobpostCreateArgs>(args: SelectSubset<T, JobpostCreateArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobposts.
     * @param {JobpostCreateManyArgs} args - Arguments to create many Jobposts.
     * @example
     * // Create many Jobposts
     * const jobpost = await prisma.jobpost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobpostCreateManyArgs>(args?: SelectSubset<T, JobpostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobposts and returns the data saved in the database.
     * @param {JobpostCreateManyAndReturnArgs} args - Arguments to create many Jobposts.
     * @example
     * // Create many Jobposts
     * const jobpost = await prisma.jobpost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobposts and only return the `id`
     * const jobpostWithIdOnly = await prisma.jobpost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobpostCreateManyAndReturnArgs>(args?: SelectSubset<T, JobpostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobpost.
     * @param {JobpostDeleteArgs} args - Arguments to delete one Jobpost.
     * @example
     * // Delete one Jobpost
     * const Jobpost = await prisma.jobpost.delete({
     *   where: {
     *     // ... filter to delete one Jobpost
     *   }
     * })
     * 
     */
    delete<T extends JobpostDeleteArgs>(args: SelectSubset<T, JobpostDeleteArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobpost.
     * @param {JobpostUpdateArgs} args - Arguments to update one Jobpost.
     * @example
     * // Update one Jobpost
     * const jobpost = await prisma.jobpost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobpostUpdateArgs>(args: SelectSubset<T, JobpostUpdateArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobposts.
     * @param {JobpostDeleteManyArgs} args - Arguments to filter Jobposts to delete.
     * @example
     * // Delete a few Jobposts
     * const { count } = await prisma.jobpost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobpostDeleteManyArgs>(args?: SelectSubset<T, JobpostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobposts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobposts
     * const jobpost = await prisma.jobpost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobpostUpdateManyArgs>(args: SelectSubset<T, JobpostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobposts and returns the data updated in the database.
     * @param {JobpostUpdateManyAndReturnArgs} args - Arguments to update many Jobposts.
     * @example
     * // Update many Jobposts
     * const jobpost = await prisma.jobpost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobposts and only return the `id`
     * const jobpostWithIdOnly = await prisma.jobpost.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobpostUpdateManyAndReturnArgs>(args: SelectSubset<T, JobpostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobpost.
     * @param {JobpostUpsertArgs} args - Arguments to update or create a Jobpost.
     * @example
     * // Update or create a Jobpost
     * const jobpost = await prisma.jobpost.upsert({
     *   create: {
     *     // ... data to create a Jobpost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobpost we want to update
     *   }
     * })
     */
    upsert<T extends JobpostUpsertArgs>(args: SelectSubset<T, JobpostUpsertArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobposts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostCountArgs} args - Arguments to filter Jobposts to count.
     * @example
     * // Count the number of Jobposts
     * const count = await prisma.jobpost.count({
     *   where: {
     *     // ... the filter for the Jobposts we want to count
     *   }
     * })
    **/
    count<T extends JobpostCountArgs>(
      args?: Subset<T, JobpostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobpostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobpost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobpostAggregateArgs>(args: Subset<T, JobpostAggregateArgs>): Prisma.PrismaPromise<GetJobpostAggregateType<T>>

    /**
     * Group by Jobpost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobpostGroupByArgs} args - Group by arguments.
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
      T extends JobpostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobpostGroupByArgs['orderBy'] }
        : { orderBy?: JobpostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobpostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobpostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jobpost model
   */
  readonly fields: JobpostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobpost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobpostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidates<T extends Jobpost$candidatesArgs<ExtArgs> = {}>(args?: Subset<T, Jobpost$candidatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Jobpost model
   */
  interface JobpostFieldRefs {
    readonly id: FieldRef<"Jobpost", 'Int'>
    readonly title: FieldRef<"Jobpost", 'String'>
    readonly description: FieldRef<"Jobpost", 'String'>
    readonly package: FieldRef<"Jobpost", 'String'>
    readonly type: FieldRef<"Jobpost", 'String'>
    readonly location: FieldRef<"Jobpost", 'String'>
    readonly category: FieldRef<"Jobpost", 'String'>
    readonly createdAt: FieldRef<"Jobpost", 'DateTime'>
    readonly updatedAt: FieldRef<"Jobpost", 'DateTime'>
    readonly requirement: FieldRef<"Jobpost", 'String[]'>
    readonly qualification: FieldRef<"Jobpost", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Jobpost findUnique
   */
  export type JobpostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * Filter, which Jobpost to fetch.
     */
    where: JobpostWhereUniqueInput
  }

  /**
   * Jobpost findUniqueOrThrow
   */
  export type JobpostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * Filter, which Jobpost to fetch.
     */
    where: JobpostWhereUniqueInput
  }

  /**
   * Jobpost findFirst
   */
  export type JobpostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * Filter, which Jobpost to fetch.
     */
    where?: JobpostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobposts to fetch.
     */
    orderBy?: JobpostOrderByWithRelationInput | JobpostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobposts.
     */
    cursor?: JobpostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobposts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobposts.
     */
    distinct?: JobpostScalarFieldEnum | JobpostScalarFieldEnum[]
  }

  /**
   * Jobpost findFirstOrThrow
   */
  export type JobpostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * Filter, which Jobpost to fetch.
     */
    where?: JobpostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobposts to fetch.
     */
    orderBy?: JobpostOrderByWithRelationInput | JobpostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobposts.
     */
    cursor?: JobpostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobposts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobposts.
     */
    distinct?: JobpostScalarFieldEnum | JobpostScalarFieldEnum[]
  }

  /**
   * Jobpost findMany
   */
  export type JobpostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * Filter, which Jobposts to fetch.
     */
    where?: JobpostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobposts to fetch.
     */
    orderBy?: JobpostOrderByWithRelationInput | JobpostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobposts.
     */
    cursor?: JobpostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobposts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobposts.
     */
    skip?: number
    distinct?: JobpostScalarFieldEnum | JobpostScalarFieldEnum[]
  }

  /**
   * Jobpost create
   */
  export type JobpostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * The data needed to create a Jobpost.
     */
    data: XOR<JobpostCreateInput, JobpostUncheckedCreateInput>
  }

  /**
   * Jobpost createMany
   */
  export type JobpostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobposts.
     */
    data: JobpostCreateManyInput | JobpostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jobpost createManyAndReturn
   */
  export type JobpostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * The data used to create many Jobposts.
     */
    data: JobpostCreateManyInput | JobpostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jobpost update
   */
  export type JobpostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * The data needed to update a Jobpost.
     */
    data: XOR<JobpostUpdateInput, JobpostUncheckedUpdateInput>
    /**
     * Choose, which Jobpost to update.
     */
    where: JobpostWhereUniqueInput
  }

  /**
   * Jobpost updateMany
   */
  export type JobpostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobposts.
     */
    data: XOR<JobpostUpdateManyMutationInput, JobpostUncheckedUpdateManyInput>
    /**
     * Filter which Jobposts to update
     */
    where?: JobpostWhereInput
    /**
     * Limit how many Jobposts to update.
     */
    limit?: number
  }

  /**
   * Jobpost updateManyAndReturn
   */
  export type JobpostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * The data used to update Jobposts.
     */
    data: XOR<JobpostUpdateManyMutationInput, JobpostUncheckedUpdateManyInput>
    /**
     * Filter which Jobposts to update
     */
    where?: JobpostWhereInput
    /**
     * Limit how many Jobposts to update.
     */
    limit?: number
  }

  /**
   * Jobpost upsert
   */
  export type JobpostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * The filter to search for the Jobpost to update in case it exists.
     */
    where: JobpostWhereUniqueInput
    /**
     * In case the Jobpost found by the `where` argument doesn't exist, create a new Jobpost with this data.
     */
    create: XOR<JobpostCreateInput, JobpostUncheckedCreateInput>
    /**
     * In case the Jobpost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobpostUpdateInput, JobpostUncheckedUpdateInput>
  }

  /**
   * Jobpost delete
   */
  export type JobpostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
    /**
     * Filter which Jobpost to delete.
     */
    where: JobpostWhereUniqueInput
  }

  /**
   * Jobpost deleteMany
   */
  export type JobpostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobposts to delete
     */
    where?: JobpostWhereInput
    /**
     * Limit how many Jobposts to delete.
     */
    limit?: number
  }

  /**
   * Jobpost.candidates
   */
  export type Jobpost$candidatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    cursor?: CandidateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Jobpost without action
   */
  export type JobpostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobpost
     */
    select?: JobpostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobpost
     */
    omit?: JobpostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobpostInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateAvgAggregateOutputType = {
    id: number | null
    jobpostId: number | null
    testScore: number | null
  }

  export type CandidateSumAggregateOutputType = {
    id: number | null
    jobpostId: number | null
    testScore: number | null
  }

  export type CandidateMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    location: string | null
    jobpostId: number | null
    status: string | null
    experience: string | null
    address: string | null
    parsedText: string | null
    testScore: number | null
    testStatus: string | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    location: string | null
    jobpostId: number | null
    status: string | null
    experience: string | null
    address: string | null
    parsedText: string | null
    testScore: number | null
    testStatus: string | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    resumeUrl: number
    location: number
    jobpostId: number
    status: number
    experience: number
    address: number
    parsedText: number
    testScore: number
    testStatus: number
    appliedAt: number
    updatedAt: number
    qualification: number
    _all: number
  }


  export type CandidateAvgAggregateInputType = {
    id?: true
    jobpostId?: true
    testScore?: true
  }

  export type CandidateSumAggregateInputType = {
    id?: true
    jobpostId?: true
    testScore?: true
  }

  export type CandidateMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    location?: true
    jobpostId?: true
    status?: true
    experience?: true
    address?: true
    parsedText?: true
    testScore?: true
    testStatus?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    location?: true
    jobpostId?: true
    status?: true
    experience?: true
    address?: true
    parsedText?: true
    testScore?: true
    testStatus?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    location?: true
    jobpostId?: true
    status?: true
    experience?: true
    address?: true
    parsedText?: true
    testScore?: true
    testStatus?: true
    appliedAt?: true
    updatedAt?: true
    qualification?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _avg?: CandidateAvgAggregateInputType
    _sum?: CandidateSumAggregateInputType
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    resumeUrl: string | null
    location: string
    jobpostId: number
    status: string
    experience: string
    address: string
    parsedText: string | null
    testScore: number | null
    testStatus: string
    appliedAt: Date
    updatedAt: Date
    qualification: string[]
    _count: CandidateCountAggregateOutputType | null
    _avg: CandidateAvgAggregateOutputType | null
    _sum: CandidateSumAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    location?: boolean
    jobpostId?: boolean
    status?: boolean
    experience?: boolean
    address?: boolean
    parsedText?: boolean
    testScore?: boolean
    testStatus?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    qualification?: boolean
    jobpost?: boolean | JobpostDefaultArgs<ExtArgs>
    interviews?: boolean | Candidate$interviewsArgs<ExtArgs>
    Offer?: boolean | Candidate$OfferArgs<ExtArgs>
    RecruitmentStatus?: boolean | Candidate$RecruitmentStatusArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    location?: boolean
    jobpostId?: boolean
    status?: boolean
    experience?: boolean
    address?: boolean
    parsedText?: boolean
    testScore?: boolean
    testStatus?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    qualification?: boolean
    jobpost?: boolean | JobpostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    location?: boolean
    jobpostId?: boolean
    status?: boolean
    experience?: boolean
    address?: boolean
    parsedText?: boolean
    testScore?: boolean
    testStatus?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    qualification?: boolean
    jobpost?: boolean | JobpostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    location?: boolean
    jobpostId?: boolean
    status?: boolean
    experience?: boolean
    address?: boolean
    parsedText?: boolean
    testScore?: boolean
    testStatus?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
    qualification?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "resumeUrl" | "location" | "jobpostId" | "status" | "experience" | "address" | "parsedText" | "testScore" | "testStatus" | "appliedAt" | "updatedAt" | "qualification", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobpost?: boolean | JobpostDefaultArgs<ExtArgs>
    interviews?: boolean | Candidate$interviewsArgs<ExtArgs>
    Offer?: boolean | Candidate$OfferArgs<ExtArgs>
    RecruitmentStatus?: boolean | Candidate$RecruitmentStatusArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobpost?: boolean | JobpostDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobpost?: boolean | JobpostDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      jobpost: Prisma.$JobpostPayload<ExtArgs>
      interviews: Prisma.$InterviewPayload<ExtArgs>[]
      Offer: Prisma.$OfferPayload<ExtArgs>[]
      RecruitmentStatus: Prisma.$RecruitmentStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      resumeUrl: string | null
      location: string
      jobpostId: number
      status: string
      experience: string
      address: string
      parsedText: string | null
      testScore: number | null
      testStatus: string
      appliedAt: Date
      updatedAt: Date
      qualification: string[]
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
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
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobpost<T extends JobpostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobpostDefaultArgs<ExtArgs>>): Prisma__JobpostClient<$Result.GetResult<Prisma.$JobpostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interviews<T extends Candidate$interviewsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$interviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Offer<T extends Candidate$OfferArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$OfferArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RecruitmentStatus<T extends Candidate$RecruitmentStatusArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$RecruitmentStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'Int'>
    readonly name: FieldRef<"Candidate", 'String'>
    readonly email: FieldRef<"Candidate", 'String'>
    readonly phone: FieldRef<"Candidate", 'String'>
    readonly resumeUrl: FieldRef<"Candidate", 'String'>
    readonly location: FieldRef<"Candidate", 'String'>
    readonly jobpostId: FieldRef<"Candidate", 'Int'>
    readonly status: FieldRef<"Candidate", 'String'>
    readonly experience: FieldRef<"Candidate", 'String'>
    readonly address: FieldRef<"Candidate", 'String'>
    readonly parsedText: FieldRef<"Candidate", 'String'>
    readonly testScore: FieldRef<"Candidate", 'Float'>
    readonly testStatus: FieldRef<"Candidate", 'String'>
    readonly appliedAt: FieldRef<"Candidate", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidate", 'DateTime'>
    readonly qualification: FieldRef<"Candidate", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.interviews
   */
  export type Candidate$interviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    cursor?: InterviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Candidate.Offer
   */
  export type Candidate$OfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Candidate.RecruitmentStatus
   */
  export type Candidate$RecruitmentStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    where?: RecruitmentStatusWhereInput
    orderBy?: RecruitmentStatusOrderByWithRelationInput | RecruitmentStatusOrderByWithRelationInput[]
    cursor?: RecruitmentStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecruitmentStatusScalarFieldEnum | RecruitmentStatusScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model Interview
   */

  export type AggregateInterview = {
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  export type InterviewAvgAggregateOutputType = {
    id: number | null
    candidateId: number | null
    round: number | null
  }

  export type InterviewSumAggregateOutputType = {
    id: number | null
    candidateId: number | null
    round: number | null
  }

  export type InterviewMinAggregateOutputType = {
    id: number | null
    candidateId: number | null
    interviewer: string | null
    round: number | null
    result: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewMaxAggregateOutputType = {
    id: number | null
    candidateId: number | null
    interviewer: string | null
    round: number | null
    result: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewCountAggregateOutputType = {
    id: number
    candidateId: number
    interviewer: number
    round: number
    result: number
    scheduledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewAvgAggregateInputType = {
    id?: true
    candidateId?: true
    round?: true
  }

  export type InterviewSumAggregateInputType = {
    id?: true
    candidateId?: true
    round?: true
  }

  export type InterviewMinAggregateInputType = {
    id?: true
    candidateId?: true
    interviewer?: true
    round?: true
    result?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewMaxAggregateInputType = {
    id?: true
    candidateId?: true
    interviewer?: true
    round?: true
    result?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewCountAggregateInputType = {
    id?: true
    candidateId?: true
    interviewer?: true
    round?: true
    result?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interview to aggregate.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interviews
    **/
    _count?: true | InterviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewMaxAggregateInputType
  }

  export type GetInterviewAggregateType<T extends InterviewAggregateArgs> = {
        [P in keyof T & keyof AggregateInterview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterview[P]>
      : GetScalarType<T[P], AggregateInterview[P]>
  }




  export type InterviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewWhereInput
    orderBy?: InterviewOrderByWithAggregationInput | InterviewOrderByWithAggregationInput[]
    by: InterviewScalarFieldEnum[] | InterviewScalarFieldEnum
    having?: InterviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewCountAggregateInputType | true
    _avg?: InterviewAvgAggregateInputType
    _sum?: InterviewSumAggregateInputType
    _min?: InterviewMinAggregateInputType
    _max?: InterviewMaxAggregateInputType
  }

  export type InterviewGroupByOutputType = {
    id: number
    candidateId: number
    interviewer: string
    round: number
    result: string
    scheduledAt: Date
    createdAt: Date
    updatedAt: Date
    _count: InterviewCountAggregateOutputType | null
    _avg: InterviewAvgAggregateOutputType | null
    _sum: InterviewSumAggregateOutputType | null
    _min: InterviewMinAggregateOutputType | null
    _max: InterviewMaxAggregateOutputType | null
  }

  type GetInterviewGroupByPayload<T extends InterviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    interviewer?: boolean
    round?: boolean
    result?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    interviewer?: boolean
    round?: boolean
    result?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    interviewer?: boolean
    round?: boolean
    result?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interview"]>

  export type InterviewSelectScalar = {
    id?: boolean
    candidateId?: boolean
    interviewer?: boolean
    round?: boolean
    result?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "interviewer" | "round" | "result" | "scheduledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["interview"]>
  export type InterviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type InterviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $InterviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interview"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidateId: number
      interviewer: string
      round: number
      result: string
      scheduledAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interview"]>
    composites: {}
  }

  type InterviewGetPayload<S extends boolean | null | undefined | InterviewDefaultArgs> = $Result.GetResult<Prisma.$InterviewPayload, S>

  type InterviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewCountAggregateInputType | true
    }

  export interface InterviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interview'], meta: { name: 'Interview' } }
    /**
     * Find zero or one Interview that matches the filter.
     * @param {InterviewFindUniqueArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewFindUniqueArgs>(args: SelectSubset<T, InterviewFindUniqueArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewFindUniqueOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewFindFirstArgs>(args?: SelectSubset<T, InterviewFindFirstArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindFirstOrThrowArgs} args - Arguments to find a Interview
     * @example
     * // Get one Interview
     * const interview = await prisma.interview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interviews
     * const interviews = await prisma.interview.findMany()
     * 
     * // Get first 10 Interviews
     * const interviews = await prisma.interview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewWithIdOnly = await prisma.interview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewFindManyArgs>(args?: SelectSubset<T, InterviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interview.
     * @param {InterviewCreateArgs} args - Arguments to create a Interview.
     * @example
     * // Create one Interview
     * const Interview = await prisma.interview.create({
     *   data: {
     *     // ... data to create a Interview
     *   }
     * })
     * 
     */
    create<T extends InterviewCreateArgs>(args: SelectSubset<T, InterviewCreateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interviews.
     * @param {InterviewCreateManyArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewCreateManyArgs>(args?: SelectSubset<T, InterviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interviews and returns the data saved in the database.
     * @param {InterviewCreateManyAndReturnArgs} args - Arguments to create many Interviews.
     * @example
     * // Create many Interviews
     * const interview = await prisma.interview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interview.
     * @param {InterviewDeleteArgs} args - Arguments to delete one Interview.
     * @example
     * // Delete one Interview
     * const Interview = await prisma.interview.delete({
     *   where: {
     *     // ... filter to delete one Interview
     *   }
     * })
     * 
     */
    delete<T extends InterviewDeleteArgs>(args: SelectSubset<T, InterviewDeleteArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interview.
     * @param {InterviewUpdateArgs} args - Arguments to update one Interview.
     * @example
     * // Update one Interview
     * const interview = await prisma.interview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewUpdateArgs>(args: SelectSubset<T, InterviewUpdateArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interviews.
     * @param {InterviewDeleteManyArgs} args - Arguments to filter Interviews to delete.
     * @example
     * // Delete a few Interviews
     * const { count } = await prisma.interview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewDeleteManyArgs>(args?: SelectSubset<T, InterviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewUpdateManyArgs>(args: SelectSubset<T, InterviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interviews and returns the data updated in the database.
     * @param {InterviewUpdateManyAndReturnArgs} args - Arguments to update many Interviews.
     * @example
     * // Update many Interviews
     * const interview = await prisma.interview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interviews and only return the `id`
     * const interviewWithIdOnly = await prisma.interview.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterviewUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interview.
     * @param {InterviewUpsertArgs} args - Arguments to update or create a Interview.
     * @example
     * // Update or create a Interview
     * const interview = await prisma.interview.upsert({
     *   create: {
     *     // ... data to create a Interview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interview we want to update
     *   }
     * })
     */
    upsert<T extends InterviewUpsertArgs>(args: SelectSubset<T, InterviewUpsertArgs<ExtArgs>>): Prisma__InterviewClient<$Result.GetResult<Prisma.$InterviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewCountArgs} args - Arguments to filter Interviews to count.
     * @example
     * // Count the number of Interviews
     * const count = await prisma.interview.count({
     *   where: {
     *     // ... the filter for the Interviews we want to count
     *   }
     * })
    **/
    count<T extends InterviewCountArgs>(
      args?: Subset<T, InterviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewAggregateArgs>(args: Subset<T, InterviewAggregateArgs>): Prisma.PrismaPromise<GetInterviewAggregateType<T>>

    /**
     * Group by Interview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewGroupByArgs} args - Group by arguments.
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
      T extends InterviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewGroupByArgs['orderBy'] }
        : { orderBy?: InterviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interview model
   */
  readonly fields: InterviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Interview model
   */
  interface InterviewFieldRefs {
    readonly id: FieldRef<"Interview", 'Int'>
    readonly candidateId: FieldRef<"Interview", 'Int'>
    readonly interviewer: FieldRef<"Interview", 'String'>
    readonly round: FieldRef<"Interview", 'Int'>
    readonly result: FieldRef<"Interview", 'String'>
    readonly scheduledAt: FieldRef<"Interview", 'DateTime'>
    readonly createdAt: FieldRef<"Interview", 'DateTime'>
    readonly updatedAt: FieldRef<"Interview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interview findUnique
   */
  export type InterviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findUniqueOrThrow
   */
  export type InterviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview findFirst
   */
  export type InterviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findFirstOrThrow
   */
  export type InterviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interview to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interviews.
     */
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview findMany
   */
  export type InterviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter, which Interviews to fetch.
     */
    where?: InterviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interviews to fetch.
     */
    orderBy?: InterviewOrderByWithRelationInput | InterviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interviews.
     */
    cursor?: InterviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interviews.
     */
    skip?: number
    distinct?: InterviewScalarFieldEnum | InterviewScalarFieldEnum[]
  }

  /**
   * Interview create
   */
  export type InterviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Interview.
     */
    data: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
  }

  /**
   * Interview createMany
   */
  export type InterviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interview createManyAndReturn
   */
  export type InterviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to create many Interviews.
     */
    data: InterviewCreateManyInput | InterviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview update
   */
  export type InterviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Interview.
     */
    data: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
    /**
     * Choose, which Interview to update.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview updateMany
   */
  export type InterviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
  }

  /**
   * Interview updateManyAndReturn
   */
  export type InterviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * The data used to update Interviews.
     */
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyInput>
    /**
     * Filter which Interviews to update
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interview upsert
   */
  export type InterviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Interview to update in case it exists.
     */
    where: InterviewWhereUniqueInput
    /**
     * In case the Interview found by the `where` argument doesn't exist, create a new Interview with this data.
     */
    create: XOR<InterviewCreateInput, InterviewUncheckedCreateInput>
    /**
     * In case the Interview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewUpdateInput, InterviewUncheckedUpdateInput>
  }

  /**
   * Interview delete
   */
  export type InterviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
    /**
     * Filter which Interview to delete.
     */
    where: InterviewWhereUniqueInput
  }

  /**
   * Interview deleteMany
   */
  export type InterviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interviews to delete
     */
    where?: InterviewWhereInput
    /**
     * Limit how many Interviews to delete.
     */
    limit?: number
  }

  /**
   * Interview without action
   */
  export type InterviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interview
     */
    select?: InterviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interview
     */
    omit?: InterviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewInclude<ExtArgs> | null
  }


  /**
   * Model RecruitmentStatus
   */

  export type AggregateRecruitmentStatus = {
    _count: RecruitmentStatusCountAggregateOutputType | null
    _avg: RecruitmentStatusAvgAggregateOutputType | null
    _sum: RecruitmentStatusSumAggregateOutputType | null
    _min: RecruitmentStatusMinAggregateOutputType | null
    _max: RecruitmentStatusMaxAggregateOutputType | null
  }

  export type RecruitmentStatusAvgAggregateOutputType = {
    id: number | null
    candidateId: number | null
  }

  export type RecruitmentStatusSumAggregateOutputType = {
    id: number | null
    candidateId: number | null
  }

  export type RecruitmentStatusMinAggregateOutputType = {
    id: number | null
    candidateId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecruitmentStatusMaxAggregateOutputType = {
    id: number | null
    candidateId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecruitmentStatusCountAggregateOutputType = {
    id: number
    candidateId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecruitmentStatusAvgAggregateInputType = {
    id?: true
    candidateId?: true
  }

  export type RecruitmentStatusSumAggregateInputType = {
    id?: true
    candidateId?: true
  }

  export type RecruitmentStatusMinAggregateInputType = {
    id?: true
    candidateId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecruitmentStatusMaxAggregateInputType = {
    id?: true
    candidateId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecruitmentStatusCountAggregateInputType = {
    id?: true
    candidateId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecruitmentStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecruitmentStatus to aggregate.
     */
    where?: RecruitmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruitmentStatuses to fetch.
     */
    orderBy?: RecruitmentStatusOrderByWithRelationInput | RecruitmentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecruitmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruitmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruitmentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecruitmentStatuses
    **/
    _count?: true | RecruitmentStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecruitmentStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecruitmentStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecruitmentStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecruitmentStatusMaxAggregateInputType
  }

  export type GetRecruitmentStatusAggregateType<T extends RecruitmentStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateRecruitmentStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecruitmentStatus[P]>
      : GetScalarType<T[P], AggregateRecruitmentStatus[P]>
  }




  export type RecruitmentStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecruitmentStatusWhereInput
    orderBy?: RecruitmentStatusOrderByWithAggregationInput | RecruitmentStatusOrderByWithAggregationInput[]
    by: RecruitmentStatusScalarFieldEnum[] | RecruitmentStatusScalarFieldEnum
    having?: RecruitmentStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecruitmentStatusCountAggregateInputType | true
    _avg?: RecruitmentStatusAvgAggregateInputType
    _sum?: RecruitmentStatusSumAggregateInputType
    _min?: RecruitmentStatusMinAggregateInputType
    _max?: RecruitmentStatusMaxAggregateInputType
  }

  export type RecruitmentStatusGroupByOutputType = {
    id: number
    candidateId: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: RecruitmentStatusCountAggregateOutputType | null
    _avg: RecruitmentStatusAvgAggregateOutputType | null
    _sum: RecruitmentStatusSumAggregateOutputType | null
    _min: RecruitmentStatusMinAggregateOutputType | null
    _max: RecruitmentStatusMaxAggregateOutputType | null
  }

  type GetRecruitmentStatusGroupByPayload<T extends RecruitmentStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecruitmentStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecruitmentStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecruitmentStatusGroupByOutputType[P]>
            : GetScalarType<T[P], RecruitmentStatusGroupByOutputType[P]>
        }
      >
    >


  export type RecruitmentStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recruitmentStatus"]>

  export type RecruitmentStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recruitmentStatus"]>

  export type RecruitmentStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recruitmentStatus"]>

  export type RecruitmentStatusSelectScalar = {
    id?: boolean
    candidateId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecruitmentStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["recruitmentStatus"]>
  export type RecruitmentStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type RecruitmentStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type RecruitmentStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $RecruitmentStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecruitmentStatus"
    objects: {
      Candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidateId: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recruitmentStatus"]>
    composites: {}
  }

  type RecruitmentStatusGetPayload<S extends boolean | null | undefined | RecruitmentStatusDefaultArgs> = $Result.GetResult<Prisma.$RecruitmentStatusPayload, S>

  type RecruitmentStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecruitmentStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecruitmentStatusCountAggregateInputType | true
    }

  export interface RecruitmentStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecruitmentStatus'], meta: { name: 'RecruitmentStatus' } }
    /**
     * Find zero or one RecruitmentStatus that matches the filter.
     * @param {RecruitmentStatusFindUniqueArgs} args - Arguments to find a RecruitmentStatus
     * @example
     * // Get one RecruitmentStatus
     * const recruitmentStatus = await prisma.recruitmentStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruitmentStatusFindUniqueArgs>(args: SelectSubset<T, RecruitmentStatusFindUniqueArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecruitmentStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruitmentStatusFindUniqueOrThrowArgs} args - Arguments to find a RecruitmentStatus
     * @example
     * // Get one RecruitmentStatus
     * const recruitmentStatus = await prisma.recruitmentStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruitmentStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, RecruitmentStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecruitmentStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusFindFirstArgs} args - Arguments to find a RecruitmentStatus
     * @example
     * // Get one RecruitmentStatus
     * const recruitmentStatus = await prisma.recruitmentStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruitmentStatusFindFirstArgs>(args?: SelectSubset<T, RecruitmentStatusFindFirstArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecruitmentStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusFindFirstOrThrowArgs} args - Arguments to find a RecruitmentStatus
     * @example
     * // Get one RecruitmentStatus
     * const recruitmentStatus = await prisma.recruitmentStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruitmentStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, RecruitmentStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecruitmentStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecruitmentStatuses
     * const recruitmentStatuses = await prisma.recruitmentStatus.findMany()
     * 
     * // Get first 10 RecruitmentStatuses
     * const recruitmentStatuses = await prisma.recruitmentStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recruitmentStatusWithIdOnly = await prisma.recruitmentStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecruitmentStatusFindManyArgs>(args?: SelectSubset<T, RecruitmentStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecruitmentStatus.
     * @param {RecruitmentStatusCreateArgs} args - Arguments to create a RecruitmentStatus.
     * @example
     * // Create one RecruitmentStatus
     * const RecruitmentStatus = await prisma.recruitmentStatus.create({
     *   data: {
     *     // ... data to create a RecruitmentStatus
     *   }
     * })
     * 
     */
    create<T extends RecruitmentStatusCreateArgs>(args: SelectSubset<T, RecruitmentStatusCreateArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecruitmentStatuses.
     * @param {RecruitmentStatusCreateManyArgs} args - Arguments to create many RecruitmentStatuses.
     * @example
     * // Create many RecruitmentStatuses
     * const recruitmentStatus = await prisma.recruitmentStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecruitmentStatusCreateManyArgs>(args?: SelectSubset<T, RecruitmentStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecruitmentStatuses and returns the data saved in the database.
     * @param {RecruitmentStatusCreateManyAndReturnArgs} args - Arguments to create many RecruitmentStatuses.
     * @example
     * // Create many RecruitmentStatuses
     * const recruitmentStatus = await prisma.recruitmentStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecruitmentStatuses and only return the `id`
     * const recruitmentStatusWithIdOnly = await prisma.recruitmentStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecruitmentStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, RecruitmentStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecruitmentStatus.
     * @param {RecruitmentStatusDeleteArgs} args - Arguments to delete one RecruitmentStatus.
     * @example
     * // Delete one RecruitmentStatus
     * const RecruitmentStatus = await prisma.recruitmentStatus.delete({
     *   where: {
     *     // ... filter to delete one RecruitmentStatus
     *   }
     * })
     * 
     */
    delete<T extends RecruitmentStatusDeleteArgs>(args: SelectSubset<T, RecruitmentStatusDeleteArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecruitmentStatus.
     * @param {RecruitmentStatusUpdateArgs} args - Arguments to update one RecruitmentStatus.
     * @example
     * // Update one RecruitmentStatus
     * const recruitmentStatus = await prisma.recruitmentStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecruitmentStatusUpdateArgs>(args: SelectSubset<T, RecruitmentStatusUpdateArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecruitmentStatuses.
     * @param {RecruitmentStatusDeleteManyArgs} args - Arguments to filter RecruitmentStatuses to delete.
     * @example
     * // Delete a few RecruitmentStatuses
     * const { count } = await prisma.recruitmentStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecruitmentStatusDeleteManyArgs>(args?: SelectSubset<T, RecruitmentStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecruitmentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecruitmentStatuses
     * const recruitmentStatus = await prisma.recruitmentStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecruitmentStatusUpdateManyArgs>(args: SelectSubset<T, RecruitmentStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecruitmentStatuses and returns the data updated in the database.
     * @param {RecruitmentStatusUpdateManyAndReturnArgs} args - Arguments to update many RecruitmentStatuses.
     * @example
     * // Update many RecruitmentStatuses
     * const recruitmentStatus = await prisma.recruitmentStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecruitmentStatuses and only return the `id`
     * const recruitmentStatusWithIdOnly = await prisma.recruitmentStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecruitmentStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, RecruitmentStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecruitmentStatus.
     * @param {RecruitmentStatusUpsertArgs} args - Arguments to update or create a RecruitmentStatus.
     * @example
     * // Update or create a RecruitmentStatus
     * const recruitmentStatus = await prisma.recruitmentStatus.upsert({
     *   create: {
     *     // ... data to create a RecruitmentStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecruitmentStatus we want to update
     *   }
     * })
     */
    upsert<T extends RecruitmentStatusUpsertArgs>(args: SelectSubset<T, RecruitmentStatusUpsertArgs<ExtArgs>>): Prisma__RecruitmentStatusClient<$Result.GetResult<Prisma.$RecruitmentStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecruitmentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusCountArgs} args - Arguments to filter RecruitmentStatuses to count.
     * @example
     * // Count the number of RecruitmentStatuses
     * const count = await prisma.recruitmentStatus.count({
     *   where: {
     *     // ... the filter for the RecruitmentStatuses we want to count
     *   }
     * })
    **/
    count<T extends RecruitmentStatusCountArgs>(
      args?: Subset<T, RecruitmentStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecruitmentStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecruitmentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecruitmentStatusAggregateArgs>(args: Subset<T, RecruitmentStatusAggregateArgs>): Prisma.PrismaPromise<GetRecruitmentStatusAggregateType<T>>

    /**
     * Group by RecruitmentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentStatusGroupByArgs} args - Group by arguments.
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
      T extends RecruitmentStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecruitmentStatusGroupByArgs['orderBy'] }
        : { orderBy?: RecruitmentStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecruitmentStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruitmentStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecruitmentStatus model
   */
  readonly fields: RecruitmentStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecruitmentStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecruitmentStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecruitmentStatus model
   */
  interface RecruitmentStatusFieldRefs {
    readonly id: FieldRef<"RecruitmentStatus", 'Int'>
    readonly candidateId: FieldRef<"RecruitmentStatus", 'Int'>
    readonly status: FieldRef<"RecruitmentStatus", 'String'>
    readonly createdAt: FieldRef<"RecruitmentStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"RecruitmentStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecruitmentStatus findUnique
   */
  export type RecruitmentStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which RecruitmentStatus to fetch.
     */
    where: RecruitmentStatusWhereUniqueInput
  }

  /**
   * RecruitmentStatus findUniqueOrThrow
   */
  export type RecruitmentStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which RecruitmentStatus to fetch.
     */
    where: RecruitmentStatusWhereUniqueInput
  }

  /**
   * RecruitmentStatus findFirst
   */
  export type RecruitmentStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which RecruitmentStatus to fetch.
     */
    where?: RecruitmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruitmentStatuses to fetch.
     */
    orderBy?: RecruitmentStatusOrderByWithRelationInput | RecruitmentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecruitmentStatuses.
     */
    cursor?: RecruitmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruitmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruitmentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecruitmentStatuses.
     */
    distinct?: RecruitmentStatusScalarFieldEnum | RecruitmentStatusScalarFieldEnum[]
  }

  /**
   * RecruitmentStatus findFirstOrThrow
   */
  export type RecruitmentStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which RecruitmentStatus to fetch.
     */
    where?: RecruitmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruitmentStatuses to fetch.
     */
    orderBy?: RecruitmentStatusOrderByWithRelationInput | RecruitmentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecruitmentStatuses.
     */
    cursor?: RecruitmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruitmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruitmentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecruitmentStatuses.
     */
    distinct?: RecruitmentStatusScalarFieldEnum | RecruitmentStatusScalarFieldEnum[]
  }

  /**
   * RecruitmentStatus findMany
   */
  export type RecruitmentStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * Filter, which RecruitmentStatuses to fetch.
     */
    where?: RecruitmentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruitmentStatuses to fetch.
     */
    orderBy?: RecruitmentStatusOrderByWithRelationInput | RecruitmentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecruitmentStatuses.
     */
    cursor?: RecruitmentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruitmentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruitmentStatuses.
     */
    skip?: number
    distinct?: RecruitmentStatusScalarFieldEnum | RecruitmentStatusScalarFieldEnum[]
  }

  /**
   * RecruitmentStatus create
   */
  export type RecruitmentStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a RecruitmentStatus.
     */
    data: XOR<RecruitmentStatusCreateInput, RecruitmentStatusUncheckedCreateInput>
  }

  /**
   * RecruitmentStatus createMany
   */
  export type RecruitmentStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecruitmentStatuses.
     */
    data: RecruitmentStatusCreateManyInput | RecruitmentStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecruitmentStatus createManyAndReturn
   */
  export type RecruitmentStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * The data used to create many RecruitmentStatuses.
     */
    data: RecruitmentStatusCreateManyInput | RecruitmentStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecruitmentStatus update
   */
  export type RecruitmentStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a RecruitmentStatus.
     */
    data: XOR<RecruitmentStatusUpdateInput, RecruitmentStatusUncheckedUpdateInput>
    /**
     * Choose, which RecruitmentStatus to update.
     */
    where: RecruitmentStatusWhereUniqueInput
  }

  /**
   * RecruitmentStatus updateMany
   */
  export type RecruitmentStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecruitmentStatuses.
     */
    data: XOR<RecruitmentStatusUpdateManyMutationInput, RecruitmentStatusUncheckedUpdateManyInput>
    /**
     * Filter which RecruitmentStatuses to update
     */
    where?: RecruitmentStatusWhereInput
    /**
     * Limit how many RecruitmentStatuses to update.
     */
    limit?: number
  }

  /**
   * RecruitmentStatus updateManyAndReturn
   */
  export type RecruitmentStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * The data used to update RecruitmentStatuses.
     */
    data: XOR<RecruitmentStatusUpdateManyMutationInput, RecruitmentStatusUncheckedUpdateManyInput>
    /**
     * Filter which RecruitmentStatuses to update
     */
    where?: RecruitmentStatusWhereInput
    /**
     * Limit how many RecruitmentStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecruitmentStatus upsert
   */
  export type RecruitmentStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the RecruitmentStatus to update in case it exists.
     */
    where: RecruitmentStatusWhereUniqueInput
    /**
     * In case the RecruitmentStatus found by the `where` argument doesn't exist, create a new RecruitmentStatus with this data.
     */
    create: XOR<RecruitmentStatusCreateInput, RecruitmentStatusUncheckedCreateInput>
    /**
     * In case the RecruitmentStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecruitmentStatusUpdateInput, RecruitmentStatusUncheckedUpdateInput>
  }

  /**
   * RecruitmentStatus delete
   */
  export type RecruitmentStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
    /**
     * Filter which RecruitmentStatus to delete.
     */
    where: RecruitmentStatusWhereUniqueInput
  }

  /**
   * RecruitmentStatus deleteMany
   */
  export type RecruitmentStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecruitmentStatuses to delete
     */
    where?: RecruitmentStatusWhereInput
    /**
     * Limit how many RecruitmentStatuses to delete.
     */
    limit?: number
  }

  /**
   * RecruitmentStatus without action
   */
  export type RecruitmentStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentStatus
     */
    select?: RecruitmentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruitmentStatus
     */
    omit?: RecruitmentStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruitmentStatusInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    id: number | null
    candidateId: number | null
  }

  export type OfferSumAggregateOutputType = {
    id: number | null
    candidateId: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: number | null
    candidateId: number | null
    offerLetter: string | null
    sendAt: Date | null
    updatedAt: Date | null
  }

  export type OfferMaxAggregateOutputType = {
    id: number | null
    candidateId: number | null
    offerLetter: string | null
    sendAt: Date | null
    updatedAt: Date | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    candidateId: number
    offerLetter: number
    sendAt: number
    updatedAt: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    id?: true
    candidateId?: true
  }

  export type OfferSumAggregateInputType = {
    id?: true
    candidateId?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    candidateId?: true
    offerLetter?: true
    sendAt?: true
    updatedAt?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    candidateId?: true
    offerLetter?: true
    sendAt?: true
    updatedAt?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    candidateId?: true
    offerLetter?: true
    sendAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: number
    candidateId: number
    offerLetter: string
    sendAt: Date
    updatedAt: Date
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    offerLetter?: boolean
    sendAt?: boolean
    updatedAt?: boolean
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    offerLetter?: boolean
    sendAt?: boolean
    updatedAt?: boolean
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    offerLetter?: boolean
    sendAt?: boolean
    updatedAt?: boolean
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    candidateId?: boolean
    offerLetter?: boolean
    sendAt?: boolean
    updatedAt?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "offerLetter" | "sendAt" | "updatedAt", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      Candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      candidateId: number
      offerLetter: string
      sendAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
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
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'Int'>
    readonly candidateId: FieldRef<"Offer", 'Int'>
    readonly offerLetter: FieldRef<"Offer", 'String'>
    readonly sendAt: FieldRef<"Offer", 'DateTime'>
    readonly updatedAt: FieldRef<"Offer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
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


  export const JobpostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    package: 'package',
    type: 'type',
    location: 'location',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requirement: 'requirement',
    qualification: 'qualification'
  };

  export type JobpostScalarFieldEnum = (typeof JobpostScalarFieldEnum)[keyof typeof JobpostScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    resumeUrl: 'resumeUrl',
    location: 'location',
    jobpostId: 'jobpostId',
    status: 'status',
    experience: 'experience',
    address: 'address',
    parsedText: 'parsedText',
    testScore: 'testScore',
    testStatus: 'testStatus',
    appliedAt: 'appliedAt',
    updatedAt: 'updatedAt',
    qualification: 'qualification'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const InterviewScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    interviewer: 'interviewer',
    round: 'round',
    result: 'result',
    scheduledAt: 'scheduledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum]


  export const RecruitmentStatusScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecruitmentStatusScalarFieldEnum = (typeof RecruitmentStatusScalarFieldEnum)[keyof typeof RecruitmentStatusScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    offerLetter: 'offerLetter',
    sendAt: 'sendAt',
    updatedAt: 'updatedAt'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type JobpostWhereInput = {
    AND?: JobpostWhereInput | JobpostWhereInput[]
    OR?: JobpostWhereInput[]
    NOT?: JobpostWhereInput | JobpostWhereInput[]
    id?: IntFilter<"Jobpost"> | number
    title?: StringFilter<"Jobpost"> | string
    description?: StringFilter<"Jobpost"> | string
    package?: StringFilter<"Jobpost"> | string
    type?: StringFilter<"Jobpost"> | string
    location?: StringFilter<"Jobpost"> | string
    category?: StringFilter<"Jobpost"> | string
    createdAt?: DateTimeFilter<"Jobpost"> | Date | string
    updatedAt?: DateTimeFilter<"Jobpost"> | Date | string
    requirement?: StringNullableListFilter<"Jobpost">
    qualification?: StringNullableListFilter<"Jobpost">
    candidates?: CandidateListRelationFilter
  }

  export type JobpostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    package?: SortOrder
    type?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requirement?: SortOrder
    qualification?: SortOrder
    candidates?: CandidateOrderByRelationAggregateInput
  }

  export type JobpostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobpostWhereInput | JobpostWhereInput[]
    OR?: JobpostWhereInput[]
    NOT?: JobpostWhereInput | JobpostWhereInput[]
    title?: StringFilter<"Jobpost"> | string
    description?: StringFilter<"Jobpost"> | string
    package?: StringFilter<"Jobpost"> | string
    type?: StringFilter<"Jobpost"> | string
    location?: StringFilter<"Jobpost"> | string
    category?: StringFilter<"Jobpost"> | string
    createdAt?: DateTimeFilter<"Jobpost"> | Date | string
    updatedAt?: DateTimeFilter<"Jobpost"> | Date | string
    requirement?: StringNullableListFilter<"Jobpost">
    qualification?: StringNullableListFilter<"Jobpost">
    candidates?: CandidateListRelationFilter
  }, "id">

  export type JobpostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    package?: SortOrder
    type?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requirement?: SortOrder
    qualification?: SortOrder
    _count?: JobpostCountOrderByAggregateInput
    _avg?: JobpostAvgOrderByAggregateInput
    _max?: JobpostMaxOrderByAggregateInput
    _min?: JobpostMinOrderByAggregateInput
    _sum?: JobpostSumOrderByAggregateInput
  }

  export type JobpostScalarWhereWithAggregatesInput = {
    AND?: JobpostScalarWhereWithAggregatesInput | JobpostScalarWhereWithAggregatesInput[]
    OR?: JobpostScalarWhereWithAggregatesInput[]
    NOT?: JobpostScalarWhereWithAggregatesInput | JobpostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jobpost"> | number
    title?: StringWithAggregatesFilter<"Jobpost"> | string
    description?: StringWithAggregatesFilter<"Jobpost"> | string
    package?: StringWithAggregatesFilter<"Jobpost"> | string
    type?: StringWithAggregatesFilter<"Jobpost"> | string
    location?: StringWithAggregatesFilter<"Jobpost"> | string
    category?: StringWithAggregatesFilter<"Jobpost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Jobpost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jobpost"> | Date | string
    requirement?: StringNullableListFilter<"Jobpost">
    qualification?: StringNullableListFilter<"Jobpost">
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: IntFilter<"Candidate"> | number
    name?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    phone?: StringFilter<"Candidate"> | string
    resumeUrl?: StringNullableFilter<"Candidate"> | string | null
    location?: StringFilter<"Candidate"> | string
    jobpostId?: IntFilter<"Candidate"> | number
    status?: StringFilter<"Candidate"> | string
    experience?: StringFilter<"Candidate"> | string
    address?: StringFilter<"Candidate"> | string
    parsedText?: StringNullableFilter<"Candidate"> | string | null
    testScore?: FloatNullableFilter<"Candidate"> | number | null
    testStatus?: StringFilter<"Candidate"> | string
    appliedAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    qualification?: StringNullableListFilter<"Candidate">
    jobpost?: XOR<JobpostScalarRelationFilter, JobpostWhereInput>
    interviews?: InterviewListRelationFilter
    Offer?: OfferListRelationFilter
    RecruitmentStatus?: RecruitmentStatusListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    jobpostId?: SortOrder
    status?: SortOrder
    experience?: SortOrder
    address?: SortOrder
    parsedText?: SortOrderInput | SortOrder
    testScore?: SortOrderInput | SortOrder
    testStatus?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    qualification?: SortOrder
    jobpost?: JobpostOrderByWithRelationInput
    interviews?: InterviewOrderByRelationAggregateInput
    Offer?: OfferOrderByRelationAggregateInput
    RecruitmentStatus?: RecruitmentStatusOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    phone?: StringFilter<"Candidate"> | string
    resumeUrl?: StringNullableFilter<"Candidate"> | string | null
    location?: StringFilter<"Candidate"> | string
    jobpostId?: IntFilter<"Candidate"> | number
    status?: StringFilter<"Candidate"> | string
    experience?: StringFilter<"Candidate"> | string
    address?: StringFilter<"Candidate"> | string
    parsedText?: StringNullableFilter<"Candidate"> | string | null
    testScore?: FloatNullableFilter<"Candidate"> | number | null
    testStatus?: StringFilter<"Candidate"> | string
    appliedAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    qualification?: StringNullableListFilter<"Candidate">
    jobpost?: XOR<JobpostScalarRelationFilter, JobpostWhereInput>
    interviews?: InterviewListRelationFilter
    Offer?: OfferListRelationFilter
    RecruitmentStatus?: RecruitmentStatusListRelationFilter
  }, "id" | "email">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    jobpostId?: SortOrder
    status?: SortOrder
    experience?: SortOrder
    address?: SortOrder
    parsedText?: SortOrderInput | SortOrder
    testScore?: SortOrderInput | SortOrder
    testStatus?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    qualification?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _avg?: CandidateAvgOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
    _sum?: CandidateSumOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Candidate"> | number
    name?: StringWithAggregatesFilter<"Candidate"> | string
    email?: StringWithAggregatesFilter<"Candidate"> | string
    phone?: StringWithAggregatesFilter<"Candidate"> | string
    resumeUrl?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    location?: StringWithAggregatesFilter<"Candidate"> | string
    jobpostId?: IntWithAggregatesFilter<"Candidate"> | number
    status?: StringWithAggregatesFilter<"Candidate"> | string
    experience?: StringWithAggregatesFilter<"Candidate"> | string
    address?: StringWithAggregatesFilter<"Candidate"> | string
    parsedText?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    testScore?: FloatNullableWithAggregatesFilter<"Candidate"> | number | null
    testStatus?: StringWithAggregatesFilter<"Candidate"> | string
    appliedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    qualification?: StringNullableListFilter<"Candidate">
  }

  export type InterviewWhereInput = {
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    id?: IntFilter<"Interview"> | number
    candidateId?: IntFilter<"Interview"> | number
    interviewer?: StringFilter<"Interview"> | string
    round?: IntFilter<"Interview"> | number
    result?: StringFilter<"Interview"> | string
    scheduledAt?: DateTimeFilter<"Interview"> | Date | string
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type InterviewOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    interviewer?: SortOrder
    round?: SortOrder
    result?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
  }

  export type InterviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterviewWhereInput | InterviewWhereInput[]
    OR?: InterviewWhereInput[]
    NOT?: InterviewWhereInput | InterviewWhereInput[]
    candidateId?: IntFilter<"Interview"> | number
    interviewer?: StringFilter<"Interview"> | string
    round?: IntFilter<"Interview"> | number
    result?: StringFilter<"Interview"> | string
    scheduledAt?: DateTimeFilter<"Interview"> | Date | string
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id">

  export type InterviewOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    interviewer?: SortOrder
    round?: SortOrder
    result?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewCountOrderByAggregateInput
    _avg?: InterviewAvgOrderByAggregateInput
    _max?: InterviewMaxOrderByAggregateInput
    _min?: InterviewMinOrderByAggregateInput
    _sum?: InterviewSumOrderByAggregateInput
  }

  export type InterviewScalarWhereWithAggregatesInput = {
    AND?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    OR?: InterviewScalarWhereWithAggregatesInput[]
    NOT?: InterviewScalarWhereWithAggregatesInput | InterviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interview"> | number
    candidateId?: IntWithAggregatesFilter<"Interview"> | number
    interviewer?: StringWithAggregatesFilter<"Interview"> | string
    round?: IntWithAggregatesFilter<"Interview"> | number
    result?: StringWithAggregatesFilter<"Interview"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interview"> | Date | string
  }

  export type RecruitmentStatusWhereInput = {
    AND?: RecruitmentStatusWhereInput | RecruitmentStatusWhereInput[]
    OR?: RecruitmentStatusWhereInput[]
    NOT?: RecruitmentStatusWhereInput | RecruitmentStatusWhereInput[]
    id?: IntFilter<"RecruitmentStatus"> | number
    candidateId?: IntFilter<"RecruitmentStatus"> | number
    status?: StringFilter<"RecruitmentStatus"> | string
    createdAt?: DateTimeFilter<"RecruitmentStatus"> | Date | string
    updatedAt?: DateTimeFilter<"RecruitmentStatus"> | Date | string
    Candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type RecruitmentStatusOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Candidate?: CandidateOrderByWithRelationInput
  }

  export type RecruitmentStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecruitmentStatusWhereInput | RecruitmentStatusWhereInput[]
    OR?: RecruitmentStatusWhereInput[]
    NOT?: RecruitmentStatusWhereInput | RecruitmentStatusWhereInput[]
    candidateId?: IntFilter<"RecruitmentStatus"> | number
    status?: StringFilter<"RecruitmentStatus"> | string
    createdAt?: DateTimeFilter<"RecruitmentStatus"> | Date | string
    updatedAt?: DateTimeFilter<"RecruitmentStatus"> | Date | string
    Candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id">

  export type RecruitmentStatusOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecruitmentStatusCountOrderByAggregateInput
    _avg?: RecruitmentStatusAvgOrderByAggregateInput
    _max?: RecruitmentStatusMaxOrderByAggregateInput
    _min?: RecruitmentStatusMinOrderByAggregateInput
    _sum?: RecruitmentStatusSumOrderByAggregateInput
  }

  export type RecruitmentStatusScalarWhereWithAggregatesInput = {
    AND?: RecruitmentStatusScalarWhereWithAggregatesInput | RecruitmentStatusScalarWhereWithAggregatesInput[]
    OR?: RecruitmentStatusScalarWhereWithAggregatesInput[]
    NOT?: RecruitmentStatusScalarWhereWithAggregatesInput | RecruitmentStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecruitmentStatus"> | number
    candidateId?: IntWithAggregatesFilter<"RecruitmentStatus"> | number
    status?: StringWithAggregatesFilter<"RecruitmentStatus"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecruitmentStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecruitmentStatus"> | Date | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: IntFilter<"Offer"> | number
    candidateId?: IntFilter<"Offer"> | number
    offerLetter?: StringFilter<"Offer"> | string
    sendAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    Candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    offerLetter?: SortOrder
    sendAt?: SortOrder
    updatedAt?: SortOrder
    Candidate?: CandidateOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    candidateId?: IntFilter<"Offer"> | number
    offerLetter?: StringFilter<"Offer"> | string
    sendAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    Candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    offerLetter?: SortOrder
    sendAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Offer"> | number
    candidateId?: IntWithAggregatesFilter<"Offer"> | number
    offerLetter?: StringWithAggregatesFilter<"Offer"> | string
    sendAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
  }

  export type JobpostCreateInput = {
    title: string
    description: string
    package: string
    type: string
    location: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requirement?: JobpostCreaterequirementInput | string[]
    qualification?: JobpostCreatequalificationInput | string[]
    candidates?: CandidateCreateNestedManyWithoutJobpostInput
  }

  export type JobpostUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    package: string
    type: string
    location: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requirement?: JobpostCreaterequirementInput | string[]
    qualification?: JobpostCreatequalificationInput | string[]
    candidates?: CandidateUncheckedCreateNestedManyWithoutJobpostInput
  }

  export type JobpostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: JobpostUpdaterequirementInput | string[]
    qualification?: JobpostUpdatequalificationInput | string[]
    candidates?: CandidateUpdateManyWithoutJobpostNestedInput
  }

  export type JobpostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: JobpostUpdaterequirementInput | string[]
    qualification?: JobpostUpdatequalificationInput | string[]
    candidates?: CandidateUncheckedUpdateManyWithoutJobpostNestedInput
  }

  export type JobpostCreateManyInput = {
    id?: number
    title: string
    description: string
    package: string
    type: string
    location: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requirement?: JobpostCreaterequirementInput | string[]
    qualification?: JobpostCreatequalificationInput | string[]
  }

  export type JobpostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: JobpostUpdaterequirementInput | string[]
    qualification?: JobpostUpdatequalificationInput | string[]
  }

  export type JobpostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: JobpostUpdaterequirementInput | string[]
    qualification?: JobpostUpdatequalificationInput | string[]
  }

  export type CandidateCreateInput = {
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    jobpost: JobpostCreateNestedOneWithoutCandidatesInput
    interviews?: InterviewCreateNestedManyWithoutCandidateInput
    Offer?: OfferCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    jobpostId: number
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    interviews?: InterviewUncheckedCreateNestedManyWithoutCandidateInput
    Offer?: OfferUncheckedCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    jobpost?: JobpostUpdateOneRequiredWithoutCandidatesNestedInput
    interviews?: InterviewUpdateManyWithoutCandidateNestedInput
    Offer?: OfferUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    jobpostId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    interviews?: InterviewUncheckedUpdateManyWithoutCandidateNestedInput
    Offer?: OfferUncheckedUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    jobpostId: number
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
  }

  export type CandidateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    jobpostId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
  }

  export type InterviewCreateInput = {
    interviewer: string
    round: number
    result: string
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutInterviewsInput
  }

  export type InterviewUncheckedCreateInput = {
    id?: number
    candidateId: number
    interviewer: string
    round: number
    result: string
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateInput = {
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutInterviewsNestedInput
  }

  export type InterviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewCreateManyInput = {
    id?: number
    candidateId: number
    interviewer: string
    round: number
    result: string
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateManyMutationInput = {
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentStatusCreateInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Candidate: CandidateCreateNestedOneWithoutRecruitmentStatusInput
  }

  export type RecruitmentStatusUncheckedCreateInput = {
    id?: number
    candidateId: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruitmentStatusUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Candidate?: CandidateUpdateOneRequiredWithoutRecruitmentStatusNestedInput
  }

  export type RecruitmentStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentStatusCreateManyInput = {
    id?: number
    candidateId: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruitmentStatusUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateInput = {
    offerLetter: string
    sendAt?: Date | string
    updatedAt?: Date | string
    Candidate: CandidateCreateNestedOneWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: number
    candidateId: number
    offerLetter: string
    sendAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferUpdateInput = {
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Candidate?: CandidateUpdateOneRequiredWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferCreateManyInput = {
    id?: number
    candidateId: number
    offerLetter: string
    sendAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferUpdateManyMutationInput = {
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    candidateId?: IntFieldUpdateOperationsInput | number
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CandidateListRelationFilter = {
    every?: CandidateWhereInput
    some?: CandidateWhereInput
    none?: CandidateWhereInput
  }

  export type CandidateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobpostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    package?: SortOrder
    type?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requirement?: SortOrder
    qualification?: SortOrder
  }

  export type JobpostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobpostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    package?: SortOrder
    type?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobpostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    package?: SortOrder
    type?: SortOrder
    location?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobpostSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type JobpostScalarRelationFilter = {
    is?: JobpostWhereInput
    isNot?: JobpostWhereInput
  }

  export type InterviewListRelationFilter = {
    every?: InterviewWhereInput
    some?: InterviewWhereInput
    none?: InterviewWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type RecruitmentStatusListRelationFilter = {
    every?: RecruitmentStatusWhereInput
    some?: RecruitmentStatusWhereInput
    none?: RecruitmentStatusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InterviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecruitmentStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    location?: SortOrder
    jobpostId?: SortOrder
    status?: SortOrder
    experience?: SortOrder
    address?: SortOrder
    parsedText?: SortOrder
    testScore?: SortOrder
    testStatus?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    qualification?: SortOrder
  }

  export type CandidateAvgOrderByAggregateInput = {
    id?: SortOrder
    jobpostId?: SortOrder
    testScore?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    location?: SortOrder
    jobpostId?: SortOrder
    status?: SortOrder
    experience?: SortOrder
    address?: SortOrder
    parsedText?: SortOrder
    testScore?: SortOrder
    testStatus?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    location?: SortOrder
    jobpostId?: SortOrder
    status?: SortOrder
    experience?: SortOrder
    address?: SortOrder
    parsedText?: SortOrder
    testScore?: SortOrder
    testStatus?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateSumOrderByAggregateInput = {
    id?: SortOrder
    jobpostId?: SortOrder
    testScore?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type InterviewCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    interviewer?: SortOrder
    round?: SortOrder
    result?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewAvgOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    round?: SortOrder
  }

  export type InterviewMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    interviewer?: SortOrder
    round?: SortOrder
    result?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    interviewer?: SortOrder
    round?: SortOrder
    result?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewSumOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    round?: SortOrder
  }

  export type RecruitmentStatusCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecruitmentStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
  }

  export type RecruitmentStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecruitmentStatusMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecruitmentStatusSumOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    offerLetter?: SortOrder
    sendAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    offerLetter?: SortOrder
    sendAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    offerLetter?: SortOrder
    sendAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
  }

  export type JobpostCreaterequirementInput = {
    set: string[]
  }

  export type JobpostCreatequalificationInput = {
    set: string[]
  }

  export type CandidateCreateNestedManyWithoutJobpostInput = {
    create?: XOR<CandidateCreateWithoutJobpostInput, CandidateUncheckedCreateWithoutJobpostInput> | CandidateCreateWithoutJobpostInput[] | CandidateUncheckedCreateWithoutJobpostInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobpostInput | CandidateCreateOrConnectWithoutJobpostInput[]
    createMany?: CandidateCreateManyJobpostInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type CandidateUncheckedCreateNestedManyWithoutJobpostInput = {
    create?: XOR<CandidateCreateWithoutJobpostInput, CandidateUncheckedCreateWithoutJobpostInput> | CandidateCreateWithoutJobpostInput[] | CandidateUncheckedCreateWithoutJobpostInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobpostInput | CandidateCreateOrConnectWithoutJobpostInput[]
    createMany?: CandidateCreateManyJobpostInputEnvelope
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobpostUpdaterequirementInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobpostUpdatequalificationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CandidateUpdateManyWithoutJobpostNestedInput = {
    create?: XOR<CandidateCreateWithoutJobpostInput, CandidateUncheckedCreateWithoutJobpostInput> | CandidateCreateWithoutJobpostInput[] | CandidateUncheckedCreateWithoutJobpostInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobpostInput | CandidateCreateOrConnectWithoutJobpostInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutJobpostInput | CandidateUpsertWithWhereUniqueWithoutJobpostInput[]
    createMany?: CandidateCreateManyJobpostInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutJobpostInput | CandidateUpdateWithWhereUniqueWithoutJobpostInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutJobpostInput | CandidateUpdateManyWithWhereWithoutJobpostInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidateUncheckedUpdateManyWithoutJobpostNestedInput = {
    create?: XOR<CandidateCreateWithoutJobpostInput, CandidateUncheckedCreateWithoutJobpostInput> | CandidateCreateWithoutJobpostInput[] | CandidateUncheckedCreateWithoutJobpostInput[]
    connectOrCreate?: CandidateCreateOrConnectWithoutJobpostInput | CandidateCreateOrConnectWithoutJobpostInput[]
    upsert?: CandidateUpsertWithWhereUniqueWithoutJobpostInput | CandidateUpsertWithWhereUniqueWithoutJobpostInput[]
    createMany?: CandidateCreateManyJobpostInputEnvelope
    set?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    disconnect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    delete?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    connect?: CandidateWhereUniqueInput | CandidateWhereUniqueInput[]
    update?: CandidateUpdateWithWhereUniqueWithoutJobpostInput | CandidateUpdateWithWhereUniqueWithoutJobpostInput[]
    updateMany?: CandidateUpdateManyWithWhereWithoutJobpostInput | CandidateUpdateManyWithWhereWithoutJobpostInput[]
    deleteMany?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
  }

  export type CandidateCreatequalificationInput = {
    set: string[]
  }

  export type JobpostCreateNestedOneWithoutCandidatesInput = {
    create?: XOR<JobpostCreateWithoutCandidatesInput, JobpostUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: JobpostCreateOrConnectWithoutCandidatesInput
    connect?: JobpostWhereUniqueInput
  }

  export type InterviewCreateNestedManyWithoutCandidateInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type OfferCreateNestedManyWithoutCandidateInput = {
    create?: XOR<OfferCreateWithoutCandidateInput, OfferUncheckedCreateWithoutCandidateInput> | OfferCreateWithoutCandidateInput[] | OfferUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCandidateInput | OfferCreateOrConnectWithoutCandidateInput[]
    createMany?: OfferCreateManyCandidateInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type RecruitmentStatusCreateNestedManyWithoutCandidateInput = {
    create?: XOR<RecruitmentStatusCreateWithoutCandidateInput, RecruitmentStatusUncheckedCreateWithoutCandidateInput> | RecruitmentStatusCreateWithoutCandidateInput[] | RecruitmentStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: RecruitmentStatusCreateOrConnectWithoutCandidateInput | RecruitmentStatusCreateOrConnectWithoutCandidateInput[]
    createMany?: RecruitmentStatusCreateManyCandidateInputEnvelope
    connect?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
  }

  export type InterviewUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<OfferCreateWithoutCandidateInput, OfferUncheckedCreateWithoutCandidateInput> | OfferCreateWithoutCandidateInput[] | OfferUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCandidateInput | OfferCreateOrConnectWithoutCandidateInput[]
    createMany?: OfferCreateManyCandidateInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type RecruitmentStatusUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<RecruitmentStatusCreateWithoutCandidateInput, RecruitmentStatusUncheckedCreateWithoutCandidateInput> | RecruitmentStatusCreateWithoutCandidateInput[] | RecruitmentStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: RecruitmentStatusCreateOrConnectWithoutCandidateInput | RecruitmentStatusCreateOrConnectWithoutCandidateInput[]
    createMany?: RecruitmentStatusCreateManyCandidateInputEnvelope
    connect?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidateUpdatequalificationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type JobpostUpdateOneRequiredWithoutCandidatesNestedInput = {
    create?: XOR<JobpostCreateWithoutCandidatesInput, JobpostUncheckedCreateWithoutCandidatesInput>
    connectOrCreate?: JobpostCreateOrConnectWithoutCandidatesInput
    upsert?: JobpostUpsertWithoutCandidatesInput
    connect?: JobpostWhereUniqueInput
    update?: XOR<XOR<JobpostUpdateToOneWithWhereWithoutCandidatesInput, JobpostUpdateWithoutCandidatesInput>, JobpostUncheckedUpdateWithoutCandidatesInput>
  }

  export type InterviewUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutCandidateInput | InterviewUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutCandidateInput | InterviewUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutCandidateInput | InterviewUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type OfferUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<OfferCreateWithoutCandidateInput, OfferUncheckedCreateWithoutCandidateInput> | OfferCreateWithoutCandidateInput[] | OfferUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCandidateInput | OfferCreateOrConnectWithoutCandidateInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutCandidateInput | OfferUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: OfferCreateManyCandidateInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutCandidateInput | OfferUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutCandidateInput | OfferUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type RecruitmentStatusUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<RecruitmentStatusCreateWithoutCandidateInput, RecruitmentStatusUncheckedCreateWithoutCandidateInput> | RecruitmentStatusCreateWithoutCandidateInput[] | RecruitmentStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: RecruitmentStatusCreateOrConnectWithoutCandidateInput | RecruitmentStatusCreateOrConnectWithoutCandidateInput[]
    upsert?: RecruitmentStatusUpsertWithWhereUniqueWithoutCandidateInput | RecruitmentStatusUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: RecruitmentStatusCreateManyCandidateInputEnvelope
    set?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    disconnect?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    delete?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    connect?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    update?: RecruitmentStatusUpdateWithWhereUniqueWithoutCandidateInput | RecruitmentStatusUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: RecruitmentStatusUpdateManyWithWhereWithoutCandidateInput | RecruitmentStatusUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: RecruitmentStatusScalarWhereInput | RecruitmentStatusScalarWhereInput[]
  }

  export type InterviewUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput> | InterviewCreateWithoutCandidateInput[] | InterviewUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: InterviewCreateOrConnectWithoutCandidateInput | InterviewCreateOrConnectWithoutCandidateInput[]
    upsert?: InterviewUpsertWithWhereUniqueWithoutCandidateInput | InterviewUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: InterviewCreateManyCandidateInputEnvelope
    set?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    disconnect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    delete?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    connect?: InterviewWhereUniqueInput | InterviewWhereUniqueInput[]
    update?: InterviewUpdateWithWhereUniqueWithoutCandidateInput | InterviewUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: InterviewUpdateManyWithWhereWithoutCandidateInput | InterviewUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<OfferCreateWithoutCandidateInput, OfferUncheckedCreateWithoutCandidateInput> | OfferCreateWithoutCandidateInput[] | OfferUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutCandidateInput | OfferCreateOrConnectWithoutCandidateInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutCandidateInput | OfferUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: OfferCreateManyCandidateInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutCandidateInput | OfferUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutCandidateInput | OfferUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type RecruitmentStatusUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<RecruitmentStatusCreateWithoutCandidateInput, RecruitmentStatusUncheckedCreateWithoutCandidateInput> | RecruitmentStatusCreateWithoutCandidateInput[] | RecruitmentStatusUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: RecruitmentStatusCreateOrConnectWithoutCandidateInput | RecruitmentStatusCreateOrConnectWithoutCandidateInput[]
    upsert?: RecruitmentStatusUpsertWithWhereUniqueWithoutCandidateInput | RecruitmentStatusUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: RecruitmentStatusCreateManyCandidateInputEnvelope
    set?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    disconnect?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    delete?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    connect?: RecruitmentStatusWhereUniqueInput | RecruitmentStatusWhereUniqueInput[]
    update?: RecruitmentStatusUpdateWithWhereUniqueWithoutCandidateInput | RecruitmentStatusUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: RecruitmentStatusUpdateManyWithWhereWithoutCandidateInput | RecruitmentStatusUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: RecruitmentStatusScalarWhereInput | RecruitmentStatusScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutInterviewsInput = {
    create?: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutInterviewsInput
    connect?: CandidateWhereUniqueInput
  }

  export type CandidateUpdateOneRequiredWithoutInterviewsNestedInput = {
    create?: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutInterviewsInput
    upsert?: CandidateUpsertWithoutInterviewsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutInterviewsInput, CandidateUpdateWithoutInterviewsInput>, CandidateUncheckedUpdateWithoutInterviewsInput>
  }

  export type CandidateCreateNestedOneWithoutRecruitmentStatusInput = {
    create?: XOR<CandidateCreateWithoutRecruitmentStatusInput, CandidateUncheckedCreateWithoutRecruitmentStatusInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutRecruitmentStatusInput
    connect?: CandidateWhereUniqueInput
  }

  export type CandidateUpdateOneRequiredWithoutRecruitmentStatusNestedInput = {
    create?: XOR<CandidateCreateWithoutRecruitmentStatusInput, CandidateUncheckedCreateWithoutRecruitmentStatusInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutRecruitmentStatusInput
    upsert?: CandidateUpsertWithoutRecruitmentStatusInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutRecruitmentStatusInput, CandidateUpdateWithoutRecruitmentStatusInput>, CandidateUncheckedUpdateWithoutRecruitmentStatusInput>
  }

  export type CandidateCreateNestedOneWithoutOfferInput = {
    create?: XOR<CandidateCreateWithoutOfferInput, CandidateUncheckedCreateWithoutOfferInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutOfferInput
    connect?: CandidateWhereUniqueInput
  }

  export type CandidateUpdateOneRequiredWithoutOfferNestedInput = {
    create?: XOR<CandidateCreateWithoutOfferInput, CandidateUncheckedCreateWithoutOfferInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutOfferInput
    upsert?: CandidateUpsertWithoutOfferInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutOfferInput, CandidateUpdateWithoutOfferInput>, CandidateUncheckedUpdateWithoutOfferInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CandidateCreateWithoutJobpostInput = {
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    interviews?: InterviewCreateNestedManyWithoutCandidateInput
    Offer?: OfferCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutJobpostInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    interviews?: InterviewUncheckedCreateNestedManyWithoutCandidateInput
    Offer?: OfferUncheckedCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutJobpostInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutJobpostInput, CandidateUncheckedCreateWithoutJobpostInput>
  }

  export type CandidateCreateManyJobpostInputEnvelope = {
    data: CandidateCreateManyJobpostInput | CandidateCreateManyJobpostInput[]
    skipDuplicates?: boolean
  }

  export type CandidateUpsertWithWhereUniqueWithoutJobpostInput = {
    where: CandidateWhereUniqueInput
    update: XOR<CandidateUpdateWithoutJobpostInput, CandidateUncheckedUpdateWithoutJobpostInput>
    create: XOR<CandidateCreateWithoutJobpostInput, CandidateUncheckedCreateWithoutJobpostInput>
  }

  export type CandidateUpdateWithWhereUniqueWithoutJobpostInput = {
    where: CandidateWhereUniqueInput
    data: XOR<CandidateUpdateWithoutJobpostInput, CandidateUncheckedUpdateWithoutJobpostInput>
  }

  export type CandidateUpdateManyWithWhereWithoutJobpostInput = {
    where: CandidateScalarWhereInput
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyWithoutJobpostInput>
  }

  export type CandidateScalarWhereInput = {
    AND?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    OR?: CandidateScalarWhereInput[]
    NOT?: CandidateScalarWhereInput | CandidateScalarWhereInput[]
    id?: IntFilter<"Candidate"> | number
    name?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    phone?: StringFilter<"Candidate"> | string
    resumeUrl?: StringNullableFilter<"Candidate"> | string | null
    location?: StringFilter<"Candidate"> | string
    jobpostId?: IntFilter<"Candidate"> | number
    status?: StringFilter<"Candidate"> | string
    experience?: StringFilter<"Candidate"> | string
    address?: StringFilter<"Candidate"> | string
    parsedText?: StringNullableFilter<"Candidate"> | string | null
    testScore?: FloatNullableFilter<"Candidate"> | number | null
    testStatus?: StringFilter<"Candidate"> | string
    appliedAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
    qualification?: StringNullableListFilter<"Candidate">
  }

  export type JobpostCreateWithoutCandidatesInput = {
    title: string
    description: string
    package: string
    type: string
    location: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requirement?: JobpostCreaterequirementInput | string[]
    qualification?: JobpostCreatequalificationInput | string[]
  }

  export type JobpostUncheckedCreateWithoutCandidatesInput = {
    id?: number
    title: string
    description: string
    package: string
    type: string
    location: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requirement?: JobpostCreaterequirementInput | string[]
    qualification?: JobpostCreatequalificationInput | string[]
  }

  export type JobpostCreateOrConnectWithoutCandidatesInput = {
    where: JobpostWhereUniqueInput
    create: XOR<JobpostCreateWithoutCandidatesInput, JobpostUncheckedCreateWithoutCandidatesInput>
  }

  export type InterviewCreateWithoutCandidateInput = {
    interviewer: string
    round: number
    result: string
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUncheckedCreateWithoutCandidateInput = {
    id?: number
    interviewer: string
    round: number
    result: string
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewCreateOrConnectWithoutCandidateInput = {
    where: InterviewWhereUniqueInput
    create: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput>
  }

  export type InterviewCreateManyCandidateInputEnvelope = {
    data: InterviewCreateManyCandidateInput | InterviewCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type OfferCreateWithoutCandidateInput = {
    offerLetter: string
    sendAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferUncheckedCreateWithoutCandidateInput = {
    id?: number
    offerLetter: string
    sendAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferCreateOrConnectWithoutCandidateInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutCandidateInput, OfferUncheckedCreateWithoutCandidateInput>
  }

  export type OfferCreateManyCandidateInputEnvelope = {
    data: OfferCreateManyCandidateInput | OfferCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type RecruitmentStatusCreateWithoutCandidateInput = {
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruitmentStatusUncheckedCreateWithoutCandidateInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruitmentStatusCreateOrConnectWithoutCandidateInput = {
    where: RecruitmentStatusWhereUniqueInput
    create: XOR<RecruitmentStatusCreateWithoutCandidateInput, RecruitmentStatusUncheckedCreateWithoutCandidateInput>
  }

  export type RecruitmentStatusCreateManyCandidateInputEnvelope = {
    data: RecruitmentStatusCreateManyCandidateInput | RecruitmentStatusCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type JobpostUpsertWithoutCandidatesInput = {
    update: XOR<JobpostUpdateWithoutCandidatesInput, JobpostUncheckedUpdateWithoutCandidatesInput>
    create: XOR<JobpostCreateWithoutCandidatesInput, JobpostUncheckedCreateWithoutCandidatesInput>
    where?: JobpostWhereInput
  }

  export type JobpostUpdateToOneWithWhereWithoutCandidatesInput = {
    where?: JobpostWhereInput
    data: XOR<JobpostUpdateWithoutCandidatesInput, JobpostUncheckedUpdateWithoutCandidatesInput>
  }

  export type JobpostUpdateWithoutCandidatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: JobpostUpdaterequirementInput | string[]
    qualification?: JobpostUpdatequalificationInput | string[]
  }

  export type JobpostUncheckedUpdateWithoutCandidatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requirement?: JobpostUpdaterequirementInput | string[]
    qualification?: JobpostUpdatequalificationInput | string[]
  }

  export type InterviewUpsertWithWhereUniqueWithoutCandidateInput = {
    where: InterviewWhereUniqueInput
    update: XOR<InterviewUpdateWithoutCandidateInput, InterviewUncheckedUpdateWithoutCandidateInput>
    create: XOR<InterviewCreateWithoutCandidateInput, InterviewUncheckedCreateWithoutCandidateInput>
  }

  export type InterviewUpdateWithWhereUniqueWithoutCandidateInput = {
    where: InterviewWhereUniqueInput
    data: XOR<InterviewUpdateWithoutCandidateInput, InterviewUncheckedUpdateWithoutCandidateInput>
  }

  export type InterviewUpdateManyWithWhereWithoutCandidateInput = {
    where: InterviewScalarWhereInput
    data: XOR<InterviewUpdateManyMutationInput, InterviewUncheckedUpdateManyWithoutCandidateInput>
  }

  export type InterviewScalarWhereInput = {
    AND?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    OR?: InterviewScalarWhereInput[]
    NOT?: InterviewScalarWhereInput | InterviewScalarWhereInput[]
    id?: IntFilter<"Interview"> | number
    candidateId?: IntFilter<"Interview"> | number
    interviewer?: StringFilter<"Interview"> | string
    round?: IntFilter<"Interview"> | number
    result?: StringFilter<"Interview"> | string
    scheduledAt?: DateTimeFilter<"Interview"> | Date | string
    createdAt?: DateTimeFilter<"Interview"> | Date | string
    updatedAt?: DateTimeFilter<"Interview"> | Date | string
  }

  export type OfferUpsertWithWhereUniqueWithoutCandidateInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutCandidateInput, OfferUncheckedUpdateWithoutCandidateInput>
    create: XOR<OfferCreateWithoutCandidateInput, OfferUncheckedCreateWithoutCandidateInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutCandidateInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutCandidateInput, OfferUncheckedUpdateWithoutCandidateInput>
  }

  export type OfferUpdateManyWithWhereWithoutCandidateInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutCandidateInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: IntFilter<"Offer"> | number
    candidateId?: IntFilter<"Offer"> | number
    offerLetter?: StringFilter<"Offer"> | string
    sendAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
  }

  export type RecruitmentStatusUpsertWithWhereUniqueWithoutCandidateInput = {
    where: RecruitmentStatusWhereUniqueInput
    update: XOR<RecruitmentStatusUpdateWithoutCandidateInput, RecruitmentStatusUncheckedUpdateWithoutCandidateInput>
    create: XOR<RecruitmentStatusCreateWithoutCandidateInput, RecruitmentStatusUncheckedCreateWithoutCandidateInput>
  }

  export type RecruitmentStatusUpdateWithWhereUniqueWithoutCandidateInput = {
    where: RecruitmentStatusWhereUniqueInput
    data: XOR<RecruitmentStatusUpdateWithoutCandidateInput, RecruitmentStatusUncheckedUpdateWithoutCandidateInput>
  }

  export type RecruitmentStatusUpdateManyWithWhereWithoutCandidateInput = {
    where: RecruitmentStatusScalarWhereInput
    data: XOR<RecruitmentStatusUpdateManyMutationInput, RecruitmentStatusUncheckedUpdateManyWithoutCandidateInput>
  }

  export type RecruitmentStatusScalarWhereInput = {
    AND?: RecruitmentStatusScalarWhereInput | RecruitmentStatusScalarWhereInput[]
    OR?: RecruitmentStatusScalarWhereInput[]
    NOT?: RecruitmentStatusScalarWhereInput | RecruitmentStatusScalarWhereInput[]
    id?: IntFilter<"RecruitmentStatus"> | number
    candidateId?: IntFilter<"RecruitmentStatus"> | number
    status?: StringFilter<"RecruitmentStatus"> | string
    createdAt?: DateTimeFilter<"RecruitmentStatus"> | Date | string
    updatedAt?: DateTimeFilter<"RecruitmentStatus"> | Date | string
  }

  export type CandidateCreateWithoutInterviewsInput = {
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    jobpost: JobpostCreateNestedOneWithoutCandidatesInput
    Offer?: OfferCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutInterviewsInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    jobpostId: number
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    Offer?: OfferUncheckedCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutInterviewsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
  }

  export type CandidateUpsertWithoutInterviewsInput = {
    update: XOR<CandidateUpdateWithoutInterviewsInput, CandidateUncheckedUpdateWithoutInterviewsInput>
    create: XOR<CandidateCreateWithoutInterviewsInput, CandidateUncheckedCreateWithoutInterviewsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutInterviewsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutInterviewsInput, CandidateUncheckedUpdateWithoutInterviewsInput>
  }

  export type CandidateUpdateWithoutInterviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    jobpost?: JobpostUpdateOneRequiredWithoutCandidatesNestedInput
    Offer?: OfferUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutInterviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    jobpostId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    Offer?: OfferUncheckedUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateWithoutRecruitmentStatusInput = {
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    jobpost: JobpostCreateNestedOneWithoutCandidatesInput
    interviews?: InterviewCreateNestedManyWithoutCandidateInput
    Offer?: OfferCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutRecruitmentStatusInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    jobpostId: number
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    interviews?: InterviewUncheckedCreateNestedManyWithoutCandidateInput
    Offer?: OfferUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutRecruitmentStatusInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutRecruitmentStatusInput, CandidateUncheckedCreateWithoutRecruitmentStatusInput>
  }

  export type CandidateUpsertWithoutRecruitmentStatusInput = {
    update: XOR<CandidateUpdateWithoutRecruitmentStatusInput, CandidateUncheckedUpdateWithoutRecruitmentStatusInput>
    create: XOR<CandidateCreateWithoutRecruitmentStatusInput, CandidateUncheckedCreateWithoutRecruitmentStatusInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutRecruitmentStatusInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutRecruitmentStatusInput, CandidateUncheckedUpdateWithoutRecruitmentStatusInput>
  }

  export type CandidateUpdateWithoutRecruitmentStatusInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    jobpost?: JobpostUpdateOneRequiredWithoutCandidatesNestedInput
    interviews?: InterviewUpdateManyWithoutCandidateNestedInput
    Offer?: OfferUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutRecruitmentStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    jobpostId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    interviews?: InterviewUncheckedUpdateManyWithoutCandidateNestedInput
    Offer?: OfferUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateWithoutOfferInput = {
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    jobpost: JobpostCreateNestedOneWithoutCandidatesInput
    interviews?: InterviewCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutOfferInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    jobpostId: number
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
    interviews?: InterviewUncheckedCreateNestedManyWithoutCandidateInput
    RecruitmentStatus?: RecruitmentStatusUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutOfferInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutOfferInput, CandidateUncheckedCreateWithoutOfferInput>
  }

  export type CandidateUpsertWithoutOfferInput = {
    update: XOR<CandidateUpdateWithoutOfferInput, CandidateUncheckedUpdateWithoutOfferInput>
    create: XOR<CandidateCreateWithoutOfferInput, CandidateUncheckedCreateWithoutOfferInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutOfferInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutOfferInput, CandidateUncheckedUpdateWithoutOfferInput>
  }

  export type CandidateUpdateWithoutOfferInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    jobpost?: JobpostUpdateOneRequiredWithoutCandidatesNestedInput
    interviews?: InterviewUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    jobpostId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    interviews?: InterviewUncheckedUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyJobpostInput = {
    id?: number
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    location: string
    status: string
    experience: string
    address: string
    parsedText?: string | null
    testScore?: number | null
    testStatus?: string
    appliedAt?: Date | string
    updatedAt?: Date | string
    qualification?: CandidateCreatequalificationInput | string[]
  }

  export type CandidateUpdateWithoutJobpostInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    interviews?: InterviewUpdateManyWithoutCandidateNestedInput
    Offer?: OfferUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutJobpostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
    interviews?: InterviewUncheckedUpdateManyWithoutCandidateNestedInput
    Offer?: OfferUncheckedUpdateManyWithoutCandidateNestedInput
    RecruitmentStatus?: RecruitmentStatusUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateManyWithoutJobpostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    parsedText?: NullableStringFieldUpdateOperationsInput | string | null
    testScore?: NullableFloatFieldUpdateOperationsInput | number | null
    testStatus?: StringFieldUpdateOperationsInput | string
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualification?: CandidateUpdatequalificationInput | string[]
  }

  export type InterviewCreateManyCandidateInput = {
    id?: number
    interviewer: string
    round: number
    result: string
    scheduledAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfferCreateManyCandidateInput = {
    id?: number
    offerLetter: string
    sendAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecruitmentStatusCreateManyCandidateInput = {
    id?: number
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewUpdateWithoutCandidateInput = {
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    interviewer?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    result?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUpdateWithoutCandidateInput = {
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    offerLetter?: StringFieldUpdateOperationsInput | string
    sendAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentStatusUpdateWithoutCandidateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentStatusUncheckedUpdateWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruitmentStatusUncheckedUpdateManyWithoutCandidateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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