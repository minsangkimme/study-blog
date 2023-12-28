import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};
const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <div className="text-center max-w-60 shadow rounded-sm">
        <Image
          className="rounded-t-sm"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="p-2">
          <time className="text-sm text-right">{date.toString()}</time>
          <h3 className="font-bold text-ellipsis mt-2">{title}</h3>
          <p className="my-1 text-ellipsis">{description}</p>
          <span className="bg-green-200 text-sm rounded-full px-2">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
