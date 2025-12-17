'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useAuth from '@/hooks/Auth/useAuth';
import { useAxios } from '@/hooks/Axios/useClientAPIAxiosInstance';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

// Validation schema
const blogSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  category_id: z.string().min(1, 'Category is required'),
  content: z.string().min(1, 'Content is required'),
  summary: z.string().min(1, 'Summary is required').max(500, 'Summary must be less than 500 characters'),
  author_name: z.string().min(1, 'Author name is required'),
  featured_image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

type BlogFormData = z.infer<typeof blogSchema>;

interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoriesResponse {
  success: boolean;
  message: string;
  data: {
    total: number;
    page: number;
    per_page: number;
    total_pages: number;
    items: Category[];
  };
}

interface BlogResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    title: string;
    category_id: string;
    content: string;
    summary: string;
    author_name: string;
    featured_image: string | null;
    status: number;
  };
}

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id as string;
  const auth = useAuth();
  const { axiosInstance } = useAxios();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contentValue, setContentValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  useEffect(() => {
    setValue('content', contentValue);
  }, [contentValue, setValue]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if user is logged in first
      if (!auth?.clientUser?.token) {
        // Not logged in, redirect to login
        router.replace('/admin');
        return;
      }

      // Check if this is an actual page refresh (F5, browser reload)
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      const isPageRefresh = navEntries.length > 0 && navEntries[0].type === 'reload';

      if (isPageRefresh) {
        // Force logout on page refresh
        localStorage.removeItem('user');
        if (auth?.setClientUser) {
          auth.setClientUser(null);
        }
        toast.error('Session expired. Please login again.');
        router.replace('/admin');
        return;
      }

      // Normal navigation with valid auth, fetch data
      fetchCategories();
      fetchBlog();
    }
  }, [auth, router, blogId]);

  const fetchCategories = async () => {
    try {
      setIsLoadingCategories(true);
      const response = await axiosInstance.get<CategoriesResponse>('/blogs/categories', {
        params: {
          page: 1,
          per_page: 100,
        },
      });
      setCategories(response.data.data.items);
    } catch (error: any) {
      toast.error('Failed to load categories');
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const fetchBlog = async () => {
    try {
      setIsLoadingBlog(true);
      const response = await axiosInstance.get<BlogResponse>(`/blogs/${blogId}`);
      const blog = response.data.data;

      // Populate form with existing data
      reset({
        title: blog.title,
        category_id: blog.category_id,
        content: blog.content,
        summary: blog.summary,
        author_name: blog.author_name,
        featured_image: blog.featured_image || '',
      });

      setContentValue(blog.content);
    } catch (error: any) {
      toast.error('Failed to load blog');
      console.error('Error fetching blog:', error);
      router.push('/admin/blog-manager');
    } finally {
      setIsLoadingBlog(false);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    console.log('Form submitted with data:', data);

    setIsSubmitting(true);

    try {
      const payload = {
        title: data.title,
        category_id: data.category_id,
        content: data.content,
        summary: data.summary,
        author_name: data.author_name,
        featured_image: data.featured_image || undefined,
      };

      console.log('Sending payload to API:', payload);

      await axiosInstance.put(`/blogs/${blogId}`, payload);

      toast.success('Blog updated successfully!');
      router.push('/admin/blog-manager');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Failed to update blog';
      toast.error(errorMessage);
      console.error('Blog update error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading while fetching data
  if (isLoadingBlog || isLoadingCategories) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#D7BC6D] border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-[#D7BC6D]">Edit Blog</h1>
              <p className="text-gray-400 mt-1">Update your blog post</p>
            </div>
            <button
              onClick={() => router.push('/admin/blog-manager')}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Blog Title <span className="text-red-400">*</span>
            </label>
            <input
              id="title"
              type="text"
              {...register('title')}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent transition-all"
              placeholder="Enter blog title"
              disabled={isSubmitting}
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Category & Author Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label htmlFor="category_id" className="block text-sm font-medium text-gray-300 mb-2">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                id="category_id"
                {...register('category_id')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent transition-all"
                disabled={isSubmitting}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category_id && (
                <p className="text-red-400 text-sm mt-1">{errors.category_id.message}</p>
              )}
            </div>

            {/* Author Name */}
            <div>
              <label htmlFor="author_name" className="block text-sm font-medium text-gray-300 mb-2">
                Author Name <span className="text-red-400">*</span>
              </label>
              <input
                id="author_name"
                type="text"
                {...register('author_name')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent transition-all"
                placeholder="Enter author name"
                disabled={isSubmitting}
              />
              {errors.author_name && (
                <p className="text-red-400 text-sm mt-1">{errors.author_name.message}</p>
              )}
            </div>
          </div>

          {/* Summary */}
          <div>
            <label htmlFor="summary" className="block text-sm font-medium text-gray-300 mb-2">
              Summary <span className="text-red-400">*</span>
            </label>
            <textarea
              id="summary"
              {...register('summary')}
              rows={3}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent transition-all"
              placeholder="Enter a brief summary of your blog post"
              disabled={isSubmitting}
            />
            {errors.summary && (
              <p className="text-red-400 text-sm mt-1">{errors.summary.message}</p>
            )}
          </div>

          {/* Featured Image */}
          <div>
            <label htmlFor="featured_image" className="block text-sm font-medium text-gray-300 mb-2">
              Featured Image URL
            </label>
            <input
              id="featured_image"
              type="url"
              {...register('featured_image')}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent transition-all"
              placeholder="https://example.com/image.jpg"
              disabled={isSubmitting}
            />
            {errors.featured_image && (
              <p className="text-red-400 text-sm mt-1">{errors.featured_image.message}</p>
            )}
            <p className="text-gray-500 text-sm mt-1">Optional: Enter a URL for the blog's featured image</p>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Blog Content <span className="text-red-400">*</span>
            </label>
            <div className="border border-gray-800 rounded-lg overflow-hidden" data-color-mode="dark">
              <MDEditor
                value={contentValue}
                onChange={(val) => setContentValue(val || '')}
                preview="live"
                height={500}
              />
            </div>
            {errors.content && (
              <p className="text-red-400 text-sm mt-1">{errors.content.message}</p>
            )}
            {/* <p className="text-gray-500 text-sm mt-2">
              💡 Tip: You can paste formatted text from Word and it will be converted to markdown automatically
            </p> */}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={() => router.push('/admin/blog-manager')}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#D7BC6D] hover:bg-[#CBA344] text-black font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Updating Blog...' : 'Update Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
