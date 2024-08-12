"use client"

import useGlobalStore from "@/store/store"
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { TabsList, Tabs, TabsContent, TabsTrigger } from "./tabs";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export default function ViewRecommendation() {
    const analysis = useGlobalStore(state => state.issueData.analysis);

    return (
        <div className="mt-2">
            {analysis ? <Card className="border dark:border-neutral-900 border-neutral-300 shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">Branch Name: {analysis?.branchName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        <strong>Complexity:</strong> {analysis?.complexity}
                    </p>
                    <p>
                        <strong>Summary:</strong> {analysis?.summary}
                    </p>
                    <Tabs defaultValue="solutions" className=" mt-4">
                        <TabsList className="flex space-x-4 w-min">
                            <TabsTrigger value="solutions" className="text-sm font-medium">
                                Solutions
                            </TabsTrigger>
                            <TabsTrigger value="tasks" className="text-sm font-medium">
                                Tasks
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="solutions" className="w-full">
                            {analysis?.solutions.map((solution: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; steps: any[]; }, index: Key | null | undefined) => (
                                <div key={index}>
                                    <h3 className="text-md font-semibold">{solution.title}</h3>
                                    <ul className="list-disc ml-5 mt-2 text-sm">
                                        {solution.steps.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </TabsContent>
                        <TabsContent value="tasks">
                            <ul className="list-disc ml-5 text-sm">
                                {analysis?.tasks.map((task: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; task: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
                                    <li key={index}>
                                        <strong>{task.title}:</strong> {task.task}
                                    </li>
                                ))}
                            </ul>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card> : <h1>No Analysis</h1>}
        </div>
    )
}