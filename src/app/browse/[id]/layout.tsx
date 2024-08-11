
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { DashboardIcon } from "@radix-ui/react-icons"
import Theme from "@/components/ui/theme";

import User from "@/components/ui/user";



export default async function BrowseIssueLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className="">

          <nav className="flex h-9 items-center justify-between space-x-1 border border-x-0 border-t-0 border-b-neutral-200 dark:border-b-neutral-700 p-1 shadow-sm rounded-none px-2 lg:px-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 cursor-pointer">
                <Link href="/" className="flex items-center gap-3">
                  <DashboardIcon className="h-6 w-6" />
                  <h1 className="text-3xl font-serif font-extrabold">Standup</h1>
                </Link>
              </div>
              {/* <Separator className="h-8 bg-neutral-700" orientation="vertical" /> */}
              {/* <h1 className="text-3xl font-serif font-extrabold cursor-pointer">Nuxeo</h1> */}
            </div>
            <div className="flex items-center gap-3">
              <Theme />
              <User />
            </div>
          </nav>
          
          {children}
        </body>
      </html>
  );
}
