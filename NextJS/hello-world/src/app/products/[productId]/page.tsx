import { Metadata } from "next"

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId}`,
    }
}

// Destructuring the props as params. The params object contains the route parameters as key value pairs.

export default function ProductDetails( { params }: {
    params: { productId: string}
}) {
    return <h1>Details about product - {params.productId}</h1>
}