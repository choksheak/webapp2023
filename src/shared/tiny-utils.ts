export function nonNil<T>(value: T | null | undefined, varName: string): T {
  if (value === undefined || value === null) {
    throw new Error(`Missing ${varName}`);
  }
  return value;
}

export const IS_DEV = import.meta.env.DEV;
export const IS_PROD = import.meta.env.PROD;
