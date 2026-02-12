import { defineStore } from 'pinia'

type AuthState = {
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
  }),
  actions: {
    login(): void {
      this.isAuthenticated = true
    },
    logout(): void {
      this.isAuthenticated = false
    },
  },
})
