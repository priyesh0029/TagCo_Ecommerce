
const LandigHeader=[
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
    "TEXT PRODUCT",
]

const LandingPageHeader = () => {
  return (
    <div className='overflow-x-scroll flex no-scrollbar border border-black px-12'>
  {LandigHeader.map((header,index)=>(
    <div key={index} className=' flex justify-center items-center'>
      <span className="inline-block w-2 h-2 bg-violet-800 rounded-full"></span>
      <p className='m-2 whitespace-nowrap'>{header}</p>
    </div>
  ))}
</div>
  )
}

export default LandingPageHeader