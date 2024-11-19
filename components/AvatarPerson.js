import Image from "next/image"

const AvatarPerson = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/luffy.png"}
        width={500}
        height={500}
        alt=""
        className="border-2 rounded-full shadow-red-300 shadow-2xl translate-z-0 w-full h-full bg-gradient-to-b from-blue-300 to-red-300 " //sampai sini
      />
    </div>
  );
}

export default AvatarPerson