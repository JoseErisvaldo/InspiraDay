

export default function Button({onClick,text,background,color}) {
  return (
    <button 
      style={{
        background: background,
        color: color
      }}
      onClick={onClick} className="p-2 hover:opacity-75 rounded">
      {text}
    </button>
  )
}