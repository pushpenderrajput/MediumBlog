import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

interface BLogCardProps {
    authorName: string,
    title: string,
    content: string,
    createdAt: string
}
export const FullBlog = ({ authorName, title, content, createdAt }: BLogCardProps) => {
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                <div className="pr-4 col-span-8">
                    <div className="text-5xl font-extrabold">
                        {title}

                    </div>
                    <div text-slate-500 pt-2>
                        Posted on: {createdAt}

                    </div>
                    <div className="pt-4">
                        {content}
                    </div>

                </div>
                <div className="pl-4 col-span-4">
                    <div className="text-slate-600 text-lg"> Author</div>
                   
                    <div className="flex">
                        <div className="pr-2 flex flex-col justify-center">
                        <Avatar name={authorName || "Pushpender"} />
                        </div>
                        <div>
                        <div className="text-xl font-bold">
                            {authorName || "Pushpender"}
                        </div>
                        <div className="pt-2 text-slate-600">
                            He is really a good writer has written many articles which were viral last year.
                        </div>
                        </div>

                    </div>
                    

                </div>
            

            </div>

        </div>
    </div>

}