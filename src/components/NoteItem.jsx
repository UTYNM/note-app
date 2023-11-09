import React from "react";

const NoteItem = ({ post }) => {
  return (
    <article key={post.id} className="flex max-w-xl flex-col items-start border-b border-gray-500 pb-10">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-gray-500">
          {new Date().toLocaleDateString()}
        </time>
        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-red-600 hover:bg-gray-100">
          {post.category.title}
        </p>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute" />
          {post.title}
        </h3>
        <p className="text-justify mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
    </article>
  );
}

export default NoteItem