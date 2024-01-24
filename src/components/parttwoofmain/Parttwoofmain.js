import React from 'react'
import { swiper_data } from '../../swiper_static_data'

function Parttwoofmain() {
  return (
    <div className=" w-full h-[426px] flex items-center justify-center text-black font-sans" name="bizHaqimizda">

      <main class="container mx-auto px-4 py-8 bg-gray-100">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="flex items-center justify-center bg-white p-8">
            <h1 class="text-4xl font-bold text-blue-600">Bizning Kompaniyamiz</h1>
          </div>
          <div class="bg-gray-200 p-8">
            <p class="text-gray-800">Bizning kompaniyamiz haqida qisqacha ma'lumotlar.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam labore vitae sunt dolore quasi sed rerum tempora quas molestiae.</p>
            <a href="#" class="bg-blue-600 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-800">Batafsil</a>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Parttwoofmain