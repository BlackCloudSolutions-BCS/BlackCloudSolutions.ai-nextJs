'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  created_at: string;
  published_at: string;
  status: number;
  featured_image: string | null;
  author_name: string;
  content?: string;
  category_id: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface BlogsResponse {
  success: boolean;
  message: string;
  data: {
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
    items: Blog[];
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function News() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Map<string, Category>>(new Map());
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadBlogs();
  }, [currentPage]);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get<BlogsResponse>(`${API_URL}/blogs`, {
        params: {
          page: currentPage,
          per_page: 9,
          status: 3, // Only published blogs for public
        },
      });

      const blogItems = response.data.data.items;
      setBlogs(blogItems);
      setTotalPages(response.data.data.total_pages);

      // Fetch categories for all blogs
      const uniqueCategoryIds = [...new Set(blogItems.map((blog) => blog.category_id))];
      const categoryMap = new Map<string, Category>();

      await Promise.all(
        uniqueCategoryIds.map(async (categoryId) => {
          try {
            const catResponse = await axios.get(`${API_URL}/blogs/categories/${categoryId}`);
            categoryMap.set(categoryId, catResponse.data.data);
          } catch (error) {
            console.error(`Error loading category ${categoryId}:`, error);
          }
        })
      );

      setCategories(categoryMap);
    } catch (error) {
      console.error('Error loading blogs:', error);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-base font-bold text-white mb-4">
              Stay <span className="text-[#D7BC6D]">Informed</span>
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-[#D7BC6D] sm:text-6xl lg:text-7xl leading-tight">
              <span className="text-white">News & </span>{' '}
              <span className="drop-shadow-[0px_0px_39px_rgba(215,188,109,0.9)]">Insights</span>
            </h1>
            <p className="mt-8 text-base text-gray-300 lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Stay informed about the latest{' '}
              <span className="text-[#D7BC6D] font-semibold">UAE regulatory updates</span>, legal
              news, and insights from{' '}
              <span className="text-[#D7BC6D] font-semibold">Black Cloud Solutions</span>
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <div className="relative isolate px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#D7BC6D] border-r-transparent"></div>
              <p className="mt-4 text-gray-400">Loading articles...</p>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/news/${blog.slug}`}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#D7BC6D]/20 hover:bg-white/10 hover:scale-105 hover:border-[#D7BC6D]/50 hover:shadow-[0px_0px_30px_rgba(215,188,109,0.4)] transition-all duration-300 block"
                  >
                    {blog.featured_image && (
                      <div className="mb-6 -mx-8 -mt-8 rounded-t-3xl overflow-hidden">
                        <img
                          src={blog.featured_image}
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#D7BC6D] bg-[#D7BC6D]/10 px-3 py-1.5 rounded-full border border-[#D7BC6D]/30">
                        {categories.get(blog.category_id)?.name || 'Uncategorized'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(blog.published_at || blog.created_at)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-gray-400 mb-4 italic">
                      Written by {blog.author_name}
                    </p>

                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">{blog.summary}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#D7BC6D]/20">
                      <span className="text-xs text-gray-400">
                        {calculateReadTime(blog.content)}
                      </span>
                      <span className="text-sm font-semibold text-[#D7BC6D] hover:text-[#E5D08A] transition-colors flex items-center gap-1 group">
                        Read More
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white/5 border border-[#D7BC6D]/20 text-white rounded-lg hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 bg-white/5 border border-[#D7BC6D]/20 text-white rounded-lg">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white/5 border border-[#D7BC6D]/20 text-white rounded-lg hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
