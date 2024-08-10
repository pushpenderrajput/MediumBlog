export const FullBlogSkeleton = () => {
    return (
      <div>
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl animate-pulse">
            <div className="pr-4 col-span-8">
              <div className="h-12 bg-slate-300 rounded mb-4"></div>
              <div className="h-12 bg-slate-300 rounded mb-4"></div>
              <div className="w-1/3 h-6 bg-slate-300 rounded mb-4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-300 rounded"></div>
                <div className="h-4 bg-slate-300 rounded"></div>
                <div className="h-4 bg-slate-300 rounded"></div>
                <div className="h-4 bg-slate-300 rounded"></div>
                <div className="h-4 bg-slate-300 rounded"></div>
                <div className="h-4 bg-slate-300 rounded"></div>
              </div>
            </div>
            <div className="pl-4 col-span-4">
              <div className="h-6 w-20 bg-slate-300 rounded mb-4"></div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-300 rounded-full mr-4"></div>
                <div>
                  <div className="h-6 bg-slate-300 rounded mb-2 w-32"></div>
                  <div className="h-4 bg-slate-300 rounded w-48"></div>
                  <div className="h-4 bg-slate-300 rounded w-48 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  