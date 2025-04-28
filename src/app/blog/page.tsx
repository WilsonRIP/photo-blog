import Link from "next/link";

// This page will display a grid of blog post previews

export default function BlogListPage() {
  // TODO: Fetch list of blog posts (e.g., via tRPC)
  const posts = [
    { slug: 'first-post', title: 'My First Blog Post', excerpt: 'A short description...' },
    { slug: 'travel-adventures', title: 'Travel Adventures', excerpt: 'Exploring new places...' },
    { slug: 'photo-tips', title: 'Photography Tips', excerpt: 'Improve your skills...' },
  ]; // Placeholder data

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 