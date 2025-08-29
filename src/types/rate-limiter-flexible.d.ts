// src/types/rate-limiter-flexible.d.ts
declare module 'rate-limiter-flexible' {
  export interface RateLimiterOpts {
    points: number;
    duration: number;
    keyPrefix?: string;
    blockDuration?: number;
  }

  // minimal shape to satisfy your usage
  export interface RateLimiterRes {
    msBeforeNext: number;
    remainingPoints: number;
    consumedPoints: number;
    isFirstInDuration: boolean;
  }

  export class RateLimiterMemory {
    constructor(opts: RateLimiterOpts);
    consume(key: string, pointsToConsume?: number): Promise<RateLimiterRes>;
    get(key: string): Promise<RateLimiterRes | null>;
    delete(key: string): Promise<void>;
  }
}
