import { BlogCard } from "../components/BlogCard";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../hooks";
import { format } from 'date-fns';
import { enIN } from 'date-fns/locale';
import { Link } from "react-router-dom";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
export const Blogs = () => {
    const { loading, blogs} = useBlogs();
    

    if (loading) {
        return (
            <div>
                <AppBar />
                <div className="flex justify-center">
                    <BlogsSkeleton />
                </div>
                <div className="flex justify-center">
                    <BlogsSkeleton />
                </div>
                <div className="flex justify-center">
                    <BlogsSkeleton />
                </div>
                
                        
                        
            </div>
                
        );
    }
    

    

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    
                    {blogs.map(blog=><Link to={`/blog/${blog.id}`}><BlogCard
                       
                        authorName={blog.author.name}
                        title={blog.title}
                        content={blog.content}
                        createdAt={format(new Date(blog.createdAt), 'dd-MM-yyyy hh:mm a', { locale: enIN })}
                        
                    /></Link>)}
                    
                    
                    
                </div>
            </div>

        </div>
    );
};
