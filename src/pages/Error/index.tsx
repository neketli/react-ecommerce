import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Button } from '~/components'

const Error = () => {
  return (
    <div className="error relative flex h-screen items-center bg-white py-6 sm:py-8 lg:py-12">
      <div className="z-10 mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm font-semibold uppercase text-orange-500 md:text-base">
            Ошибка 404
          </p>

          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Не нашли такой страницы
          </h1>

          <p className="mb-12 max-w-screen-md text-center text-slate-500  md:text-lg">
            Возможно что-то пошло не по плану, но вы можете продолжить поиск в{' '}
            <Link to="/catalog" className="text-blue-500">
              каталоге
            </Link>
          </p>

          <a
            href="/"
            className="inline-block rounded-lg bg-slate-200 px-8 py-3 text-center text-sm font-semibold text-slate-500  shadow-md outline-none  transition duration-100 hover:bg-slate-300 focus-visible:ring active:text-slate-700 md:text-base"
          >
            На главную
          </a>
        </div>
      </div>
      <div className="blob"></div>
    </div>
  )
}

export default Error
