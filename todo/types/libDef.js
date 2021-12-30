declare var __DEV__: boolean;

declare module 'JSResourceReference' {
  declare export interface JSResourceReference<T> {
    // Should have been `getModuleName` in React Native, as we're using numeric
    // IDs, but we keep it as `getModuleId` for compatibility with `www`
    getModuleId(): string;
    getModuleIfRequired(): ?T;
    load(): Promise<T>;
  }
}

declare module 'areEqual' {
  declare module.exports: any;
}

declare module 'requireCond' {
  declare module.exports: any;
}

declare module 'invariant' {
  declare module.exports: any;
}

declare module 'warning' {
  declare module.exports: any;
}

declare module 'RelayOperationStub' {
  declare module.exports: any;
}
