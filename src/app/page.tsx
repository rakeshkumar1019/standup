import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      <section className="h-screen-minus-2.5rem p-5">
        <h1 className="text-3xl font-extrabold">Dashbaord</h1>
        <div className="flex gap-2 mt-5">
          <Button>New Project </Button>
          <Button variant={"outline"}>New organization </Button>
        </div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle className="text-2xl">Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No organizations exist (yet). Be the first to create a organization.</p>
          </CardContent>
        </Card>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle className="text-2xl">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No projects exist (yet). Be the first to create a project.</p>
          </CardContent>
        </Card>
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
