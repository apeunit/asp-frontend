import "@radix-ui/themes/styles.css"
import "../styles/global.css"

import { Theme } from "@radix-ui/themes"

import "./layout.css"

import { Toaster } from "sonner"
import type { Viewport } from "next"
import { AppProvider } from "../context/AppContext"

export const metadata = {
  title: "Pick-Up",
}

export const viewport: Viewport = {
  themeColor: "#4285f4",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="de">
      <body>
        {/* <Image
          className={styles.background}
          src="/images/bg.jpg"
          alt="ASP App Icon"
          width={1920}
          height={1080}
        /> */}
        <div className={"overlay"} />
        <Theme accentColor="blue" grayColor="gray" panelBackground="solid" radius="large">
          <Toaster position="top-center" richColors />
          <AppProvider>
            <div className={"container"}>{children}</div>
          </AppProvider>
        </Theme>
      </body>
    </html>
  )
}

export default RootLayout
