import React from 'react';
import {Editor} from "@tiptap/core";
import DropdownOption from "../../common/DropdownOption";
import {AiFillCaretDown} from "react-icons/all";

interface ToolBarProps {
    editor: Editor | null
}


function ToolBar({editor}: ToolBarProps) {
    if (!editor) return null;

    const options = [{
        label: 'Paragraph',
        onMouseDown: () => editor.chain().focus().setParagraph().run()
    },
        {
            label: 'Heading 1',
            onMouseDown: () => editor.chain().focus().toggleHeading({level: 1}).run()
        },
        {
            label: 'Heading 2',
            onMouseDown: () => editor.chain().focus().toggleHeading({level: 2}).run()
        },
        {
            label: 'Heading 3',
            onMouseDown: () => editor.chain().focus().toggleHeading({level: 3}).run()
        },


    ]

    const getLabel = (): string => {
        if (editor.isActive('heading', {level: 1})) return "Heading 1"
        if (editor.isActive('heading', {level: 2})) return "Heading 2"
        if (editor.isActive('heading', {level: 3})) return "Heading 3"

        return 'Paragraph'

    }


    const Head = () => {
        return (
            <div className='flex items-center space-x-2 text-primary-dark dark:text-primary'>
                <p>{getLabel()}</p>
                <AiFillCaretDown/>
            </div>
        )
    }

    return (
        <div>
            <DropdownOption option={options} head={<Head/>}/>
        </div>
    );
}

export default ToolBar;