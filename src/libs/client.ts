import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: 'a-takaki-miyajima',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
})

export { client }
export * from 'microcms-js-sdk'
