import React from 'react'

const Loader = () => {
  const roundLoader = "h-4 w-4 bg-sky-900 rounded-full"

  return (
    <div className="flex justify-center items-center mt-4">
      <div className={`${roundLoader} animate-bounce`}></div>
      <div className={`${roundLoader} animate-bounceTwo ml-2 mr-2`}></div>
      <div className={`${roundLoader} animate-bounceThree`}></div>
    </div>
  )

}

export default Loader