"use client";

import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false,
});

import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { Button } from "./button";
const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  return (
    <div className="flex flex-col gap-4">
      <form action="" className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Your code Edit:</h1>
        <Button>Save</Button>
        <MonacoEditor
          height="40vh"
          language="javascript" 
          theme="vs-dark"
          defaultValue={code}
        />
      </form>
    </div>
  );
};

export default EditSnippetForm;
