import HeroBG from '@/assets/hero-background.jpg'

const HeroSection = () => {
    return (
        <section className='relative z-10'>
            <img
                src={HeroBG}
                alt="Hero Background"
                className='w-full rounded-xl h-[80dvh] object-cover brightness-[.40]'
            />
            <h2 className='text-right text-white font-bold text-[48px] absolute bottom-10 right-14 leading-[60px]'>Helping you getting <br /> job FASTER</h2>
        </section>
    )
}

export default HeroSection