import React from 'react';
import {Editor} from "@tiptap/core";
import DropdownOption from "../../common/DropdownOption";
import {
    AiFillCaretDown,
    BsBraces,
    BsCode,
    BsImageFill,
    BsLink45Deg,
    BsListOl,
    BsListUl,
    BsTypeBold,
    BsTypeItalic,
    BsTypeStrikethrough,
    BsTypeUnderline,
    BsYoutube,
    RiDoubleQuotesL
} from "react-icons/all";
import Button from "./Button";

interface ToolBarProps {
    editor: Editor | null
}


function ToolBar({editor}: ToolBarProps) {
    if (!editor) return null;

    const options = [{
        label: 'Paragraph',
        onClick: () => editor.chain().focus().setParagraph().run()
    },
        {
            label: 'Heading 1',
            onClick: () => editor.chain().focus().toggleHeading({level: 1}).run()
        },
        {
            label: 'Heading 2',
            onClick: () => editor.chain().focus().toggleHeading({level: 2}).run()
        },
        {
            label: 'Heading 3',
            onClick: () => editor.chain().focus().toggleHeading({level: 3}).run()
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
        <div className='flex items-center'>

            <DropdownOption option={options} head={<Head/>}/>

            <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8'/>
            <div className='flex items-center space-x-3'>
                <Button onClick={() => editor.chain().focus().toggleBold().run()}>
                    <BsTypeBold/>
                </Button>
                <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <BsTypeItalic/>
                </Button>
                <Button onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <BsTypeUnderline/>
                </Button>
                <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
                    <BsTypeStrikethrough/>
                </Button>
            </div>
            <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8'/>
            <div className='flex items-center space-x-3'>
                <Button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <RiDoubleQuotesL/>

                </Button>
                <Button onClick={() => editor.chain().focus().toggleCode().run()}>
                    <BsCode/>
                </Button>
                <Button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                    <BsBraces/>
                </Button>
                <Button>
                    <BsLink45Deg/>
                </Button>
                <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <BsListOl/>
                </Button>
                <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <BsListUl/>
                </Button>
            </div>
            <div className='h-4 w-[1px] bg-secondary-dark dark:bg-secondary-light mx-8'/>
            <div className='flex items-center space-x-3'>
                <Button>
                    <BsYoutube/>
                </Button>
                <Button>
                    <BsImageFill/>
                </Button>
            </div>
        </div>
    );
}

export default ToolBar;