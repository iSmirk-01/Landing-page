import { motion } from "framer-motion";

const ReviewsSkeleton = ({ count = 3 }) => {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="border shrink-0 w-[200px] h-[200px] rounded-md overflow-hidden duration-300 flex flex-col bg-gray-200 animate-pulse"
        >
          <header className="w-full bg-slate-900 p-2 flex justify-center">
            <div className="w-16 h-4 bg-gray-400 rounded"></div>
          </header>
          <main className="flex flex-col gap-4 justify-center p-4 flex-1">
            <div className="w-full h-4 bg-gray-400 rounded"></div>
            <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
          </main>
          <footer className="flex justify-center bg-slate-700 p-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <div
                  key={starIndex}
                  className="w-4 h-4 bg-gray-400 rounded-full"
                ></div>
              ))}
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSkeleton;
