// getMarkdownContent.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(): string {
  const markdownFilePath = path.join(process.cwd(), 'public', 'my-paragraph.md');
  const fileContent = fs.readFileSync(markdownFilePath, 'utf-8');
  const { content } = matter(fileContent);
  return content;
}
