import '@radix-ui/themes/styles.css'
import '@/app/global.css'
import { Theme } from '@radix-ui/themes'
export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased light">
                <Theme
                    accentColor="blue"
                    grayColor="sand"
                    radius="large"
                    scaling="100%">
                    {children}
                </Theme>
            </body>
        </html>
    )
}

export default RootLayout
