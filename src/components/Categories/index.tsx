import React from 'react'
import { Category } from '~/models/Category'

interface Props {
  tabs: Category[]
  activeTab: Category
  className: string
  onChange: (tab: Category) => void
}

const Tabs = ({ tabs, className, activeTab, onChange, ...rest }: Props) => {
  return (
    <ul
      aria-label="Tabs"
      role="tablist"
      className={`flex flex-wrap gap-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400 ${className}`}
      {...rest}
    >
      {tabs.map((tab, index) => (
        <li key={index}>
          <button
            type="button"
            className={
              tab.url === activeTab.url
                ? 'inline-block rounded-lg bg-yellow-300 px-4 py-3 text-black'
                : 'inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
            }
            disabled={tab.disabled}
            id={`${tab.id}-tab-${index}`}
            role="tab"
            onClick={() => onChange(tab)}
          >
            {tab.name}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tabs
