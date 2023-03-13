import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2  pt-4 pb-8 text-sm text-gray-400">
          <p className=" text-center text-xs text-gray-500">
            © 2023 - Элемент тепла.
          </p>
          <a
            href="tel:+79281217799"
            className="text-center text-xs text-gray-500"
          >
            +7 (928) 121-77-99
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
