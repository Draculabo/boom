export type UseNamespace = {
  b: () => string;
  e: (el: string) => string;
  m: (mo: string) => string;
  em: (el: string, mo: string) => string;
};

function createPrefix(namespace: string, element?: string, modifier?: string): string {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

/**
 * useNamespace
 * @param block current block name
 * @param needDot Do you need a dot prefix (defalut: false)
 * @returns UseNamespace
 */
export function useNamespace(block: string, needDot = false): UseNamespace {
  const namespace = needDot ? `.boomui-${block}` : `boomui-${block}`;
  const b = () => createPrefix(namespace);
  const e = (element: string) => (element ? createPrefix(namespace, element) : '');
  const m = (modifier: string) => (modifier ? createPrefix(namespace, '', modifier) : '');
  const em = (element: string, modifier: string) => (element && modifier ? createPrefix(namespace, element, modifier) : '');
  return {
    b,
    e,
    m,
    em,
  };
}
