import React from 'react'
import { useCallback, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Button = ({
  content,
  onClick,
  isActive,
  isDisabled,
}: {
  content: React.ReactNode
  onClick: () => void
  isActive?: boolean
  isDisabled?: boolean
}) => {
  return (
    <button
      className={`flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-lg bg-opacity-80 text-sm font-normal shadow-sm transition-colors
      ${isActive ? 'bg-yellow-400 text-black' : 'text-yellow-400'}
      ${
        !isDisabled
          ? ' bg-white hover:bg-yellow-400 hover:text-black'
          : 'cursor-not-allowed bg-white text-yellow-300'
      }
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  )
}

const Pagination = ({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}: {
  gotoPage: (pages: number) => void
  canPreviousPage: boolean
  canNextPage: boolean
  pageCount: number
  pageIndex: number
}) => {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null
    const visiblePageButtonCount = 5
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount
    const pageIndices = [pageIndex]
    numberOfButtons--
    ;[...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore)
      } else {
        pageIndices.push(pageNumberAfter)
      }
    })
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          isActive={pageIndex === pageIndexToMap}
        />
      </li>
    ))
  }, [pageCount, pageIndex])
  return (
    <div className="flex justify-center">
      <ul className="flex gap-2">
        <li>
          <Button
            content={
              <div className="ml-1 flex">
                <FaChevronLeft size="0.6rem" />
              </div>
            }
            onClick={() => gotoPage(pageIndex - 1)}
            isDisabled={!canPreviousPage}
          />
        </li>
        {renderPageLinks()}
        <li>
          <Button
            content={
              <div className="ml-1 flex">
                <FaChevronRight size="0.6rem" />
              </div>
            }
            onClick={() => gotoPage(pageIndex + 1)}
            isDisabled={!canNextPage}
          />
        </li>
      </ul>
    </div>
  )
}

const PaginationDemo = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const pageCount = 10
  return (
    <div className="flex flex-wrap gap-3 p-6 py-12">
      <Pagination
        gotoPage={setPageIndex}
        canPreviousPage={pageIndex > 0}
        canNextPage={pageIndex < pageCount - 1}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  )
}

export default Pagination
