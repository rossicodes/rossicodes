import Image from 'next/image';
import JsIcon from '../components/jsicon.js'
import ReactIcon from '../components/reacticon.js'
import NextIcon from '../components/nexticon'
import TailwindIcon from '../components/tailwind.js' 
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Link from 'next/link'


export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme()
  const iconColor = '#f9f9f9'
  const borderColor = 'overflow-hidden rounded-full border-gradient-br-fuchsia gradient-border-10'

  const renderThemeChanger = () => {
    const currentTheme = theme == 'system' ? 'systemTheme' : theme

    if (currentTheme == 'dark') {
      return (
        <SunIcon className="w-7 h-7" role='button' onClick={()=> setTheme('light')} />)
    } else {
      return (
        <MoonIcon className="w-7 h-7" role='button' onClick={()=> setTheme('dark')} />)
      }
  }

  return (
    <div className="h-screen flex flex-col items-center gap-12 pb-44 pt-6 md:flex-row-reverse md:gap-6 md:pt-20">
      <div className="group relative flex items-center justify-center md:flex-1">
        <div className='overflow-hidden basis-[100%] min-w-full rounded-full border-gradient-br-fuchsia gradient-border-10'>
          <Image
            src="/avatar.png"
            alt="Rossicodes"
            width={400}
            height={400}
            layout="responsive"
            className="rounded-full"
          />
          </div>
      </div>

      <div className="mx-10 md:mx-2 flex flex-[2] flex-col items-center gap-4 md:items-start">
        <h1 className="text-4xl font-extrabold">
          Hello, I&#39;m Ross
        </h1>
        <p className="text-center font-bold leading-7 md:text-left">A self taught developer from York, England. I love building things that help people reach their goals.</p>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-center font-bold leading-7 md:text-left">I use <Link href="https://www.javascript.com/"><a><span className="underline hover:decoration-blue decoration-fuchsia-500 decoration-2 underline-offset-2">Javascript</span></a></Link>, <Link href="https://nextjs.org/"><a><span className="underline hover:decoration-blue decoration-fuchsia-500 decoration-2 underline-offset-2">Next.js</span></a></Link> and <Link href="https://tailwindcss.com/"><a><span className="underline hover:decoration-blue decoration-fuchsia-500 decoration-2 underline-offset-2">Tailwind</span></a></Link> to bring my ideas to life</p>
          <div className="flex gap-4">
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
            <Link href="https://www.javascript.com/">
            <a><JsIcon currentColor={iconColor}/></a>
            </Link>
            </div>
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
            <Link href="https://nextjs.org/">
                <a><NextIcon currentColor={iconColor} /></a>
            </Link>
            </div>
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
            <Link href="https://tailwindcss.com/">
                <a><TailwindIcon currentColor={iconColor}/></a>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}