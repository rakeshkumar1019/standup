import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { MessageCircle, Pencil, ChevronDown, Share2, Calendar, CalendarPlus, CalendarCheck2, CalendarX2 } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

import MarkdownEditor from "@/components/ui/markdown-editor"
import IssueAnalyze from "@/components/ui/issue-analyze"
import ViewRecommendation from "@/components/ui/view-recommendation"


export default function BrowseIssue({ params }: { params: { id: string } }) {
    const { id } = params
    return <main>
        <section className="flex h-screen-minus-2.5rem">
            <div className="sticky px-3 pt-5 top-0 w-[20%] lg:w-[13%] overflow-hidden border-r border-neutral-200 dark:border-neutral-700">
                <div>
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Nuxeo Admin Console
                    </h2>
                </div>
                <div className="px-4 space-y-1">


                </div>
            </div>

            <div className="w-[80%] lg:w-[87%] overflow-y-auto px-3 pt-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/hyland/nuxeo-admin-console">Nuxeo Admin Console</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{id}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-3xl">Can reschedule a booking out of availability (seated event)</h1>
                <div className="flex justify-between gap-2 mt-3">
                    <div className="flex gap-2">
                        <Button className="h-7" variant="secondary" >
                            <Pencil size={13} className="mr-1" />
                            Edit
                        </Button>
                        <Button className="h-7" variant="secondary" >
                            <MessageCircle size={13} className="mr-1" />
                            Comment

                        </Button>
                        <Button className="h-7" variant="secondary" >Assign</Button>


                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="h-7" variant="secondary" >More <ChevronDown className="ml-1" size={13} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Log Work</DropdownMenuItem>
                                <DropdownMenuItem>Agile Board</DropdownMenuItem>
                                <DropdownMenuItem>Tags</DropdownMenuItem>
                                <DropdownMenuItem>Sprint</DropdownMenuItem>
                                <DropdownMenuItem>Move</DropdownMenuItem>
                                <DropdownMenuItem>Link</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        <Button className="h-7" variant="secondary" >
                            <Share2 size={13} className="mr-1" />
                            Share

                        </Button>
                    </div>

                </div>
                <div className="flex flex-col  lg:flex-row gap-3">
                    <div className="w-full lg:w-3/4">
                        <h1 className="mt-4 ">Details</h1>
                        <div className="flex gap-2">
                            <div className="w-1/2 ">
                                <div className="flex gap-2">
                                    <h2 className="text-neutral-500 w-[20%]">Type:</h2>
                                    <h2 className="w-[80%]">Bug</h2>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-neutral-500 w-[20%]">Priority:</h2>
                                    <h2 className="w-[80%]">High</h2>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-neutral-500 w-[20%]">Sprint:</h2>
                                    <h2 className="w-[80%]">UI - 2024-8</h2>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-neutral-500 w-[20%]">Tags:</h2>
                                    <h2 className="w-[80%]">nxui-triaged</h2>
                                </div>
                            </div>
                            <div className="w-1/2">

                                <div className="flex gap-2">
                                    <h2 className="text-neutral-500 w-[20%]">Status:</h2>
                                    <h2 className="w-[80%]">Resolved</h2>
                                </div>
                                <div className="flex gap-2">
                                    <h2 className="text-neutral-500 w-[20%]">Story Points:</h2>
                                    <h2 className="w-[80%]">2</h2>
                                </div>

                            </div>
                        </div>
                        <h1 className="mt-4 ">Description</h1>
                        <MarkdownEditor />
                        <div className=" flex mt-4 justify-between items-center">
                            <h1>AI Recommendation</h1>
                            <IssueAnalyze />
                        </div>

                        <p className="mt-1 text-sm text-neutral-500">
                            Warning: This content is generated by AI, so not everything here is accurate. Please verify the information.
                        </p>

                        <ViewRecommendation/>


                    </div>
                    <div className="w-full lg:w-1/4 p-2 ">
                        <h1 className="">People</h1>
                        <div className="flex gap-2 p-2">
                            <h1 className="text-neutral-500">Assignee:</h1>
                            <h1>Rakesh Kumar Singh</h1>
                        </div>
                        <div className="flex gap-2 p-2">
                            <h1 className="text-neutral-500">Reporter:</h1>
                            <h1>Madhur Kulshrestha</h1>
                        </div>
                        <div>
                            <h1 className="">Dates</h1>
                            <div className="flex gap-2 p-1 items-center ">
                                <CalendarPlus color="green" size={18} />
                                <span className="text-neutral-500"> Created:</span>  25 Nov, 2024
                            </div>
                            <div className="flex gap-2 p-1 items-center ">
                                <Calendar color="orange" size={18} />
                                <span className="text-neutral-500">Updated:</span>  25 Nov, 2024
                            </div>
                            <div className="flex gap-2 p-1 items-center ">
                                <CalendarCheck2 color="blue" size={18} />
                                <span className="text-neutral-500">Resolved:</span>  25 Nov, 2024
                            </div>
                            <div className="flex gap-2 p-1 items-center ">
                                <CalendarX2 color="red" size={18} />
                                <span className="text-neutral-500">Closed:</span>  25 Nov, 2024
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="">Time Tracking</h1>
                            <div className="flex gap-2 items-center ">
                                <h2 className="text-neutral-500 w-[20%]">Estimated:</h2>
                                <div className="w-[80%]">
                                    <Progress value={100} />

                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h2 className="text-neutral-500 w-[20%]">Remaining:</h2>
                                <div className="w-[80%]">
                                    <Progress value={67} />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <h2 className="text-neutral-500 w-[20%]">Logged:</h2>
                                <div className="w-[80%]">
                                    <Progress value={33} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
}