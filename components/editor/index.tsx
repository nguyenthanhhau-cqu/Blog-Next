import React, {useEffect, useState} from 'react';
import {EditorContent, getMarkRange, Range, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from "./toolbar";
import {Underline} from "@tiptap/extension-underline";
import {Placeholder} from "@tiptap/extension-placeholder";
import {Link} from "@tiptap/extension-link";
import EditLink from "./Link/EditLink";
import {Youtube} from "@tiptap/extension-youtube";
import GalleryModal, {ImageSelectionResult} from "./GalleryModel";
import TiptapImage from '@tiptap/extension-image'



function Editor() {
    const [selectionRange, setSelectionRange] = useState<Range>()

    const [showGallery, setShowGallery] = useState(false)


    const editor = useEditor({
        extensions: [StarterKit, Underline, Link.configure({
            autolink: false,
            linkOnPaste: false,
            openOnClick: false,
            HTMLAttributes: {
                target: ""
            }

        }) ,Placeholder.configure({
            placeholder: "Type Something"
        })
            ,Youtube.configure({
                width: 840,
                height: 472.5,
                HTMLAttributes: {
                    class: 'mx-auto rounded',
                }
            },),
            TiptapImage.configure({
                HTMLAttributes: {
                    class: 'mx-auto'
                }
            })
        ],
        editorProps: {
            handleClick(view, pos , event ) {
                const {state} = view
                const selectionRange = getMarkRange(state.doc.resolve(pos), state.schema.marks.link)
                if(selectionRange) setSelectionRange(selectionRange);
            },
            attributes: {
                class: 'prose prose-lg focus:outline-none dark:prose-invert max-w-full mx-auto h-full'
            }

        }
    });

    useEffect(()=> {
        if(editor && selectionRange) {
            editor.commands.setTextSelection(selectionRange)
        }
    },[editor,selectionRange])

    const handleImageSelection = (result: ImageSelectionResult) => {
        if(!editor) return
        editor.chain().focus().setImage({src: result.src, alt: result.altText}).run()

    }

    return (
        <>
        <div className='p-3 dark:bg-primary-dark bg-primary transition'>
            <Toolbar editor={editor} onOpenImageClick={()=> setShowGallery(true)}/>
            <div className='h-[1px] w-full bg-secondary-dark dar:bg-secondary-light my-3'></div>
            {editor ? <EditLink editor={editor} /> : null}
            <EditorContent editor={editor}/>
        </div>
            <GalleryModal  onSelect={handleImageSelection} onClose={()=> setShowGallery(false)} visible={showGallery} />
        </>
    );
};

export default Editor;