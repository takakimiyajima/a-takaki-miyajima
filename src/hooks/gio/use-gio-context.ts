import { useContext } from 'react'
import { GioContext } from './GioContext'

export const useGioContext = () => {
  const context = useContext(GioContext)

  if (context === undefined) {
    throw new Error('useGioContext can only be used inside GioContextProvider')
  }

  return context
}
