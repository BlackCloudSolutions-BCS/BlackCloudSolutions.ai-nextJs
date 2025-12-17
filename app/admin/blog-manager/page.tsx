'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLogout } from '@/hooks/queries/useAuth';
import useAuth from '@/hooks/Auth/useAuth';
import { useAxios } from '@/hooks/Axios/useClientAPIAxiosInstance';
import { toast } from 'sonner';

interface Blog {
  id: string;
  title: string;
  author: string;
  created_at: string;
  status: number;
  summary: string;
}

interface BlogResponse {
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

interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  created_at: string;
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

type ActiveSection = 'blogs' | 'categories';

export default function BlogManagerPage() {
  const router = useRouter();
  const auth = useAuth();
  const logoutMutation = useLogout();
  const { axiosInstance } = useAxios();

  // Active section
  const [activeSection, setActiveSection] = useState<ActiveSection>('blogs');

  // Blogs state
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [currentBlogsPage, setCurrentBlogsPage] = useState(1);
  const [totalBlogsPages, setTotalBlogsPages] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const blogsPerPage = 10;

  // Categories state
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [currentCategoriesPage, setCurrentCategoriesPage] = useState(1);
  const [totalCategoriesPages, setTotalCategoriesPages] = useState(1);
  const [totalCategories, setTotalCategories] = useState(0);
  const categoriesPerPage = 10;

  // Category form/modal states
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [isSubmittingCategory, setIsSubmittingCategory] = useState(false);

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

      // Normal navigation with valid auth, fetch data based on active section
      if (activeSection === 'blogs') {
        fetchBlogs();
      } else if (activeSection === 'categories') {
        fetchCategories();
      }
    }
  }, [auth, router, activeSection, currentBlogsPage, currentCategoriesPage]);

  const fetchBlogs = async () => {
    try {
      setIsLoadingBlogs(true);
      const response = await axiosInstance.get<BlogResponse>('/blogs', {
        params: {
          page: currentBlogsPage,
          per_page: blogsPerPage,
        },
      });

      setBlogs(response.data.data.items);
      setTotalBlogsPages(response.data.data.total_pages);
      setTotalBlogs(response.data.data.total);
    } catch (error: any) {
      toast.error('Failed to load blogs');
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoadingBlogs(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setIsLoadingCategories(true);
      const response = await axiosInstance.get<CategoriesResponse>('/blogs/categories', {
        params: {
          page: currentCategoriesPage,
          per_page: categoriesPerPage,
        },
      });

      setCategories(response.data.data.items);
      setTotalCategoriesPages(response.data.data.total_pages);
      setTotalCategories(response.data.data.total);
    } catch (error: any) {
      toast.error('Failed to load categories');
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCategory(true);

    try {
      if (editingCategory) {
        // Update existing category
        await axiosInstance.put(`/blogs/categories/${editingCategory.id}`, {
          name: categoryName,
          description: categoryDescription,
        });
        toast.success('Category updated successfully!');
      } else {
        // Create new category
        await axiosInstance.post('/blogs/categories', {
          name: categoryName,
          description: categoryDescription,
        });
        toast.success('Category created successfully!');
      }

      setCategoryName('');
      setCategoryDescription('');
      setEditingCategory(null);
      setShowCategoryModal(false);
      fetchCategories();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        (editingCategory ? 'Failed to update category' : 'Failed to create category');
      toast.error(errorMessage);
    } finally {
      setIsSubmittingCategory(false);
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setCategoryDescription(category.description);
    setShowCategoryModal(true);
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (confirm('Are you sure you want to delete this category? This action cannot be undone.')) {
      try {
        await axiosInstance.delete(`/blogs/categories/${categoryId}`);
        toast.success('Category deleted successfully!');
        fetchCategories();
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Failed to delete category';
        toast.error(errorMessage);
      }
    }
  };

  const handleCloseCategoryModal = () => {
    setShowCategoryModal(false);
    setEditingCategory(null);
    setCategoryName('');
    setCategoryDescription('');
  };

  const handleEdit = (blogId: string) => {
    router.push(`/admin/blog-manager/edit/${blogId}`);
  };

  const handleDelete = async (blogId: string) => {
    if (confirm('Are you sure you want to delete this blog? This action cannot be undone .')) {
      try {
        await axiosInstance.delete(`/blogs/${blogId}`);
        toast.success('Blog deleted successfully!');
        fetchBlogs();
      } catch (error: any) {
        const errorMessage = error?.response?.data?.message || 'Failed to delete blog';
        toast.error(errorMessage);
      }
    }
  };

  const handleCreateNew = () => {
    router.push('/admin/blog-manager/create');
  };

  const getStatusLabel = (status: number) => {
    const statusMap: { [key: number]: string } = {
      0: 'draft',
      1: 'pending',
      2: 'scheduled',
      3: 'published',
    };
    return statusMap[status] || 'unknown';
  };

  const getStatusColor = (status: number) => {
    const colorMap: { [key: number]: string } = {
      0: 'bg-gray-900/30 text-gray-400 border-gray-800',
      1: 'bg-yellow-900/30 text-yellow-400 border-yellow-800',
      2: 'bg-blue-900/30 text-blue-400 border-blue-800',
      3: 'bg-green-900/30 text-green-400 border-green-800',
    };
    return colorMap[status] || 'bg-gray-900/30 text-gray-400 border-gray-800';
  };

  // Show loading while fetching initial data
  const isLoading = activeSection === 'blogs' ? isLoadingBlogs : isLoadingCategories;
  const hasData = activeSection === 'blogs' ? blogs.length > 0 : categories.length > 0;

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-[#D7BC6D]">Blog Manager</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            onClick={() => setActiveSection('blogs')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all mb-2 ${
              activeSection === 'blogs'
                ? 'bg-[#D7BC6D] text-black font-semibold'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            Blogs
          </button>
          <button
            onClick={() => setActiveSection('categories')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
              activeSection === 'categories'
                ? 'bg-[#D7BC6D] text-black font-semibold'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            Categories
          </button>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
            className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all disabled:opacity-50"
          >
            {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Header */}
        <div className="border-b border-gray-800 bg-black">
          <div className="px-8 py-6">
            <h2 className="text-3xl font-bold text-white">
              {activeSection === 'blogs' ? 'Manage Blogs' : 'Manage Categories'}
            </h2>
            <p className="text-gray-400 mt-1">
              {activeSection === 'blogs'
                ? 'Create, edit, and manage your blog posts'
                : 'Create, edit, and manage blog categories'}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeSection === 'blogs' ? (
            // BLOGS SECTION
            <>
              {/* Action Bar */}
              <div className="flex justify-end items-center mb-6">
                <button
                  onClick={handleCreateNew}
                  className="px-6 py-2 bg-[#D7BC6D] hover:bg-[#CBA344] text-black font-semibold rounded-lg transition-all"
                >
                  + Create New Blog
                </button>
              </div>

              {/* Loading State */}
              {isLoadingBlogs && blogs.length === 0 ? (
                <div className="text-center py-20">
                  <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#D7BC6D] border-r-transparent"></div>
                  <p className="mt-4 text-gray-400">Loading blogs...</p>
                </div>
              ) : (
                <>
                  {/* Blog List */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Title
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Date
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Status
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {blogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-gray-800/50 transition-all">
                            <td className="px-6 py-4">
                              <div>
                                <p className="font-medium text-white">{blog.title}</p>
                                <p className="text-sm text-gray-400 mt-1">{blog.summary}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-300">
                              {new Date(blog.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                                  blog.status
                                )}`}
                              >
                                {getStatusLabel(blog.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => handleEdit(blog.id)}
                                  className="px-4 py-2 bg-[#D7BC6D] hover:bg-[#CBA344] text-black text-sm font-medium rounded-lg transition-all"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(blog.id)}
                                  className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 text-sm font-medium rounded-lg border border-red-800 transition-all"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {blogs.length === 0 && (
                      <div className="text-center py-12 text-gray-400">
                        No blogs found. Create your first blog!
                      </div>
                    )}
                  </div>

                  {/* Pagination */}
                  {totalBlogsPages > 1 && (
                    <div className="flex items-center justify-between mt-6">
                      <p className="text-sm text-gray-400">
                        Showing {(currentBlogsPage - 1) * blogsPerPage + 1} to{' '}
                        {Math.min(currentBlogsPage * blogsPerPage, totalBlogs)} of {totalBlogs} blogs
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentBlogsPage((p) => Math.max(1, p - 1))}
                          disabled={currentBlogsPage === 1}
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        <span className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                          Page {currentBlogsPage} of {totalBlogsPages}
                        </span>
                        <button
                          onClick={() => setCurrentBlogsPage((p) => Math.min(totalBlogsPages, p + 1))}
                          disabled={currentBlogsPage === totalBlogsPages}
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            // CATEGORIES SECTION
            <>
              {/* Action Bar */}
              <div className="flex justify-end items-center mb-6">
                <button
                  onClick={() => setShowCategoryModal(true)}
                  className="px-6 py-2 bg-[#D7BC6D] hover:bg-[#CBA344] text-black font-semibold rounded-lg transition-all"
                >
                  + Create Category
                </button>
              </div>

              {/* Loading State */}
              {isLoadingCategories && categories.length === 0 ? (
                <div className="text-center py-20">
                  <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#D7BC6D] border-r-transparent"></div>
                  <p className="mt-4 text-gray-400">Loading categories...</p>
                </div>
              ) : (
                <>
                  {/* Categories List */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Name
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Description
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Slug
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                            Created
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {categories.map((category) => (
                          <tr key={category.id} className="hover:bg-gray-800/50 transition-all">
                            <td className="px-6 py-4">
                              <p className="font-medium text-white">{category.name}</p>
                            </td>
                            <td className="px-6 py-4 text-gray-300">{category.description}</td>
                            <td className="px-6 py-4 text-gray-400 text-sm">{category.slug}</td>
                            <td className="px-6 py-4 text-gray-300">
                              {new Date(category.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => handleEditCategory(category)}
                                  className="px-4 py-2 bg-[#D7BC6D] hover:bg-[#CBA344] text-black text-sm font-medium rounded-lg transition-all"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteCategory(category.id)}
                                  className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 text-sm font-medium rounded-lg border border-red-800 transition-all"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {categories.length === 0 && (
                      <div className="text-center py-12 text-gray-400">
                        No categories found. Create your first category!
                      </div>
                    )}
                  </div>

                  {/* Pagination */}
                  {totalCategoriesPages > 1 && (
                    <div className="flex items-center justify-between mt-6">
                      <p className="text-sm text-gray-400">
                        Showing {(currentCategoriesPage - 1) * categoriesPerPage + 1} to{' '}
                        {Math.min(currentCategoriesPage * categoriesPerPage, totalCategories)} of{' '}
                        {totalCategories} categories
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentCategoriesPage((p) => Math.max(1, p - 1))}
                          disabled={currentCategoriesPage === 1}
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Previous
                        </button>
                        <span className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                          Page {currentCategoriesPage} of {totalCategoriesPages}
                        </span>
                        <button
                          onClick={() => setCurrentCategoriesPage((p) => Math.min(totalCategoriesPages, p + 1))}
                          disabled={currentCategoriesPage === totalCategoriesPages}
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              {editingCategory ? 'Edit Category' : 'Create Category'}
            </h2>
            <form onSubmit={handleCategorySubmit} className="space-y-4">
              <div>
                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-300 mb-2">
                  Category Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="categoryName"
                  type="text"
                  required
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent"
                  placeholder="Enter category name"
                />
              </div>
              <div>
                <label
                  htmlFor="categoryDescription"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="categoryDescription"
                  required
                  value={categoryDescription}
                  onChange={(e) => setCategoryDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7BC6D] focus:border-transparent"
                  placeholder="Enter category description"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCloseCategoryModal}
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingCategory}
                  className="flex-1 px-4 py-2 bg-[#D7BC6D] hover:bg-[#CBA344] text-black font-semibold rounded-lg transition-all disabled:opacity-50"
                >
                  {isSubmittingCategory
                    ? editingCategory
                      ? 'Updating...'
                      : 'Creating...'
                    : editingCategory
                    ? 'Update'
                    : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
