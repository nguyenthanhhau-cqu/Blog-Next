import { BsBoxArrowUpRight, BsPencilSquare } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";
import {BubbleMenu} from "@tiptap/react";
import {Editor} from "@tiptap/core";
import {useCallback, useState} from "react";
import LinkForm, {linkOption} from "./LinkForm";
import {LinkOptions} from "@tiptap/extension-link";

interface Props {
  editor: Editor
}

function EditLink({editor}: Props) {
  const [showEditForm,setShowEditForm] = useState(false)

  const handleOnLinkOpenClick = useCallback(()=> {
    const {href} = editor.getAttributes('link')
    if(href) {
      window.open(href,'_blank')
    }
  },[editor]);

  const handleLinkEditClick = () => {
    setShowEditForm(true)
  };

  const handleUnlinkClick = () => {
    editor.commands.unsetLink()
  };

  const handleSubmit = ({url, openInNewTab}: linkOption) => {
    editor.chain().focus().unsetLink().setLink({href: url, target: openInNewTab ? "_blank" :  ""}).run()
    setShowEditForm(false)


  }
  const getInitialState = useCallback(()=> {
    const {href, target} = editor.getAttributes('link')
    return {url: href, openInNewTab: !!target }
  },[editor]);


  return (
    <BubbleMenu shouldShow={({editor})=> editor.isActive('link')} editor={editor} tippyOptions={{onHide:()=>{
      return setShowEditForm(false)
    }
    }}>
      <LinkForm visible={showEditForm} onSubmit={handleSubmit} initialState={getInitialState()}/>
      {!showEditForm && <div
          className="rounded bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary shadow-secondary-dark shadow-md p-3 flex items-center space-x-6 z-50">
        <button onClick={handleOnLinkOpenClick}>
          <BsBoxArrowUpRight/>
        </button>

        <button onClick={handleLinkEditClick}>
          <BsPencilSquare/>
        </button>

        <button onClick={handleUnlinkClick}>
          <BiUnlink/>
        </button>
      </div>}
    </BubbleMenu>
  );
}

export default EditLink;
