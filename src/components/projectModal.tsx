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

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Card key={id} className="w-full h-[25rem] bg-slate-800 z-10 flex flex-col justify-between hover:shadow-lg rounded-xl transition-all duration-300 hover:scale-[1.01]  cursor-pointer">
          <div className="w-full h-[15rem] overflow-hidden rounded-t-xl">
            {projectImage?.image ? (
              <Image
                src={projectImage.image}
                alt={projectImage.name}
                className="rounded-t-xl object-cover"
                width={500}
                height={300}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-200">
                No Image Available
              </div>
            )}
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-bold">
              {projectImage?.name || data.name}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-gray-400">
              {data.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {data.languages.nodes.map((lang, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="border-none text-md"
                  style={{
                    color: "#10B981",
                    borderRadius: "0.4375rem",
                  }}
                >
                  {lang.name}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
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
                  //   className="text-gray-200"
                  onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGlobe className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent
        className="max-w-3xl bg-slate-800 text-white p-6 rounded-lg"
        style={{ borderRadius: "0.4375rem" }}
      >
        <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
          {projectImage?.image ? (
            <Image
              src={projectImage.image}
              alt={projectImage.name}
              width={3000}
              height={3000}
              className="rounded-lg object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Image Available
            </div>
          )}
        </div>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {projectImage?.name || data.name}
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

          <div className="flex gap-4 pt-4">
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
                  <FaGlobe className="w-4 h-4 mr-2" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
