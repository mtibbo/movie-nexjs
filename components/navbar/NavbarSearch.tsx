import React from 'react'
import { GoSearch } from 'react-icons/go'

interface NavbarSearchProps {
    className?: string
}

export const NavbarSearch = ({ className = '' }: NavbarSearchProps) => {
    return (
        <div className={`m-auto ml-4 ${className}`}>
            <GoSearch className='text-lg m-auto' />
            <input type="text"
                placeholder='Search...'
                className='w-full h-10 pl-2' />
        </div>
    )
}
