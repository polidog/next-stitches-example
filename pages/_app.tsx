import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { globalStyles } from '../styles/global'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from "../stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
