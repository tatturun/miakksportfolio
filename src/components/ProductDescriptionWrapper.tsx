// src/components/ProductDescriptionWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

type Props = {
    slug: string;
};

const ProductDescriptionWrapper: FC<Props> = ({ slug }) => {
    const ProductDescription = dynamic(
        () => import(`../app/(main)/products/descriptions/${slug}.tsx`)
    );

    return <ProductDescription />;
};

export default ProductDescriptionWrapper;
