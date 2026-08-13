import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Response } from "@/types/types";
import config from "@/config";

export function ProjectsModal({ data, id }: { data: Response; id: number }) {
  const projectImage = config.images[data.name as keyof typeof config.images];
  const projectDisplayName = projectImage?.name || data.name;
  const illustrationPath = projectImage?.image || `/illustrations/${data.name.toLowerCase()}.png`;

  return (
    <Dialog>
      <div className="hidden sm:block w-full h-full">
        <DialogTrigger className="w-full h-full">
          <Card
            key={id}
            className="w-full h-full bg-slate-800 flex flex-col hover:shadow-lg rounded-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="h-68 flex-shrink-0 overflow-hidden rounded-t-xl flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
                <Image
                  src={illustrationPath}
                  alt={projectDisplayName}
                  width={400}
                  height={256}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-4 min-h-0">
                <CardHeader className="p-0 pb-3 flex-shrink-0">
                  <CardTitle className="text-xl font-bold">
                    {projectDisplayName}
                  </CardTitle>
                  <CardDescription className="text-gray-400 line-clamp-2">
                    {data.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {data.languages.nodes.slice(0, 3).map((lang, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="border-none text-sm"
                        style={{
                          color: "#10B981",
                          borderRadius: "0.4375rem",
                        }}
                      >
                        {lang.name}
                      </Badge>
                    ))}
                    {data.languages.nodes.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="border-none text-sm"
                        style={{
                          color: "#10B981",
                          borderRadius: "0.4375rem",
                        }}
                      >
                        +{data.languages.nodes.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex pt-2 justify-around flex-wrap gap-2">
                    <Button
                      asChild
                      style={{
                        backgroundColor: "#10B981",
                        borderRadius: "0.4375rem",
                      }}
                      className="text-gray-200"
                    >
                      <a
                        href={String(data.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" /> View on GitHub
                      </a>
                    </Button>
                    {data.homepageUrl && (
                      <Button
                        asChild
                        variant="outline"
                        style={{
                          borderRadius: "0.4375rem",
                          borderColor: "#10B981",
                          color: "#10B981",
                        }}
                      >
                        <a
                          href={String(data.homepageUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGlobe className="w-4 h-4" /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </DialogTrigger>
      </div>
      <div className="sm:hidden w-full h-full">
        <Card
          key={id}
          className="w-full h-full bg-slate-800 flex flex-col hover:shadow-lg rounded-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
        >
          <div className="flex flex-col h-full">
            <div className="h-54 flex-shrink-0 overflow-hidden rounded-t-xl flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
              <Image
                src={illustrationPath}
                alt={projectDisplayName}
                width={400}
                height={192}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4 min-h-0">
              <CardHeader className="p-0 pb-3 flex-shrink-0">
                <CardTitle className="text-lg font-bold">
                  {projectDisplayName}
                </CardTitle>
                <CardDescription className="text-gray-400 line-clamp-2">
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3">
                  {data.languages.nodes.slice(0, 3).map((lang, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="border-none text-sm"
                      style={{
                        color: "#10B981",
                        borderRadius: "0.4375rem",
                      }}
                    >
                      {lang.name}
                    </Badge>
                  ))}
                  {data.languages.nodes.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="border-none text-sm"
                      style={{
                        color: "#10B981",
                        borderRadius: "0.4375rem",
                      }}
                    >
                      +{data.languages.nodes.length - 3}
                    </Badge>
                    )}
                </div>
                <div className="flex flex-wrap justify-around pt-2 gap-2">
                  <Button
                    asChild
                    style={{
                      backgroundColor: "#10B981",
                      borderRadius: "0.4375rem",
                    }}
                    className="text-gray-200"
                  >
                    <a
                      href={String(data.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="w-4 h-4" /> View on GitHub
                    </a>
                  </Button>
                  {data.homepageUrl && (
                    <Button
                      asChild
                      variant="outline"
                      style={{
                        borderRadius: "0.4375rem",
                        borderColor: "#10B981",
                        color: "#10B981",
                      }}
                    >
                      <a
                        href={String(data.homepageUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGlobe className="w-4 h-4" /> Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      <DialogContent
        className="max-w-3xl bg-slate-800 text-white p-6 rounded-lg"
        style={{ borderRadius: "0.4375rem" }}
      >
        <div className="relative w-full h-90 overflow-hidden rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
          <Image
            src={illustrationPath}
            alt={projectDisplayName}
            width={800}
            height={320}
            className="w-full h-full object-contain"
          />
        </div>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {projectDisplayName}
          </DialogTitle>
          <DialogDescription className="text-lg mt-2 text-gray-300">
            {data.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.languages.nodes.map((lang, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="border-none text-lg"
                  style={{
                    color: "#10B981",
                    borderRadius: "0.4375rem",
                  }}
                >
                  {lang.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              style={{ backgroundColor: "#10B981", borderRadius: "0.4375rem" }}
            >
              <a
                href={String(data.url)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-4 h-4 mr-2" /> View on GitHub
              </a>
            </Button>
            {data.homepageUrl && (
              <Button
                asChild
                variant="outline"
                style={{
                  borderRadius: "0.4375rem",
                  borderColor: "#10B981",
                  color: "#10B981",
                }}
              >
                <a
                  href={String(data.homepageUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="w-4 h-4 mr-2" /> Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
