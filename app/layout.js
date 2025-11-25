import './globals.css'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-noto' })

export const metadata = {
    title: 'Product Manager Fran | Portfolio',
    description: 'B2C 커머스 및 O2O 플랫폼 전문 8년차 프로덕트 매니저',
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
            <body>{children}</body>
        </html>
    )
}
