import React from 'react';
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from "./toolbar";

interface EditorProps {
}


function Editor() {
    const editor = useEditor({
        extensions: [StarterKit]
    });
    return (
        <div>

            <Toolbar editor={editor}/>
            <EditorContent editor={editor}/>


        </div>
    );
};

export default Editor;