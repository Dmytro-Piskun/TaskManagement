import { Jost } from "next/font/google";
import Image from 'next/image'
import "./globals.css";
import Navlink from "@/components/Navlink";
import homeIcon from '@/assets/nav-icons/home.svg'
import logo from '@/assets/logo.svg'
import ThemeToggle from "@/components/ThemeToggle";
import Search from "@/components/Search";

export const metadata = {
  title: "Task Management",
  description: "Make yourself productive by tracking your tasks and performance",
};

const jost = Jost({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className + " bg-gradient-to-br from-slate-300 to-fuchsia-200"}>
        <header className="h-32 p-10 grid grid-cols-3 grid-flow-col">
          <div className="flex items-center gap-12">
            <Image src={logo} alt="logo" width={50} />
            <h1 className=" text-xl">Task Manager</h1>
          </div>
          <div className=" flex justify-center">
            <ThemeToggle />
          </div>
          <div className="flex justify-end">
            <Search/>
          </div>
        </header>
        <section className=" flex h-[calc(100vh-8rem)]">
          <aside className="w-32 h-full flex justify-center items-center">
            <nav className="flex flex-col gap-9 justify-center items-center h-fit ">
              <Navlink icon={homeIcon} />
              <Navlink path="/tasks" />
              <Navlink path="/calendar" />
            </nav>
          </aside>
          <main className=" bg-black p-10  h-full w-full">{children}</main>
        </section>
      </body>
    </html>
  );
}
