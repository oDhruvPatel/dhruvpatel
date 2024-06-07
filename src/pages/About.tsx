import squre from '../assets/Squre.jpg';


const About = () => {
  return (
    <>
    
<div className="w-[full] bg-black z-10">

    <div className="w-[90vw] md:w-[80vw] m-auto h-full bg-black mt-12 pb-10">
          
          
       <h1 className="pt-12 uppercase md:text-7xl text-5xl text-[red] font-bold title">Who am I ?</h1>

       <div className="w-full text-[#efe6cb] h-full flex md:flex-row flex-col-reverse">

         <div className="text-[#efe6cb] md:w-[75%] w-full py-12 md:pr-7"> 
            <div className="md:text-3xl text-xl text-justify font-extralight desc">
            
         Hello! I'm Dhruv Patel, a passionate Full Stack Developer and Software 
         Development Engineer (SDE) with a deep love for creating efficient, scalable, 
         and user-friendly web applications. With a strong foundation in both front-end 
         and back-end technologies, I thrive in developing comprehensive solutions
         that bridge the gap between user experience and robust server-side functionality.
            
            </div> </div>
         <div className="md:w-[25%] w-full md:pt-0 mt-7 md:mt-0 img-cont"> 
            <img src={squre} alt="" className="w-full h-full"/>
         </div>


       </div>

       

    </div>

   

    </div>

    <div className='md:w-[80vw] w-[90vw] m-auto'>
              
              <h1 className='md:text-7xl text-5xl my-4 w-full text-right title uppercase font-bold text-[red]
              '>My Skills</h1>   
   
          </div>

    </>
  )
}

export default About