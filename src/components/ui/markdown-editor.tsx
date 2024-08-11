"use client";
import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered, ChevronDown, Save, EditIcon } from 'lucide-react';
import "@/app/globals.css";
import { Button } from './button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type MarkdownStyle = 'p' | 'h1' | 'h2' | 'h3' | 'strong' | 'em' | 'ul' | 'ol';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState(`There is a bug in seated events that when you reschedule using the API you can reschedule to a slot that is out of your availability.

Issue Link:  https://github.com/calcom/cal.com/issues/16150

How to reproduce:
- create an event with seats
- book first seat of one slot
API call to reschedule booking: POST \`https://api.cal.com/v1/bookings?apiKey=...\`
\`\`\`
{
  "eventTypeId": <event type id here>,
  "start": "2024-08-10T16:30:00+02:00", --> pick unavailable slot time
  "rescheduleUid": <bookingUID here>,
  "responses": {
    "name": "test",
    "email": "test@example.com", 
    "guests": [],
    "location": {
      "value": "inPerson",
      "optionValue": ""
     }
   },
  "metadata": {},
  "timeZone": "Europe/London",
  "language": "en"
}
\`\`\`

- This will reschedule the booking to the unavailable slot, it should throw a \`no_available_users_found_error\``);
    const [isEditing, setIsEditing] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const applyStyle = (style: MarkdownStyle) => {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        const beforeText = textarea.value.substring(0, start);
        const afterText = textarea.value.substring(end);

        let newText = '';
        switch (style) {
            case 'h1':
                newText = `# ${selectedText} `;
                break;
            case 'h2':
                newText = `## ${selectedText} `;
                break;
            case 'h3':
                newText = `### ${selectedText} `;
                break;
            case 'strong':
                newText = `**${selectedText}**`;
                break;
            case 'em':
                newText = `*${selectedText}*`;
                break;
            case 'ul':
                newText = `- ${selectedText}`;
                break;
            case 'ol':
                newText = `1. ${selectedText}`;
                break;
            default:
                newText = selectedText;
        }

        setMarkdown(beforeText + newText + afterText);
        textarea.focus();
        textarea.selectionStart = start + newText.length;
        textarea.selectionEnd = start + newText.length;
    };

    const handleDropdownChange = (style: MarkdownStyle) => {
        applyStyle(style);
    };

    return (
        <div className="w-full mt-1">
            {isEditing ? <>
                <div className="flex items-cente justify-between mb-2 gap-2">
                    <div className='flex items-center gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="h-7" >Style <ChevronDown className="ml-1" size={13} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => handleDropdownChange('h1')}>H1</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDropdownChange('h2')}>H2</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDropdownChange('h3')}>H3</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDropdownChange('p')}>P</DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            className="h-7"
                            onClick={() => { applyStyle('strong'); }}
                        >
                            <Bold size={18} />
                        </Button>
                        <Button
                            className="h-7"
                            onClick={() => { applyStyle('em'); }}
                        >
                            <Italic size={18} />
                        </Button>
                        <Button
                            className="h-7"
                            onClick={() => { applyStyle('ul'); }}
                        >
                            <List size={18} />
                        </Button>
                        <Button
                            className="h-7"
                            onClick={() => { applyStyle('ol'); }}
                        >
                            <ListOrdered size={18} />
                        </Button>
                    </div>
                    <div>
                        <Button
                            className="h-7"
                            onClick={() => { setIsEditing(false); }}
                        >
                            <Save size={18} />
                        </Button>
                    </div>
                </div>

                <textarea
                    ref={textareaRef}
                    className="w-full p-2 border bg-transparent dark:border-neutral-900 border-neutral-300 shadow-sm"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    rows={15}
                />
            </>
                :

                <div
                    onClick={() => setIsEditing(true)}
                    className="relative w-full p-2 border h-min markdown-body dark:border-neutral-900 border-neutral-300 shadow-sm group"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>

                    <div
                        className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                        <EditIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                </div>

            }
        </div>
    );
};

export default MarkdownEditor;
