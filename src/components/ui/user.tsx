"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";

export default function User() {
    const [isLoding, setIsLoding] = useState(true)
    const { isLoaded } = useAuth();
    useEffect(() => {
        if (isLoaded) {
            setIsLoding(false)
        }
    }, [isLoaded])
    return (
        <>
            {!isLoding ? <UserButton /> : <Avatar className="h-7 w-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>US</AvatarFallback>
            </Avatar>}
        </>
    );
}