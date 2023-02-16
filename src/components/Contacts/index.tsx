import React from 'react'
import { Button } from '~/components'

const Contacts = () => {
  return (
    <div className="body-font relative text-gray-600">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.06495919266!2d39.86178671594444!3d47.27398467916398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b1318abb69cf%3A0x1004ec8e274ebf7c!2z0YPQuy4g0J7QsdGK0LXQt9C00L3QsNGPLCAxLCDQkNC60YHQsNC5LCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCAzNDY3MjA!5e0!3m2!1sru!2sru!4v1676553965802!5m2!1sru!2sru"
          className="h-full w-full overflow-hidden opacity-40 shadow-md  filter"
          title="Карта"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container mx-auto flex px-5 py-24">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
            Связаться
          </h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Если у вас остались вопросы, с радостью ответим на них по
            электронной почте или телефону
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Ваш Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            ></textarea>
          </div>
          <Button>Связаться</Button>
          <p className="mt-3 text-center text-xs text-gray-500">
            Мы ответим вам в ближайшее время
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contacts
