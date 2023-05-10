



export const metadata = {
  title: 'Sign In | PopX',
  description: 'PopX',
}

export default function signinLayout({ children }) {
  return (
    <div className={`flex flex-col h-screen w-full bg-[#F7F8F9] `}>
      {children}
    </div>
  )
}
