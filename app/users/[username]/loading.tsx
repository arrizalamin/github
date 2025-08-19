export default async function UsernamePage() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="flex-1 w-full">
          <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-1/2 mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-2/3"></div>
          </div>
          <div className="flex gap-8 mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-12 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-16 mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-12 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-16 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
