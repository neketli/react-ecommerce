import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../Button'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
  placeholder?: string
  className?: string
}

const Search = ({ id, className, label, placeholder, ...props }: Props) => {
  return (
    <form className={className}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          label
        </label>
      )}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FaSearch />
        </div>
        <input
          type="search"
          id={id}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 outline-none focus:border-yellow-400 focus:ring-yellow-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-yellow-400 dark:focus:ring-yellow-400"
          placeholder={placeholder}
          {...props}
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-yellow-300 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400"
        >
          Поиск
        </button>
      </div>
    </form>
  )
}

export default Search
