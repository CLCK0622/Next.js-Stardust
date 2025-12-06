'use client';

import Giscus from '@giscus/react';
import {siteConfig} from "@/config/site";

export default function Comments() {
    return (
        <div style={{ marginTop: '3rem' }}>
            <Giscus
                repo={siteConfig.giscus.repo as any}
                repoId={siteConfig.giscus.repoId}
                category={siteConfig.giscus.category}
                categoryId={siteConfig.giscus.categoryId}
                // ...
            />
        </div>
    );
}