import '@radix-ui/themes/styles.css'
import '@/app/global.css'
import { Theme, Flex, Text, Button } from '@radix-ui/themes'
export const metadata = {
    title: 'Laravel',
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased light">
                <Theme>{children}</Theme>
                <Flex direction="column" gap="2">
                    <Text>Hello from Radix Themes :)</Text>
                    <Button>Let's go</Button>
                </Flex>
            </body>
        </html>
    )
}

export default RootLayout
