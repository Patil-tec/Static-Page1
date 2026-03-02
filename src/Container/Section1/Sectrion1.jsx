import coBG from '/Cobg.png'
import Cad from '/Cad.png'
import Cad1 from '/Chococo.png'
import Cad2 from '/Cocolite.png'
import Cad3 from '/Cadbury.png'

const Section1 = () => {
    return (
        <>
            <div className="bg-[url(/Cobg.png)] bg-no-repeat bg-cover bg-center h-100 flex items-center justify-center">
                <div></div>
                <div className="flex justify-center items-center gap-8">
                    <img src={Cad} alt="Cadb" className='rounded-full border border-white' />
                    <img src={Cad1} alt="Chococo" className='rounded-full border border-white' />
                    <img src={Cad2} alt="Cocolite" className='rounded-full border border-white' />
                    <img src={Cad3} alt="Cadbury" className='rounded-full border border-white' />
                </div>
                <div></div>

            </div>
        </>
    )
}

export default Section1