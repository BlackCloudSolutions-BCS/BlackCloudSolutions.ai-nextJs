/**
 * Parse markdown frontmatter and content
 * Extracts YAML frontmatter from markdown files
 */
export function parseMarkdown(markdown: string): { frontmatter: Record<string, any>, content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];

  // Parse YAML-like frontmatter
  const frontmatter: Record<string, any> = {};
  const lines = frontmatterText.split('\n');
  let currentKey: string | null = null;
  let currentArray: string[] | null = null;

  lines.forEach(line => {
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) return;

    // Handle array items
    if (trimmed.startsWith('-') && currentArray) {
      const value = trimmed.substring(1).trim();
      currentArray.push(value);
      return;
    }

    // Handle key-value pairs
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex > -1) {
      const key = trimmed.substring(0, colonIndex).trim();
      let value = trimmed.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Check if this is an array
      if (value === '' || value === '[]') {
        currentKey = key;
        currentArray = [];
        frontmatter[key] = currentArray;
      } else if (value === 'true') {
        frontmatter[key] = true;
      } else if (value === 'false') {
        frontmatter[key] = false;
      } else {
        frontmatter[key] = value;
        currentKey = null;
        currentArray = null;
      }
    }
  });

  return { frontmatter, content };
}

/**
 * Convert markdown to simple HTML (basic conversion)
 * For production, consider using a library like marked or remark
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mb-4 mt-8">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-white mb-6 mt-10">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mb-6 mt-10">$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gold">$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold hover:text-gold-light underline">$1</a>');

  // Unordered lists
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>');

  // Wrap lists
  html = html.replace(/(<li class="ml-6 mb-2">.*<\/li>\n?)+/g, '<ul class="list-disc text-gray-300 mb-6">$&</ul>');

  // Horizontal rule
  html = html.replace(/^---$/gim, '<hr class="border-gold/30 my-8" />');

  // Paragraphs (lines with content)
  html = html.split('\n\n').map(para => {
    para = para.trim();
    if (!para) return '';
    if (para.startsWith('<')) return para; // Already HTML
    return `<p class="text-gray-300 mb-6 leading-relaxed">${para}</p>`;
  }).join('\n');

  return html;
}
