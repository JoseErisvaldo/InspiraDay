

export default function CardPost({children}) {
  return (
    <div style={{
      scrollbarWidth: 'none'
      }} className=" w-full h-[calc(100vh-15rem)] overflow-scroll rounded-3xl ">
        {children}
    </ div>
)}