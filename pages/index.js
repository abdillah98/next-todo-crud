import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  console.log('session', session)

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="py-[4px] px-[10px] rounded-md bg-slate-200" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button className="py-[4px] px-[10px] rounded-md bg-slate-200" onClick={() => signIn()}>Sign in</button>
    </>
  )

  return (
    <h1 className={inter.className}>
        Home Pages
    </h1>
  )

}