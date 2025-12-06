import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCodeBranch } from "react-icons/fa";

interface ProjectConfig {
    id: number;
    title: string;
    category: string;
    platform?: 'github' | 'web' | string;
    href?: string;
    image?: string;
    description?: string;
}

const PROJECTS_CONFIG: ProjectConfig[] = [
    {
        id: 1,
        title: '11ty Serene',
        category: 'Theme',
        platform: 'github',
        href: 'https://github.com/CLCK0622/11ty-Serene',
        image: 'https://s2.loli.net/2025/12/02/HKAYoZVM57yTim6.png',
        description: 'A minimal theme for a landing page and an integrated blog. Built with 11ty and Sass.'
    },
    {
        id: 2,
        title: 'IEM Website',
        category: 'Website',
        platform: 'github',
        href: 'https://github.com/mtsun05/iem-website',
        description: "Next generation website for Illini Electric Motorsports RSO with Vite, R3F, shadcn/ui, and Tailwind CSS."
    },
    {
        id: 3,
        title: 'MuseDeck',
        category: 'Product',
        platform: 'web',
        href: 'https://github.com/MuseDeck',
        image: 'https://github.com/user-attachments/assets/cd369ad2-dfff-4d23-bf07-0b4f9f4010e2',
        description: 'An open-source, AI-native knowledge display system designed to turn your scattered information into a seamless, non-intrusive stream of inspiration.'
    },
    {
        id: 4,
        title: 'Next.js Stardust',
        category: 'Theme',
        platform: 'github',
        href: 'https://github.com/CLCK0622/Next.js-Stardust',
        description: "A minimal digital garden built with Next.js and Sass.",
    },
];

async function fetchGitHubData(repoUrl: string) {
    try {
        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return null;

        const [_, owner, repo] = match;

        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) return null;

        return await res.json();
    } catch (error) {
        console.error(`Failed to fetch repo ${repoUrl}`, error);
        return null;
    }
}

export default async function Portfolio() {
    const projects = await Promise.all(
        PROJECTS_CONFIG.map(async (item) => {
            let ghData = null;

            if (item.platform?.toLowerCase() === 'github' && item.href) {
                ghData = await fetchGitHubData(item.href);
            }

            return {
                ...item,
                href: item.href || ghData?.html_url || '#',
                description: item.description || ghData?.description || 'No description provided.',
                image: item.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
                stars: ghData?.stargazers_count,
                forks: ghData?.forks_count,
            };
        })
    );

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <h1>Projects</h1>
                <p>A collection of my past experience and open source contributions.</p>
            </div>

            <div className="projects-grid">
                {projects.map((item) => (
                    <Link href={item.href} key={item.id} className="project-item" target="_blank">
                        <div className="img-box">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={1024}
                                height={576}
                                className="card-img"
                            />
                        </div>

                        <div className="info-box">
                            <div className="info-meta">
                                <span className="cat">{item.category}</span>
                                {item.stars !== undefined && (
                                    <div className="gh-stats">
                                        <div className="stat">
                                            <FaStar className="icon star" />
                                            <span>{item.stars > 999 ? (item.stars / 1000).toFixed(1) + 'k' : item.stars}</span>
                                        </div>
                                        <div className="stat">
                                            <FaCodeBranch className="icon" />
                                            <span>{item.forks > 999 ? (item.forks / 1000).toFixed(1) + 'k' : item.forks}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}