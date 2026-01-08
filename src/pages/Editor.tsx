import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../config/config";

export default function () {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    title: "New Blog",
    content: "Hi there, write about anything...",
  });
  const [fetchState, setFetchState] = useState<
    null | "loading" | "success" | "fail"
  >(null);

  useEffect(() => {
    if (blogId) {
      try {
        // fetch the blog data
        setFetchState("loading");
        const fetchBlogData = async () => {
          const res = await api.get(`/blogs/${blogId}`);

          if (res.data.status === "success") {
            setFetchState("success");
            setBlog(res.data.data);
          } else {
            setFetchState("fail");
          }
        };

        fetchBlogData();
      } catch (error) {
        setFetchState("fail");
        console.log(error);
      }
    }
  }, []);

  if (fetchState === "loading") return <p>Loading</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <textarea name="" id="" value={blog.content}></textarea>
    </div>
  );
}
