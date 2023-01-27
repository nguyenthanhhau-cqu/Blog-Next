import React, {useEffect, useRef, useState} from 'react';
import {convertURLLink} from "../editorUnities";
export type linkOption =  {url: string, openInNewTab: boolean}
interface LinkFormProps{
    visible: boolean
    onSubmit(link: linkOption): void
    initialState?: linkOption
}

const defaultLinkValue = {url:"", openInNewTab: false}
function LinkForm({visible, onSubmit, initialState}:LinkFormProps) {
    const [link, setLink] = useState<linkOption>(defaultLinkValue)

    const handleSubmit = () => {
        onSubmit({...link, url: convertURLLink(link.url)})
        resetFormValue();
    }

    const resetFormValue = () => {
        setLink({...defaultLinkValue})
    }
    useEffect(()=> {
        if(initialState) setLink({...initialState})

    },[initialState])

    if(!visible) return null

    return (
  <div  className='rounded p-2 bg-primary shadow-lg shadow-secondary-dark dark:bg-primary-dark'>
      <input autoFocus type='text' className=' bg-transparent rounded
      border-2 border-secondary-dark  focus:border-primary-dark
      dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary '
             placeholder='https://example.com'
             value={link.url}
             onChange={({target }) => setLink({...link, url: target.value})}
      />
      <div className='flex items-center space-x-1.5 mt-2'>
          <input  type='checkbox' id='open-in-new-tab '    checked={link.openInNewTab}
                  onChange={({target}) => setLink({...link, openInNewTab: target.checked})} />
          <label htmlFor='open-in-new-tab '>Open in new Tab</label>
          <div className='flex-1 text-right '>
              <button onClick={handleSubmit} type='button' className='bg-action px-2 py-1 text-primary rounded text-sm'>Apply</button>
          </div>
      </div>
  </div>
 );
};

export default LinkForm;