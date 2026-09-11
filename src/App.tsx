import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

// The root application component should contain shared page composition and app-level state.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex grow flex-col items-center justify-center gap-6 px-5 py-8 text-center lg:gap-7">
        <div className="relative">
          <img src={heroImg} className="relative z-0 mx-auto w-[170px]" width="170" height="179" alt="" />
          <img src={reactLogo} className="absolute inset-x-0 top-8 z-10 mx-auto h-7 [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]" alt="React logo" />
          <img src={viteLogo} className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]" alt="Vite logo" />
        </div>
        <div>
          <h1 className="my-8 text-4xl font-medium tracking-tight lg:text-6xl">Get started</h1>
          <p className="text-lg text-gray-600">
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="mb-6 rounded border-2 border-transparent bg-purple-50 px-2.5 py-1 font-mono text-base text-purple-600 transition hover:border-purple-300 focus-visible:outline-2 focus-visible:outline-purple-500 focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="border-t border-gray-200"></div>

      <section className="flex flex-col border-t border-gray-200 text-left lg:flex-row">
        <div className="flex-1 border-b border-gray-200 p-6 lg:border-b-0 lg:border-r lg:p-8">
          <svg className="mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium lg:text-2xl">Documentation</h2>
          <p className="text-gray-600">Your questions, answered</p>
          <ul className="mt-8 flex flex-wrap gap-2 p-0">
            <li>
              <a className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-950 no-underline transition hover:shadow-lg" href="https://vite.dev/" target="_blank">
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-950 no-underline transition hover:shadow-lg" href="https://react.dev/" target="_blank">
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6 lg:p-8">
          <svg className="mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium lg:text-2xl">Connect with us</h2>
          <p className="text-gray-600">Join the Vite community</p>
          <ul className="mt-8 flex flex-wrap gap-2 p-0">
            <li>
              <a className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-950 no-underline transition hover:shadow-lg" href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-950 no-underline transition hover:shadow-lg" href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-950 no-underline transition hover:shadow-lg" href="https://x.com/vite_js" target="_blank">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-950 no-underline transition hover:shadow-lg" href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="border-t border-gray-200"></div>
      <section className="h-12 border-t border-gray-200 lg:h-[88px]"></section>
    </>
  )
}

export default App
