import { create } from 'zustand'

interface GlobalStoreType {
  currentExpanded: string | undefined
  setCurrentExpanded: (newV: string | undefined) => void
}

const store = create<GlobalStoreType>((set) => ({
  currentExpanded: undefined,
  setCurrentExpanded: (newV) => set((state) => ({ currentExpanded: newV })),
}))

export default store
