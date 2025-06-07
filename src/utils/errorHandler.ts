// 4. src/utils/errorHandler.ts
export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

export function handleError(error: unknown): void {
  if (error instanceof CustomError) {
    console.error(`Custom Error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error('An unknown error occurred.');
  }
}