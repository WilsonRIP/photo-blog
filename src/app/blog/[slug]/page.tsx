// This page will display a single blog post based on the slug
// It needs to fetch the post data using the slug parameter

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // TODO: Fetch blog post data using the slug (e.g., via tRPC)
  // const post = await api.post.getBySlug({ slug });

  // Placeholder data
  const post = {
    title: `Blog Post Title for ${slug}`,
    content: `This is the content for the blog post with slug: ${slug}. Replace this with actual fetched content. Don't forget to add social sharing buttons!`,
    author: "Photographer Name",
    date: new Date().toLocaleDateString(),
  };

  if (!post) {
    // Handle post not found, maybe return a 404 component
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">By {post.author} on {post.date}</p>
      <div className="prose lg:prose-xl mb-6">
        {/* Render post content here (potentially markdown) */}
        <p>{post.content}</p>
      </div>
      <div>
        {/* TODO: Add social media sharing buttons */}
        <p>Social Sharing Buttons Placeholder</p>
      </div>
    </article>
  );
} 