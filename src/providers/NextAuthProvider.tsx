'use client'
import { SessionProvider } from "next-auth/react"
import React from "react"

interface NextAuthProviderProps {
    children: React.ReactNode
    session: any
}

export default function NextAuthProvider({children, session}: NextAuthProviderProps): React.ReactNode {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}