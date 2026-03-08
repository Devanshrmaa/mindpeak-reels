import BlogPost from "@/views/BlogPost";

/** Force dynamic rendering — prevents 20MB+ ISR fallback from programmatic blog content */
export const dynamic = 'force-dynamic';

export default function BlogPostPage() { return <BlogPost />; }
