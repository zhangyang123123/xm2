import { useEffect, useRef } from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newValue = value.substring(0, start) + '  ' + value.substring(end);
        onChange(newValue);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        });
      }
    };

    const textarea = textareaRef.current;
    textarea?.addEventListener('keydown', handleKeyDown);
    return () => textarea?.removeEventListener('keydown', handleKeyDown);
  }, [value, onChange]);

  return (
    <div className="editor-container">
      <div className="editor-header">
        <span className="editor-label">Markdown 编辑器</span>
        <span className="editor-info">{value.length} 字符</span>
      </div>
      <textarea
        ref={textareaRef}
        className="markdown-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在此输入 Markdown 内容..."
        spellCheck={false}
      />
    </div>
  );
}
