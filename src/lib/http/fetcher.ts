interface FetchOptions extends RequestInit {
  timeoutMs?: number;
}

export async function safeFetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { timeoutMs = 8000, ...rest } = options;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...rest, signal: controller.signal });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Upstream error ${res.status}: ${body}`);
    }

    return (await res.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}