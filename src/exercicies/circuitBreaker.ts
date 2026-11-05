enum CircuitState {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
  HALF_OPEN = "HALF_OPEN",
}

interface CircuitBreakerOptions {
  failureThreshold: number;
  resetTimeout: number;
}

class CircuitBreakerOpenError extends Error {
  constructor() {
    super("Circuit breaker is OPEN");
    this.name = "CircuitBreakerOpenError";
  }
}

class CircuitBreaker {
  private state = CircuitState.CLOSED;
  private failures = 0;
  private lastFailureTime = 0;
  private probeInProgress = false;

  constructor(private readonly options: CircuitBreakerOptions) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    // 1. Check OPEN state
    if (this.state === CircuitState.OPEN) {
      const elapsed = Date.now() - this.lastFailureTime;

      if (elapsed < this.options.resetTimeout) {
        throw new CircuitBreakerOpenError();
      }

      this.state = CircuitState.HALF_OPEN;
    }

    // 2. Handle HALF_OPEN
    const isProbe = this.state === CircuitState.HALF_OPEN;

    if (isProbe) {
      if (this.probeInProgress) {
        throw new CircuitBreakerOpenError();
      }

      this.probeInProgress = true;
    }

    // 3. Execute once
    try {
      const result = await fn();

      if (isProbe) {
        this.reset();
      } else {
        this.failures = 0;
      }

      return result;
    } catch (error) {
      if (isProbe) {
        this.open();
      } else {
        this.failures++;

        if (this.failures >= this.options.failureThreshold) {
          this.open();
        }
      }

      throw error;
    } finally {
      if (isProbe) {
        this.probeInProgress = false;
      }
    }
  }

  private open(): void {
    this.state = CircuitState.OPEN;
    this.lastFailureTime = Date.now();
  }

  private reset(): void {
    this.state = CircuitState.CLOSED;
    this.failures = 0;
    this.lastFailureTime = 0;
  }

  getState(): CircuitState {
    return this.state;
  }
}

const main = async () => {
  const breaker = new CircuitBreaker({
    failureThreshold: 3,
    resetTimeout: 5000,
  });

  async function getUsers() {
    return breaker.execute(async () => {
      const response = await fetch("https://api.example.com/users");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    });
  }

  const data = await getUsers();

  console.log({ data });
};

main();
