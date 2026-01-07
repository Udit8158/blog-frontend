import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Table from "../components/ui/Table";
import { api } from "../config/config";
import { readableDateFormat } from "../utils/readableDate";

// const blogs = [
//   {
//     _id: "1",
//     title:
//       "Understanding React State In 2025 by a beginner tech lead deveoloper falana dimkana dfdssdfsdf",
//     status: "published",
//     createdAt: "Jan 1, 2026",
//     publishedAt: "Jan 1, 2026",
//     updatedAt: "Jan 3, 2026",
//   },
//   {
//     _id: "2",
//     title: "Why I Switched to Linux",
//     status: "draft",
//     createdAt: "Jan 1, 2026",
//     publishedAt: "Jan 1, 2026",
//     updatedAt: "Jan 1, 2026",
//   },
// ];

export interface IDataObjectInTable {
  _id: string;
  title: string;
  status: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export default function Dashboard() {
  const [blogs, setBlogs] = useState(Array<IDataObjectInTable>);
  console.log(blogs);

  // fetching blogs on mount - we don't need to set any headers and all cookies already verfied and it's attaching in request as in backend it's set to httponly cookie

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await api.get(`/admin/blogs/?blogs=10`);

      setBlogs(res.data.data);
    };

    fetchBlogs();
  }, []);

  // formating the blog's dates
  if (blogs.length > 0) {
    blogs.forEach((e) => {
      e.createdAt = readableDateFormat(e.createdAt);
      e.updatedAt = readableDateFormat(e.updatedAt);
      e.publishedAt = readableDateFormat(e.publishedAt);
    });
  }
  return (
    <div className="p-4 md:p-16 lg:p-20 flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          Dashboard
        </h1>
        <Button text="Create New" color="#18181A" />
      </div>
      <Table
        headerDataArr={[
          "Title",
          "Status",
          "Created At",
          "Updated At",
          "Published At",
        ]}
        bodyDataArr={blogs}
      />
    </div>
  );
}
