import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import view from '../public/view.jpg'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-cyrillic',
})

export default function Home() {
  return (
    <main className={montserrat.className}>
      <div className="w-full min-h-screen bg-grey">
        <Image
          src={view}
          alt="Bagrunnsbilde"
          fill
          priority
          quality={60}
          className="object-cover"
          sizes="1500px"
          placeholder="blur"
        />
        <div className="text-center items-center flex flex-col gap-2 w-full pt-[25vh] relative p-4">
          <h1 className="text-primary text-h2 lg:text-h1">Råtebu</h1>
          <h2 className="text-primary text-h4 lg:text-h3">
            Velkommen til paradis i Norge
          </h2>
          <p className="text-primary text-body1">
            Vassnestangen 37, 1746 Skjeberg
          </p>
          <div className="mt-12 relative">
            <Link
              className="w-fit border border-transparent color-white rounded-md bg-grey p-3 text-sm transition-all duration-300 hover:p-4 hover:shadow-lg"
              target="_blank"
              href="https://www.google.com/maps/place/R%C3%A5tebu/@59.1476155,11.1215208,15z/data=!4m6!3m5!1s0x46441b5b356895a5:0x5b8e8f0c42dc88e2!8m2!3d59.1476!4d11.120528!16s%2Fg%2F11jmb09gxp"
            >
              Hvordan kommer jeg dit?
            </Link>
          </div>
        </div>
      </div>
      <footer className="w-screen py-12 bg-footer text-center">
        <p className="text-white text-sm">
          © | Spiderboy Web Development | {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}
