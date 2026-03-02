import { Imgbackground } from "./styles";
import Usersimg from "../../assets/users.png";
function TopBackground() {
 return(
    <Imgbackground >
      <img src={Usersimg} alt="Background" />
    </Imgbackground>
 )
}

export default TopBackground