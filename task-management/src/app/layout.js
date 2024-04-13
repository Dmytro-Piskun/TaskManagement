import { Jost } from "next/font/google";
import Image from 'next/image'
import "./globals.css";
import Navlink from "@/components/layout/Navlink";
import homeIcon from '@/assets/nav-icons/home.svg'
import tasksIcon from '@/assets/nav-icons/tasks.svg'
import calendarIcon from '@/assets/nav-icons/calendar.svg'

import logo from '@/assets/logo.svg'
import ThemeToggle from "@/components/layout/ThemeToggle";
import Search from "@/components/layout/Search";
import StoreProvider from "@/lib/StoreProvider";

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
    <StoreProvider>
    <html lang="en">
      <body className={jost.className + " text-neutral-900"}>
        <header className=" select-none h-32 p-10 grid grid-cols-3 grid-flow-col">
          <div className="flex items-center gap-20">
            <Image src={logo} alt="logo" className="drag-none select-none shadow-sm rounded-full" width={50} />
            <h1 className=" text-2xl  select-none">Chronoplan</h1>
          </div>
          <div className=" flex justify-center">
            <ThemeToggle />
          </div>
          <div className="flex justify-end">
            <Search/>
          </div>
        </header>
        <section className=" flex h-[calc(100vh-8rem)]">
          <aside className="w-32 h-full flex justify-center">
            <nav className="flex flex-col gap-9 justify-center items-center h-fit m-48">
              <Navlink icon={homeIcon} />
              <Navlink path="/tasks" icon={tasksIcon}/>
              <Navlink path="/calendar" icon={calendarIcon}/>
            </nav>
          </aside>
          <main className="h-full w-full p-10 pt-14 overflow-y-auto">
              {children}
          </main>
        </section>
      </body>
    </html>
    </StoreProvider>
  );
}
