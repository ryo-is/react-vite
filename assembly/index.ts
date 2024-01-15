/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable prefer-destructuring */
// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

class JoinTextProps {
  str1!: string;
  str2!: string;
  separator!: string;
}

export function joinText(props: JoinTextProps): string {
  const str1 = props.str1;
  const str2 = props.str2;
  const separator = props.separator;
  return `${str1}${separator}${str2}`;
}
