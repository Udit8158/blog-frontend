import type { IDataObjectInTable } from "../../pages/Dashboard";

interface TableProps {
  headerDataArr: Array<string>;
  bodyDataArr: Array<IDataObjectInTable>;
}

function stripTitle(title: string, numberOfChar: number): string {
  if (title.length < numberOfChar) return title;
  return title.trim().slice(0, numberOfChar) + " ...";
}

export default function Table({ headerDataArr, bodyDataArr }: TableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 ">
      <div className="overflow-x-scroll md:overflow-x-auto">
        <table className="w-full border-collapse text-sm overflow-x-scroll">
          <thead className="bg-zinc-800 text-zinc-300">
            <tr>
              {headerDataArr.map((header, index) => (
                <th
                  key={`${header}-${index}`}
                  className="px-4 py-3 text-left font-medium whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {bodyDataArr.map((blog) => (
              <tr
                key={blog._id}
                className="border-t border-zinc-800 hover:bg-zinc-800/50 transition"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <a
                    href={`/dashboard/editor/${blog._id}`}
                    className="text-zinc-100 hover:underline"
                  >
                    {stripTitle(blog.title, 30)}
                  </a>
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium
                    ${
                      blog.status === "published"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-zinc-400">{blog.createdAt}</td>
                <td className="px-4 py-3 text-zinc-400">{blog.updatedAt}</td>
                <td className="px-4 py-3 text-zinc-400">{blog.publishedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
