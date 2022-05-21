export const dateInstance = (date: string) => {
  const s: number[] = date.split("-").map((x) => +x);
  return new Date(s[0], s[1] - 1, s[2]);
};

export const debounce = (func: Function, timeout = 1000) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const num_format = (num: number) => {
  return new Intl.NumberFormat("en-IN").format(num);
};
