import React from 'react'

type Props = {
  tabsList?: string[]
}

const Tabs = ({ tabsList }: Props) => {
  return (
    <ul className="flex flex-wrap gap-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
      <li>
        <a
          href="#"
          className="active inline-block rounded-lg bg-yellow-200 px-4 py-3 text-black"
          aria-current="page"
        >
          Tab 1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Tab 2
        </a>
      </li>
    </ul>
  )
}

export default Tabs
