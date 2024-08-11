import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen-minus-2.5rem p-5">
        <h1 className="text-3xl font-extrabold">Dashbaord</h1>
        <div className="flex gap-2 mt-5">
          <Link href={"/dashboard/new/project"}><Button>New Project </Button></Link>
          <Link href={"/dashboard/new/organization"}><Button variant={"outline"}>New organization </Button></Link>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between gap-3">
          <Card className="mt-5 w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl">Organizations</CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-80">
              {/* <p>No organizations exist (yet). Be the first to create a organization.</p> */}
              <div className="bg-accent text-accent-foreground  hover:opacity-80 hover:bg-accent hover:text-accent-foreground flex gap-1 mb-2 justify-between items-center border shadow-sm py-2 px-4 rounded-lg">
                <h1>Hyland</h1>
                <div className="flex gap-3 items-center">
                  <h1 className="text-sm text-gray-500">25 Nov, 2024</h1>
                  <Link href={"/dashboard/new/project"}><Button className="hover:outline" variant={"outline"} size={"sm"}>New Project </Button></Link>
                </div>
              </div>

              <div className="hover:bg-accent hover:text-accent-foreground  flex gap-1 mb-2 justify-between items-center border shadow-sm py-2 px-4 rounded-lg">
                <h1>Nuxeo</h1>
                <div className="flex gap-3 items-center">
                  <h1 className="text-sm text-gray-500">25 Nov, 2024</h1>
                  <Link href={"/dashboard/new/project"}><Button  className="hover:outline" variant={"outline"} size={"sm"}>New Project </Button></Link>
                </div>
              </div>

              <div className="hover:bg-accent hover:text-accent-foreground  flex gap-1 mb-2 justify-between items-center border shadow-sm py-2 px-4 rounded-lg">
                <h1>Global Logic</h1>
                <div className="flex gap-3 items-center">
                  <h1 className="text-sm text-gray-500">25 Nov, 2024</h1>
                  <Link href={"/dashboard/new/project"}><Button className="hover:outline"  variant={"outline"} size={"sm"}>New Project </Button></Link>
                </div>
              </div>

              <div className="hover:bg-accent hover:text-accent-foreground  flex gap-1 mb-2 justify-between items-center border shadow-sm py-2 px-4 rounded-lg">
                <h1>Google</h1>
                <div className="flex gap-3 items-center">
                  <h1 className="text-sm text-gray-500">25 Nov, 2024</h1>
                  <Link href={"/dashboard/new/project"}><Button className="hover:outline" variant={"outline"} size={"sm"}>New Project </Button></Link>
                </div>
              </div>

            </CardContent>
          </Card>
          <Card className="mt-5 w-full lg:w-1/2">
            <CardHeader>
              <CardTitle className="text-2xl">Projects</CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-80">
              {/* <p>No projects exist (yet). Be the first to create a project.</p> */}
              <div className="hover:bg-accent hover:text-accent-foreground flex gap-1 mb-2 justify-between items-center border shadow-sm py-2 px-4 rounded-lg">
                <h1>Alfresco</h1>
                <h1 className="text-sm text-gray-500">25 Nov, 2024</h1>
              </div>

              <div className="hover:bg-accent hover:text-accent-foreground  flex gap-1 mb-2 justify-between items-center border shadow-sm py-2 px-4 rounded-lg">
                <h1>HXP</h1>
                <h1 className="text-sm text-gray-500">26 Nov, 2024</h1>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle className="text-2xl">Assigned to Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You currently have no issues assigned to you. Enjoy your day!</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
