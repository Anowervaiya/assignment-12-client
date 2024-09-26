
function TestimonialsCard({name,desc,img,country}) {
  return (
    <><div class="lg:w-[400px]  p-8 bg-white rounded-md shadow-lg ">
                <p class="leading-loose text-gray-500     ">
                    “ {desc} ”
                </p>

                <div class="flex items-center mt-6 -mx-2">
              <img class="object-cover mx-2 rounded-full w-14 h-14" src={img} alt="Anower"/>

                    <div class="mx-2">
                  <h1 class="font-semibold text-gray-800     ">{name}</h1>
                        <span class="text-sm text-gray-500     "></span>
                    </div>
                </div>
            </div></>
  )
}

export default TestimonialsCard