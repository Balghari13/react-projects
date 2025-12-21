import { useEffect } from "react";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const DEFAULT_MD = `# Welcome to Markdown Previewer

Type your markdown on the left and see live preview on the right.

## Features
- Real-time preview
- **Bold**, _italic_, \`inline code\`
- Code blocks
\`\`\`js
// example
console.log("hello world");
\`\`\`
- Tables

| Name | Age |
|------|-----|
| Alice| 25  |
| Bob  | 30  |

- Task list
- [x] Item 1
- [ ] Item 2

> Quote example

[OpenAI](https://openai.com)
`;
  const [md, setMD] = useState(DEFAULT_MD);
  const [autoScroll, setAutoScroll] = useState(true);
  const editorRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (!autoScroll) return;
    const editor = editorRef.current;
    const preview = previewRef.current;

    if (!editor || !preview) return;

    const sync = () => {
      const ratio =
        editor.scrollTop / (editor.scrollHeight - editor.clientHeight || 1);
      preview.scrollTop =
        (preview.scrollHeight - preview.clientHeight || 1) * ratio;
    };
    const onScroll = () => {
      const ratio =
        editor.scrollTop / (editor.scrollHeight - editor.clientHeight || 1);
      preview.scrollTop =
        (preview.scrollHeight - preview.clientHeight || 1) * ratio;
    };

    editor.addEventListener("scroll", onScroll);

    return () => editor.removeEventListener("scroll", onScroll);
  }, [autoScroll]);

  const handleInsert = (before, after = "") => {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = md.slice(start, end);
    const newText =
      md.slice(0, start) + before + selected + after + md.slice(end);
    setMD(newText);

    const pos = start + before.length + selected.length + after.length;
    setTimeout(() => {
      el.focus();
      el.selectionStart = el.selectionEnd = pos;
    });
  };
  const copyHtml = async () => {
    const temp = document.createElement("div");

    document.body.appendChild(temp);
    temp.innerHTML = "";
    const preview = previewRef.current;

    if (preview) {
      try {
        await navigator.clipboard.writeText(preview.innerHTML);
        alert("copied");
      } catch (err) {
        alert("failed");
      }
    }
    document.body.removeChild(temp);
  };
  const downloadHtml = () => {
    const preview = previewRef.current
    if(!preview) return
    // const html = `<!doctype html>
    // <html>
    // <head><title>Markdowwn</title></head>
    // <body>${preview.innerHTML}</body>
    // </html>
    // `
    const html = preview.innerHTML
    
    const blob = new Blob([html], {type:'text.html'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'markdownload.html'
    a.click()
    URL.revokeObjectURL(url)
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Markdow Previewr-Live</h1>
          <div className="flex items-center space-x-2 text-sm">
            <label className="flex items-center space-x-2 ">
              <input
                checked={autoScroll}
                onChange={(e) => setAutoScroll(e.target.checked)}
                type="checkbox"
              ></input>
              <span>Sync Scroll</span>
            </label>
            <button
              onClick={downloadHtml}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Download
            </button>
            <button
              onClick={copyHtml}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Copy Perview
            </button>
            <button
              onClick={() => setMD(DEFAULT_MD)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Reset
            </button>
          </div>
        </header>
        {/* <div className="flex flex-col"> */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold">Editor</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleInsert("**", "**")}
                  className="px-2 py-1 bg-gray-200 rounded text-sm "
                >
                  Bold
                </button>
                <button
                  onClick={() => handleInsert("_", "_")}
                  className="px-2 py-1 bg-gray-200 rounded text-sm "
                >
                  Italic
                </button>
                <button
                  onClick={() => handleInsert("`", "`")}
                  className="px-2 py-1 bg-gray-200 rounded text-sm "
                >
                  Code
                </button>
                <button
                  onClick={() => handleInsert("\n```\n", "\n```\n**")}
                  className="px-2 py-1 bg-gray-200 rounded text-sm "
                >
                  Code Block
                </button>
                <button
                  onClick={() => handleInsert("\n>", "")}
                  className="px-2 py-1 bg-gray-200 rounded text-sm "
                >
                  Quote
                </button>
                <button
                  onClick={() => handleInsert("\n-", "")}
                  className="px-2 py-1 bg-gray-200 rounded text-sm "
                >
                  List
                </button>
              </div>
            </div>

            <textarea
              ref={editorRef}
              value={md}
              onChange={(e) => setMD(e.target.value)}
              className="h-[60vh] md:h-[70vh] w-full p-3 border rounded resize-none font-mono"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold">Preview</h2>
              <div className="text-sm text-gray-700">
                Rendered via <code>react-markdown</code>
              </div>
            </div>
            <div
              ref={previewRef}
              className="border prose prose-sm p-4 md:h-[70vh] overflow-auto bg-white rounded"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
