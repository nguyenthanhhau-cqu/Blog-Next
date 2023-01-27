import React, {useState} from 'react';
import Button from "../toolbar/Button";
import { BsYoutube} from "react-icons/all";
import LinkForm from "../Link/LinkForm";
interface Props{
    onSubmit(link: string): void
}
function EmBedYoutube({onSubmit}:Props) {

    const [url, setUrl] = useState("")
    const [visible, setVisible] = useState(false)

    const visibleHandler = () => {
        setVisible(prevState => {
            return !prevState
        })
    }
    const onSubmitHandler = () => {
        if (!url.trim()) return setVisible(false)
        onSubmit(url)
        setUrl("")
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
                <BsYoutube/>
            </Button>

            { visible &&
                <div className='absolute top-full mt-4 right-0 z-50'>
                    <div className='flex items-center space-x-2'>
                        <input autoFocus type='text' className=' bg-transparent rounded
      border-2 border-secondary-dark  focus:border-primary-dark
      dark:focus:border-primary transition p-2 text-primary-dark dark:text-primary '
                               placeholder='https://youtube.com'
                               value={url}
                               onChange={({target }) => setUrl(target.value)}
                        />
                        <button onClick={onSubmitHandler} type='button' className='bg-action p-2 text-primary rounded text-sm'>Embed</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default EmBedYoutube;