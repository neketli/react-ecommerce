import React from 'react'

const About = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="/src/assets/img/about.jpg"
                loading="lazy"
                alt="woman"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-yellow-500 md:text-left">
              Кто мы?
            </p>

            <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              Информация о компании
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p>

            <h2 className="mb-2 text-center text-xl font-bold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              Продаем качественное оборудование
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Здесь пару слов о том почему стоит нам доверять
              <br />
              <br />
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy
              text which has no meaning however looks very similar to real text.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
