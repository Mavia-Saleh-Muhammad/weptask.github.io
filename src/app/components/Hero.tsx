
import Image from "next/image"

const Hero = () => {
    return (
        <>
            <section className="flex">
                <div className="w-1/2">
                    <div className="mt-44 h-[160px] ml-20 text-5xl font-serif  font-semibold">
                        IMPECCABLE CRAFTSMANSHIP AND FINESSE
                    </div>

                    <div className="max-w-[800px] ml-20 text-2xl tracking-wider text-[#787054] font-['Libre_Bodoni']">
                        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable
                        collection
                    </div>

                    <button className="bg-[#A29875] text-3xl font-['Libre-Bodoni'] p-2.5 ml-20 rounded text-white h-[58px] w-[288px] mt-4 flex justify-center">
                        Explore Now
                    </button>
                </div>

                <div className="flex ml-52 mr-8 mt-14">
                    <Image 
                        src="https://i.ibb.co/qBThxjb/your-image-name.jpg" 
                        width={400} 
                        height={300}
                        alt="Jewelry Display"
                        
                    />
                </div>
            </section>
        </>
    )
}

export default Hero;