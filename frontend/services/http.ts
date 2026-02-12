export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const runtimeConfig = useRuntimeConfig()
  const response = await fetch(`${runtimeConfig.public.apiBaseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return (await response.json()) as T
}
