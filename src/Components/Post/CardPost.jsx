

export default function CardPost({children, rem}) {
  return (
    <div style={{
      scrollbarWidth: 'none'
      }} className={` w-full h-[calc(100vh-${rem}rem)] overflow-scroll rounded-3xl `}>
        {children}
    </ div>
)}