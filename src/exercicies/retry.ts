interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffFactor?: number;
  jitter?: boolean;
  shouldRetry?: (error: unknown) => boolean;
}

async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {},
): Promise<T> {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    maxDelay = 10000,
    backoffFactor = 2,
    jitter = true,
    shouldRetry = () => true,
  } = options;

  let attempt = 0;

  while (true) {
    console.log({ attempt });

    try {
      return await fn();
    } catch (error) {
      if (attempt >= maxRetries || !shouldRetry(error)) {
        throw error;
      }

      const exponentialDelay = Math.min(
        initialDelay * Math.pow(backoffFactor, attempt),
        maxDelay,
      );

      const delay = jitter
        ? Math.random() * exponentialDelay
        : exponentialDelay;

      await new Promise<void>((resolve) => setTimeout(resolve, delay));

      attempt++;
    }
  }
}

const main = async () => {
  const result = await retry(
    async () => {
      const response = await fetch("https://api.example.com/users");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    },
    {
      maxRetries: 3,
      initialDelay: 500,
      backoffFactor: 2,
      jitter: true,
    },
  );

  console.log(result);
};

main();

class HttpError extends Error {
  constructor(public status: number) {
    super(`HTTP ${status}`);
  }
}

// const result = await retry(
//   async () => {
//     const response = await fetch(
//       "https://api.example.com/users"
//     );

//     if (!response.ok) {
//       throw new HttpError(response.status);
//     }

//     return response.json();
//   },
//   {
//     maxRetries: 3,
//     shouldRetry: (error) => {
//       if (error instanceof HttpError) {
//         return (
//           error.status === 408 ||
//           error.status === 429 ||
//           error.status >= 500
//         );
//       }

//       return false;
//     },
//   }
// );
