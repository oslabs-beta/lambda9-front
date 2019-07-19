export interface Func {
  name: string;
  lastModified: string;
  numInvocations: number;
  numErrors: number;
}

export interface FuncState {
  functions: Func[];
}

export interface AppContextInterface {
  state: any;
}

declare module "aws-exports";