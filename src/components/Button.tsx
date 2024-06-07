const Button = (props:{title:string}) => {
  return (
    <>
      <button className="px-6 py-4 bg-black text-[red] md:text-5xl text-2xl mr-4 mt-4 hover:bg-[red] hover:text-black font-normal"> {props.title} </button>
    </>
  )
}

export default Button