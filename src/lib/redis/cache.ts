// import { redis } from "./client";


// export async function getOrSetCache<T>(
//   key: string,
//   ttlSeconds: number,
//   fetchFn: () => Promise<T>
// ): Promise<{ data: T; source: "cache" | "origin" }> {
//   try {
//     const cached = await redis.get(key);
//     if (cached) {
//       return { data: JSON.parse(cached) as T, source: "cache" };
//     }
//   } catch (err) {
//     // Redis down? Don't crash the request — fall through to origin call
//     console.error(`[Cache] read error for key "${key}":`, err);
//   }

//   const fresh = await fetchFn();

//   try {
//     await redis.set(key, JSON.stringify(fresh), "EX", ttlSeconds);
//   } catch (err) {
//     console.error(`[Cache] write error for key "${key}":`, err);
//   }

//   return { data: fresh, source: "origin" };
// }