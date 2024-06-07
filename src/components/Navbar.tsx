

const Navbar = (props: {links: string[]}) => {
  return (
    <>    
        <nav className="lg:w-[80vw] w-[100vw] m-auto sticky top-0 z-50 bg-[#efe6cb]">
            <ul className="flex flex-row py-5">
                
                { props.links.map((item, idx)=>(
                    <li key={idx} className="text-2xl text-black md:block md:pr-14 md:py-4 hidden font-semibold cursor-pointer hover:text-[red] uppercase"> {item} </li>
                )) }

                <li className="md:hidden block ">Extra</li>
                
               
            </ul>
            
        </nav>
    </>
  )
}

export default Navbar