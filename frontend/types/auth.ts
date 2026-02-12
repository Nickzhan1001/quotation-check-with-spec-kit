export type LoginPayload = {
  account: string
  password: string
}

export type LoginResponse = {
  token: string
  userName: string
  siteScopes: string[]
}
