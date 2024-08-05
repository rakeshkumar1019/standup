
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Organization() {
    return <div className="flex justify-center py-10">
        <div className="pt-4 w-4/5  lg:w-2/5  rounded-lg border bg-card text-card-foreground shadow-sm ">
            <div className="pb-2 px-4 border-b shadow-sm">
                <h1 className="text-xl">Create a new organization</h1>
            </div>
            <div className="py-4 px-4">
                <h2 className="text-sm">This is your organization within Standup.</h2>
                <h3 className="text-sm text-gray-500">For example, you can use the name of your company or department.</h3>
            </div>
            <div className="px-4">
                <form>
                    <Label htmlFor="name">Name</Label>
                    <Input className="w-full my-1" placeholder="Organization name" type="text" />
                    <p className="text-sm text-gray-500">What&apos;s the name of your company or team?</p>
                </form>
            </div>

            <div className="flex items-center p-3 justify-between mt-4 border-t shadow-sm">
                <Link href="/"><Button variant="outline">Cancel</Button></Link>
                <div className="flex gap-2 items-center">
                <p className="text-xs text-gray-500">You can rename your organization later</p>
                <Button>Submit</Button>
                </div>
            </div>
        </div>
    </div>
}-4 