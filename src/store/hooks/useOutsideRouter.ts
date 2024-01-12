import { defineStore } from 'pinia'

export const useOutsideRouter = defineStore('outside-router', () => {
  const router = useRouter()

  return {
    router
  }
})
