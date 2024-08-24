import { Link } from "react-router-dom";
import Button from "../UX/Button/Button";

export default function SuggestedProfiles ({followSuggestions}) {
  return(
    <div>
      {followSuggestions.map((follow) => (
        <div className="flex gap-2 justify-between p-2">
          <Link to={`/perfil/${follow.id}`} className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <img src={follow.photo} alt="" className="w-10 rounded-full" /> 
              <div>{follow.name}</div>
            </div>
          </Link>
          <div>
          <Button background={"rgb(6 133 255)"} text={"Seguir"} color={"white"} />
          </div>
        </div>
      ))}
    </div>
  )
}