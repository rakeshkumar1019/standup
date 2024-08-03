import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
        <section className="flex h-screen-minus-2.5rem">
            <div className="sticky top-0 w-[13%] overflow-hidden border-r border-neutral-200 dark:border-neutral-700">
                <div className="px-3 pt-5">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight"> UI-2024-01</h2>
                </div>
                <div className="px-4 space-y-1">
                    {/* <Button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
            WEBUI
          </Button>
          <Button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
            ELEMENTS
          </Button>

          <Button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
            NAC
          </Button> */}

                </div>
            </div>

            <div className="w-[87%] overflow-y-auto ">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight"> Project</h2>
            </div>
        </section>
    </main>
  );
}
