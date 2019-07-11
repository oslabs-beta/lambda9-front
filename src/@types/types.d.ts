export interface Func {
  functionName: string;
  lastModified: Date;
  invocation: number;
  error: number;
}

export interface FuncState {
  functions: Func[];
}

export interface AppContextInterface {
  state: any;
}

declare module "aws-exports";