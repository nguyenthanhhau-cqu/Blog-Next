import React, {useState} from 'react';
import Button from "../toolbar/Button";
import {BsLink45Deg} from "react-icons/all";
import LinkForm, {linkOption} from "./LinkForm";
interface InsertLinkProps{
    onSubmit(link: linkOption): void
}
function InsertLink({onSubmit}:InsertLinkProps) {
    const [visible, setVisible] = useState(false)

    const visibleHandler = () => {
        setVisible(prevState => {
            return !prevState
        })
    }
    const onSubmitHandler = (link: linkOption) => {
        if (!link.url) return setVisible(false)
        onSubmit(link)
        setVisible(false)
    }



 return (
  <div onKeyDown={({key}) => {
      if (key === 'Escape') {
          setVisible((prevState) => {
              return !prevState
          })
      }

  }} className='relative'>
      <Button onClick={visibleHandler} >
          <BsLink45Deg/>
      </Button>
      <div className='absolute top-full mt-4 right-0 z-50'>
          <LinkForm onSubmit={onSubmitHandler} visible={visible} />
      </div>
  </div>
 );
};

export default InsertLink;