// CourseCardSkeleton.jsx
export default function CardSkeleton() {
  return (
    <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
        {[...Array(3)].map((_,index)=>{
            return(
    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden w-full border border-gray-100">
      {/* Image skeleton */}
      <div className="w-full h-44 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:800px_100%]" />

      <div className="p-4 space-y-3">

        {/* Tag + Stars row */}
        <div className="flex items-center justify-between">
          <div className="h-5 w-28 rounded-full bg-slate-200 animate-pulse" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 rounded-sm bg-slate-200 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-2/3 rounded bg-slate-200 animate-pulse" />
        </div>

        {/* Author row */}
        <div className="flex items-center gap-2 pt-1">
          <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse flex-shrink-0" />
          <div className="h-4 w-28 rounded bg-slate-200 animate-pulse" />
        </div>

        {/* Button skeleton */}
        <div className="h-10 w-full rounded-lg bg-slate-200 animate-pulse mt-2" />

      </div>
    </div>

            )
        })}


    </section>
  );
}