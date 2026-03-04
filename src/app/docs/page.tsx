import { Suspense } from "react";
import Preview from "./components/Preview";

function DocsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Preview />
    </Suspense>
  );
}

export default DocsPage;
