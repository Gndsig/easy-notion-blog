import type { Metadata } from 'next'
import Link from 'next/link'
import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION
} from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

export async function generateMetadata(): Promise<Metadata> {
  const title = NEXT_PUBLIC_SITE_TITLE
  const description = NEXT_PUBLIC_SITE_DESCRIPTION
  const url = NEXT_PUBLIC_URL ? new URL(NEXT_PUBLIC_URL) : undefined
  const images = NEXT_PUBLIC_URL ? [{ url: new URL('/default.png', NEXT_PUBLIC_URL) }] : []

  const metadata: Metadata = {
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: title,
      type: 'website',
      images: images,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: images,
    },
    alternates: {
      canonical: url,
    },
  }

  return metadata
}

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>Welcome!</h2>
        <p>
          This blog is goint to relocate to {' '}
          <Link href="https://18f8e56c.enlight-by-physical-law.pages.dev/">
            this page
          </Link>
        </p>
        <p>when Notion formula blocks were implemented in {' '}
          <Link href="https://github.com/otoyo/astro-notion-blog">
            astro-notion-blog
          </Link>
        </p>
        <br/>
        <br/>
        <h2>Menu</h2>

        <Link href="https://enlight-by-physical-l1xyqpun9-xrtafds-gmailcom.vercel.app/blog/Intro-to-fluid-dynamics">怖くない流体力学</Link>
      </div>
    </div>
  </>
)

export default RootPage
