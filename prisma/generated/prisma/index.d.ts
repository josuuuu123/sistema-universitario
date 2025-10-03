
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
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Ciclo
 * 
 */
export type Ciclo = $Result.DefaultSelection<Prisma.$CicloPayload>
/**
 * Model Especialidad
 * 
 */
export type Especialidad = $Result.DefaultSelection<Prisma.$EspecialidadPayload>
/**
 * Model Docente
 * 
 */
export type Docente = $Result.DefaultSelection<Prisma.$DocentePayload>
/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model EstudianteMateria
 * 
 */
export type EstudianteMateria = $Result.DefaultSelection<Prisma.$EstudianteMateriaPayload>
/**
 * Model MateriaDocente
 * 
 */
export type MateriaDocente = $Result.DefaultSelection<Prisma.$MateriaDocentePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carreras
 * const carreras = await prisma.carrera.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Carreras
   * const carreras = await prisma.carrera.findMany()
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
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciclo`: Exposes CRUD operations for the **Ciclo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciclos
    * const ciclos = await prisma.ciclo.findMany()
    * ```
    */
  get ciclo(): Prisma.CicloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidad`: Exposes CRUD operations for the **Especialidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidads
    * const especialidads = await prisma.especialidad.findMany()
    * ```
    */
  get especialidad(): Prisma.EspecialidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docente`: Exposes CRUD operations for the **Docente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Docentes
    * const docentes = await prisma.docente.findMany()
    * ```
    */
  get docente(): Prisma.DocenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudianteMateria`: Exposes CRUD operations for the **EstudianteMateria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstudianteMaterias
    * const estudianteMaterias = await prisma.estudianteMateria.findMany()
    * ```
    */
  get estudianteMateria(): Prisma.EstudianteMateriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materiaDocente`: Exposes CRUD operations for the **MateriaDocente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MateriaDocentes
    * const materiaDocentes = await prisma.materiaDocente.findMany()
    * ```
    */
  get materiaDocente(): Prisma.MateriaDocenteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Carrera: 'Carrera',
    Ciclo: 'Ciclo',
    Especialidad: 'Especialidad',
    Docente: 'Docente',
    Estudiante: 'Estudiante',
    Materia: 'Materia',
    EstudianteMateria: 'EstudianteMateria',
    MateriaDocente: 'MateriaDocente'
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
      modelProps: "carrera" | "ciclo" | "especialidad" | "docente" | "estudiante" | "materia" | "estudianteMateria" | "materiaDocente"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarreraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Ciclo: {
        payload: Prisma.$CicloPayload<ExtArgs>
        fields: Prisma.CicloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CicloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CicloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          findFirst: {
            args: Prisma.CicloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CicloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          findMany: {
            args: Prisma.CicloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          create: {
            args: Prisma.CicloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          createMany: {
            args: Prisma.CicloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CicloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          delete: {
            args: Prisma.CicloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          update: {
            args: Prisma.CicloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          deleteMany: {
            args: Prisma.CicloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CicloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CicloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>[]
          }
          upsert: {
            args: Prisma.CicloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloPayload>
          }
          aggregate: {
            args: Prisma.CicloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiclo>
          }
          groupBy: {
            args: Prisma.CicloGroupByArgs<ExtArgs>
            result: $Utils.Optional<CicloGroupByOutputType>[]
          }
          count: {
            args: Prisma.CicloCountArgs<ExtArgs>
            result: $Utils.Optional<CicloCountAggregateOutputType> | number
          }
        }
      }
      Especialidad: {
        payload: Prisma.$EspecialidadPayload<ExtArgs>
        fields: Prisma.EspecialidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findFirst: {
            args: Prisma.EspecialidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findMany: {
            args: Prisma.EspecialidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          create: {
            args: Prisma.EspecialidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          createMany: {
            args: Prisma.EspecialidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecialidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          delete: {
            args: Prisma.EspecialidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          update: {
            args: Prisma.EspecialidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecialidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          upsert: {
            args: Prisma.EspecialidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidad>
          }
          groupBy: {
            args: Prisma.EspecialidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadCountAggregateOutputType> | number
          }
        }
      }
      Docente: {
        payload: Prisma.$DocentePayload<ExtArgs>
        fields: Prisma.DocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findFirst: {
            args: Prisma.DocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          findMany: {
            args: Prisma.DocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          create: {
            args: Prisma.DocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          createMany: {
            args: Prisma.DocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          delete: {
            args: Prisma.DocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          update: {
            args: Prisma.DocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          deleteMany: {
            args: Prisma.DocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>[]
          }
          upsert: {
            args: Prisma.DocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocentePayload>
          }
          aggregate: {
            args: Prisma.DocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocente>
          }
          groupBy: {
            args: Prisma.DocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocenteCountArgs<ExtArgs>
            result: $Utils.Optional<DocenteCountAggregateOutputType> | number
          }
        }
      }
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      EstudianteMateria: {
        payload: Prisma.$EstudianteMateriaPayload<ExtArgs>
        fields: Prisma.EstudianteMateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteMateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteMateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>
          }
          findFirst: {
            args: Prisma.EstudianteMateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteMateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>
          }
          findMany: {
            args: Prisma.EstudianteMateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>[]
          }
          create: {
            args: Prisma.EstudianteMateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>
          }
          createMany: {
            args: Prisma.EstudianteMateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteMateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>[]
          }
          delete: {
            args: Prisma.EstudianteMateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>
          }
          update: {
            args: Prisma.EstudianteMateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>
          }
          deleteMany: {
            args: Prisma.EstudianteMateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteMateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudianteMateriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>[]
          }
          upsert: {
            args: Prisma.EstudianteMateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudianteMateriaPayload>
          }
          aggregate: {
            args: Prisma.EstudianteMateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudianteMateria>
          }
          groupBy: {
            args: Prisma.EstudianteMateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteMateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteMateriaCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteMateriaCountAggregateOutputType> | number
          }
        }
      }
      MateriaDocente: {
        payload: Prisma.$MateriaDocentePayload<ExtArgs>
        fields: Prisma.MateriaDocenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaDocenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaDocenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>
          }
          findFirst: {
            args: Prisma.MateriaDocenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaDocenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>
          }
          findMany: {
            args: Prisma.MateriaDocenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>[]
          }
          create: {
            args: Prisma.MateriaDocenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>
          }
          createMany: {
            args: Prisma.MateriaDocenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaDocenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>[]
          }
          delete: {
            args: Prisma.MateriaDocenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>
          }
          update: {
            args: Prisma.MateriaDocenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>
          }
          deleteMany: {
            args: Prisma.MateriaDocenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaDocenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriaDocenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>[]
          }
          upsert: {
            args: Prisma.MateriaDocenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaDocentePayload>
          }
          aggregate: {
            args: Prisma.MateriaDocenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateriaDocente>
          }
          groupBy: {
            args: Prisma.MateriaDocenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaDocenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaDocenteCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaDocenteCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    carrera?: CarreraOmit
    ciclo?: CicloOmit
    especialidad?: EspecialidadOmit
    docente?: DocenteOmit
    estudiante?: EstudianteOmit
    materia?: MateriaOmit
    estudianteMateria?: EstudianteMateriaOmit
    materiaDocente?: MateriaDocenteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    estudiantes: number
    materias: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | CarreraCountOutputTypeCountEstudiantesArgs
    materias?: boolean | CarreraCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Count Type CicloCountOutputType
   */

  export type CicloCountOutputType = {
    estudiantes: number
    materias: number
  }

  export type CicloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | CicloCountOutputTypeCountEstudiantesArgs
    materias?: boolean | CicloCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloCountOutputType
     */
    select?: CicloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
  }

  /**
   * CicloCountOutputType without action
   */
  export type CicloCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }


  /**
   * Count Type EspecialidadCountOutputType
   */

  export type EspecialidadCountOutputType = {
    docentes: number
  }

  export type EspecialidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docentes?: boolean | EspecialidadCountOutputTypeCountDocentesArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: EspecialidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountDocentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
  }


  /**
   * Count Type DocenteCountOutputType
   */

  export type DocenteCountOutputType = {
    materias: number
  }

  export type DocenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | DocenteCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocenteCountOutputType
     */
    select?: DocenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocenteCountOutputType without action
   */
  export type DocenteCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaDocenteWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    materias: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | EstudianteCountOutputTypeCountMateriasArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteMateriaWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    estudiantes: number
    docentes: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | MateriaCountOutputTypeCountEstudiantesArgs
    docentes?: boolean | MateriaCountOutputTypeCountDocentesArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteMateriaWhereInput
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountDocentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaDocenteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarreraMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CarreraCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id?: true
  }

  export type CarreraSumAggregateInputType = {
    id?: true
  }

  export type CarreraMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarreraMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CarreraCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id: number
    nombre: string
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CarreraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["carrera"]>
  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarreraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      estudiantes: Prisma.$EstudiantePayload<ExtArgs>[]
      materias: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraWithIdOnly = await prisma.carrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras and returns the data updated in the database.
     * @param {CarreraUpdateManyAndReturnArgs} args - Arguments to update many Carreras.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarreraUpdateManyAndReturnArgs>(args: SelectSubset<T, CarreraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
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
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiantes<T extends Carrera$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materias<T extends Carrera$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carrera model
   */
  interface CarreraFieldRefs {
    readonly id: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera updateManyAndReturn
   */
  export type CarreraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to update.
     */
    limit?: number
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
    /**
     * Limit how many Carreras to delete.
     */
    limit?: number
  }

  /**
   * Carrera.estudiantes
   */
  export type Carrera$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    cursor?: EstudianteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Carrera.materias
   */
  export type Carrera$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrera
     */
    omit?: CarreraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Ciclo
   */

  export type AggregateCiclo = {
    _count: CicloCountAggregateOutputType | null
    _avg: CicloAvgAggregateOutputType | null
    _sum: CicloSumAggregateOutputType | null
    _min: CicloMinAggregateOutputType | null
    _max: CicloMaxAggregateOutputType | null
  }

  export type CicloAvgAggregateOutputType = {
    id: number | null
  }

  export type CicloSumAggregateOutputType = {
    id: number | null
  }

  export type CicloMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CicloMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CicloCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CicloAvgAggregateInputType = {
    id?: true
  }

  export type CicloSumAggregateInputType = {
    id?: true
  }

  export type CicloMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CicloMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CicloCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CicloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciclo to aggregate.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciclos
    **/
    _count?: true | CicloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CicloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CicloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CicloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CicloMaxAggregateInputType
  }

  export type GetCicloAggregateType<T extends CicloAggregateArgs> = {
        [P in keyof T & keyof AggregateCiclo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiclo[P]>
      : GetScalarType<T[P], AggregateCiclo[P]>
  }




  export type CicloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloWhereInput
    orderBy?: CicloOrderByWithAggregationInput | CicloOrderByWithAggregationInput[]
    by: CicloScalarFieldEnum[] | CicloScalarFieldEnum
    having?: CicloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CicloCountAggregateInputType | true
    _avg?: CicloAvgAggregateInputType
    _sum?: CicloSumAggregateInputType
    _min?: CicloMinAggregateInputType
    _max?: CicloMaxAggregateInputType
  }

  export type CicloGroupByOutputType = {
    id: number
    nombre: string
    _count: CicloCountAggregateOutputType | null
    _avg: CicloAvgAggregateOutputType | null
    _sum: CicloSumAggregateOutputType | null
    _min: CicloMinAggregateOutputType | null
    _max: CicloMaxAggregateOutputType | null
  }

  type GetCicloGroupByPayload<T extends CicloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CicloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CicloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CicloGroupByOutputType[P]>
            : GetScalarType<T[P], CicloGroupByOutputType[P]>
        }
      >
    >


  export type CicloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estudiantes?: boolean | Ciclo$estudiantesArgs<ExtArgs>
    materias?: boolean | Ciclo$materiasArgs<ExtArgs>
    _count?: boolean | CicloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["ciclo"]>

  export type CicloSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CicloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["ciclo"]>
  export type CicloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | Ciclo$estudiantesArgs<ExtArgs>
    materias?: boolean | Ciclo$materiasArgs<ExtArgs>
    _count?: boolean | CicloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CicloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CicloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CicloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciclo"
    objects: {
      estudiantes: Prisma.$EstudiantePayload<ExtArgs>[]
      materias: Prisma.$MateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["ciclo"]>
    composites: {}
  }

  type CicloGetPayload<S extends boolean | null | undefined | CicloDefaultArgs> = $Result.GetResult<Prisma.$CicloPayload, S>

  type CicloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CicloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CicloCountAggregateInputType | true
    }

  export interface CicloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciclo'], meta: { name: 'Ciclo' } }
    /**
     * Find zero or one Ciclo that matches the filter.
     * @param {CicloFindUniqueArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CicloFindUniqueArgs>(args: SelectSubset<T, CicloFindUniqueArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciclo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CicloFindUniqueOrThrowArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CicloFindUniqueOrThrowArgs>(args: SelectSubset<T, CicloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciclo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindFirstArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CicloFindFirstArgs>(args?: SelectSubset<T, CicloFindFirstArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciclo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindFirstOrThrowArgs} args - Arguments to find a Ciclo
     * @example
     * // Get one Ciclo
     * const ciclo = await prisma.ciclo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CicloFindFirstOrThrowArgs>(args?: SelectSubset<T, CicloFindFirstOrThrowArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciclos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciclos
     * const ciclos = await prisma.ciclo.findMany()
     * 
     * // Get first 10 Ciclos
     * const ciclos = await prisma.ciclo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cicloWithIdOnly = await prisma.ciclo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CicloFindManyArgs>(args?: SelectSubset<T, CicloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciclo.
     * @param {CicloCreateArgs} args - Arguments to create a Ciclo.
     * @example
     * // Create one Ciclo
     * const Ciclo = await prisma.ciclo.create({
     *   data: {
     *     // ... data to create a Ciclo
     *   }
     * })
     * 
     */
    create<T extends CicloCreateArgs>(args: SelectSubset<T, CicloCreateArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciclos.
     * @param {CicloCreateManyArgs} args - Arguments to create many Ciclos.
     * @example
     * // Create many Ciclos
     * const ciclo = await prisma.ciclo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CicloCreateManyArgs>(args?: SelectSubset<T, CicloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciclos and returns the data saved in the database.
     * @param {CicloCreateManyAndReturnArgs} args - Arguments to create many Ciclos.
     * @example
     * // Create many Ciclos
     * const ciclo = await prisma.ciclo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciclos and only return the `id`
     * const cicloWithIdOnly = await prisma.ciclo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CicloCreateManyAndReturnArgs>(args?: SelectSubset<T, CicloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciclo.
     * @param {CicloDeleteArgs} args - Arguments to delete one Ciclo.
     * @example
     * // Delete one Ciclo
     * const Ciclo = await prisma.ciclo.delete({
     *   where: {
     *     // ... filter to delete one Ciclo
     *   }
     * })
     * 
     */
    delete<T extends CicloDeleteArgs>(args: SelectSubset<T, CicloDeleteArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciclo.
     * @param {CicloUpdateArgs} args - Arguments to update one Ciclo.
     * @example
     * // Update one Ciclo
     * const ciclo = await prisma.ciclo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CicloUpdateArgs>(args: SelectSubset<T, CicloUpdateArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciclos.
     * @param {CicloDeleteManyArgs} args - Arguments to filter Ciclos to delete.
     * @example
     * // Delete a few Ciclos
     * const { count } = await prisma.ciclo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CicloDeleteManyArgs>(args?: SelectSubset<T, CicloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciclos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciclos
     * const ciclo = await prisma.ciclo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CicloUpdateManyArgs>(args: SelectSubset<T, CicloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciclos and returns the data updated in the database.
     * @param {CicloUpdateManyAndReturnArgs} args - Arguments to update many Ciclos.
     * @example
     * // Update many Ciclos
     * const ciclo = await prisma.ciclo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciclos and only return the `id`
     * const cicloWithIdOnly = await prisma.ciclo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CicloUpdateManyAndReturnArgs>(args: SelectSubset<T, CicloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciclo.
     * @param {CicloUpsertArgs} args - Arguments to update or create a Ciclo.
     * @example
     * // Update or create a Ciclo
     * const ciclo = await prisma.ciclo.upsert({
     *   create: {
     *     // ... data to create a Ciclo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciclo we want to update
     *   }
     * })
     */
    upsert<T extends CicloUpsertArgs>(args: SelectSubset<T, CicloUpsertArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciclos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloCountArgs} args - Arguments to filter Ciclos to count.
     * @example
     * // Count the number of Ciclos
     * const count = await prisma.ciclo.count({
     *   where: {
     *     // ... the filter for the Ciclos we want to count
     *   }
     * })
    **/
    count<T extends CicloCountArgs>(
      args?: Subset<T, CicloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CicloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciclo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CicloAggregateArgs>(args: Subset<T, CicloAggregateArgs>): Prisma.PrismaPromise<GetCicloAggregateType<T>>

    /**
     * Group by Ciclo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloGroupByArgs} args - Group by arguments.
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
      T extends CicloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CicloGroupByArgs['orderBy'] }
        : { orderBy?: CicloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CicloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCicloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciclo model
   */
  readonly fields: CicloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciclo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CicloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiantes<T extends Ciclo$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Ciclo$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materias<T extends Ciclo$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Ciclo$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ciclo model
   */
  interface CicloFieldRefs {
    readonly id: FieldRef<"Ciclo", 'Int'>
    readonly nombre: FieldRef<"Ciclo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ciclo findUnique
   */
  export type CicloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo findUniqueOrThrow
   */
  export type CicloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo findFirst
   */
  export type CicloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciclos.
     */
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo findFirstOrThrow
   */
  export type CicloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclo to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciclos.
     */
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo findMany
   */
  export type CicloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter, which Ciclos to fetch.
     */
    where?: CicloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciclos to fetch.
     */
    orderBy?: CicloOrderByWithRelationInput | CicloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciclos.
     */
    cursor?: CicloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciclos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciclos.
     */
    skip?: number
    distinct?: CicloScalarFieldEnum | CicloScalarFieldEnum[]
  }

  /**
   * Ciclo create
   */
  export type CicloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciclo.
     */
    data: XOR<CicloCreateInput, CicloUncheckedCreateInput>
  }

  /**
   * Ciclo createMany
   */
  export type CicloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciclos.
     */
    data: CicloCreateManyInput | CicloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciclo createManyAndReturn
   */
  export type CicloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * The data used to create many Ciclos.
     */
    data: CicloCreateManyInput | CicloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciclo update
   */
  export type CicloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciclo.
     */
    data: XOR<CicloUpdateInput, CicloUncheckedUpdateInput>
    /**
     * Choose, which Ciclo to update.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo updateMany
   */
  export type CicloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciclos.
     */
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyInput>
    /**
     * Filter which Ciclos to update
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to update.
     */
    limit?: number
  }

  /**
   * Ciclo updateManyAndReturn
   */
  export type CicloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * The data used to update Ciclos.
     */
    data: XOR<CicloUpdateManyMutationInput, CicloUncheckedUpdateManyInput>
    /**
     * Filter which Ciclos to update
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to update.
     */
    limit?: number
  }

  /**
   * Ciclo upsert
   */
  export type CicloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciclo to update in case it exists.
     */
    where: CicloWhereUniqueInput
    /**
     * In case the Ciclo found by the `where` argument doesn't exist, create a new Ciclo with this data.
     */
    create: XOR<CicloCreateInput, CicloUncheckedCreateInput>
    /**
     * In case the Ciclo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CicloUpdateInput, CicloUncheckedUpdateInput>
  }

  /**
   * Ciclo delete
   */
  export type CicloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
    /**
     * Filter which Ciclo to delete.
     */
    where: CicloWhereUniqueInput
  }

  /**
   * Ciclo deleteMany
   */
  export type CicloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciclos to delete
     */
    where?: CicloWhereInput
    /**
     * Limit how many Ciclos to delete.
     */
    limit?: number
  }

  /**
   * Ciclo.estudiantes
   */
  export type Ciclo$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    cursor?: EstudianteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Ciclo.materias
   */
  export type Ciclo$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Ciclo without action
   */
  export type CicloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciclo
     */
    select?: CicloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciclo
     */
    omit?: CicloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloInclude<ExtArgs> | null
  }


  /**
   * Model Especialidad
   */

  export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadSumAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EspecialidadAvgAggregateInputType = {
    id?: true
  }

  export type EspecialidadSumAggregateInputType = {
    id?: true
  }

  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EspecialidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType
  }

  export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidad[P]>
      : GetScalarType<T[P], AggregateEspecialidad[P]>
  }




  export type EspecialidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithAggregationInput | EspecialidadOrderByWithAggregationInput[]
    by: EspecialidadScalarFieldEnum[] | EspecialidadScalarFieldEnum
    having?: EspecialidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadCountAggregateInputType | true
    _avg?: EspecialidadAvgAggregateInputType
    _sum?: EspecialidadSumAggregateInputType
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: number
    nombre: string
    _count: EspecialidadCountAggregateOutputType | null
    _avg: EspecialidadAvgAggregateOutputType | null
    _sum: EspecialidadSumAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    docentes?: boolean | Especialidad$docentesArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EspecialidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["especialidad"]>
  export type EspecialidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docentes?: boolean | Especialidad$docentesArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecialidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspecialidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspecialidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidad"
    objects: {
      docentes: Prisma.$DocentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["especialidad"]>
    composites: {}
  }

  type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadPayload, S>

  type EspecialidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadCountAggregateInputType | true
    }

  export interface EspecialidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'], meta: { name: 'Especialidad' } }
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     * 
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     * 
     */
    create<T extends EspecialidadCreateArgs>(args: SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especialidads and returns the data saved in the database.
     * @param {EspecialidadCreateManyAndReturnArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especialidads and only return the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecialidadCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecialidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadDeleteArgs>(args: SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadUpdateArgs>(args: SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads and returns the data updated in the database.
     * @param {EspecialidadUpdateManyAndReturnArgs} args - Arguments to update many Especialidads.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Especialidads and only return the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspecialidadUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecialidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(
      args?: Subset<T, EspecialidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadAggregateArgs>(args: Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>

    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidad model
   */
  readonly fields: EspecialidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docentes<T extends Especialidad$docentesArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$docentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especialidad model
   */
  interface EspecialidadFieldRefs {
    readonly id: FieldRef<"Especialidad", 'Int'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidad findUnique
   */
  export type EspecialidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findUniqueOrThrow
   */
  export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findFirst
   */
  export type EspecialidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findFirstOrThrow
   */
  export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findMany
   */
  export type EspecialidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad create
   */
  export type EspecialidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidad.
     */
    data: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
  }

  /**
   * Especialidad createMany
   */
  export type EspecialidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad createManyAndReturn
   */
  export type EspecialidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad update
   */
  export type EspecialidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidad.
     */
    data: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
    /**
     * Choose, which Especialidad to update.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad updateMany
   */
  export type EspecialidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad updateManyAndReturn
   */
  export type EspecialidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to update.
     */
    limit?: number
  }

  /**
   * Especialidad upsert
   */
  export type EspecialidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: EspecialidadWhereUniqueInput
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
  }

  /**
   * Especialidad delete
   */
  export type EspecialidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter which Especialidad to delete.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad deleteMany
   */
  export type EspecialidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: EspecialidadWhereInput
    /**
     * Limit how many Especialidads to delete.
     */
    limit?: number
  }

  /**
   * Especialidad.docentes
   */
  export type Especialidad$docentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    cursor?: DocenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Especialidad without action
   */
  export type EspecialidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
  }


  /**
   * Model Docente
   */

  export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  export type DocenteAvgAggregateOutputType = {
    id: number | null
    especialidadId: number | null
  }

  export type DocenteSumAggregateOutputType = {
    id: number | null
    especialidadId: number | null
  }

  export type DocenteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    especialidadId: number | null
  }

  export type DocenteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    especialidadId: number | null
  }

  export type DocenteCountAggregateOutputType = {
    id: number
    nombre: number
    especialidadId: number
    _all: number
  }


  export type DocenteAvgAggregateInputType = {
    id?: true
    especialidadId?: true
  }

  export type DocenteSumAggregateInputType = {
    id?: true
    especialidadId?: true
  }

  export type DocenteMinAggregateInputType = {
    id?: true
    nombre?: true
    especialidadId?: true
  }

  export type DocenteMaxAggregateInputType = {
    id?: true
    nombre?: true
    especialidadId?: true
  }

  export type DocenteCountAggregateInputType = {
    id?: true
    nombre?: true
    especialidadId?: true
    _all?: true
  }

  export type DocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docente to aggregate.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Docentes
    **/
    _count?: true | DocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocenteMaxAggregateInputType
  }

  export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocente[P]>
      : GetScalarType<T[P], AggregateDocente[P]>
  }




  export type DocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocenteWhereInput
    orderBy?: DocenteOrderByWithAggregationInput | DocenteOrderByWithAggregationInput[]
    by: DocenteScalarFieldEnum[] | DocenteScalarFieldEnum
    having?: DocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocenteCountAggregateInputType | true
    _avg?: DocenteAvgAggregateInputType
    _sum?: DocenteSumAggregateInputType
    _min?: DocenteMinAggregateInputType
    _max?: DocenteMaxAggregateInputType
  }

  export type DocenteGroupByOutputType = {
    id: number
    nombre: string
    especialidadId: number | null
    _count: DocenteCountAggregateOutputType | null
    _avg: DocenteAvgAggregateOutputType | null
    _sum: DocenteSumAggregateOutputType | null
    _min: DocenteMinAggregateOutputType | null
    _max: DocenteMaxAggregateOutputType | null
  }

  type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocenteGroupByOutputType[P]>
        }
      >
    >


  export type DocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidadId?: boolean
    especialidad?: boolean | Docente$especialidadArgs<ExtArgs>
    materias?: boolean | Docente$materiasArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidadId?: boolean
    especialidad?: boolean | Docente$especialidadArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    especialidadId?: boolean
    especialidad?: boolean | Docente$especialidadArgs<ExtArgs>
  }, ExtArgs["result"]["docente"]>

  export type DocenteSelectScalar = {
    id?: boolean
    nombre?: boolean
    especialidadId?: boolean
  }

  export type DocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "especialidadId", ExtArgs["result"]["docente"]>
  export type DocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | Docente$especialidadArgs<ExtArgs>
    materias?: boolean | Docente$materiasArgs<ExtArgs>
    _count?: boolean | DocenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | Docente$especialidadArgs<ExtArgs>
  }
  export type DocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | Docente$especialidadArgs<ExtArgs>
  }

  export type $DocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Docente"
    objects: {
      especialidad: Prisma.$EspecialidadPayload<ExtArgs> | null
      materias: Prisma.$MateriaDocentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      especialidadId: number | null
    }, ExtArgs["result"]["docente"]>
    composites: {}
  }

  type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = $Result.GetResult<Prisma.$DocentePayload, S>

  type DocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocenteCountAggregateInputType | true
    }

  export interface DocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Docente'], meta: { name: 'Docente' } }
    /**
     * Find zero or one Docente that matches the filter.
     * @param {DocenteFindUniqueArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocenteFindUniqueArgs>(args: SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Docente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocenteFindUniqueOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocenteFindFirstArgs>(args?: SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Docente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindFirstOrThrowArgs} args - Arguments to find a Docente
     * @example
     * // Get one Docente
     * const docente = await prisma.docente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Docentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Docentes
     * const docentes = await prisma.docente.findMany()
     * 
     * // Get first 10 Docentes
     * const docentes = await prisma.docente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docenteWithIdOnly = await prisma.docente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocenteFindManyArgs>(args?: SelectSubset<T, DocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Docente.
     * @param {DocenteCreateArgs} args - Arguments to create a Docente.
     * @example
     * // Create one Docente
     * const Docente = await prisma.docente.create({
     *   data: {
     *     // ... data to create a Docente
     *   }
     * })
     * 
     */
    create<T extends DocenteCreateArgs>(args: SelectSubset<T, DocenteCreateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Docentes.
     * @param {DocenteCreateManyArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocenteCreateManyArgs>(args?: SelectSubset<T, DocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Docentes and returns the data saved in the database.
     * @param {DocenteCreateManyAndReturnArgs} args - Arguments to create many Docentes.
     * @example
     * // Create many Docentes
     * const docente = await prisma.docente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Docentes and only return the `id`
     * const docenteWithIdOnly = await prisma.docente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Docente.
     * @param {DocenteDeleteArgs} args - Arguments to delete one Docente.
     * @example
     * // Delete one Docente
     * const Docente = await prisma.docente.delete({
     *   where: {
     *     // ... filter to delete one Docente
     *   }
     * })
     * 
     */
    delete<T extends DocenteDeleteArgs>(args: SelectSubset<T, DocenteDeleteArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Docente.
     * @param {DocenteUpdateArgs} args - Arguments to update one Docente.
     * @example
     * // Update one Docente
     * const docente = await prisma.docente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocenteUpdateArgs>(args: SelectSubset<T, DocenteUpdateArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Docentes.
     * @param {DocenteDeleteManyArgs} args - Arguments to filter Docentes to delete.
     * @example
     * // Delete a few Docentes
     * const { count } = await prisma.docente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocenteDeleteManyArgs>(args?: SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocenteUpdateManyArgs>(args: SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Docentes and returns the data updated in the database.
     * @param {DocenteUpdateManyAndReturnArgs} args - Arguments to update many Docentes.
     * @example
     * // Update many Docentes
     * const docente = await prisma.docente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Docentes and only return the `id`
     * const docenteWithIdOnly = await prisma.docente.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Docente.
     * @param {DocenteUpsertArgs} args - Arguments to update or create a Docente.
     * @example
     * // Update or create a Docente
     * const docente = await prisma.docente.upsert({
     *   create: {
     *     // ... data to create a Docente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Docente we want to update
     *   }
     * })
     */
    upsert<T extends DocenteUpsertArgs>(args: SelectSubset<T, DocenteUpsertArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Docentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteCountArgs} args - Arguments to filter Docentes to count.
     * @example
     * // Count the number of Docentes
     * const count = await prisma.docente.count({
     *   where: {
     *     // ... the filter for the Docentes we want to count
     *   }
     * })
    **/
    count<T extends DocenteCountArgs>(
      args?: Subset<T, DocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocenteAggregateArgs>(args: Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>

    /**
     * Group by Docente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocenteGroupByArgs} args - Group by arguments.
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
      T extends DocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocenteGroupByArgs['orderBy'] }
        : { orderBy?: DocenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Docente model
   */
  readonly fields: DocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Docente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidad<T extends Docente$especialidadArgs<ExtArgs> = {}>(args?: Subset<T, Docente$especialidadArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    materias<T extends Docente$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Docente$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Docente model
   */
  interface DocenteFieldRefs {
    readonly id: FieldRef<"Docente", 'Int'>
    readonly nombre: FieldRef<"Docente", 'String'>
    readonly especialidadId: FieldRef<"Docente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Docente findUnique
   */
  export type DocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findUniqueOrThrow
   */
  export type DocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente findFirst
   */
  export type DocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findFirstOrThrow
   */
  export type DocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docente to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Docentes.
     */
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente findMany
   */
  export type DocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter, which Docentes to fetch.
     */
    where?: DocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Docentes to fetch.
     */
    orderBy?: DocenteOrderByWithRelationInput | DocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Docentes.
     */
    cursor?: DocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Docentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Docentes.
     */
    skip?: number
    distinct?: DocenteScalarFieldEnum | DocenteScalarFieldEnum[]
  }

  /**
   * Docente create
   */
  export type DocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Docente.
     */
    data: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
  }

  /**
   * Docente createMany
   */
  export type DocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Docente createManyAndReturn
   */
  export type DocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to create many Docentes.
     */
    data: DocenteCreateManyInput | DocenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Docente update
   */
  export type DocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Docente.
     */
    data: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
    /**
     * Choose, which Docente to update.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente updateMany
   */
  export type DocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
  }

  /**
   * Docente updateManyAndReturn
   */
  export type DocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * The data used to update Docentes.
     */
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyInput>
    /**
     * Filter which Docentes to update
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Docente upsert
   */
  export type DocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Docente to update in case it exists.
     */
    where: DocenteWhereUniqueInput
    /**
     * In case the Docente found by the `where` argument doesn't exist, create a new Docente with this data.
     */
    create: XOR<DocenteCreateInput, DocenteUncheckedCreateInput>
    /**
     * In case the Docente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocenteUpdateInput, DocenteUncheckedUpdateInput>
  }

  /**
   * Docente delete
   */
  export type DocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
    /**
     * Filter which Docente to delete.
     */
    where: DocenteWhereUniqueInput
  }

  /**
   * Docente deleteMany
   */
  export type DocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Docentes to delete
     */
    where?: DocenteWhereInput
    /**
     * Limit how many Docentes to delete.
     */
    limit?: number
  }

  /**
   * Docente.especialidad
   */
  export type Docente$especialidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidad
     */
    omit?: EspecialidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    where?: EspecialidadWhereInput
  }

  /**
   * Docente.materias
   */
  export type Docente$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    where?: MateriaDocenteWhereInput
    orderBy?: MateriaDocenteOrderByWithRelationInput | MateriaDocenteOrderByWithRelationInput[]
    cursor?: MateriaDocenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaDocenteScalarFieldEnum | MateriaDocenteScalarFieldEnum[]
  }

  /**
   * Docente without action
   */
  export type DocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Docente
     */
    select?: DocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Docente
     */
    omit?: DocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocenteInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
    cicloId: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
    cicloId: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
    cicloId: number | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
    cicloId: number | null
  }

  export type EstudianteCountAggregateOutputType = {
    id: number
    nombre: number
    carreraId: number
    cicloId: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id?: true
    carreraId?: true
    cicloId?: true
  }

  export type EstudianteSumAggregateInputType = {
    id?: true
    carreraId?: true
    cicloId?: true
  }

  export type EstudianteMinAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    cicloId?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    cicloId?: true
  }

  export type EstudianteCountAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    cicloId?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id: number
    nombre: string
    carreraId: number
    cicloId: number
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    materias?: boolean | Estudiante$materiasArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectScalar = {
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "carreraId" | "cicloId", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    materias?: boolean | Estudiante$materiasArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      ciclo: Prisma.$CicloPayload<ExtArgs>
      materias: Prisma.$EstudianteMateriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      carreraId: number
      cicloId: number
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiantes and returns the data saved in the database.
     * @param {EstudianteCreateManyAndReturnArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes and returns the data updated in the database.
     * @param {EstudianteUpdateManyAndReturnArgs} args - Arguments to update many Estudiantes.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstudianteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
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
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciclo<T extends CicloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CicloDefaultArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materias<T extends Estudiante$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estudiante model
   */
  interface EstudianteFieldRefs {
    readonly id: FieldRef<"Estudiante", 'Int'>
    readonly nombre: FieldRef<"Estudiante", 'String'>
    readonly carreraId: FieldRef<"Estudiante", 'Int'>
    readonly cicloId: FieldRef<"Estudiante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante createManyAndReturn
   */
  export type EstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante updateManyAndReturn
   */
  export type EstudianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to delete.
     */
    limit?: number
  }

  /**
   * Estudiante.materias
   */
  export type Estudiante$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    where?: EstudianteMateriaWhereInput
    orderBy?: EstudianteMateriaOrderByWithRelationInput | EstudianteMateriaOrderByWithRelationInput[]
    cursor?: EstudianteMateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteMateriaScalarFieldEnum | EstudianteMateriaScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id: number | null
    carreraId: number | null
    cicloId: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id: number | null
    carreraId: number | null
    cicloId: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
    cicloId: number | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    carreraId: number | null
    cicloId: number | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    nombre: number
    carreraId: number
    cicloId: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id?: true
    carreraId?: true
    cicloId?: true
  }

  export type MateriaSumAggregateInputType = {
    id?: true
    carreraId?: true
    cicloId?: true
  }

  export type MateriaMinAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    cicloId?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    cicloId?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    nombre?: true
    carreraId?: true
    cicloId?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: number
    nombre: string
    carreraId: number
    cicloId: number
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    estudiantes?: boolean | Materia$estudiantesArgs<ExtArgs>
    docentes?: boolean | Materia$docentesArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    carreraId?: boolean
    cicloId?: boolean
  }

  export type MateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "carreraId" | "cicloId", ExtArgs["result"]["materia"]>
  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
    estudiantes?: boolean | Materia$estudiantesArgs<ExtArgs>
    docentes?: boolean | Materia$docentesArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    ciclo?: boolean | CicloDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      ciclo: Prisma.$CicloPayload<ExtArgs>
      estudiantes: Prisma.$EstudianteMateriaPayload<ExtArgs>[]
      docentes: Prisma.$MateriaDocentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      carreraId: number
      cicloId: number
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias and returns the data updated in the database.
     * @param {MateriaUpdateManyAndReturnArgs} args - Arguments to update many Materias.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.updateManyAndReturn({
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
    updateManyAndReturn<T extends MateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
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
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciclo<T extends CicloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CicloDefaultArgs<ExtArgs>>): Prisma__CicloClient<$Result.GetResult<Prisma.$CicloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estudiantes<T extends Materia$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    docentes<T extends Materia$docentesArgs<ExtArgs> = {}>(args?: Subset<T, Materia$docentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Materia model
   */
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'Int'>
    readonly nombre: FieldRef<"Materia", 'String'>
    readonly carreraId: FieldRef<"Materia", 'Int'>
    readonly cicloId: FieldRef<"Materia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
  }

  /**
   * Materia updateManyAndReturn
   */
  export type MateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
    /**
     * Limit how many Materias to delete.
     */
    limit?: number
  }

  /**
   * Materia.estudiantes
   */
  export type Materia$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    where?: EstudianteMateriaWhereInput
    orderBy?: EstudianteMateriaOrderByWithRelationInput | EstudianteMateriaOrderByWithRelationInput[]
    cursor?: EstudianteMateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteMateriaScalarFieldEnum | EstudianteMateriaScalarFieldEnum[]
  }

  /**
   * Materia.docentes
   */
  export type Materia$docentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    where?: MateriaDocenteWhereInput
    orderBy?: MateriaDocenteOrderByWithRelationInput | MateriaDocenteOrderByWithRelationInput[]
    cursor?: MateriaDocenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaDocenteScalarFieldEnum | MateriaDocenteScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materia
     */
    omit?: MateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model EstudianteMateria
   */

  export type AggregateEstudianteMateria = {
    _count: EstudianteMateriaCountAggregateOutputType | null
    _avg: EstudianteMateriaAvgAggregateOutputType | null
    _sum: EstudianteMateriaSumAggregateOutputType | null
    _min: EstudianteMateriaMinAggregateOutputType | null
    _max: EstudianteMateriaMaxAggregateOutputType | null
  }

  export type EstudianteMateriaAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type EstudianteMateriaSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type EstudianteMateriaMinAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type EstudianteMateriaMaxAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    materiaId: number | null
  }

  export type EstudianteMateriaCountAggregateOutputType = {
    id: number
    estudianteId: number
    materiaId: number
    _all: number
  }


  export type EstudianteMateriaAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type EstudianteMateriaSumAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type EstudianteMateriaMinAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type EstudianteMateriaMaxAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
  }

  export type EstudianteMateriaCountAggregateInputType = {
    id?: true
    estudianteId?: true
    materiaId?: true
    _all?: true
  }

  export type EstudianteMateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstudianteMateria to aggregate.
     */
    where?: EstudianteMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteMaterias to fetch.
     */
    orderBy?: EstudianteMateriaOrderByWithRelationInput | EstudianteMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteMaterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstudianteMaterias
    **/
    _count?: true | EstudianteMateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteMateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteMateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMateriaMaxAggregateInputType
  }

  export type GetEstudianteMateriaAggregateType<T extends EstudianteMateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudianteMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudianteMateria[P]>
      : GetScalarType<T[P], AggregateEstudianteMateria[P]>
  }




  export type EstudianteMateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteMateriaWhereInput
    orderBy?: EstudianteMateriaOrderByWithAggregationInput | EstudianteMateriaOrderByWithAggregationInput[]
    by: EstudianteMateriaScalarFieldEnum[] | EstudianteMateriaScalarFieldEnum
    having?: EstudianteMateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteMateriaCountAggregateInputType | true
    _avg?: EstudianteMateriaAvgAggregateInputType
    _sum?: EstudianteMateriaSumAggregateInputType
    _min?: EstudianteMateriaMinAggregateInputType
    _max?: EstudianteMateriaMaxAggregateInputType
  }

  export type EstudianteMateriaGroupByOutputType = {
    id: number
    estudianteId: number
    materiaId: number
    _count: EstudianteMateriaCountAggregateOutputType | null
    _avg: EstudianteMateriaAvgAggregateOutputType | null
    _sum: EstudianteMateriaSumAggregateOutputType | null
    _min: EstudianteMateriaMinAggregateOutputType | null
    _max: EstudianteMateriaMaxAggregateOutputType | null
  }

  type GetEstudianteMateriaGroupByPayload<T extends EstudianteMateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteMateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteMateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteMateriaGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteMateriaGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteMateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudianteMateria"]>

  export type EstudianteMateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudianteMateria"]>

  export type EstudianteMateriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudianteMateria"]>

  export type EstudianteMateriaSelectScalar = {
    id?: boolean
    estudianteId?: boolean
    materiaId?: boolean
  }

  export type EstudianteMateriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estudianteId" | "materiaId", ExtArgs["result"]["estudianteMateria"]>
  export type EstudianteMateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type EstudianteMateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type EstudianteMateriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $EstudianteMateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstudianteMateria"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estudianteId: number
      materiaId: number
    }, ExtArgs["result"]["estudianteMateria"]>
    composites: {}
  }

  type EstudianteMateriaGetPayload<S extends boolean | null | undefined | EstudianteMateriaDefaultArgs> = $Result.GetResult<Prisma.$EstudianteMateriaPayload, S>

  type EstudianteMateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteMateriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteMateriaCountAggregateInputType | true
    }

  export interface EstudianteMateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstudianteMateria'], meta: { name: 'EstudianteMateria' } }
    /**
     * Find zero or one EstudianteMateria that matches the filter.
     * @param {EstudianteMateriaFindUniqueArgs} args - Arguments to find a EstudianteMateria
     * @example
     * // Get one EstudianteMateria
     * const estudianteMateria = await prisma.estudianteMateria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteMateriaFindUniqueArgs>(args: SelectSubset<T, EstudianteMateriaFindUniqueArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstudianteMateria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteMateriaFindUniqueOrThrowArgs} args - Arguments to find a EstudianteMateria
     * @example
     * // Get one EstudianteMateria
     * const estudianteMateria = await prisma.estudianteMateria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteMateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteMateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstudianteMateria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaFindFirstArgs} args - Arguments to find a EstudianteMateria
     * @example
     * // Get one EstudianteMateria
     * const estudianteMateria = await prisma.estudianteMateria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteMateriaFindFirstArgs>(args?: SelectSubset<T, EstudianteMateriaFindFirstArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstudianteMateria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaFindFirstOrThrowArgs} args - Arguments to find a EstudianteMateria
     * @example
     * // Get one EstudianteMateria
     * const estudianteMateria = await prisma.estudianteMateria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteMateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteMateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstudianteMaterias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstudianteMaterias
     * const estudianteMaterias = await prisma.estudianteMateria.findMany()
     * 
     * // Get first 10 EstudianteMaterias
     * const estudianteMaterias = await prisma.estudianteMateria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteMateriaWithIdOnly = await prisma.estudianteMateria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteMateriaFindManyArgs>(args?: SelectSubset<T, EstudianteMateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstudianteMateria.
     * @param {EstudianteMateriaCreateArgs} args - Arguments to create a EstudianteMateria.
     * @example
     * // Create one EstudianteMateria
     * const EstudianteMateria = await prisma.estudianteMateria.create({
     *   data: {
     *     // ... data to create a EstudianteMateria
     *   }
     * })
     * 
     */
    create<T extends EstudianteMateriaCreateArgs>(args: SelectSubset<T, EstudianteMateriaCreateArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstudianteMaterias.
     * @param {EstudianteMateriaCreateManyArgs} args - Arguments to create many EstudianteMaterias.
     * @example
     * // Create many EstudianteMaterias
     * const estudianteMateria = await prisma.estudianteMateria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteMateriaCreateManyArgs>(args?: SelectSubset<T, EstudianteMateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EstudianteMaterias and returns the data saved in the database.
     * @param {EstudianteMateriaCreateManyAndReturnArgs} args - Arguments to create many EstudianteMaterias.
     * @example
     * // Create many EstudianteMaterias
     * const estudianteMateria = await prisma.estudianteMateria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EstudianteMaterias and only return the `id`
     * const estudianteMateriaWithIdOnly = await prisma.estudianteMateria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteMateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteMateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EstudianteMateria.
     * @param {EstudianteMateriaDeleteArgs} args - Arguments to delete one EstudianteMateria.
     * @example
     * // Delete one EstudianteMateria
     * const EstudianteMateria = await prisma.estudianteMateria.delete({
     *   where: {
     *     // ... filter to delete one EstudianteMateria
     *   }
     * })
     * 
     */
    delete<T extends EstudianteMateriaDeleteArgs>(args: SelectSubset<T, EstudianteMateriaDeleteArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstudianteMateria.
     * @param {EstudianteMateriaUpdateArgs} args - Arguments to update one EstudianteMateria.
     * @example
     * // Update one EstudianteMateria
     * const estudianteMateria = await prisma.estudianteMateria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteMateriaUpdateArgs>(args: SelectSubset<T, EstudianteMateriaUpdateArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstudianteMaterias.
     * @param {EstudianteMateriaDeleteManyArgs} args - Arguments to filter EstudianteMaterias to delete.
     * @example
     * // Delete a few EstudianteMaterias
     * const { count } = await prisma.estudianteMateria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteMateriaDeleteManyArgs>(args?: SelectSubset<T, EstudianteMateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstudianteMaterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstudianteMaterias
     * const estudianteMateria = await prisma.estudianteMateria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteMateriaUpdateManyArgs>(args: SelectSubset<T, EstudianteMateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstudianteMaterias and returns the data updated in the database.
     * @param {EstudianteMateriaUpdateManyAndReturnArgs} args - Arguments to update many EstudianteMaterias.
     * @example
     * // Update many EstudianteMaterias
     * const estudianteMateria = await prisma.estudianteMateria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EstudianteMaterias and only return the `id`
     * const estudianteMateriaWithIdOnly = await prisma.estudianteMateria.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstudianteMateriaUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudianteMateriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EstudianteMateria.
     * @param {EstudianteMateriaUpsertArgs} args - Arguments to update or create a EstudianteMateria.
     * @example
     * // Update or create a EstudianteMateria
     * const estudianteMateria = await prisma.estudianteMateria.upsert({
     *   create: {
     *     // ... data to create a EstudianteMateria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstudianteMateria we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteMateriaUpsertArgs>(args: SelectSubset<T, EstudianteMateriaUpsertArgs<ExtArgs>>): Prisma__EstudianteMateriaClient<$Result.GetResult<Prisma.$EstudianteMateriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstudianteMaterias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaCountArgs} args - Arguments to filter EstudianteMaterias to count.
     * @example
     * // Count the number of EstudianteMaterias
     * const count = await prisma.estudianteMateria.count({
     *   where: {
     *     // ... the filter for the EstudianteMaterias we want to count
     *   }
     * })
    **/
    count<T extends EstudianteMateriaCountArgs>(
      args?: Subset<T, EstudianteMateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteMateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstudianteMateria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudianteMateriaAggregateArgs>(args: Subset<T, EstudianteMateriaAggregateArgs>): Prisma.PrismaPromise<GetEstudianteMateriaAggregateType<T>>

    /**
     * Group by EstudianteMateria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteMateriaGroupByArgs} args - Group by arguments.
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
      T extends EstudianteMateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteMateriaGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteMateriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudianteMateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstudianteMateria model
   */
  readonly fields: EstudianteMateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstudianteMateria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteMateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EstudianteMateria model
   */
  interface EstudianteMateriaFieldRefs {
    readonly id: FieldRef<"EstudianteMateria", 'Int'>
    readonly estudianteId: FieldRef<"EstudianteMateria", 'Int'>
    readonly materiaId: FieldRef<"EstudianteMateria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EstudianteMateria findUnique
   */
  export type EstudianteMateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteMateria to fetch.
     */
    where: EstudianteMateriaWhereUniqueInput
  }

  /**
   * EstudianteMateria findUniqueOrThrow
   */
  export type EstudianteMateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteMateria to fetch.
     */
    where: EstudianteMateriaWhereUniqueInput
  }

  /**
   * EstudianteMateria findFirst
   */
  export type EstudianteMateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteMateria to fetch.
     */
    where?: EstudianteMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteMaterias to fetch.
     */
    orderBy?: EstudianteMateriaOrderByWithRelationInput | EstudianteMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstudianteMaterias.
     */
    cursor?: EstudianteMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteMaterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstudianteMaterias.
     */
    distinct?: EstudianteMateriaScalarFieldEnum | EstudianteMateriaScalarFieldEnum[]
  }

  /**
   * EstudianteMateria findFirstOrThrow
   */
  export type EstudianteMateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteMateria to fetch.
     */
    where?: EstudianteMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteMaterias to fetch.
     */
    orderBy?: EstudianteMateriaOrderByWithRelationInput | EstudianteMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstudianteMaterias.
     */
    cursor?: EstudianteMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteMaterias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstudianteMaterias.
     */
    distinct?: EstudianteMateriaScalarFieldEnum | EstudianteMateriaScalarFieldEnum[]
  }

  /**
   * EstudianteMateria findMany
   */
  export type EstudianteMateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * Filter, which EstudianteMaterias to fetch.
     */
    where?: EstudianteMateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudianteMaterias to fetch.
     */
    orderBy?: EstudianteMateriaOrderByWithRelationInput | EstudianteMateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstudianteMaterias.
     */
    cursor?: EstudianteMateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudianteMaterias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudianteMaterias.
     */
    skip?: number
    distinct?: EstudianteMateriaScalarFieldEnum | EstudianteMateriaScalarFieldEnum[]
  }

  /**
   * EstudianteMateria create
   */
  export type EstudianteMateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a EstudianteMateria.
     */
    data: XOR<EstudianteMateriaCreateInput, EstudianteMateriaUncheckedCreateInput>
  }

  /**
   * EstudianteMateria createMany
   */
  export type EstudianteMateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstudianteMaterias.
     */
    data: EstudianteMateriaCreateManyInput | EstudianteMateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstudianteMateria createManyAndReturn
   */
  export type EstudianteMateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * The data used to create many EstudianteMaterias.
     */
    data: EstudianteMateriaCreateManyInput | EstudianteMateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstudianteMateria update
   */
  export type EstudianteMateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a EstudianteMateria.
     */
    data: XOR<EstudianteMateriaUpdateInput, EstudianteMateriaUncheckedUpdateInput>
    /**
     * Choose, which EstudianteMateria to update.
     */
    where: EstudianteMateriaWhereUniqueInput
  }

  /**
   * EstudianteMateria updateMany
   */
  export type EstudianteMateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstudianteMaterias.
     */
    data: XOR<EstudianteMateriaUpdateManyMutationInput, EstudianteMateriaUncheckedUpdateManyInput>
    /**
     * Filter which EstudianteMaterias to update
     */
    where?: EstudianteMateriaWhereInput
    /**
     * Limit how many EstudianteMaterias to update.
     */
    limit?: number
  }

  /**
   * EstudianteMateria updateManyAndReturn
   */
  export type EstudianteMateriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * The data used to update EstudianteMaterias.
     */
    data: XOR<EstudianteMateriaUpdateManyMutationInput, EstudianteMateriaUncheckedUpdateManyInput>
    /**
     * Filter which EstudianteMaterias to update
     */
    where?: EstudianteMateriaWhereInput
    /**
     * Limit how many EstudianteMaterias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EstudianteMateria upsert
   */
  export type EstudianteMateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the EstudianteMateria to update in case it exists.
     */
    where: EstudianteMateriaWhereUniqueInput
    /**
     * In case the EstudianteMateria found by the `where` argument doesn't exist, create a new EstudianteMateria with this data.
     */
    create: XOR<EstudianteMateriaCreateInput, EstudianteMateriaUncheckedCreateInput>
    /**
     * In case the EstudianteMateria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteMateriaUpdateInput, EstudianteMateriaUncheckedUpdateInput>
  }

  /**
   * EstudianteMateria delete
   */
  export type EstudianteMateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
    /**
     * Filter which EstudianteMateria to delete.
     */
    where: EstudianteMateriaWhereUniqueInput
  }

  /**
   * EstudianteMateria deleteMany
   */
  export type EstudianteMateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstudianteMaterias to delete
     */
    where?: EstudianteMateriaWhereInput
    /**
     * Limit how many EstudianteMaterias to delete.
     */
    limit?: number
  }

  /**
   * EstudianteMateria without action
   */
  export type EstudianteMateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteMateria
     */
    select?: EstudianteMateriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudianteMateria
     */
    omit?: EstudianteMateriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteMateriaInclude<ExtArgs> | null
  }


  /**
   * Model MateriaDocente
   */

  export type AggregateMateriaDocente = {
    _count: MateriaDocenteCountAggregateOutputType | null
    _avg: MateriaDocenteAvgAggregateOutputType | null
    _sum: MateriaDocenteSumAggregateOutputType | null
    _min: MateriaDocenteMinAggregateOutputType | null
    _max: MateriaDocenteMaxAggregateOutputType | null
  }

  export type MateriaDocenteAvgAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type MateriaDocenteSumAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type MateriaDocenteMinAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type MateriaDocenteMaxAggregateOutputType = {
    id: number | null
    docenteId: number | null
    materiaId: number | null
  }

  export type MateriaDocenteCountAggregateOutputType = {
    id: number
    docenteId: number
    materiaId: number
    _all: number
  }


  export type MateriaDocenteAvgAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type MateriaDocenteSumAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type MateriaDocenteMinAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type MateriaDocenteMaxAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
  }

  export type MateriaDocenteCountAggregateInputType = {
    id?: true
    docenteId?: true
    materiaId?: true
    _all?: true
  }

  export type MateriaDocenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MateriaDocente to aggregate.
     */
    where?: MateriaDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaDocentes to fetch.
     */
    orderBy?: MateriaDocenteOrderByWithRelationInput | MateriaDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MateriaDocentes
    **/
    _count?: true | MateriaDocenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaDocenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaDocenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaDocenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaDocenteMaxAggregateInputType
  }

  export type GetMateriaDocenteAggregateType<T extends MateriaDocenteAggregateArgs> = {
        [P in keyof T & keyof AggregateMateriaDocente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateriaDocente[P]>
      : GetScalarType<T[P], AggregateMateriaDocente[P]>
  }




  export type MateriaDocenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaDocenteWhereInput
    orderBy?: MateriaDocenteOrderByWithAggregationInput | MateriaDocenteOrderByWithAggregationInput[]
    by: MateriaDocenteScalarFieldEnum[] | MateriaDocenteScalarFieldEnum
    having?: MateriaDocenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaDocenteCountAggregateInputType | true
    _avg?: MateriaDocenteAvgAggregateInputType
    _sum?: MateriaDocenteSumAggregateInputType
    _min?: MateriaDocenteMinAggregateInputType
    _max?: MateriaDocenteMaxAggregateInputType
  }

  export type MateriaDocenteGroupByOutputType = {
    id: number
    docenteId: number
    materiaId: number
    _count: MateriaDocenteCountAggregateOutputType | null
    _avg: MateriaDocenteAvgAggregateOutputType | null
    _sum: MateriaDocenteSumAggregateOutputType | null
    _min: MateriaDocenteMinAggregateOutputType | null
    _max: MateriaDocenteMaxAggregateOutputType | null
  }

  type GetMateriaDocenteGroupByPayload<T extends MateriaDocenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaDocenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaDocenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaDocenteGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaDocenteGroupByOutputType[P]>
        }
      >
    >


  export type MateriaDocenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiaDocente"]>

  export type MateriaDocenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiaDocente"]>

  export type MateriaDocenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiaDocente"]>

  export type MateriaDocenteSelectScalar = {
    id?: boolean
    docenteId?: boolean
    materiaId?: boolean
  }

  export type MateriaDocenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "docenteId" | "materiaId", ExtArgs["result"]["materiaDocente"]>
  export type MateriaDocenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type MateriaDocenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }
  export type MateriaDocenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docente?: boolean | DocenteDefaultArgs<ExtArgs>
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
  }

  export type $MateriaDocentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MateriaDocente"
    objects: {
      docente: Prisma.$DocentePayload<ExtArgs>
      materia: Prisma.$MateriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      docenteId: number
      materiaId: number
    }, ExtArgs["result"]["materiaDocente"]>
    composites: {}
  }

  type MateriaDocenteGetPayload<S extends boolean | null | undefined | MateriaDocenteDefaultArgs> = $Result.GetResult<Prisma.$MateriaDocentePayload, S>

  type MateriaDocenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriaDocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriaDocenteCountAggregateInputType | true
    }

  export interface MateriaDocenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MateriaDocente'], meta: { name: 'MateriaDocente' } }
    /**
     * Find zero or one MateriaDocente that matches the filter.
     * @param {MateriaDocenteFindUniqueArgs} args - Arguments to find a MateriaDocente
     * @example
     * // Get one MateriaDocente
     * const materiaDocente = await prisma.materiaDocente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaDocenteFindUniqueArgs>(args: SelectSubset<T, MateriaDocenteFindUniqueArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MateriaDocente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriaDocenteFindUniqueOrThrowArgs} args - Arguments to find a MateriaDocente
     * @example
     * // Get one MateriaDocente
     * const materiaDocente = await prisma.materiaDocente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaDocenteFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaDocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MateriaDocente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteFindFirstArgs} args - Arguments to find a MateriaDocente
     * @example
     * // Get one MateriaDocente
     * const materiaDocente = await prisma.materiaDocente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaDocenteFindFirstArgs>(args?: SelectSubset<T, MateriaDocenteFindFirstArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MateriaDocente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteFindFirstOrThrowArgs} args - Arguments to find a MateriaDocente
     * @example
     * // Get one MateriaDocente
     * const materiaDocente = await prisma.materiaDocente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaDocenteFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaDocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MateriaDocentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MateriaDocentes
     * const materiaDocentes = await prisma.materiaDocente.findMany()
     * 
     * // Get first 10 MateriaDocentes
     * const materiaDocentes = await prisma.materiaDocente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaDocenteWithIdOnly = await prisma.materiaDocente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaDocenteFindManyArgs>(args?: SelectSubset<T, MateriaDocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MateriaDocente.
     * @param {MateriaDocenteCreateArgs} args - Arguments to create a MateriaDocente.
     * @example
     * // Create one MateriaDocente
     * const MateriaDocente = await prisma.materiaDocente.create({
     *   data: {
     *     // ... data to create a MateriaDocente
     *   }
     * })
     * 
     */
    create<T extends MateriaDocenteCreateArgs>(args: SelectSubset<T, MateriaDocenteCreateArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MateriaDocentes.
     * @param {MateriaDocenteCreateManyArgs} args - Arguments to create many MateriaDocentes.
     * @example
     * // Create many MateriaDocentes
     * const materiaDocente = await prisma.materiaDocente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaDocenteCreateManyArgs>(args?: SelectSubset<T, MateriaDocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MateriaDocentes and returns the data saved in the database.
     * @param {MateriaDocenteCreateManyAndReturnArgs} args - Arguments to create many MateriaDocentes.
     * @example
     * // Create many MateriaDocentes
     * const materiaDocente = await prisma.materiaDocente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MateriaDocentes and only return the `id`
     * const materiaDocenteWithIdOnly = await prisma.materiaDocente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaDocenteCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaDocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MateriaDocente.
     * @param {MateriaDocenteDeleteArgs} args - Arguments to delete one MateriaDocente.
     * @example
     * // Delete one MateriaDocente
     * const MateriaDocente = await prisma.materiaDocente.delete({
     *   where: {
     *     // ... filter to delete one MateriaDocente
     *   }
     * })
     * 
     */
    delete<T extends MateriaDocenteDeleteArgs>(args: SelectSubset<T, MateriaDocenteDeleteArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MateriaDocente.
     * @param {MateriaDocenteUpdateArgs} args - Arguments to update one MateriaDocente.
     * @example
     * // Update one MateriaDocente
     * const materiaDocente = await prisma.materiaDocente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaDocenteUpdateArgs>(args: SelectSubset<T, MateriaDocenteUpdateArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MateriaDocentes.
     * @param {MateriaDocenteDeleteManyArgs} args - Arguments to filter MateriaDocentes to delete.
     * @example
     * // Delete a few MateriaDocentes
     * const { count } = await prisma.materiaDocente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDocenteDeleteManyArgs>(args?: SelectSubset<T, MateriaDocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MateriaDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MateriaDocentes
     * const materiaDocente = await prisma.materiaDocente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaDocenteUpdateManyArgs>(args: SelectSubset<T, MateriaDocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MateriaDocentes and returns the data updated in the database.
     * @param {MateriaDocenteUpdateManyAndReturnArgs} args - Arguments to update many MateriaDocentes.
     * @example
     * // Update many MateriaDocentes
     * const materiaDocente = await prisma.materiaDocente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MateriaDocentes and only return the `id`
     * const materiaDocenteWithIdOnly = await prisma.materiaDocente.updateManyAndReturn({
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
    updateManyAndReturn<T extends MateriaDocenteUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriaDocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MateriaDocente.
     * @param {MateriaDocenteUpsertArgs} args - Arguments to update or create a MateriaDocente.
     * @example
     * // Update or create a MateriaDocente
     * const materiaDocente = await prisma.materiaDocente.upsert({
     *   create: {
     *     // ... data to create a MateriaDocente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MateriaDocente we want to update
     *   }
     * })
     */
    upsert<T extends MateriaDocenteUpsertArgs>(args: SelectSubset<T, MateriaDocenteUpsertArgs<ExtArgs>>): Prisma__MateriaDocenteClient<$Result.GetResult<Prisma.$MateriaDocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MateriaDocentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteCountArgs} args - Arguments to filter MateriaDocentes to count.
     * @example
     * // Count the number of MateriaDocentes
     * const count = await prisma.materiaDocente.count({
     *   where: {
     *     // ... the filter for the MateriaDocentes we want to count
     *   }
     * })
    **/
    count<T extends MateriaDocenteCountArgs>(
      args?: Subset<T, MateriaDocenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaDocenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MateriaDocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriaDocenteAggregateArgs>(args: Subset<T, MateriaDocenteAggregateArgs>): Prisma.PrismaPromise<GetMateriaDocenteAggregateType<T>>

    /**
     * Group by MateriaDocente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaDocenteGroupByArgs} args - Group by arguments.
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
      T extends MateriaDocenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaDocenteGroupByArgs['orderBy'] }
        : { orderBy?: MateriaDocenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MateriaDocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MateriaDocente model
   */
  readonly fields: MateriaDocenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MateriaDocente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaDocenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docente<T extends DocenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocenteDefaultArgs<ExtArgs>>): Prisma__DocenteClient<$Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MateriaDocente model
   */
  interface MateriaDocenteFieldRefs {
    readonly id: FieldRef<"MateriaDocente", 'Int'>
    readonly docenteId: FieldRef<"MateriaDocente", 'Int'>
    readonly materiaId: FieldRef<"MateriaDocente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MateriaDocente findUnique
   */
  export type MateriaDocenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * Filter, which MateriaDocente to fetch.
     */
    where: MateriaDocenteWhereUniqueInput
  }

  /**
   * MateriaDocente findUniqueOrThrow
   */
  export type MateriaDocenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * Filter, which MateriaDocente to fetch.
     */
    where: MateriaDocenteWhereUniqueInput
  }

  /**
   * MateriaDocente findFirst
   */
  export type MateriaDocenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * Filter, which MateriaDocente to fetch.
     */
    where?: MateriaDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaDocentes to fetch.
     */
    orderBy?: MateriaDocenteOrderByWithRelationInput | MateriaDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MateriaDocentes.
     */
    cursor?: MateriaDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MateriaDocentes.
     */
    distinct?: MateriaDocenteScalarFieldEnum | MateriaDocenteScalarFieldEnum[]
  }

  /**
   * MateriaDocente findFirstOrThrow
   */
  export type MateriaDocenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * Filter, which MateriaDocente to fetch.
     */
    where?: MateriaDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaDocentes to fetch.
     */
    orderBy?: MateriaDocenteOrderByWithRelationInput | MateriaDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MateriaDocentes.
     */
    cursor?: MateriaDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaDocentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MateriaDocentes.
     */
    distinct?: MateriaDocenteScalarFieldEnum | MateriaDocenteScalarFieldEnum[]
  }

  /**
   * MateriaDocente findMany
   */
  export type MateriaDocenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * Filter, which MateriaDocentes to fetch.
     */
    where?: MateriaDocenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriaDocentes to fetch.
     */
    orderBy?: MateriaDocenteOrderByWithRelationInput | MateriaDocenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MateriaDocentes.
     */
    cursor?: MateriaDocenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriaDocentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriaDocentes.
     */
    skip?: number
    distinct?: MateriaDocenteScalarFieldEnum | MateriaDocenteScalarFieldEnum[]
  }

  /**
   * MateriaDocente create
   */
  export type MateriaDocenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * The data needed to create a MateriaDocente.
     */
    data: XOR<MateriaDocenteCreateInput, MateriaDocenteUncheckedCreateInput>
  }

  /**
   * MateriaDocente createMany
   */
  export type MateriaDocenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MateriaDocentes.
     */
    data: MateriaDocenteCreateManyInput | MateriaDocenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MateriaDocente createManyAndReturn
   */
  export type MateriaDocenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * The data used to create many MateriaDocentes.
     */
    data: MateriaDocenteCreateManyInput | MateriaDocenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MateriaDocente update
   */
  export type MateriaDocenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * The data needed to update a MateriaDocente.
     */
    data: XOR<MateriaDocenteUpdateInput, MateriaDocenteUncheckedUpdateInput>
    /**
     * Choose, which MateriaDocente to update.
     */
    where: MateriaDocenteWhereUniqueInput
  }

  /**
   * MateriaDocente updateMany
   */
  export type MateriaDocenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MateriaDocentes.
     */
    data: XOR<MateriaDocenteUpdateManyMutationInput, MateriaDocenteUncheckedUpdateManyInput>
    /**
     * Filter which MateriaDocentes to update
     */
    where?: MateriaDocenteWhereInput
    /**
     * Limit how many MateriaDocentes to update.
     */
    limit?: number
  }

  /**
   * MateriaDocente updateManyAndReturn
   */
  export type MateriaDocenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * The data used to update MateriaDocentes.
     */
    data: XOR<MateriaDocenteUpdateManyMutationInput, MateriaDocenteUncheckedUpdateManyInput>
    /**
     * Filter which MateriaDocentes to update
     */
    where?: MateriaDocenteWhereInput
    /**
     * Limit how many MateriaDocentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MateriaDocente upsert
   */
  export type MateriaDocenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * The filter to search for the MateriaDocente to update in case it exists.
     */
    where: MateriaDocenteWhereUniqueInput
    /**
     * In case the MateriaDocente found by the `where` argument doesn't exist, create a new MateriaDocente with this data.
     */
    create: XOR<MateriaDocenteCreateInput, MateriaDocenteUncheckedCreateInput>
    /**
     * In case the MateriaDocente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaDocenteUpdateInput, MateriaDocenteUncheckedUpdateInput>
  }

  /**
   * MateriaDocente delete
   */
  export type MateriaDocenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
    /**
     * Filter which MateriaDocente to delete.
     */
    where: MateriaDocenteWhereUniqueInput
  }

  /**
   * MateriaDocente deleteMany
   */
  export type MateriaDocenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MateriaDocentes to delete
     */
    where?: MateriaDocenteWhereInput
    /**
     * Limit how many MateriaDocentes to delete.
     */
    limit?: number
  }

  /**
   * MateriaDocente without action
   */
  export type MateriaDocenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaDocente
     */
    select?: MateriaDocenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriaDocente
     */
    omit?: MateriaDocenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaDocenteInclude<ExtArgs> | null
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


  export const CarreraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const CicloScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CicloScalarFieldEnum = (typeof CicloScalarFieldEnum)[keyof typeof CicloScalarFieldEnum]


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const DocenteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    especialidadId: 'especialidadId'
  };

  export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    carreraId: 'carreraId',
    cicloId: 'cicloId'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    carreraId: 'carreraId',
    cicloId: 'cicloId'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const EstudianteMateriaScalarFieldEnum: {
    id: 'id',
    estudianteId: 'estudianteId',
    materiaId: 'materiaId'
  };

  export type EstudianteMateriaScalarFieldEnum = (typeof EstudianteMateriaScalarFieldEnum)[keyof typeof EstudianteMateriaScalarFieldEnum]


  export const MateriaDocenteScalarFieldEnum: {
    id: 'id',
    docenteId: 'docenteId',
    materiaId: 'materiaId'
  };

  export type MateriaDocenteScalarFieldEnum = (typeof MateriaDocenteScalarFieldEnum)[keyof typeof MateriaDocenteScalarFieldEnum]


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


  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    estudiantes?: EstudianteListRelationFilter
    materias?: MateriaListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estudiantes?: EstudianteOrderByRelationAggregateInput
    materias?: MateriaOrderByRelationAggregateInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    nombre?: StringFilter<"Carrera"> | string
    estudiantes?: EstudianteListRelationFilter
    materias?: MateriaListRelationFilter
  }, "id">

  export type CarreraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
  }

  export type CicloWhereInput = {
    AND?: CicloWhereInput | CicloWhereInput[]
    OR?: CicloWhereInput[]
    NOT?: CicloWhereInput | CicloWhereInput[]
    id?: IntFilter<"Ciclo"> | number
    nombre?: StringFilter<"Ciclo"> | string
    estudiantes?: EstudianteListRelationFilter
    materias?: MateriaListRelationFilter
  }

  export type CicloOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estudiantes?: EstudianteOrderByRelationAggregateInput
    materias?: MateriaOrderByRelationAggregateInput
  }

  export type CicloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CicloWhereInput | CicloWhereInput[]
    OR?: CicloWhereInput[]
    NOT?: CicloWhereInput | CicloWhereInput[]
    nombre?: StringFilter<"Ciclo"> | string
    estudiantes?: EstudianteListRelationFilter
    materias?: MateriaListRelationFilter
  }, "id">

  export type CicloOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CicloCountOrderByAggregateInput
    _avg?: CicloAvgOrderByAggregateInput
    _max?: CicloMaxOrderByAggregateInput
    _min?: CicloMinOrderByAggregateInput
    _sum?: CicloSumOrderByAggregateInput
  }

  export type CicloScalarWhereWithAggregatesInput = {
    AND?: CicloScalarWhereWithAggregatesInput | CicloScalarWhereWithAggregatesInput[]
    OR?: CicloScalarWhereWithAggregatesInput[]
    NOT?: CicloScalarWhereWithAggregatesInput | CicloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ciclo"> | number
    nombre?: StringWithAggregatesFilter<"Ciclo"> | string
  }

  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: IntFilter<"Especialidad"> | number
    nombre?: StringFilter<"Especialidad"> | string
    docentes?: DocenteListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    docentes?: DocenteOrderByRelationAggregateInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    nombre?: StringFilter<"Especialidad"> | string
    docentes?: DocenteListRelationFilter
  }, "id">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _avg?: EspecialidadAvgOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
    _sum?: EspecialidadSumOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especialidad"> | number
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
  }

  export type DocenteWhereInput = {
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    id?: IntFilter<"Docente"> | number
    nombre?: StringFilter<"Docente"> | string
    especialidadId?: IntNullableFilter<"Docente"> | number | null
    especialidad?: XOR<EspecialidadNullableScalarRelationFilter, EspecialidadWhereInput> | null
    materias?: MateriaDocenteListRelationFilter
  }

  export type DocenteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidadId?: SortOrderInput | SortOrder
    especialidad?: EspecialidadOrderByWithRelationInput
    materias?: MateriaDocenteOrderByRelationAggregateInput
  }

  export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocenteWhereInput | DocenteWhereInput[]
    OR?: DocenteWhereInput[]
    NOT?: DocenteWhereInput | DocenteWhereInput[]
    nombre?: StringFilter<"Docente"> | string
    especialidadId?: IntNullableFilter<"Docente"> | number | null
    especialidad?: XOR<EspecialidadNullableScalarRelationFilter, EspecialidadWhereInput> | null
    materias?: MateriaDocenteListRelationFilter
  }, "id">

  export type DocenteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidadId?: SortOrderInput | SortOrder
    _count?: DocenteCountOrderByAggregateInput
    _avg?: DocenteAvgOrderByAggregateInput
    _max?: DocenteMaxOrderByAggregateInput
    _min?: DocenteMinOrderByAggregateInput
    _sum?: DocenteSumOrderByAggregateInput
  }

  export type DocenteScalarWhereWithAggregatesInput = {
    AND?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    OR?: DocenteScalarWhereWithAggregatesInput[]
    NOT?: DocenteScalarWhereWithAggregatesInput | DocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Docente"> | number
    nombre?: StringWithAggregatesFilter<"Docente"> | string
    especialidadId?: IntNullableWithAggregatesFilter<"Docente"> | number | null
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    carreraId?: IntFilter<"Estudiante"> | number
    cicloId?: IntFilter<"Estudiante"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    materias?: EstudianteMateriaListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    ciclo?: CicloOrderByWithRelationInput
    materias?: EstudianteMateriaOrderByRelationAggregateInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    nombre?: StringFilter<"Estudiante"> | string
    carreraId?: IntFilter<"Estudiante"> | number
    cicloId?: IntFilter<"Estudiante"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    materias?: EstudianteMateriaListRelationFilter
  }, "id">

  export type EstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudiante"> | number
    nombre?: StringWithAggregatesFilter<"Estudiante"> | string
    carreraId?: IntWithAggregatesFilter<"Estudiante"> | number
    cicloId?: IntWithAggregatesFilter<"Estudiante"> | number
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    carreraId?: IntFilter<"Materia"> | number
    cicloId?: IntFilter<"Materia"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    estudiantes?: EstudianteMateriaListRelationFilter
    docentes?: MateriaDocenteListRelationFilter
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    ciclo?: CicloOrderByWithRelationInput
    estudiantes?: EstudianteMateriaOrderByRelationAggregateInput
    docentes?: MateriaDocenteOrderByRelationAggregateInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre?: StringFilter<"Materia"> | string
    carreraId?: IntFilter<"Materia"> | number
    cicloId?: IntFilter<"Materia"> | number
    carrera?: XOR<CarreraScalarRelationFilter, CarreraWhereInput>
    ciclo?: XOR<CicloScalarRelationFilter, CicloWhereInput>
    estudiantes?: EstudianteMateriaListRelationFilter
    docentes?: MateriaDocenteListRelationFilter
  }, "id">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materia"> | number
    nombre?: StringWithAggregatesFilter<"Materia"> | string
    carreraId?: IntWithAggregatesFilter<"Materia"> | number
    cicloId?: IntWithAggregatesFilter<"Materia"> | number
  }

  export type EstudianteMateriaWhereInput = {
    AND?: EstudianteMateriaWhereInput | EstudianteMateriaWhereInput[]
    OR?: EstudianteMateriaWhereInput[]
    NOT?: EstudianteMateriaWhereInput | EstudianteMateriaWhereInput[]
    id?: IntFilter<"EstudianteMateria"> | number
    estudianteId?: IntFilter<"EstudianteMateria"> | number
    materiaId?: IntFilter<"EstudianteMateria"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type EstudianteMateriaOrderByWithRelationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type EstudianteMateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    estudianteId_materiaId?: EstudianteMateriaEstudianteIdMateriaIdCompoundUniqueInput
    AND?: EstudianteMateriaWhereInput | EstudianteMateriaWhereInput[]
    OR?: EstudianteMateriaWhereInput[]
    NOT?: EstudianteMateriaWhereInput | EstudianteMateriaWhereInput[]
    estudianteId?: IntFilter<"EstudianteMateria"> | number
    materiaId?: IntFilter<"EstudianteMateria"> | number
    estudiante?: XOR<EstudianteScalarRelationFilter, EstudianteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id" | "estudianteId_materiaId">

  export type EstudianteMateriaOrderByWithAggregationInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
    _count?: EstudianteMateriaCountOrderByAggregateInput
    _avg?: EstudianteMateriaAvgOrderByAggregateInput
    _max?: EstudianteMateriaMaxOrderByAggregateInput
    _min?: EstudianteMateriaMinOrderByAggregateInput
    _sum?: EstudianteMateriaSumOrderByAggregateInput
  }

  export type EstudianteMateriaScalarWhereWithAggregatesInput = {
    AND?: EstudianteMateriaScalarWhereWithAggregatesInput | EstudianteMateriaScalarWhereWithAggregatesInput[]
    OR?: EstudianteMateriaScalarWhereWithAggregatesInput[]
    NOT?: EstudianteMateriaScalarWhereWithAggregatesInput | EstudianteMateriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstudianteMateria"> | number
    estudianteId?: IntWithAggregatesFilter<"EstudianteMateria"> | number
    materiaId?: IntWithAggregatesFilter<"EstudianteMateria"> | number
  }

  export type MateriaDocenteWhereInput = {
    AND?: MateriaDocenteWhereInput | MateriaDocenteWhereInput[]
    OR?: MateriaDocenteWhereInput[]
    NOT?: MateriaDocenteWhereInput | MateriaDocenteWhereInput[]
    id?: IntFilter<"MateriaDocente"> | number
    docenteId?: IntFilter<"MateriaDocente"> | number
    materiaId?: IntFilter<"MateriaDocente"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }

  export type MateriaDocenteOrderByWithRelationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
    docente?: DocenteOrderByWithRelationInput
    materia?: MateriaOrderByWithRelationInput
  }

  export type MateriaDocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    docenteId_materiaId?: MateriaDocenteDocenteIdMateriaIdCompoundUniqueInput
    AND?: MateriaDocenteWhereInput | MateriaDocenteWhereInput[]
    OR?: MateriaDocenteWhereInput[]
    NOT?: MateriaDocenteWhereInput | MateriaDocenteWhereInput[]
    docenteId?: IntFilter<"MateriaDocente"> | number
    materiaId?: IntFilter<"MateriaDocente"> | number
    docente?: XOR<DocenteScalarRelationFilter, DocenteWhereInput>
    materia?: XOR<MateriaScalarRelationFilter, MateriaWhereInput>
  }, "id" | "docenteId_materiaId">

  export type MateriaDocenteOrderByWithAggregationInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
    _count?: MateriaDocenteCountOrderByAggregateInput
    _avg?: MateriaDocenteAvgOrderByAggregateInput
    _max?: MateriaDocenteMaxOrderByAggregateInput
    _min?: MateriaDocenteMinOrderByAggregateInput
    _sum?: MateriaDocenteSumOrderByAggregateInput
  }

  export type MateriaDocenteScalarWhereWithAggregatesInput = {
    AND?: MateriaDocenteScalarWhereWithAggregatesInput | MateriaDocenteScalarWhereWithAggregatesInput[]
    OR?: MateriaDocenteScalarWhereWithAggregatesInput[]
    NOT?: MateriaDocenteScalarWhereWithAggregatesInput | MateriaDocenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MateriaDocente"> | number
    docenteId?: IntWithAggregatesFilter<"MateriaDocente"> | number
    materiaId?: IntWithAggregatesFilter<"MateriaDocente"> | number
  }

  export type CarreraCreateInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CicloCreateInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCicloInput
    materias?: MateriaCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCicloInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCicloNestedInput
    materias?: MateriaUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCicloNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type CicloCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CicloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CicloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadCreateInput = {
    nombre: string
    docentes?: DocenteCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: number
    nombre: string
    docentes?: DocenteUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    docentes?: DocenteUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    docentes?: DocenteUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: number
    nombre: string
  }

  export type EspecialidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteCreateInput = {
    nombre: string
    especialidad?: EspecialidadCreateNestedOneWithoutDocentesInput
    materias?: MateriaDocenteCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateInput = {
    id?: number
    nombre: string
    especialidadId?: number | null
    materias?: MateriaDocenteUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: EspecialidadUpdateOneWithoutDocentesNestedInput
    materias?: MateriaDocenteUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidadId?: NullableIntFieldUpdateOperationsInput | number | null
    materias?: MateriaDocenteUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteCreateManyInput = {
    id?: number
    nombre: string
    especialidadId?: number | null
  }

  export type DocenteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EstudianteCreateInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
    ciclo: CicloCreateNestedOneWithoutEstudiantesInput
    materias?: EstudianteMateriaCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
    materias?: EstudianteMateriaUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutEstudiantesNestedInput
    materias?: EstudianteMateriaUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
    materias?: EstudianteMateriaUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
  }

  export type EstudianteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaCreateInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    estudiantes?: EstudianteMateriaCreateNestedManyWithoutMateriaInput
    docentes?: MateriaDocenteCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
    estudiantes?: EstudianteMateriaUncheckedCreateNestedManyWithoutMateriaInput
    docentes?: MateriaDocenteUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    estudiantes?: EstudianteMateriaUpdateManyWithoutMateriaNestedInput
    docentes?: MateriaDocenteUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
    estudiantes?: EstudianteMateriaUncheckedUpdateManyWithoutMateriaNestedInput
    docentes?: MateriaDocenteUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
  }

  export type MateriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteMateriaCreateInput = {
    estudiante: EstudianteCreateNestedOneWithoutMateriasInput
    materia: MateriaCreateNestedOneWithoutEstudiantesInput
  }

  export type EstudianteMateriaUncheckedCreateInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type EstudianteMateriaUpdateInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutMateriasNestedInput
    materia?: MateriaUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type EstudianteMateriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteMateriaCreateManyInput = {
    id?: number
    estudianteId: number
    materiaId: number
  }

  export type EstudianteMateriaUpdateManyMutationInput = {

  }

  export type EstudianteMateriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaDocenteCreateInput = {
    docente: DocenteCreateNestedOneWithoutMateriasInput
    materia: MateriaCreateNestedOneWithoutDocentesInput
  }

  export type MateriaDocenteUncheckedCreateInput = {
    id?: number
    docenteId: number
    materiaId: number
  }

  export type MateriaDocenteUpdateInput = {
    docente?: DocenteUpdateOneRequiredWithoutMateriasNestedInput
    materia?: MateriaUpdateOneRequiredWithoutDocentesNestedInput
  }

  export type MateriaDocenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaDocenteCreateManyInput = {
    id?: number
    docenteId: number
    materiaId: number
  }

  export type MateriaDocenteUpdateManyMutationInput = {

  }

  export type MateriaDocenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
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

  export type EstudianteListRelationFilter = {
    every?: EstudianteWhereInput
    some?: EstudianteWhereInput
    none?: EstudianteWhereInput
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type EstudianteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
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

  export type CicloCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CicloAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CicloMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CicloMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CicloSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocenteListRelationFilter = {
    every?: DocenteWhereInput
    some?: DocenteWhereInput
    none?: DocenteWhereInput
  }

  export type DocenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EspecialidadNullableScalarRelationFilter = {
    is?: EspecialidadWhereInput | null
    isNot?: EspecialidadWhereInput | null
  }

  export type MateriaDocenteListRelationFilter = {
    every?: MateriaDocenteWhereInput
    some?: MateriaDocenteWhereInput
    none?: MateriaDocenteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MateriaDocenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocenteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidadId?: SortOrder
  }

  export type DocenteAvgOrderByAggregateInput = {
    id?: SortOrder
    especialidadId?: SortOrder
  }

  export type DocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidadId?: SortOrder
  }

  export type DocenteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    especialidadId?: SortOrder
  }

  export type DocenteSumOrderByAggregateInput = {
    id?: SortOrder
    especialidadId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CarreraScalarRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type CicloScalarRelationFilter = {
    is?: CicloWhereInput
    isNot?: CicloWhereInput
  }

  export type EstudianteMateriaListRelationFilter = {
    every?: EstudianteMateriaWhereInput
    some?: EstudianteMateriaWhereInput
    none?: EstudianteMateriaWhereInput
  }

  export type EstudianteMateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id?: SortOrder
    carreraId?: SortOrder
    cicloId?: SortOrder
  }

  export type EstudianteScalarRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type MateriaScalarRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type EstudianteMateriaEstudianteIdMateriaIdCompoundUniqueInput = {
    estudianteId: number
    materiaId: number
  }

  export type EstudianteMateriaCountOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type EstudianteMateriaAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type EstudianteMateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type EstudianteMateriaMinOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type EstudianteMateriaSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    materiaId?: SortOrder
  }

  export type DocenteScalarRelationFilter = {
    is?: DocenteWhereInput
    isNot?: DocenteWhereInput
  }

  export type MateriaDocenteDocenteIdMateriaIdCompoundUniqueInput = {
    docenteId: number
    materiaId: number
  }

  export type MateriaDocenteCountOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type MateriaDocenteAvgOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type MateriaDocenteMaxOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type MateriaDocenteMinOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type MateriaDocenteSumOrderByAggregateInput = {
    id?: SortOrder
    docenteId?: SortOrder
    materiaId?: SortOrder
  }

  export type EstudianteCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type MateriaCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type EstudianteUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstudianteUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type MateriaUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type EstudianteCreateNestedManyWithoutCicloInput = {
    create?: XOR<EstudianteCreateWithoutCicloInput, EstudianteUncheckedCreateWithoutCicloInput> | EstudianteCreateWithoutCicloInput[] | EstudianteUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCicloInput | EstudianteCreateOrConnectWithoutCicloInput[]
    createMany?: EstudianteCreateManyCicloInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type MateriaCreateNestedManyWithoutCicloInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type EstudianteUncheckedCreateNestedManyWithoutCicloInput = {
    create?: XOR<EstudianteCreateWithoutCicloInput, EstudianteUncheckedCreateWithoutCicloInput> | EstudianteCreateWithoutCicloInput[] | EstudianteUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCicloInput | EstudianteCreateOrConnectWithoutCicloInput[]
    createMany?: EstudianteCreateManyCicloInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCicloInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type EstudianteUpdateManyWithoutCicloNestedInput = {
    create?: XOR<EstudianteCreateWithoutCicloInput, EstudianteUncheckedCreateWithoutCicloInput> | EstudianteCreateWithoutCicloInput[] | EstudianteUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCicloInput | EstudianteCreateOrConnectWithoutCicloInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCicloInput | EstudianteUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: EstudianteCreateManyCicloInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCicloInput | EstudianteUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCicloInput | EstudianteUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type MateriaUpdateManyWithoutCicloNestedInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCicloInput | MateriaUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCicloInput | MateriaUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCicloInput | MateriaUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type EstudianteUncheckedUpdateManyWithoutCicloNestedInput = {
    create?: XOR<EstudianteCreateWithoutCicloInput, EstudianteUncheckedCreateWithoutCicloInput> | EstudianteCreateWithoutCicloInput[] | EstudianteUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCicloInput | EstudianteCreateOrConnectWithoutCicloInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCicloInput | EstudianteUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: EstudianteCreateManyCicloInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCicloInput | EstudianteUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCicloInput | EstudianteUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCicloNestedInput = {
    create?: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput> | MateriaCreateWithoutCicloInput[] | MateriaUncheckedCreateWithoutCicloInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCicloInput | MateriaCreateOrConnectWithoutCicloInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCicloInput | MateriaUpsertWithWhereUniqueWithoutCicloInput[]
    createMany?: MateriaCreateManyCicloInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCicloInput | MateriaUpdateWithWhereUniqueWithoutCicloInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCicloInput | MateriaUpdateManyWithWhereWithoutCicloInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type DocenteCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<DocenteCreateWithoutEspecialidadInput, DocenteUncheckedCreateWithoutEspecialidadInput> | DocenteCreateWithoutEspecialidadInput[] | DocenteUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: DocenteCreateOrConnectWithoutEspecialidadInput | DocenteCreateOrConnectWithoutEspecialidadInput[]
    createMany?: DocenteCreateManyEspecialidadInputEnvelope
    connect?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
  }

  export type DocenteUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<DocenteCreateWithoutEspecialidadInput, DocenteUncheckedCreateWithoutEspecialidadInput> | DocenteCreateWithoutEspecialidadInput[] | DocenteUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: DocenteCreateOrConnectWithoutEspecialidadInput | DocenteCreateOrConnectWithoutEspecialidadInput[]
    createMany?: DocenteCreateManyEspecialidadInputEnvelope
    connect?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
  }

  export type DocenteUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<DocenteCreateWithoutEspecialidadInput, DocenteUncheckedCreateWithoutEspecialidadInput> | DocenteCreateWithoutEspecialidadInput[] | DocenteUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: DocenteCreateOrConnectWithoutEspecialidadInput | DocenteCreateOrConnectWithoutEspecialidadInput[]
    upsert?: DocenteUpsertWithWhereUniqueWithoutEspecialidadInput | DocenteUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: DocenteCreateManyEspecialidadInputEnvelope
    set?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    disconnect?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    delete?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    connect?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    update?: DocenteUpdateWithWhereUniqueWithoutEspecialidadInput | DocenteUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: DocenteUpdateManyWithWhereWithoutEspecialidadInput | DocenteUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: DocenteScalarWhereInput | DocenteScalarWhereInput[]
  }

  export type DocenteUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<DocenteCreateWithoutEspecialidadInput, DocenteUncheckedCreateWithoutEspecialidadInput> | DocenteCreateWithoutEspecialidadInput[] | DocenteUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: DocenteCreateOrConnectWithoutEspecialidadInput | DocenteCreateOrConnectWithoutEspecialidadInput[]
    upsert?: DocenteUpsertWithWhereUniqueWithoutEspecialidadInput | DocenteUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: DocenteCreateManyEspecialidadInputEnvelope
    set?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    disconnect?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    delete?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    connect?: DocenteWhereUniqueInput | DocenteWhereUniqueInput[]
    update?: DocenteUpdateWithWhereUniqueWithoutEspecialidadInput | DocenteUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: DocenteUpdateManyWithWhereWithoutEspecialidadInput | DocenteUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: DocenteScalarWhereInput | DocenteScalarWhereInput[]
  }

  export type EspecialidadCreateNestedOneWithoutDocentesInput = {
    create?: XOR<EspecialidadCreateWithoutDocentesInput, EspecialidadUncheckedCreateWithoutDocentesInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutDocentesInput
    connect?: EspecialidadWhereUniqueInput
  }

  export type MateriaDocenteCreateNestedManyWithoutDocenteInput = {
    create?: XOR<MateriaDocenteCreateWithoutDocenteInput, MateriaDocenteUncheckedCreateWithoutDocenteInput> | MateriaDocenteCreateWithoutDocenteInput[] | MateriaDocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutDocenteInput | MateriaDocenteCreateOrConnectWithoutDocenteInput[]
    createMany?: MateriaDocenteCreateManyDocenteInputEnvelope
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
  }

  export type MateriaDocenteUncheckedCreateNestedManyWithoutDocenteInput = {
    create?: XOR<MateriaDocenteCreateWithoutDocenteInput, MateriaDocenteUncheckedCreateWithoutDocenteInput> | MateriaDocenteCreateWithoutDocenteInput[] | MateriaDocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutDocenteInput | MateriaDocenteCreateOrConnectWithoutDocenteInput[]
    createMany?: MateriaDocenteCreateManyDocenteInputEnvelope
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
  }

  export type EspecialidadUpdateOneWithoutDocentesNestedInput = {
    create?: XOR<EspecialidadCreateWithoutDocentesInput, EspecialidadUncheckedCreateWithoutDocentesInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutDocentesInput
    upsert?: EspecialidadUpsertWithoutDocentesInput
    disconnect?: EspecialidadWhereInput | boolean
    delete?: EspecialidadWhereInput | boolean
    connect?: EspecialidadWhereUniqueInput
    update?: XOR<XOR<EspecialidadUpdateToOneWithWhereWithoutDocentesInput, EspecialidadUpdateWithoutDocentesInput>, EspecialidadUncheckedUpdateWithoutDocentesInput>
  }

  export type MateriaDocenteUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<MateriaDocenteCreateWithoutDocenteInput, MateriaDocenteUncheckedCreateWithoutDocenteInput> | MateriaDocenteCreateWithoutDocenteInput[] | MateriaDocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutDocenteInput | MateriaDocenteCreateOrConnectWithoutDocenteInput[]
    upsert?: MateriaDocenteUpsertWithWhereUniqueWithoutDocenteInput | MateriaDocenteUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: MateriaDocenteCreateManyDocenteInputEnvelope
    set?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    disconnect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    delete?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    update?: MateriaDocenteUpdateWithWhereUniqueWithoutDocenteInput | MateriaDocenteUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: MateriaDocenteUpdateManyWithWhereWithoutDocenteInput | MateriaDocenteUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: MateriaDocenteScalarWhereInput | MateriaDocenteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MateriaDocenteUncheckedUpdateManyWithoutDocenteNestedInput = {
    create?: XOR<MateriaDocenteCreateWithoutDocenteInput, MateriaDocenteUncheckedCreateWithoutDocenteInput> | MateriaDocenteCreateWithoutDocenteInput[] | MateriaDocenteUncheckedCreateWithoutDocenteInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutDocenteInput | MateriaDocenteCreateOrConnectWithoutDocenteInput[]
    upsert?: MateriaDocenteUpsertWithWhereUniqueWithoutDocenteInput | MateriaDocenteUpsertWithWhereUniqueWithoutDocenteInput[]
    createMany?: MateriaDocenteCreateManyDocenteInputEnvelope
    set?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    disconnect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    delete?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    update?: MateriaDocenteUpdateWithWhereUniqueWithoutDocenteInput | MateriaDocenteUpdateWithWhereUniqueWithoutDocenteInput[]
    updateMany?: MateriaDocenteUpdateManyWithWhereWithoutDocenteInput | MateriaDocenteUpdateManyWithWhereWithoutDocenteInput[]
    deleteMany?: MateriaDocenteScalarWhereInput | MateriaDocenteScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
  }

  export type CicloCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<CicloCreateWithoutEstudiantesInput, CicloUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CicloCreateOrConnectWithoutEstudiantesInput
    connect?: CicloWhereUniqueInput
  }

  export type EstudianteMateriaCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<EstudianteMateriaCreateWithoutEstudianteInput, EstudianteMateriaUncheckedCreateWithoutEstudianteInput> | EstudianteMateriaCreateWithoutEstudianteInput[] | EstudianteMateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutEstudianteInput | EstudianteMateriaCreateOrConnectWithoutEstudianteInput[]
    createMany?: EstudianteMateriaCreateManyEstudianteInputEnvelope
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
  }

  export type EstudianteMateriaUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<EstudianteMateriaCreateWithoutEstudianteInput, EstudianteMateriaUncheckedCreateWithoutEstudianteInput> | EstudianteMateriaCreateWithoutEstudianteInput[] | EstudianteMateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutEstudianteInput | EstudianteMateriaCreateOrConnectWithoutEstudianteInput[]
    createMany?: EstudianteMateriaCreateManyEstudianteInputEnvelope
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
  }

  export type CarreraUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    upsert?: CarreraUpsertWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutEstudiantesInput, CarreraUpdateWithoutEstudiantesInput>, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type CicloUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<CicloCreateWithoutEstudiantesInput, CicloUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CicloCreateOrConnectWithoutEstudiantesInput
    upsert?: CicloUpsertWithoutEstudiantesInput
    connect?: CicloWhereUniqueInput
    update?: XOR<XOR<CicloUpdateToOneWithWhereWithoutEstudiantesInput, CicloUpdateWithoutEstudiantesInput>, CicloUncheckedUpdateWithoutEstudiantesInput>
  }

  export type EstudianteMateriaUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<EstudianteMateriaCreateWithoutEstudianteInput, EstudianteMateriaUncheckedCreateWithoutEstudianteInput> | EstudianteMateriaCreateWithoutEstudianteInput[] | EstudianteMateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutEstudianteInput | EstudianteMateriaCreateOrConnectWithoutEstudianteInput[]
    upsert?: EstudianteMateriaUpsertWithWhereUniqueWithoutEstudianteInput | EstudianteMateriaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: EstudianteMateriaCreateManyEstudianteInputEnvelope
    set?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    disconnect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    delete?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    update?: EstudianteMateriaUpdateWithWhereUniqueWithoutEstudianteInput | EstudianteMateriaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: EstudianteMateriaUpdateManyWithWhereWithoutEstudianteInput | EstudianteMateriaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: EstudianteMateriaScalarWhereInput | EstudianteMateriaScalarWhereInput[]
  }

  export type EstudianteMateriaUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<EstudianteMateriaCreateWithoutEstudianteInput, EstudianteMateriaUncheckedCreateWithoutEstudianteInput> | EstudianteMateriaCreateWithoutEstudianteInput[] | EstudianteMateriaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutEstudianteInput | EstudianteMateriaCreateOrConnectWithoutEstudianteInput[]
    upsert?: EstudianteMateriaUpsertWithWhereUniqueWithoutEstudianteInput | EstudianteMateriaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: EstudianteMateriaCreateManyEstudianteInputEnvelope
    set?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    disconnect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    delete?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    update?: EstudianteMateriaUpdateWithWhereUniqueWithoutEstudianteInput | EstudianteMateriaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: EstudianteMateriaUpdateManyWithWhereWithoutEstudianteInput | EstudianteMateriaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: EstudianteMateriaScalarWhereInput | EstudianteMateriaScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
  }

  export type CicloCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CicloCreateOrConnectWithoutMateriasInput
    connect?: CicloWhereUniqueInput
  }

  export type EstudianteMateriaCreateNestedManyWithoutMateriaInput = {
    create?: XOR<EstudianteMateriaCreateWithoutMateriaInput, EstudianteMateriaUncheckedCreateWithoutMateriaInput> | EstudianteMateriaCreateWithoutMateriaInput[] | EstudianteMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutMateriaInput | EstudianteMateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: EstudianteMateriaCreateManyMateriaInputEnvelope
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
  }

  export type MateriaDocenteCreateNestedManyWithoutMateriaInput = {
    create?: XOR<MateriaDocenteCreateWithoutMateriaInput, MateriaDocenteUncheckedCreateWithoutMateriaInput> | MateriaDocenteCreateWithoutMateriaInput[] | MateriaDocenteUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutMateriaInput | MateriaDocenteCreateOrConnectWithoutMateriaInput[]
    createMany?: MateriaDocenteCreateManyMateriaInputEnvelope
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
  }

  export type EstudianteMateriaUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<EstudianteMateriaCreateWithoutMateriaInput, EstudianteMateriaUncheckedCreateWithoutMateriaInput> | EstudianteMateriaCreateWithoutMateriaInput[] | EstudianteMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutMateriaInput | EstudianteMateriaCreateOrConnectWithoutMateriaInput[]
    createMany?: EstudianteMateriaCreateManyMateriaInputEnvelope
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
  }

  export type MateriaDocenteUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<MateriaDocenteCreateWithoutMateriaInput, MateriaDocenteUncheckedCreateWithoutMateriaInput> | MateriaDocenteCreateWithoutMateriaInput[] | MateriaDocenteUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutMateriaInput | MateriaDocenteCreateOrConnectWithoutMateriaInput[]
    createMany?: MateriaDocenteCreateManyMateriaInputEnvelope
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
  }

  export type CarreraUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    upsert?: CarreraUpsertWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutMateriasInput, CarreraUpdateWithoutMateriasInput>, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type CicloUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CicloCreateOrConnectWithoutMateriasInput
    upsert?: CicloUpsertWithoutMateriasInput
    connect?: CicloWhereUniqueInput
    update?: XOR<XOR<CicloUpdateToOneWithWhereWithoutMateriasInput, CicloUpdateWithoutMateriasInput>, CicloUncheckedUpdateWithoutMateriasInput>
  }

  export type EstudianteMateriaUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<EstudianteMateriaCreateWithoutMateriaInput, EstudianteMateriaUncheckedCreateWithoutMateriaInput> | EstudianteMateriaCreateWithoutMateriaInput[] | EstudianteMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutMateriaInput | EstudianteMateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: EstudianteMateriaUpsertWithWhereUniqueWithoutMateriaInput | EstudianteMateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: EstudianteMateriaCreateManyMateriaInputEnvelope
    set?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    disconnect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    delete?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    update?: EstudianteMateriaUpdateWithWhereUniqueWithoutMateriaInput | EstudianteMateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: EstudianteMateriaUpdateManyWithWhereWithoutMateriaInput | EstudianteMateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: EstudianteMateriaScalarWhereInput | EstudianteMateriaScalarWhereInput[]
  }

  export type MateriaDocenteUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<MateriaDocenteCreateWithoutMateriaInput, MateriaDocenteUncheckedCreateWithoutMateriaInput> | MateriaDocenteCreateWithoutMateriaInput[] | MateriaDocenteUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutMateriaInput | MateriaDocenteCreateOrConnectWithoutMateriaInput[]
    upsert?: MateriaDocenteUpsertWithWhereUniqueWithoutMateriaInput | MateriaDocenteUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: MateriaDocenteCreateManyMateriaInputEnvelope
    set?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    disconnect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    delete?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    update?: MateriaDocenteUpdateWithWhereUniqueWithoutMateriaInput | MateriaDocenteUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: MateriaDocenteUpdateManyWithWhereWithoutMateriaInput | MateriaDocenteUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: MateriaDocenteScalarWhereInput | MateriaDocenteScalarWhereInput[]
  }

  export type EstudianteMateriaUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<EstudianteMateriaCreateWithoutMateriaInput, EstudianteMateriaUncheckedCreateWithoutMateriaInput> | EstudianteMateriaCreateWithoutMateriaInput[] | EstudianteMateriaUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: EstudianteMateriaCreateOrConnectWithoutMateriaInput | EstudianteMateriaCreateOrConnectWithoutMateriaInput[]
    upsert?: EstudianteMateriaUpsertWithWhereUniqueWithoutMateriaInput | EstudianteMateriaUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: EstudianteMateriaCreateManyMateriaInputEnvelope
    set?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    disconnect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    delete?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    connect?: EstudianteMateriaWhereUniqueInput | EstudianteMateriaWhereUniqueInput[]
    update?: EstudianteMateriaUpdateWithWhereUniqueWithoutMateriaInput | EstudianteMateriaUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: EstudianteMateriaUpdateManyWithWhereWithoutMateriaInput | EstudianteMateriaUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: EstudianteMateriaScalarWhereInput | EstudianteMateriaScalarWhereInput[]
  }

  export type MateriaDocenteUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<MateriaDocenteCreateWithoutMateriaInput, MateriaDocenteUncheckedCreateWithoutMateriaInput> | MateriaDocenteCreateWithoutMateriaInput[] | MateriaDocenteUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: MateriaDocenteCreateOrConnectWithoutMateriaInput | MateriaDocenteCreateOrConnectWithoutMateriaInput[]
    upsert?: MateriaDocenteUpsertWithWhereUniqueWithoutMateriaInput | MateriaDocenteUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: MateriaDocenteCreateManyMateriaInputEnvelope
    set?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    disconnect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    delete?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    connect?: MateriaDocenteWhereUniqueInput | MateriaDocenteWhereUniqueInput[]
    update?: MateriaDocenteUpdateWithWhereUniqueWithoutMateriaInput | MateriaDocenteUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: MateriaDocenteUpdateManyWithWhereWithoutMateriaInput | MateriaDocenteUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: MateriaDocenteScalarWhereInput | MateriaDocenteScalarWhereInput[]
  }

  export type EstudianteCreateNestedOneWithoutMateriasInput = {
    create?: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutMateriasInput
    connect?: EstudianteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutEstudiantesInput
    connect?: MateriaWhereUniqueInput
  }

  export type EstudianteUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutMateriasInput
    upsert?: EstudianteUpsertWithoutMateriasInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutMateriasInput, EstudianteUpdateWithoutMateriasInput>, EstudianteUncheckedUpdateWithoutMateriasInput>
  }

  export type MateriaUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutEstudiantesInput
    upsert?: MateriaUpsertWithoutEstudiantesInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutEstudiantesInput, MateriaUpdateWithoutEstudiantesInput>, MateriaUncheckedUpdateWithoutEstudiantesInput>
  }

  export type DocenteCreateNestedOneWithoutMateriasInput = {
    create?: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutMateriasInput
    connect?: DocenteWhereUniqueInput
  }

  export type MateriaCreateNestedOneWithoutDocentesInput = {
    create?: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDocentesInput
    connect?: MateriaWhereUniqueInput
  }

  export type DocenteUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: DocenteCreateOrConnectWithoutMateriasInput
    upsert?: DocenteUpsertWithoutMateriasInput
    connect?: DocenteWhereUniqueInput
    update?: XOR<XOR<DocenteUpdateToOneWithWhereWithoutMateriasInput, DocenteUpdateWithoutMateriasInput>, DocenteUncheckedUpdateWithoutMateriasInput>
  }

  export type MateriaUpdateOneRequiredWithoutDocentesNestedInput = {
    create?: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutDocentesInput
    upsert?: MateriaUpsertWithoutDocentesInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutDocentesInput, MateriaUpdateWithoutDocentesInput>, MateriaUncheckedUpdateWithoutDocentesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EstudianteCreateWithoutCarreraInput = {
    nombre: string
    ciclo: CicloCreateNestedOneWithoutEstudiantesInput
    materias?: EstudianteMateriaCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    cicloId: number
    materias?: EstudianteMateriaUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteCreateManyCarreraInputEnvelope = {
    data: EstudianteCreateManyCarreraInput | EstudianteCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MateriaCreateWithoutCarreraInput = {
    nombre: string
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    estudiantes?: EstudianteMateriaCreateNestedManyWithoutMateriaInput
    docentes?: MateriaDocenteCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    cicloId: number
    estudiantes?: EstudianteMateriaUncheckedCreateNestedManyWithoutMateriaInput
    docentes?: MateriaDocenteUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaCreateManyCarreraInputEnvelope = {
    data: MateriaCreateManyCarreraInput | MateriaCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type EstudianteUpsertWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    update: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteUpdateWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    data: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
  }

  export type EstudianteUpdateManyWithWhereWithoutCarreraInput = {
    where: EstudianteScalarWhereInput
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyWithoutCarreraInput>
  }

  export type EstudianteScalarWhereInput = {
    AND?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    OR?: EstudianteScalarWhereInput[]
    NOT?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    carreraId?: IntFilter<"Estudiante"> | number
    cicloId?: IntFilter<"Estudiante"> | number
  }

  export type MateriaUpsertWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCarreraInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCarreraInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    carreraId?: IntFilter<"Materia"> | number
    cicloId?: IntFilter<"Materia"> | number
  }

  export type EstudianteCreateWithoutCicloInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
    materias?: EstudianteMateriaCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutCicloInput = {
    id?: number
    nombre: string
    carreraId: number
    materias?: EstudianteMateriaUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutCicloInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutCicloInput, EstudianteUncheckedCreateWithoutCicloInput>
  }

  export type EstudianteCreateManyCicloInputEnvelope = {
    data: EstudianteCreateManyCicloInput | EstudianteCreateManyCicloInput[]
    skipDuplicates?: boolean
  }

  export type MateriaCreateWithoutCicloInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    estudiantes?: EstudianteMateriaCreateNestedManyWithoutMateriaInput
    docentes?: MateriaDocenteCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutCicloInput = {
    id?: number
    nombre: string
    carreraId: number
    estudiantes?: EstudianteMateriaUncheckedCreateNestedManyWithoutMateriaInput
    docentes?: MateriaDocenteUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutCicloInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput>
  }

  export type MateriaCreateManyCicloInputEnvelope = {
    data: MateriaCreateManyCicloInput | MateriaCreateManyCicloInput[]
    skipDuplicates?: boolean
  }

  export type EstudianteUpsertWithWhereUniqueWithoutCicloInput = {
    where: EstudianteWhereUniqueInput
    update: XOR<EstudianteUpdateWithoutCicloInput, EstudianteUncheckedUpdateWithoutCicloInput>
    create: XOR<EstudianteCreateWithoutCicloInput, EstudianteUncheckedCreateWithoutCicloInput>
  }

  export type EstudianteUpdateWithWhereUniqueWithoutCicloInput = {
    where: EstudianteWhereUniqueInput
    data: XOR<EstudianteUpdateWithoutCicloInput, EstudianteUncheckedUpdateWithoutCicloInput>
  }

  export type EstudianteUpdateManyWithWhereWithoutCicloInput = {
    where: EstudianteScalarWhereInput
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyWithoutCicloInput>
  }

  export type MateriaUpsertWithWhereUniqueWithoutCicloInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCicloInput, MateriaUncheckedUpdateWithoutCicloInput>
    create: XOR<MateriaCreateWithoutCicloInput, MateriaUncheckedCreateWithoutCicloInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCicloInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCicloInput, MateriaUncheckedUpdateWithoutCicloInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCicloInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCicloInput>
  }

  export type DocenteCreateWithoutEspecialidadInput = {
    nombre: string
    materias?: MateriaDocenteCreateNestedManyWithoutDocenteInput
  }

  export type DocenteUncheckedCreateWithoutEspecialidadInput = {
    id?: number
    nombre: string
    materias?: MateriaDocenteUncheckedCreateNestedManyWithoutDocenteInput
  }

  export type DocenteCreateOrConnectWithoutEspecialidadInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutEspecialidadInput, DocenteUncheckedCreateWithoutEspecialidadInput>
  }

  export type DocenteCreateManyEspecialidadInputEnvelope = {
    data: DocenteCreateManyEspecialidadInput | DocenteCreateManyEspecialidadInput[]
    skipDuplicates?: boolean
  }

  export type DocenteUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: DocenteWhereUniqueInput
    update: XOR<DocenteUpdateWithoutEspecialidadInput, DocenteUncheckedUpdateWithoutEspecialidadInput>
    create: XOR<DocenteCreateWithoutEspecialidadInput, DocenteUncheckedCreateWithoutEspecialidadInput>
  }

  export type DocenteUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: DocenteWhereUniqueInput
    data: XOR<DocenteUpdateWithoutEspecialidadInput, DocenteUncheckedUpdateWithoutEspecialidadInput>
  }

  export type DocenteUpdateManyWithWhereWithoutEspecialidadInput = {
    where: DocenteScalarWhereInput
    data: XOR<DocenteUpdateManyMutationInput, DocenteUncheckedUpdateManyWithoutEspecialidadInput>
  }

  export type DocenteScalarWhereInput = {
    AND?: DocenteScalarWhereInput | DocenteScalarWhereInput[]
    OR?: DocenteScalarWhereInput[]
    NOT?: DocenteScalarWhereInput | DocenteScalarWhereInput[]
    id?: IntFilter<"Docente"> | number
    nombre?: StringFilter<"Docente"> | string
    especialidadId?: IntNullableFilter<"Docente"> | number | null
  }

  export type EspecialidadCreateWithoutDocentesInput = {
    nombre: string
  }

  export type EspecialidadUncheckedCreateWithoutDocentesInput = {
    id?: number
    nombre: string
  }

  export type EspecialidadCreateOrConnectWithoutDocentesInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutDocentesInput, EspecialidadUncheckedCreateWithoutDocentesInput>
  }

  export type MateriaDocenteCreateWithoutDocenteInput = {
    materia: MateriaCreateNestedOneWithoutDocentesInput
  }

  export type MateriaDocenteUncheckedCreateWithoutDocenteInput = {
    id?: number
    materiaId: number
  }

  export type MateriaDocenteCreateOrConnectWithoutDocenteInput = {
    where: MateriaDocenteWhereUniqueInput
    create: XOR<MateriaDocenteCreateWithoutDocenteInput, MateriaDocenteUncheckedCreateWithoutDocenteInput>
  }

  export type MateriaDocenteCreateManyDocenteInputEnvelope = {
    data: MateriaDocenteCreateManyDocenteInput | MateriaDocenteCreateManyDocenteInput[]
    skipDuplicates?: boolean
  }

  export type EspecialidadUpsertWithoutDocentesInput = {
    update: XOR<EspecialidadUpdateWithoutDocentesInput, EspecialidadUncheckedUpdateWithoutDocentesInput>
    create: XOR<EspecialidadCreateWithoutDocentesInput, EspecialidadUncheckedCreateWithoutDocentesInput>
    where?: EspecialidadWhereInput
  }

  export type EspecialidadUpdateToOneWithWhereWithoutDocentesInput = {
    where?: EspecialidadWhereInput
    data: XOR<EspecialidadUpdateWithoutDocentesInput, EspecialidadUncheckedUpdateWithoutDocentesInput>
  }

  export type EspecialidadUpdateWithoutDocentesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateWithoutDocentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaDocenteUpsertWithWhereUniqueWithoutDocenteInput = {
    where: MateriaDocenteWhereUniqueInput
    update: XOR<MateriaDocenteUpdateWithoutDocenteInput, MateriaDocenteUncheckedUpdateWithoutDocenteInput>
    create: XOR<MateriaDocenteCreateWithoutDocenteInput, MateriaDocenteUncheckedCreateWithoutDocenteInput>
  }

  export type MateriaDocenteUpdateWithWhereUniqueWithoutDocenteInput = {
    where: MateriaDocenteWhereUniqueInput
    data: XOR<MateriaDocenteUpdateWithoutDocenteInput, MateriaDocenteUncheckedUpdateWithoutDocenteInput>
  }

  export type MateriaDocenteUpdateManyWithWhereWithoutDocenteInput = {
    where: MateriaDocenteScalarWhereInput
    data: XOR<MateriaDocenteUpdateManyMutationInput, MateriaDocenteUncheckedUpdateManyWithoutDocenteInput>
  }

  export type MateriaDocenteScalarWhereInput = {
    AND?: MateriaDocenteScalarWhereInput | MateriaDocenteScalarWhereInput[]
    OR?: MateriaDocenteScalarWhereInput[]
    NOT?: MateriaDocenteScalarWhereInput | MateriaDocenteScalarWhereInput[]
    id?: IntFilter<"MateriaDocente"> | number
    docenteId?: IntFilter<"MateriaDocente"> | number
    materiaId?: IntFilter<"MateriaDocente"> | number
  }

  export type CarreraCreateWithoutEstudiantesInput = {
    nombre: string
    materias?: MateriaCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutEstudiantesInput = {
    id?: number
    nombre: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutEstudiantesInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
  }

  export type CicloCreateWithoutEstudiantesInput = {
    nombre: string
    materias?: MateriaCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutEstudiantesInput = {
    id?: number
    nombre: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutEstudiantesInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutEstudiantesInput, CicloUncheckedCreateWithoutEstudiantesInput>
  }

  export type EstudianteMateriaCreateWithoutEstudianteInput = {
    materia: MateriaCreateNestedOneWithoutEstudiantesInput
  }

  export type EstudianteMateriaUncheckedCreateWithoutEstudianteInput = {
    id?: number
    materiaId: number
  }

  export type EstudianteMateriaCreateOrConnectWithoutEstudianteInput = {
    where: EstudianteMateriaWhereUniqueInput
    create: XOR<EstudianteMateriaCreateWithoutEstudianteInput, EstudianteMateriaUncheckedCreateWithoutEstudianteInput>
  }

  export type EstudianteMateriaCreateManyEstudianteInputEnvelope = {
    data: EstudianteMateriaCreateManyEstudianteInput | EstudianteMateriaCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutEstudiantesInput = {
    update: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type CarreraUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutEstudiantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CicloUpsertWithoutEstudiantesInput = {
    update: XOR<CicloUpdateWithoutEstudiantesInput, CicloUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<CicloCreateWithoutEstudiantesInput, CicloUncheckedCreateWithoutEstudiantesInput>
    where?: CicloWhereInput
  }

  export type CicloUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: CicloWhereInput
    data: XOR<CicloUpdateWithoutEstudiantesInput, CicloUncheckedUpdateWithoutEstudiantesInput>
  }

  export type CicloUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutEstudiantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type EstudianteMateriaUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: EstudianteMateriaWhereUniqueInput
    update: XOR<EstudianteMateriaUpdateWithoutEstudianteInput, EstudianteMateriaUncheckedUpdateWithoutEstudianteInput>
    create: XOR<EstudianteMateriaCreateWithoutEstudianteInput, EstudianteMateriaUncheckedCreateWithoutEstudianteInput>
  }

  export type EstudianteMateriaUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: EstudianteMateriaWhereUniqueInput
    data: XOR<EstudianteMateriaUpdateWithoutEstudianteInput, EstudianteMateriaUncheckedUpdateWithoutEstudianteInput>
  }

  export type EstudianteMateriaUpdateManyWithWhereWithoutEstudianteInput = {
    where: EstudianteMateriaScalarWhereInput
    data: XOR<EstudianteMateriaUpdateManyMutationInput, EstudianteMateriaUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type EstudianteMateriaScalarWhereInput = {
    AND?: EstudianteMateriaScalarWhereInput | EstudianteMateriaScalarWhereInput[]
    OR?: EstudianteMateriaScalarWhereInput[]
    NOT?: EstudianteMateriaScalarWhereInput | EstudianteMateriaScalarWhereInput[]
    id?: IntFilter<"EstudianteMateria"> | number
    estudianteId?: IntFilter<"EstudianteMateria"> | number
    materiaId?: IntFilter<"EstudianteMateria"> | number
  }

  export type CarreraCreateWithoutMateriasInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
  }

  export type CicloCreateWithoutMateriasInput = {
    nombre: string
    estudiantes?: EstudianteCreateNestedManyWithoutCicloInput
  }

  export type CicloUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCicloInput
  }

  export type CicloCreateOrConnectWithoutMateriasInput = {
    where: CicloWhereUniqueInput
    create: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
  }

  export type EstudianteMateriaCreateWithoutMateriaInput = {
    estudiante: EstudianteCreateNestedOneWithoutMateriasInput
  }

  export type EstudianteMateriaUncheckedCreateWithoutMateriaInput = {
    id?: number
    estudianteId: number
  }

  export type EstudianteMateriaCreateOrConnectWithoutMateriaInput = {
    where: EstudianteMateriaWhereUniqueInput
    create: XOR<EstudianteMateriaCreateWithoutMateriaInput, EstudianteMateriaUncheckedCreateWithoutMateriaInput>
  }

  export type EstudianteMateriaCreateManyMateriaInputEnvelope = {
    data: EstudianteMateriaCreateManyMateriaInput | EstudianteMateriaCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type MateriaDocenteCreateWithoutMateriaInput = {
    docente: DocenteCreateNestedOneWithoutMateriasInput
  }

  export type MateriaDocenteUncheckedCreateWithoutMateriaInput = {
    id?: number
    docenteId: number
  }

  export type MateriaDocenteCreateOrConnectWithoutMateriaInput = {
    where: MateriaDocenteWhereUniqueInput
    create: XOR<MateriaDocenteCreateWithoutMateriaInput, MateriaDocenteUncheckedCreateWithoutMateriaInput>
  }

  export type MateriaDocenteCreateManyMateriaInputEnvelope = {
    data: MateriaDocenteCreateManyMateriaInput | MateriaDocenteCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutMateriasInput = {
    update: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type CarreraUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CicloUpsertWithoutMateriasInput = {
    update: XOR<CicloUpdateWithoutMateriasInput, CicloUncheckedUpdateWithoutMateriasInput>
    create: XOR<CicloCreateWithoutMateriasInput, CicloUncheckedCreateWithoutMateriasInput>
    where?: CicloWhereInput
  }

  export type CicloUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CicloWhereInput
    data: XOR<CicloUpdateWithoutMateriasInput, CicloUncheckedUpdateWithoutMateriasInput>
  }

  export type CicloUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCicloNestedInput
  }

  export type CicloUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCicloNestedInput
  }

  export type EstudianteMateriaUpsertWithWhereUniqueWithoutMateriaInput = {
    where: EstudianteMateriaWhereUniqueInput
    update: XOR<EstudianteMateriaUpdateWithoutMateriaInput, EstudianteMateriaUncheckedUpdateWithoutMateriaInput>
    create: XOR<EstudianteMateriaCreateWithoutMateriaInput, EstudianteMateriaUncheckedCreateWithoutMateriaInput>
  }

  export type EstudianteMateriaUpdateWithWhereUniqueWithoutMateriaInput = {
    where: EstudianteMateriaWhereUniqueInput
    data: XOR<EstudianteMateriaUpdateWithoutMateriaInput, EstudianteMateriaUncheckedUpdateWithoutMateriaInput>
  }

  export type EstudianteMateriaUpdateManyWithWhereWithoutMateriaInput = {
    where: EstudianteMateriaScalarWhereInput
    data: XOR<EstudianteMateriaUpdateManyMutationInput, EstudianteMateriaUncheckedUpdateManyWithoutMateriaInput>
  }

  export type MateriaDocenteUpsertWithWhereUniqueWithoutMateriaInput = {
    where: MateriaDocenteWhereUniqueInput
    update: XOR<MateriaDocenteUpdateWithoutMateriaInput, MateriaDocenteUncheckedUpdateWithoutMateriaInput>
    create: XOR<MateriaDocenteCreateWithoutMateriaInput, MateriaDocenteUncheckedCreateWithoutMateriaInput>
  }

  export type MateriaDocenteUpdateWithWhereUniqueWithoutMateriaInput = {
    where: MateriaDocenteWhereUniqueInput
    data: XOR<MateriaDocenteUpdateWithoutMateriaInput, MateriaDocenteUncheckedUpdateWithoutMateriaInput>
  }

  export type MateriaDocenteUpdateManyWithWhereWithoutMateriaInput = {
    where: MateriaDocenteScalarWhereInput
    data: XOR<MateriaDocenteUpdateManyMutationInput, MateriaDocenteUncheckedUpdateManyWithoutMateriaInput>
  }

  export type EstudianteCreateWithoutMateriasInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
    ciclo: CicloCreateNestedOneWithoutEstudiantesInput
  }

  export type EstudianteUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
  }

  export type EstudianteCreateOrConnectWithoutMateriasInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
  }

  export type MateriaCreateWithoutEstudiantesInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    docentes?: MateriaDocenteCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutEstudiantesInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
    docentes?: MateriaDocenteUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutEstudiantesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
  }

  export type EstudianteUpsertWithoutMateriasInput = {
    update: XOR<EstudianteUpdateWithoutMateriasInput, EstudianteUncheckedUpdateWithoutMateriasInput>
    create: XOR<EstudianteCreateWithoutMateriasInput, EstudianteUncheckedCreateWithoutMateriasInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutMateriasInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutMateriasInput, EstudianteUncheckedUpdateWithoutMateriasInput>
  }

  export type EstudianteUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaUpsertWithoutEstudiantesInput = {
    update: XOR<MateriaUpdateWithoutEstudiantesInput, MateriaUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<MateriaCreateWithoutEstudiantesInput, MateriaUncheckedCreateWithoutEstudiantesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutEstudiantesInput, MateriaUncheckedUpdateWithoutEstudiantesInput>
  }

  export type MateriaUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    docentes?: MateriaDocenteUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutEstudiantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
    docentes?: MateriaDocenteUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type DocenteCreateWithoutMateriasInput = {
    nombre: string
    especialidad?: EspecialidadCreateNestedOneWithoutDocentesInput
  }

  export type DocenteUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    especialidadId?: number | null
  }

  export type DocenteCreateOrConnectWithoutMateriasInput = {
    where: DocenteWhereUniqueInput
    create: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
  }

  export type MateriaCreateWithoutDocentesInput = {
    nombre: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    ciclo: CicloCreateNestedOneWithoutMateriasInput
    estudiantes?: EstudianteMateriaCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUncheckedCreateWithoutDocentesInput = {
    id?: number
    nombre: string
    carreraId: number
    cicloId: number
    estudiantes?: EstudianteMateriaUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutDocentesInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
  }

  export type DocenteUpsertWithoutMateriasInput = {
    update: XOR<DocenteUpdateWithoutMateriasInput, DocenteUncheckedUpdateWithoutMateriasInput>
    create: XOR<DocenteCreateWithoutMateriasInput, DocenteUncheckedCreateWithoutMateriasInput>
    where?: DocenteWhereInput
  }

  export type DocenteUpdateToOneWithWhereWithoutMateriasInput = {
    where?: DocenteWhereInput
    data: XOR<DocenteUpdateWithoutMateriasInput, DocenteUncheckedUpdateWithoutMateriasInput>
  }

  export type DocenteUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    especialidad?: EspecialidadUpdateOneWithoutDocentesNestedInput
  }

  export type DocenteUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    especialidadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MateriaUpsertWithoutDocentesInput = {
    update: XOR<MateriaUpdateWithoutDocentesInput, MateriaUncheckedUpdateWithoutDocentesInput>
    create: XOR<MateriaCreateWithoutDocentesInput, MateriaUncheckedCreateWithoutDocentesInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutDocentesInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutDocentesInput, MateriaUncheckedUpdateWithoutDocentesInput>
  }

  export type MateriaUpdateWithoutDocentesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    estudiantes?: EstudianteMateriaUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutDocentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    cicloId?: IntFieldUpdateOperationsInput | number
    estudiantes?: EstudianteMateriaUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type EstudianteCreateManyCarreraInput = {
    id?: number
    nombre: string
    cicloId: number
  }

  export type MateriaCreateManyCarreraInput = {
    id?: number
    nombre: string
    cicloId: number
  }

  export type EstudianteUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciclo?: CicloUpdateOneRequiredWithoutEstudiantesNestedInput
    materias?: EstudianteMateriaUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cicloId?: IntFieldUpdateOperationsInput | number
    materias?: EstudianteMateriaUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cicloId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciclo?: CicloUpdateOneRequiredWithoutMateriasNestedInput
    estudiantes?: EstudianteMateriaUpdateManyWithoutMateriaNestedInput
    docentes?: MateriaDocenteUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cicloId?: IntFieldUpdateOperationsInput | number
    estudiantes?: EstudianteMateriaUncheckedUpdateManyWithoutMateriaNestedInput
    docentes?: MateriaDocenteUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cicloId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteCreateManyCicloInput = {
    id?: number
    nombre: string
    carreraId: number
  }

  export type MateriaCreateManyCicloInput = {
    id?: number
    nombre: string
    carreraId: number
  }

  export type EstudianteUpdateWithoutCicloInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
    materias?: EstudianteMateriaUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutCicloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    materias?: EstudianteMateriaUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateManyWithoutCicloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaUpdateWithoutCicloInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    estudiantes?: EstudianteMateriaUpdateManyWithoutMateriaNestedInput
    docentes?: MateriaDocenteUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCicloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
    estudiantes?: EstudianteMateriaUncheckedUpdateManyWithoutMateriaNestedInput
    docentes?: MateriaDocenteUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutCicloInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carreraId?: IntFieldUpdateOperationsInput | number
  }

  export type DocenteCreateManyEspecialidadInput = {
    id?: number
    nombre: string
  }

  export type DocenteUpdateWithoutEspecialidadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaDocenteUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materias?: MateriaDocenteUncheckedUpdateManyWithoutDocenteNestedInput
  }

  export type DocenteUncheckedUpdateManyWithoutEspecialidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaDocenteCreateManyDocenteInput = {
    id?: number
    materiaId: number
  }

  export type MateriaDocenteUpdateWithoutDocenteInput = {
    materia?: MateriaUpdateOneRequiredWithoutDocentesNestedInput
  }

  export type MateriaDocenteUncheckedUpdateWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaDocenteUncheckedUpdateManyWithoutDocenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteMateriaCreateManyEstudianteInput = {
    id?: number
    materiaId: number
  }

  export type EstudianteMateriaUpdateWithoutEstudianteInput = {
    materia?: MateriaUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type EstudianteMateriaUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteMateriaUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    materiaId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteMateriaCreateManyMateriaInput = {
    id?: number
    estudianteId: number
  }

  export type MateriaDocenteCreateManyMateriaInput = {
    id?: number
    docenteId: number
  }

  export type EstudianteMateriaUpdateWithoutMateriaInput = {
    estudiante?: EstudianteUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type EstudianteMateriaUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudianteMateriaUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudianteId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaDocenteUpdateWithoutMateriaInput = {
    docente?: DocenteUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaDocenteUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaDocenteUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    docenteId?: IntFieldUpdateOperationsInput | number
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