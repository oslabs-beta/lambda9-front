export interface Func {
  name: string;
  lastModified: string;
  numInvocations: number;
  numErrors: number;
  projectName: string;
}

export interface FuncState {
  functions: Func[];
}

export interface AppContextInterface {
  state: any;
}

export interface User {
  index: number;
  name: string;
  detail: string;
  numInvocations: number;
  numErrors: number;
  projectName: string;
  lastModified: string;
}


declare module "aws-exports";