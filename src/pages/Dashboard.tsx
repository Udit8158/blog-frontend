import Button from "../components/ui/Button";
import Table from "../components/ui/Table";

const blogs = [
  {
    _id: "1",
    title:
      "Understanding React State In 2025 by a beginner tech lead deveoloper falana dimkana dfdssdfsdf",
    status: "published",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 3, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
  {
    _id: "2",
    title: "Why I Switched to Linux",
    status: "draft",
    createdAt: "Jan 1, 2026",
    publishedAt: "Jan 1, 2026",
    updatedAt: "Jan 1, 2026",
  },
];

export interface IDataObjectInTable {
  _id: string;
  title: string;
  status: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export default function Dashboard() {
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
