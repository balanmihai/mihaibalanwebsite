import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
    const convertDate = (date: string) => {
        return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    }

    return (

        <div className={'flex flex-wrap'}>
            {posts.map((post) => (
                <Link
                    className="p-4 flex flex-col justify-end overflow-hidden rounded-2xl"
                    key={post._id}
                    href={post.slug.current}
                >
                    <article key={post.id} className="flex flex-col items-start justify-between">
                        <div className="relative w-full">
                            {post?.mainImage && <img  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" src={post.imageURL} alt={post.title}
                             />}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                                <time  className="mt-3 text-md font-semibold text-zinc-800 dark:text-zinc-100">
                                    {convertDate(post._createdAt)}
                                </time>
                                <p
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >{post.categories}
                                </p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-md font-semibold text-zinc-800 dark:text-zinc-100">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100">{post.description}</p>
                            </div>
                        </div>
                    </article>
                </Link>


            ))}
        </div>
    )
}

export default Posts
