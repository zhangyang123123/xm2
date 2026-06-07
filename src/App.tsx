import { useState, useEffect, useCallback } from 'react';
import Toolbar from './components/Toolbar';
import MarkdownEditor from './components/MarkdownEditor';
import ResumePreview from './components/ResumePreview';
import { templates, ResumeTemplate } from './templates';
import './App.css';

const STORAGE_KEY = 'resume-editor-content';

function App() {
  const [markdown, setMarkdown] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ?? templates[0].content;
    } catch {
      return templates[0].content;
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, markdown);
      } catch {
        console.warn('Failed to save to localStorage');
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [markdown]);

  const handleSelectTemplate = useCallback((template: ResumeTemplate) => {
    setMarkdown(template.content);
  }, []);

  const handleExportPDF = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="app">
      <Toolbar onSelectTemplate={handleSelectTemplate} onExportPDF={handleExportPDF} />
      <div className="main-content">
        <MarkdownEditor value={markdown} onChange={setMarkdown} />
        <ResumePreview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
