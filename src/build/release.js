async function instantiate(module, imports = {}) {
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(
            `${message} in ${fileName}:${lineNumber}:${columnNumber}`,
          );
        })();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf(
    {
      joinText(props) {
        // assembly/index/joinText(assembly/index/JoinTextProps) => ~lib/string/String
        props = __lowerRecord4(props) || __notnull();
        return __liftString(exports.joinText(props) >>> 0);
      },
    },
    exports,
  );
  function __lowerRecord4(value) {
    // assembly/index/JoinTextProps
    // Hint: Opt-out from lowering as a record by providing an empty constructor
    if (value == null) return 0;
    const pointer = exports.__pin(exports.__new(12, 4));
    __setU32(pointer + 0, __lowerString(value.str1) || __notnull());
    __setU32(pointer + 4, __lowerString(value.str2) || __notnull());
    __setU32(pointer + 8, __lowerString(value.separator) || __notnull());
    exports.__unpin(pointer);
    return pointer;
  }
  function __liftString(pointer) {
    if (!pointer) return null;
    const end =
        (pointer + new Uint32Array(memory.buffer)[(pointer - 4) >>> 2]) >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let start = pointer >>> 1,
      string = '';
    while (end - start > 1024)
      string += String.fromCharCode(
        ...memoryU16.subarray(start, (start += 1024)),
      );
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __lowerString(value) {
    if (value == null) return 0;
    const length = value.length,
      pointer = exports.__new(length << 1, 2) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i)
      memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  function __notnull() {
    throw TypeError('value must not be null');
  }
  let __dataview = new DataView(memory.buffer);
  function __setU32(pointer, value) {
    try {
      __dataview.setUint32(pointer, value, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      __dataview.setUint32(pointer, value, true);
    }
  }
  return adaptedExports;
}
export const { memory, add, joinText } = await (async (url) =>
  instantiate(
    await (async () => {
      try {
        return await globalThis.WebAssembly.compileStreaming(
          globalThis.fetch(url),
        );
      } catch {
        return globalThis.WebAssembly.compile(
          await (await import('node:fs/promises')).readFile(url),
        );
      }
    })(),
    {},
  ))(new URL('release.wasm', import.meta.url));
