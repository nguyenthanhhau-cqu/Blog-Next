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

            <EditorContent editor={editor}/>
            <Toolbar editor={editor}/>

        </div>
    );
};

export default Editor;