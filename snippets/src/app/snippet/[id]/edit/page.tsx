import EditSnippetForm from "@/components/ui/EditSnippetForm"
import { prisma } from "@/lib/prisma"

interface EditSnippetPageProps{
    params:Promise<{id:string}>
}
const EditSnippetPage = async({params}:EditSnippetPageProps) => {
    const id = parseInt( (await params).id)
    const snippet =  await prisma.snippet.findUnique({
        where:{
            id
        }
    })
    if(!snippet){
        return <h1>Snippet not found</h1>
    }
  return (
    <div>
      <EditSnippetForm snippet={snippet}/>

    </div>
  )
}

export default EditSnippetPage