export default function Alert({ alertType,textAlert }) {
  let background = "";
  let color = "";

  switch (alertType) {
    case "error":
      background = "red";
      color = "white";
      break;

    case "success":
      background = "green";
      color = "white";
      break;

    case "warning":
      background = "yellow";
      color = "black";
      break;

    default:
      background = "gray";
      color = "white";
      break;
  }

  return (
    <div
      style={{
        background: background,
        color: color,
      }}
      className="absolute top-10 right-10 p-2 rounded z-50"
    >
      {textAlert}
    </div>
  );
}
