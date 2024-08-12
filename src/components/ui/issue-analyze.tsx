"use client";
import { useState } from 'react';
import { IssueAnalysis } from '@/lib/types';
import useGlobalStore from '@/store/store';
import { Button } from './button';
import { LoaderCircle } from 'lucide-react';

export default function IssueAnalyze() {
    const [analysis, setAnalysis] = useState<IssueAnalysis | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const issueDescription = useGlobalStore().issueData.description;
    const setIssueData = useGlobalStore((state) => state.setIssueData)
    const handleSubmit = async (e: React.FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const response = await fetch('https://standup-call.vercel.app/api/analyze-issue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ issueDescription }),
            });
            const data = await response.json();
            setAnalysis(data);
            setIssueData('analysis', data)
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.error('Error analyzing issue:', error);
        }
    };

    return (
        <Button variant={"outline"} onClick={handleSubmit}>
            {isLoading && <LoaderCircle size={18} className="animate-spin mr-1" />}
            View Recommendation
        </Button>
    );
}