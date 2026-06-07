import { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface ResumePreviewProps {
  markdown: string;
}

marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function ResumePreview({ markdown }: ResumePreviewProps) {
  const html = useMemo(() => {
    const rawHtml = marked.parse(markdown) as string;
    return DOMPurify.sanitize(rawHtml);
  }, [markdown]);

  return (
    <div className="preview-container">
      <div className="preview-header">
        <span className="preview-label">实时预览</span>
      </div>
      <div className="preview-scroll">
        <div
          id="resume-content"
          className="resume-content markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
