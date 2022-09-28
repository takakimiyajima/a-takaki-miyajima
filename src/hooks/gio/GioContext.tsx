import { createContext, useState, ReactNode, FC } from 'react'
import { useQuery } from 'react-query'
import { GioRepository, Gio } from '@/repositories/gioRepository'

export type Context = {
  gio: Gio[]
  isLoading: boolean
}

type GioContextProviderProps = {
  children: ReactNode
}

export const GioContext = createContext<Context>(undefined)

export const GioContextProvider: FC<GioContextProviderProps> = ({ children }) => {
  const gioRepository = new GioRepository()

  const [gio, setGio] = useState<Gio[]>([])

  const { data, isLoading, error } = useQuery<Gio[]>(
    'GIO',
    async () => await gioRepository.fetchGio(),
    {
      retry: 0,
      onSuccess: (data) => setGio(data),
      onError: () => setGio(undefined),
    },
  )

  const value = {
    gio: gio?.length ? gio : data,
    isLoading,
    error,
  }

  if (isLoading) {
    return <div>Loading......</div>
  }

  return <GioContext.Provider value={value}>{children}</GioContext.Provider>
}
