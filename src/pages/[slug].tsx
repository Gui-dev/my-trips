import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/dist/client/router'

import { PagesTemplate } from 'templates/Pages'

import { client } from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'

type PageProps = {
  title: string
  content: string
}

const Page = ({ title, content }: PageProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <PagesTemplate
      title={ title }
      content={content}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, { slug: `${params?.slug}` })

  if (!page) return { notFound: true }

  return {
    props: {
      title: page.title,
      content: page.content.html
    }
  }
}

export default Page
