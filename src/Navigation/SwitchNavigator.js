//Navigation
import  {createAppContainer,createSwitchNavigator} from "react-navigation";
import Home from "../Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Main from "../Main";

const SwitchNavigator = createSwitchNavigator({
        Home:Home,
        SignUp:SignUp,
        SignIn:SignIn,
        Main:Main
    },{
        initialRouteName:"Main"
    }
);

export default Navigator = createAppContainer(SwitchNavigator);
