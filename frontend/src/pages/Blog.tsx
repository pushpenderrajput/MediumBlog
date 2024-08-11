import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { format } from 'date-fns';
import { enIN } from 'date-fns/locale';
import { AppBar } from "../components/AppBar";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || "",
    });

    if (loading) {
        return (
            <div>
                <AppBar />
                <div>
                    <FullBlogSkeleton />
                </div>
            </div>
        );
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            <FullBlog
                title={blog.title}
                content={blog.content}
                authorName={blog.author.name}
                createdAt={format(new Date(blog.createdAt), 'dd-MM-yyyy hh:mm a', {
                    locale: enIN,
                })}
            />
        </div>
    );
};
