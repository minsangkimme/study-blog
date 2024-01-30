import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};
const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  return (
    <article>
      <h2>{post.title}</h2>
      <MarkdownViewer content={post.content} />
    </article>
  );
};

export default PostPage;
