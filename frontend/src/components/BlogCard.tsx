interface BLogCardProps {
    authorName: string,
    title: string,
    content: string,
    createdAt: string
}
export const BlogCard = ({ authorName, title, content, createdAt }: BLogCardProps) => {

    return <div className="border-b p-4 border-slate-300">
        <div className="flex pt-2">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} />
            </div>
            <div className="font-extralight pl-2 justify-center pl-2 flex flex-col">
                {authorName}
            </div>
            <div className="text-slate-400 font-xs flex justify-center flex-col pl-2">&#9679;</div>
            <div className="pl-2 font-thin text-slate-400 justify-center flex flex-col ">
                {createdAt}

            </div>
        </div>

        <div className="text-xl font-semibold ">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.length <= 100 ? content : content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sem font-thin">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>



    </div>
}
export function Avatar({ name }: { name: string }) {
    return <div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-slate-400 rounded-full dark:bg-gray-600">
            <span className="font-bold text-gray-700 dark:text-gray-300">{name[0]}</span>
        </div>
    </div>

}