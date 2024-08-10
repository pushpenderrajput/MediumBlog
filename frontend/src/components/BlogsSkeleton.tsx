export const BlogsSkeleton = () => {
    return (
      <div className="border-b p-4 border-slate-300 animate-pulse w-full max-w-xl">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
          <div className="flex-1">
            <div className="w-24 h-4 bg-slate-300 rounded mb-1"></div>
          </div>
          <div className="w-6 h-4 bg-slate-300 rounded"></div>
          <div className="w-16 h-4 bg-slate-300 rounded"></div>
        </div>
  
        <div className="mt-4">
          <div className="w-3/4 h-6 bg-slate-300 rounded mb-2"></div>
        </div>
  
        <div className="mt-2">
          <div className="w-full h-4 bg-slate-300 rounded mb-2"></div>
          <div className="w-5/6 h-4 bg-slate-300 rounded mb-2"></div>
          <div className="w-2/3 h-4 bg-slate-300 rounded mb-2"></div>
        </div>
  
        <div className="mt-4">
          <div className="w-24 h-4 bg-slate-300 rounded"></div>
        </div>
      </div>
    );
  };
  