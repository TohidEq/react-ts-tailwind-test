import { Link } from "react-router-dom";
import DocumentMeta from "react-document-meta";

const NotFound = () => {
  const meta = {
    title: "404",
    description: "not found 404 error",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "404,not found,error,empty",
      },
    },
  };
  return (
    <div className="container min-h-screen text-center text-3xl py-36 font-bold mx-auto">
      <DocumentMeta {...meta} />
      <h1>404 - Not Found</h1>
      <Link
        to={"/"}
        className="mx-auto w-fit block text-2xl text-honey p-4 transition-all dur150 hover:text-honey/60
        active:text-white/50"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
