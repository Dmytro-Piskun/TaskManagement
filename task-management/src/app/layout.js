import { Roboto } from "next/font/google";
import "./globals.css";
import Navlink from "@/components/Navlink";
import homeIcon from '@/assets/nav-icons/home.svg'

export const metadata = {
  title: "Task Management",
  description: "Make yourself productive by tracking your tasks and performance",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + " bg-gradient-to-br from-slate-300 to-fuchsia-200"}>
        <header className="    h-32">
          <div>
            {/*svg*/}
            <h1>Name</h1>
          </div>
          {/*themetoggle*/}
          {/*search*/}
        </header>
        <section className=" flex h-[calc(100vh-8rem)]">
          <aside className="   w-32 h-full flex justify-center items-center pb-56">
            <nav className="flex flex-col gap-9 justify-center items-center h-fit">
                <Navlink icon={homeIcon}/>              
                <Navlink path="/tasks" />
                <Navlink path="/calendar" />
            </nav>
          </aside>
          <main className=" bg-gray-950 p-10  h-full w-full">{children}</main>
        </section>
      </body>
    </html>
  );
}
