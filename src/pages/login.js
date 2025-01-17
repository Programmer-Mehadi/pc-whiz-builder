import LoginSection from '@/components/UI/LoginSection'
import RootLayout from '@/components/layout/RootLayout'
import Head from 'next/head'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login-PcWhizBuilder</title>
        <meta
          name="description"
          content="PcWhizBuilder is an advanced and user-friendly online platform that empowers tech enthusiasts and PC builders to effortlessly create their dream custom PCs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginSection></LoginSection>
    </>
  )
}

export default Login

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

