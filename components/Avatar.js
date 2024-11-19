import Image from "next/image";


const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
      src={'/fann.png'}
      width={670}
      height={700}
      alt=""
      className="translate-z-0 w-full h-full py-10 "
      />
    </div>
  )
}

export default Avatar