export default function ButtonPost({ onClick, icon, text, background, color }) {
  return (
    <button
      style={{
        background: background,
        color: color
      }}
      onClick={onClick}
      className="flex items-center gap-3 p-2 mb-4 hover:opacity-75 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label={text}
    >
      <div className="text-2xl">
        {icon}
      </div>
      {text}
    </button>
  );
}