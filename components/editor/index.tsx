import React from 'react';
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from "./toolbar";
import {Underline} from "@tiptap/extension-underline";



function Editor() {
    const editor = useEditor({
        extensions: [StarterKit, Underline,], editorProps: {
            attributes: {
                class: 'prose lg:prose-xl focus:outline-none dark:prose-invert max-w-full mx-auto h-full'
            }
        }
    });
    return (
        <div className='p-3 dark:bg-primary-dark bg-primary transition'>
            <Toolbar editor={editor}/>
            <div className='h-[1px] w-full bg-secondary-dark dar:bg-secondary-light mx-3'></div>
            <EditorContent editor={editor}/>
        </div>
    );
};

export default Editor;