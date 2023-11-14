import {NavigationContainer} from "@react-navigation/native";
import TabRoutes from "./tab.routes";
import DrawerRoutes from "./drawer.routes";
import { useState } from "react";
import StackRoutes from "./stack.routes";

export default function Routes() {
    const [isLogged, setIsLogged] = useState(true);

    return(
        <NavigationContainer>
            {isLogged ? <DrawerRoutes /> : <StackRoutes />}
        </NavigationContainer>
    )
}