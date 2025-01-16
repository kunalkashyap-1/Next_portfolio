import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import config from "@/config";
import { useState } from "react";

const categories = ["Frontend", "Backend", "Tools","Framework"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div
      style={{
        // backgroundAttachment: "fixed",
        borderRadius: "7px",
      }}
      className="flex justify-center items-center"
    >
      <div className=" w-full space-y-6">
        <h2 className="text-2xl font-semibold text-green-300">
          Here are a few skills I&apos;ve acquired:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
          <div className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                style={{ borderRadius: "7px" }}
                className={`w-full justify-start ${
                  activeCategory === category
                    ? "bg-green-700 text-white hover:bg-green-600 hover:text-white"
                    : "text-green-300 hover:text-white hover:bg-green-800"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.skills
              .filter((tech) => tech.category === activeCategory)
              .map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <Card
                    key={tech.name}
                    style={{
                      borderRadius: "12px",
                      maxHeight: "5rem",
                      padding: "1rem",
                    }}
                    className="bg-green-900/80 border-green-700 flex items-center gap-6 hover:bg-green-700 transition-colors"
                  >
                    <div
                      style={{ borderRadius: "7px" }}
                      className="flex justify-center items-center w-10 h-10 overflow-hidden bg-gray-300"
                    >
                      <IconComponent size={30} color={tech.color} />
                    </div>
                    <div>
                      <p className="font-medium text-white mt-3 h-3">
                        {tech.name}
                      </p>
                      <p className="text-sm text-green-300">
                        {tech.experience}
                      </p>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
