"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/Tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "HTML",
            value: "html",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white from-purple-700 to-violet-900 border border-white/[0.1]" style={{background: "rgb(4,7,29", backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}>
                    <p>HTML</p>
                    <img src="/htmlCode.png" alt="htmlCode" className="rounded-lg border border-white/[0.1] mt-10"/>
                </div>
            ),
        },
        {
            title: "CSS",
            value: "css",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white from-purple-700 to-violet-900 border border-white/[0.1]" style={{background: "rgb(4,7,29", backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}>
                    <p>CSS</p>
                    <img src="/CssCode.png" alt="CssCode" className="rounded-lg border border-white/[0.1] mt-10"/>
                </div>
            ),
        },
        {
            title: "Javascript",
            value: "javascript",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white from-purple-700 to-violet-900 border border-white/[0.1]" style={{background: "rgb(4,7,29", backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}>
                    <p>Javascript</p>
                    <img src="/JavascriptCode.png" alt="JavascriptCode" className="rounded-lg border border-white/[0.1] mt-10"/>
                </div>
            ),
        },
        {
            title: "PHP",
            value: "php",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white from-purple-700 to-violet-900 border border-white/[0.1]" style={{background: "rgb(4,7,29", backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}>
                    <p>PHP</p>
                    <img src="/PhpCode.png" alt="PhpCode" className="rounded-lg border border-white/[0.1] mt-10"/>
                </div>
            ),
        },
        {
            title: "C#",
            value: "c#",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white from-purple-700 to-violet-900 border border-white/[0.1]" style={{background: "rgb(4,7,29", backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}>
                    <p>C#</p>
                    <img src="/CSCode.png" alt="CSCode" className="rounded-lg border border-white/[0.1] mt-10"/>
                </div>
            ),
        },
    ];

    return (
        <div>
            <h1 className="heading">
                My <span className="text-purple">Code-Examples</span>
            </h1>

            <div className="h-[25rem] md:h-[27rem] sm:h-[20rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 mt-16">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}
