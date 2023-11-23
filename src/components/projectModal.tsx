import Image from "next/image";
import config from "../config";

interface inputProps {
  id: number;
  data: any;
}

export default function ProjectsModal({ id, data }: inputProps) {
  const dateOnly = data.createdAt.split("T")[0];

  return (
    <article
      key={id}
      className={`postcard dark rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 flex flex-col md:flex-row gap-6`}
    >
      <div className={`w-full md:w-1/3 ${id % 2 == 0 ? "md:order-last" : ""}`}>
        <Image
          className="object-fill w-full h-full"
          src={config.images[data.name].image}
          alt="Image Description"
          width={500}
          height={500}
        />
      </div>
      <div className="p-4 w-full md:w-3/4">
        <h1 className={`text-3xl font-bold text-gray-300 hover:text-gray-100`}>
          {config.images[data.name].name}
        </h1>
        <div className="text-sm text-gray-500">
          <time dateTime="2020-05-25">{dateOnly}</time>
        </div>
        <div
          className="my-2 border-b border-gray-200 w-16"
          style={{ borderColor: "#3BCAC9" }}
        ></div>
        <div className="text-base ">{data.description}</div>
        <ul className="flex space-x-4 mt-4 gap-4">
          {data.languages.nodes.map((lang: any, index: number) => (
            <li
              key={index}
              // className="px-3 py-2"
            >
              <p style={{ color: "#3BCAC9" }}>{lang.name}</p>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4 mt-4 gap-4">
          <li className="bg-green-500 p-3 rounded-2xl hover:bg-green-400 transition ease-in-out duration-300">
            <a
              target="_blank"
              href={data.url}
              className="flex items-center space-x-2 "
            >
              <Image
                src={config.socialMedia[0].image}
                alt="social"
                width={35}
                height={35}
              />
            </a>
          </li>
          {data.homepageUrl ? (
            <li className="bg-green-500 p-3 rounded-2xl hover:bg-green-400">
              <a
                target="_blank"
                href={data.homepageUrl}
                className="flex items-center space-x-2 "
              >
                <Image
                  src={config.socialMedia[4].image}
                  alt="social"
                  width={35}
                  height={35}
                />
              </a>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </article>
  );
}
