type RateLimitInfo = {
  count: number;
  resetTime: number;
};

const ipCache = new Map<string, RateLimitInfo>();
let lastCleanup = Date.now();

function cleanupCache() {
  const now = Date.now();
  for (const [key, value] of ipCache.entries()) {
    if (now > value.resetTime) {
      ipCache.delete(key);
    }
  }
}

/**
 * Basic IP rate limiter.
 * @param ip - Sender's IP address.
 * @param limit - Maximum requests allowed in the window.
 * @param windowMs - Time window in milliseconds.
 * @returns boolean - true if request is allowed, false if rate limited.
 */
export function rateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();

  // Periodically clean up cache to prevent memory leaks
  if (now - lastCleanup > 60000) {
    cleanupCache();
    lastCleanup = now;
  }

  const info = ipCache.get(ip);

  if (!info) {
    ipCache.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (now > info.resetTime) {
    ipCache.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (info.count >= limit) {
    return false;
  }

  info.count++;
  return true;
}
