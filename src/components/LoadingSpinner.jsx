import spinner from "/spinner.gif"
const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <img src={spinner} alt="" />
    </div>
  )
}

export default LoadingSpinner;