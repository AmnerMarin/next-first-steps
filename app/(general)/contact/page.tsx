import { Metadata } from "next"

export const metadata : Metadata ={
    title: 'Página de contacto',
    description: 'Esta es una página donde te puedes contactar',
    keywords: ['contacto', 'contactanos']
}


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}