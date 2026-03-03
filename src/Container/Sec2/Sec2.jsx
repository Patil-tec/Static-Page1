import Cad2 from '/Silk.png'
import Ph from '/PH.png'

const Sec2 = () => {
  return (
    <>
    <section className="flex items-center justify-around gap-16 py-16 px-8">
        <div className="flex flex-col  h-350">
            <h1 className="text-amber-800 text-4xl font-bold underline decoration-amber-600">Choclet Types</h1>
            <div className="flex items-center justify-center gap-12 mt-8">
                <img src={Cad2} alt="Silk" className='w-88 h-88 rounded-lg shadow-lg'/>
                <div className="flex flex-col items-start justify-start gap-4">
                    <h1 className="text-5xl font-semibold text-amber-900">Your title here</h1>
                    <p className="text-gray-700 text-3xl w-80 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>
                    <button className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-all duration-200 shadow-md">Learn More</button>
                </div>
            </div>
            <br />
            <hr />
            <br />
              <div className="flex flex-row-reverse items-center justify-center gap-12 mt-8">
                <img src={Cad2} alt="Silk" className='w-88 h-88 rounded-lg shadow-lg'/>
                <div className="flex flex-col items-start justify-start gap-4">
                    <h1 className="text-5xl font-semibold text-amber-900">Your title here</h1>
                    <p className="text-gray-700 text-3xl w-80 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>
                    <button className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-all duration-200 shadow-md">Learn More</button>
                </div>
            </div>


             <br />
            <hr />
            <br />

            <div className='flex gap-12'>
                 <div className="flex flex-col items-center justify-center gap-12 mt-8 border-2 border-amber-300 rounded-lg p-4 ">
                <img src={Cad2} alt="Silk" className='w-68 h-58 rounded-lg shadow-lg'/>
                <div className="flex flex-col items-center justify-start gap-4">
                    <h1 className="text-3xl font-semibold text-amber-900">Your title here</h1>
                    <p className="text-gray-700 text-xl w-80 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>
                    <button className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-all duration-200 shadow-md">Learn More</button>
                </div>
            </div>
            {/* ----------------- */}
            <div className="flex flex-col items-center justify-center gap-12 mt-8 border-2 border-amber-300 rounded-lg p-4">
              <img src={Cad2} alt="Silk" className='w-68 h-58 rounded-lg shadow-lg'/>
                <div className="flex flex-col items-center justify-start gap-4">
                    <h1 className="text-3xl font-semibold text-amber-900">Your title here</h1>
                    <p className="text-gray-700 text-xl w-80 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>
                    <button className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-all duration-200 shadow-md">Learn More</button>
                </div>
            </div>
            </div>
        </div>


        {/* ----------------------------------------------------------------------------- */}


        <div className="flex flex-col gap-8 bg-gray-500 w-100 h-350 rounded-xl p-8">
             <h1 className="text-amber-800 text-4xl font-bold underline decoration-amber-600">News Types</h1>
             <div className="flex flex-col gap-4">
                <input type="text" placeholder="Enter your email" className="px-4 py-3 border-2 border-amber-300 rounded-md focus:outline-none focus:border-amber-600 bg-amber-50 text-amber-900" />
                <button className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-all duration-200 shadow-md">Sign Up</button>
             </div>
             <h1 className="text-amber-900  font-semibold underline text-3xl">Your Title</h1>
             <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={Ph} alt="PH" className='w-48 h-48 rounded-full shadow-lg'/>
                    <h1 className="text-amber-900 font-semibold text-xl mt-2">Sub Title</h1>
                </div>      
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={Ph} alt="PH" className='w-48 h-48 rounded-full shadow-lg'/>
                    <h1 className="text-amber-900 font-semibold text-xl mt-2">Sub Title</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={Ph} alt="PH" className='w-48 h-48 rounded-full shadow-lg'/>
                    <h1 className="text-amber-900 font-semibold text-xl mt-2">Sub Title</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={Ph} alt="PH" className='w-48 h-48 rounded-full shadow-lg'/>
                    <h1 className="text-amber-900 font-semibold text-xl mt-2">Sub Title</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={Ph} alt="PH" className='w-48 h-48 rounded-full shadow-lg'/>
                    <h1 className="text-amber-900 font-semibold text-xl mt-2">Sub Title</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={Ph} alt="PH" className='w-48 h-48 rounded-full shadow-lg'/>
                    <h1 className="text-amber-900 font-semibold text-xl mt-2">Sub Title</h1>
                </div>
                
                
             </div>
        </div>
    </section>
    </>
  )
}                                               
export default Sec2