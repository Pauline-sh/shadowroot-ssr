export function html(
  strings: TemplateStringsArray,
  ...args: Array<number | string>
): string {
  return strings.reduce((acc, curString, curIndex) => {
    if (curIndex === strings.length - 1) {
      acc += curString;
    } else {
      const argType = typeof args[curIndex];
      let arg: string;

      if (['number', 'string'].includes(argType)) {
        arg = args[curIndex].toString();
      } else {
        arg = JSON.stringify(args[curIndex]);
      }

      acc += curString + arg;
    }

    return acc;
  }, '');
}
