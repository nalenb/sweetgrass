import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/Date'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <div>
        <h1>Sweetgrass Wyoming HOA</h1>

        <h2>Articles</h2>

        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
