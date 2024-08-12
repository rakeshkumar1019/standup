import { z } from 'zod';

export const SolutionSchema = z.object({
  title: z.string(),
  steps: z.array(z.string()),
});

export const TaskSchema = z.object({
  task: z.string(),
  title: z.string(),
});

export const IssueAnalysisSchema = z.object({
  branchName: z.string(),
  complexity: z.enum(['Low', 'Medium', 'High']),
  summary: z.string(),
  solutions: z.array(SolutionSchema),
  tasks: z.array(TaskSchema),
});

export type IssueAnalysis = z.infer<typeof IssueAnalysisSchema>;