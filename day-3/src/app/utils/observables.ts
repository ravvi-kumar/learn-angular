export const observe = Object.freeze<{
  observables: Function[];
  subscribe: (fxn: Function) => void;
  execute: (data: any) => void;
  unSubscribe: (fxn: Function) => void;
}>({
  observables: [],
  subscribe(fxn: Function) {
    this.observables.push(fxn);
  },

  execute(data: any) {
    this.observables.forEach((fxn) => {
      fxn(data);
    });
  },
  unSubscribe(fxn: Function) {
    const idx = this.observables.findIndex((f) => f === fxn);
    this.observables.splice(idx, 1);
  },
});
