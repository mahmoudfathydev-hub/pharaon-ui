"use client";

// Direct import test - this should work
import { Button } from "@/components/ui/button";

export default function ComprehensiveButtonTest() {
  const handleBasicClick = () => {
    console.log("Basic button clicked");
    alert("Basic button works!");
  };

  const handleComplexClick = (event: React.MouseEvent) => {
    console.log("Complex button clicked", event);
    alert("Complex button works!");
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8">Comprehensive Button Test</h1>
      
      <div className="space-y-8">
        {/* Basic Test */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Button Test</h2>
          <Button onClick={handleBasicClick} className="mr-4">
            Basic Click Handler
          </Button>
          <Button onClick={() => alert("Inline handler works!")}>
            Inline Handler
          </Button>
        </div>

        {/* Advanced Test */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Advanced Event Handlers</h2>
          <Button 
            onClick={handleComplexClick}
            onMouseEnter={() => console.log("Mouse entered")}
            onMouseLeave={() => console.log("Mouse left")}
            onFocus={() => console.log("Focused")}
            onBlur={() => console.log("Blurred")}
          >
            Multiple Events
          </Button>
        </div>

        {/* Variants Test */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Variants with Events</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="default" onClick={() => console.log("default")}>
              Default
            </Button>
            <Button variant="outline" onClick={() => console.log("outline")}>
              Outline
            </Button>
            <Button variant="ghost" onClick={() => console.log("ghost")}>
              Ghost
            </Button>
            <Button variant="secondary" onClick={() => console.log("secondary")}>
              Secondary
            </Button>
            <Button variant="link" onClick={() => console.log("link")}>
              Link
            </Button>
            <Button variant="destructive" onClick={() => console.log("destructive")}>
              Destructive
            </Button>
          </div>
        </div>

        {/* Sizes Test */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Sizes with Events</h2>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={() => console.log("small")}>
              Small
            </Button>
            <Button size="default" onClick={() => console.log("default")}>
              Default
            </Button>
            <Button size="lg" onClick={() => console.log("large")}>
              Large
            </Button>
            <Button size="icon" onClick={() => console.log("icon")}>
              🚀
            </Button>
          </div>
        </div>

        {/* asChild Test */}
        <div>
          <h2 className="text-xl font-semibold mb-4">asChild Prop Test</h2>
          <Button 
            asChild
            onClick={() => console.log("asChild button clicked")}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              Link as Button
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
        <h3 className="font-semibold text-green-800 dark:text-green-200">
          ✅ If you can see this page without errors, the Button component is working correctly!
        </h3>
        <p className="text-green-700 dark:text-green-300 mt-2">
          Check the console for click events when you interact with the buttons.
        </p>
      </div>
    </div>
  );
}
