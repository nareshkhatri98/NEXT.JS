import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

interface SnippetsDetailPageProps {
  params: Promise<{ id: string }>;
}
const SnippetsDetailPage = async ({ params }: SnippetsDetailPageProps) => {
  const id = parseInt((await params).id);

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) {
    return <h1>Snippet not found..</h1>;
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{snippet?.title}</h1>
        <div className="flex items-center gap-2">
          <Button>Edit</Button>
          <Button variant={"destructive"}>Delete</Button>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded">
        <code >
            {snippet?.code}
        </code>
      </pre>
    </div>
  );
};

export default SnippetsDetailPage;
