import { useState } from 'react';
import { templates, ResumeTemplate } from '../templates';

interface ToolbarProps {
  onSelectTemplate: (template: ResumeTemplate) => void;
  onExportPDF: () => void;
}

export default function Toolbar({ onSelectTemplate, onExportPDF }: ToolbarProps) {
  const [showTemplateMenu, setShowTemplateMenu] = useState(false);

  const handleSelectTemplate = (template: ResumeTemplate) => {
    if (window.confirm('导入模板将覆盖当前内容，确定继续吗？')) {
      onSelectTemplate(template);
    }
    setShowTemplateMenu(false);
  };

  return (
    <header className="toolbar">
      <div className="toolbar-left">
        <h1 className="app-title">📄 Markdown 简历编辑器</h1>
      </div>
      <div className="toolbar-right">
        <div className="template-wrapper">
          <button
            className="btn btn-secondary"
            onClick={() => setShowTemplateMenu(!showTemplateMenu)}
          >
            📋 导入模板
          </button>
          {showTemplateMenu && (
            <div className="template-menu">
              <div className="template-menu-header">选择简历模板</div>
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  className="template-item"
                  onClick={() => handleSelectTemplate(tpl)}
                >
                  {tpl.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="btn btn-primary" onClick={onExportPDF}>
          🖨️ 导出 PDF
        </button>
      </div>
    </header>
  );
}
