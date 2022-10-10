import { useEffect, useRef } from 'react'
import * as GIO from 'giojs'
import { AppBar } from '@/components/layouts'
import { useGioContext } from '@/hooks/gio'

export default function Home(): JSX.Element {
  const ref = useRef(null)
  const { gio } = useGioContext()

  useEffect(() => {
    const controller = new GIO.Controller(ref?.current, {
      control: {
        initCountry: 'CA',
      },
      color: {
        in: '#20abe2',
        out: 'white',
        background: 'black',
      },
    })

    controller
      .addData(gio)
      .lightenMentioned(true)
      .adjustMentionedBrightness(0.8)
      .adjustOceanBrightness(0.8)
      .disableUnmentioned(true)
      .setAutoRotation(true, 1)

    controller.init()
  }, [gio])

  return (
    <div>
      <AppBar />

      <main>
        <div style={{ width: 1440, height: 800, position: 'fixed' }} ref={ref} />
      </main>

      <footer>
        <a href='#' rel='noopener noreferrer'>
          Powered by{'Takaki Miyajima'}
        </a>
      </footer>
    </div>
  )
}
