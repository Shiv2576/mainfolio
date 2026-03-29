// src/lib/github.ts
// All GitHub data fetching in one place. Import getGithubStats() in your components.

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN
const BASE = "https://api.github.com"

// ── Types ────────────────────────────────────────────────────────────────────

export interface GithubStats {
  totalStars: number
  followers: number
  publicRepos: number
}

export type GithubStatsResult =
  | { ok: true; data: GithubStats }
  | { ok: false; error: string }

interface GithubRepo {
  stargazers_count: number
  fork: boolean
}

interface GithubUser {
  followers: number
  public_repos: number
}

// ── Internal helpers ─────────────────────────────────────────────────────────

function authHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  }
  if (GITHUB_TOKEN) headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`
  return headers
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function ghFetch(
  path: string,
  retries = 3,
  baseDelay = 300
): Promise<Response> {
  let lastError: unknown

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(`${BASE}${path}`, { headers: authHeaders() })

      if (res.status === 429 || res.status >= 500) {
        const retryAfter = res.headers.get("Retry-After")
        const delay = retryAfter
          ? parseInt(retryAfter, 10) * 1000
          : baseDelay * 2 ** attempt
        await sleep(delay)
        lastError = new Error(`HTTP ${res.status}`)
        continue
      }

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res
    } catch (err) {
      lastError = err
      if (attempt < retries - 1) await sleep(baseDelay * 2 ** attempt)
    }
  }

  throw lastError
}

async function ghJson<T>(path: string): Promise<T> {
  const res = await ghFetch(path)
  const json = await res.json()
  // GitHub returns 200 + { message } on rate-limit / bad token
  if (json?.message) throw new Error(`GitHub API: ${json.message}`)
  return json as T
}

async function fetchAllRepos(username: string): Promise<GithubRepo[]> {
  const all: GithubRepo[] = []
  let page = 1

  while (true) {
    const batch = await ghJson<GithubRepo[]>(
      `/users/${username}/repos?per_page=100&page=${page}`
    )
    if (!Array.isArray(batch) || batch.length === 0) break
    all.push(...batch)
    if (batch.length < 100) break
    page++
  }

  return all
}

// ── Public API ───────────────────────────────────────────────────────────────

export async function getGithubStats(
  username: string
): Promise<GithubStatsResult> {
  try {
    const [user, repos] = await Promise.all([
      ghJson<GithubUser>(`/users/${username}`),
      fetchAllRepos(username),
    ])

    // Filter out forks — GitHub's profile page excludes them from the star count
    const ownRepos = repos.filter((r) => !r.fork)

    return {
      ok: true,
      data: {
        followers: user.followers ?? 0,
        // public_repos includes forks; subtract to match GitHub profile display
        publicRepos: ownRepos.length,
        totalStars: ownRepos.reduce(
          (acc, r) => acc + (r.stargazers_count ?? 0),
          0
        ),
      },
    }
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown error",
    }
  }
}
