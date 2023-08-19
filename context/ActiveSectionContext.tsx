"use client"

import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

interface ActiveSectionContextProviderProps {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClick: number;
    setLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if(context === null)
    throw new Error(
        "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );

    return context;
}

const ActiveSectionContextProvider:React.FC<ActiveSectionContextProviderProps> = ({
    children,
}) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [lastClick, setLastClick] = useState(0);

    return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, lastClick, setLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
    )
}

export default ActiveSectionContextProvider;