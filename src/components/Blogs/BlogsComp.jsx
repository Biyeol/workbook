import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "인도의 관광명소",
    description: "타지마할입니다",
    author: "얼마 전",
    date: "2024.06.11",
  },
  {
    id: 1,
    image: Img2,
    title: "미국",
    description: "하와이입니다",
    author: "얼마 전",
    date: "2024.06.10",
  },
  {
    id: 1,
    image: Img3,
    title: "미국",
    description: "지는 석양을 잘 볼 수 있습니다. ",
    author: "얼마 전",
    date: "2024.06.11",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            최신 블로그
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
