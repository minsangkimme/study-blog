import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkDown className="prose" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkDown>
  );
}
