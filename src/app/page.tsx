import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/d0aa4997-d418-4b54-a659-a1c6230f3940-z89bec.png",
  "https://utfs.io/f/494a2d19-b640-4456-8b49-4a813dfc57f0-1lv0vz.png",
  "https://utfs.io/f/5c038bc3-9eb1-45b3-8d44-b0201c94193f-2e18ub.png",
  "https://utfs.io/f/cf365e47-ae9b-4b48-91cc-00b8114d362b-v5zd0v.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
