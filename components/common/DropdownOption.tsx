import React, {Fragment, ReactNode, useState} from 'react';

export interface DropdownOptionProps {
    option: { label: string, onClick(): void }[]
    head: ReactNode

}

function DropdownOption({option, head}: DropdownOptionProps) {
    const [showOptions, setShowOptions] = useState(false)
    return (
        <Fragment>

            <button className='relative' onBlur={() => setShowOptions(false)}
                    onClick={() => setShowOptions(!showOptions)}>
                {head}
                {showOptions && <div className='min-w-max absolute z-10 top-full mt-4   border-2 border-primary-dark
          dark:border-primary rounded text-left bg-primary dark:bg-primary-dark'>
                    <ul className='p-3 space-y-3 '>
                        {option.map(({label, onClick}) => {
                            return <li key={label} onMouseDown={onClick}>{label}</li>
                        })}
                    </ul>
                </div>}
            </button>

        </Fragment>
    );
};

export default DropdownOption;