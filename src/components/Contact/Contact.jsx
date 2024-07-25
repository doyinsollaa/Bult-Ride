import React from 'react'

const Contact = () => {
  return (
    <div className='bg-pink-400 text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0'>
        <div className="container">   
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                {/* left text content section */}
                <div className='space-y-5 sm:p-16 pb-6'>
                    <h1 data-aos="fade-up" className='text-2xl sm:text-3xl font-bold'>Best In the City</h1>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>TRUSTED RIDES IN LAGOS</h1> 
                    <p data-aos="fade-up" className='leading-8 tracking-wide'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam dolore fugiat quod, placeat debitis nostrum, esse sapiente consequatur maiores earum voluptas minus eligendi aperiam harum, dignissimos corrupti odit amet? aspernatur incidunt inventore, dolorem sit est non eos dignissimos ipsa exercitationem maxime, excepturi eius aperiam nemo ab! Voluptatibus?
                    </p>
                    <button 
                       data-aos='fade-up'
                       data-aos-offset='0'
                       className='bg-black text-white px-4 py-2 rounded-lg'>
                        Book Now
                    </button>
                </div>

                {/* right side form section */}
                <div data-aos="fade">
                    <div className='w-full md:max-w-[350px] mx-auto'>
                        <h1 className='uppercase text-2xl text-white bg-black px-5 py-3 text-center'>
                            Book a Ride
                        </h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5'>
                            <input 
                              className='inputField'
                              type='text'
                              name=''
                              id=''
                              placeholder='Name'
                            />
                            <input 
                              className='inputField'
                              type='text'
                              name=''
                              id=''
                              placeholder='Phone'
                            />
                            <input 
                              className='inputField'
                              type='text'
                              name=''
                              id=''
                              placeholder='Start'
                            />
                            <input 
                              className='inputField'
                              type='text'
                              name=''
                              id=''
                              placeholder='End'
                            />
                            <input 
                              type='text'
                              name=''
                              id=''
                              placeholder='Choose Vehicle'
                              className='col-span-2 inputField'
                            />

                            <button className='col-span-2 bg-black w-full mt-6 text-white py-2 px-4 rounded-lg'> 
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact