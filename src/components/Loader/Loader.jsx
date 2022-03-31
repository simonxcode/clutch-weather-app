import React from 'react'

const Loader = () => {
  const roundLoader = "h-2 w-2 sm:h-4 sm:w-4 bg-sky-900 rounded-full"

  return (
    <div className="mt-2 sm:mt-4 flex justify-center items-center">
      <div className={`${roundLoader} animate-bounce`}></div>
      <div className={`${roundLoader} animate-bounceTwo ml-2 mr-2`}></div>
      <div className={`${roundLoader} animate-bounceThree`}></div>
    </div>
  )
}

export default Loader
