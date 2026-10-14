import { Metadata } from "next"

export const metadata: Metadata = {
    title:'Pagina de pricing',
    description:'Pagina para que veas los precios',
    keywords: ['page','pricing']
}

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}