// store/useGlobalStore.ts
import { create } from 'zustand'

interface GlobalState {
  issueData: {
    description: string
    analysis: any 
    [key: string]: any
  }
  setIssueData: (key: string, value: any) => void
  resetIssueData: () => void
}

const initialIssueData = {
  description: '',
  analysis: null,
}

const useGlobalStore = create<GlobalState>((set) => ({
  issueData: initialIssueData,
  setIssueData: (key, value) => set((state) => ({
    issueData: { ...state.issueData, [key]: value }
  })),
  resetIssueData: () => set({ issueData: initialIssueData }),
}))

export default useGlobalStore