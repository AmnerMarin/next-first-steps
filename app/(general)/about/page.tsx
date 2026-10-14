import { Metadata } from "next";

export const metadata: Metadata={
    title:"SEO title",
    description: "SEO description",
    keywords: ['about', 'acerca de', 'tu ya sabes']
};


export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}