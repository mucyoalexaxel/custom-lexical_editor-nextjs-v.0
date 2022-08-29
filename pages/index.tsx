import type { NextPage } from "next";
import Head from "next/head";
import { LexicalComposer } from "@lexical/react/LexicalComposer";

import Editor from "../src/components/Editor/Editor";
import LexicalNodes from "../src/components/Editor/nodes/LexicalNodes";
import LexicalEditorTheme from "../src/components/Editor/themes/LexicalEditorTheme";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Lexical Editor</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20">
        <h1 className="text-4xl font-bold">Lexical Text Editor</h1>
        <div className="border border-black mt-6 flex items-center w-full">
          <LexicalComposer
            initialConfig={{
              editorState: null,
              namespace: "Lexical_EDITOR",
              nodes: [...LexicalNodes],
              onError: (error: Error) => {
                throw error;
              },
              theme: LexicalEditorTheme,
            }}
          >
            <div className="editor-shell">
              <Editor />
            </div>
          </LexicalComposer>
        </div>
      </main>
    </div>
  );
};

export default Home;
