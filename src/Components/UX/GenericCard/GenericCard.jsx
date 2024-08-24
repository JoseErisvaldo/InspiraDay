

export default function GenericCard({children, rem}) {
  return (
    <div style={{
      scrollbarWidth: 'none'
      }} className={`p-4 h-[calc(100vh-${rem}rem)] overflow-scroll rounded-3xl `}>
        {children}
    </ div>
)}