
export default function Modal ({children,title,close}) {
  return (
    <div className={`w-screen h-screen flex justify-center items-center bg-black/50 fixed top-0 left-0`}>
      <div className=" rounded-3xl sm:w-96 h-[300px] m-auto fixed inset-0 border p-5 z-40 bg-gray-50 ">
        <div className="flex justify-between items-center font-bold">
          <div className="text-2xl">{title}</div>
          <div className="cursor-pointer text-2xl">{close}</div>
        </div>
        {children}
      </div>
    </div>
  )
}