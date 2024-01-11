/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * assembly/index/joinText
 * @param props `assembly/index/JoinTextProps`
 * @returns `~lib/string/String`
 */
export declare function joinText(props: __Record4<undefined>): string;
/** assembly/index/JoinTextProps */
declare interface __Record4<TOmittable> {
  /** @type `~lib/string/String` */
  str1: string;
  /** @type `~lib/string/String` */
  str2: string;
  /** @type `~lib/string/String` */
  separator: string;
}
