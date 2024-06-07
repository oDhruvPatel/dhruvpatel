import Button from "../components/Button"


const Hero = () => {
  return (
    <>
    <main className="lg:w-[80vw] w-[90vw] m-auto py-10 z-10"> 

      <h3 className="text-[#000000] text-4xl font-medium lg:py-3 py-2">Hello there !</h3>
      <h1 className="text-[red] font-medium text-6xl md:text-7xl lg:py-3 py-2">I am Dhruv Patel</h1>
      <h2 className="text-black md:text-6xl text-5xl font-medium lg:py-3 py-2">A Software Development Engineer</h2>

      <Button title="download resume"/>
      <Button title="my work"/>

    </main>

    </>
  )
}

export default Hero