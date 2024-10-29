// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Result<T = any> {
  status: number;
  message: string;
  data?: T;
}
