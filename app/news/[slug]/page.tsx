'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string;
  author_name: string;
  status: number;
  featured_image: string | null;
  published_at: string;
  created_at: string;
  category_id: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface BlogResponse {
  success: boolean;
  message: string;
  data: Blog;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function NewsArticle() {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        // Fetch blog directly by slug using the new endpoint
        const blogResponse = await axios.get<BlogResponse>(`${API_URL}/blogs/slug/${slug}`);
        const blogData = blogResponse.data.data;
        setBlog(blogData);

        // Fetch category
        try {
          const catResponse = await axios.get(`${API_URL}/blogs/categories/${blogData.category_id}`);
          setCategory(catResponse.data.data);
        } catch (catError) {
          console.error('Error loading category:', catError);
        }
      } catch (err) {
        console.error('Error loading blog:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const calculateReadTime = (content: string | null | undefined) => {
    if (!content) return '1 min read';
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
  };

  const preprocessContent = (content: string) => {
    let processed = content;

    // Split into lines
    const lines = processed.split('\n');
    const result: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // Skip empty lines initially
      if (!line) {
        result.push('');
        continue;
      }

      // Detect section headings (lines that end without punctuation and are followed by content)
      const isHeading =
        line.length > 10 &&
        line.length < 150 &&
        !line.endsWith('.') &&
        !line.endsWith(',') &&
        !line.startsWith('●') &&
        !line.startsWith('•') &&
        i > 0 && // Not the first line (which is the title)
        (i === 0 || lines[i - 1].trim() === ''); // Preceded by empty line

      // Convert bullet points
      if (line.startsWith('●\t') || line.startsWith('● ')) {
        line = '- ' + line.substring(2);
      } else if (line.startsWith('•\t') || line.startsWith('• ')) {
        line = '- ' + line.substring(2);
      }

      // Make section headings bold
      if (isHeading && i > 0) {
        line = `## ${line}`;
      }

      // Make first line (title) a heading
      if (i === 0) {
        line = `# ${line}`;
      }

      result.push(line);
    }

    return result.join('\n');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#D7BC6D] border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] text-black font-semibold rounded-full hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Featured Image */}
      {blog.featured_image && blog.featured_image.trim() !== '' ? (
        <section className="relative w-full h-[70vh] min-h-[500px]">
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error('Failed to load featured image:', blog.featured_image);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90"></div>
        </section>
      ) : (
        <div className="h-24"></div>
      )}

      {/* Article Content */}
      <article className={`relative isolate px-6 lg:px-12 ${blog.featured_image && blog.featured_image.trim() !== '' ? '-mt-[40vh]' : 'py-12'}`}>
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#D7BC6D] hover:text-[#E5D08A] transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to News
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs font-bold text-[#D7BC6D] bg-[#D7BC6D]/10 px-3 py-1.5 rounded-full border border-[#D7BC6D]/30">
                {category?.name || 'Uncategorized'}
              </span>
              <span className="text-sm text-gray-400">
                {formatDate(blog.published_at || blog.created_at)}
              </span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">{calculateReadTime(blog.content)}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">By {blog.author_name}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {blog.summary && (
              <p className="text-xl text-gray-300 leading-relaxed">{blog.summary}</p>
            )}
          </header>

          {/* Article Body - Markdown Rendered */}
          <div className="markdown-content text-gray-300">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mt-2 mb-6" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-8 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-lg font-bold text-white mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed mb-5 text-base" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 underline break-words" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc ml-6 text-gray-300 mb-5 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal ml-6 text-gray-300 mb-5 space-y-2" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-300 leading-relaxed" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-[#D7BC6D] pl-4 italic text-gray-400 my-4" {...props} />,
                code: ({node, inline, ...props}: any) =>
                  inline ?
                    <code className="bg-gray-800 text-[#D7BC6D] px-1.5 py-0.5 rounded text-sm" {...props} /> :
                    <code className="block bg-gray-900 text-gray-300 p-4 rounded border border-gray-800 overflow-x-auto my-4 text-sm" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                em: ({node, ...props}) => <em className="italic text-gray-400" {...props} />,
              }}
            >
              {preprocessContent(blog.content)}
            </ReactMarkdown>
          </div>

          {/* Navigation */}
          <div className="mt-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D7BC6D] to-[#CBA344] text-black font-semibold rounded-full hover:scale-105 transition-transform"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
