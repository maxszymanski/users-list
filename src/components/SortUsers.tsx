import { useRef, useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'

function SortUsers() {
    const [isOpen, setIsOpen] = useState(false)
    const sortRef = useRef<HTMLDivElement>()

    const handleCloseMenu = () => {
        if (!isOpen) return
        setIsOpen(false)
    }

    useClickOutside(sortRef, handleCloseMenu)

    return (
        <div className="relative" ref={sortRef}>
            <button
                onClick={() => setIsOpen((c) => !c)}
                className="rounded-xl border border-lightborder bg-secondBg px-5 py-2 shadow-[0px_0px_26px_2px] shadow-violet-100 outline-none focus:border-primary dark:border-darkborder dark:bg-darkbg dark:shadow-darkborder dark:focus:border-primary"
            >
                Sort by name
            </button>
            {isOpen && (
                <div className="absolute -right-16 top-12 z-10 h-36 w-48 overflow-hidden rounded-lg border border-lightborder bg-white dark:border-darkborder dark:bg-darkSecondBg">
                    <button>Sort by name (A-Z)</button>
                    <button>Sort by name (Z-A)</button>
                    <button>Sort by phone (1-9)</button>
                    <button>Sort by phone (9-1)</button>
                </div>
            )}
        </div>
    )
}

export default SortUsers
