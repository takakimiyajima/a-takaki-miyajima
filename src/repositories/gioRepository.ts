import { client, MicroCMSListResponse } from '@/libs/client'

const ENDPOINT = 'master-gio'

type MasterGio = {
  export: string
  exportColor?: string
  import: string
  importColor?: string
  value?: number
}

export type Gio = {
  e: string
  outColor?: string
  i: string
  inColor?: string
  v?: number
}

export class GioRepository {
  async fetchGio(): Promise<Gio[]> {
    const response = await client.getList<MasterGio>({
      endpoint: ENDPOINT,
      queries: { limit: 200 },
    })

    return this.getMappedGio(response)
  }

  getMappedGio(data: MicroCMSListResponse<MasterGio>): Gio[] {
    return (
      data.contents?.map((mg) => {
        return {
          e: mg.export,
          outColor: mg?.exportColor,
          i: mg.import,
          inColor: mg?.importColor,
          v: mg?.value,
        }
      }) ?? []
    )
  }
}
