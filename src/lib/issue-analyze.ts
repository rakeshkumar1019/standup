import useGlobalStore from '@/store/store'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { IssueAnalysis, IssueAnalysisSchema } from "@/lib/types"
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function analyzeIssue(issueDescription: string): Promise<IssueAnalysis> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `As a senior software engineer, analyze the following issue description:

  ${issueDescription}
  
  Based on your extensive experience, provide a comprehensive analysis in the form of a JSON object with the following structure:
  
  {
    "branchName": "git-branch-name-following-best-practices",
    "complexity": "Low|Medium|High",
    "summary": "Concise technical summary of the issue",
    "solutions": [
      {
        "title": "Solution approach title",
        "steps": ["Detailed step 1", "Detailed step 2", "..."]
      }
    ],
    "tasks": [
      {
        "task": "Specific implementation task",
        "title": "Task title"
      }
    ]
  }
  
  Ensure your analysis reflects senior-level insights, considering:
  - Best practices in software development
  - Potential system-wide impacts
  - Scalability and maintainability
  - Code quality and performance implications
  
  Provide a valid JSON object only. Do not include any text outside the JSON structure.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text();
  // Remove JSON code block markers if present
  text = text.replace(/^```json\s*/, '').replace(/\s*```$/, '');


  try {
    const parsedResponse = JSON.parse(text);
    return IssueAnalysisSchema.parse(parsedResponse);
  } catch (error) {
    console.error("Error parsing AI response:", error);
    throw new Error("Failed to analyze issue");
  }
}


export const analyzeCurrentIssue = async () => {
  const description = useGlobalStore.getState().issueData.description

  try {
    const analysis = await analyzeIssue(description)
    useGlobalStore.getState().setIssueData('analysis', analysis)
    return analysis
  } catch (error) {
    console.error('Error analyzing issue:', error)
    throw error
  }
}