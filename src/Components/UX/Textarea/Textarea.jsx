

export default function Textarea({onChange,text,background,color,placeholder}) {
  return (
    <textarea 
      style={{
        background: background,
        color: color
      }}
      value={text}
      placeholder={placeholder}
      onChange={onChange} className="mt-3 w-full h-36 border p-2 rounded-md">
      {text}
    </textarea>
  )
}