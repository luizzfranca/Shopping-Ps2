import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products } from "../screens/Products";
import { Description } from "../screens/Description";
import { Profile } from "../screens/Profile";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121214",
          marginBottom: "auto"
        },
      }}
    >
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="codesandbox" color="white" size={size} />
          ),
          tabBarLabel: "Games",
          tabBarLabelStyle: {
            color: "white",
          },
        }}
      />
      <Tab.Screen
        name="Description"
        component={Description}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color="white" size={size} />
          ),
          tabBarLabel: "Descrição",
          tabBarLabelStyle: {
            color: "white",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color="white" size={size} />
          ),
          tabBarLabel: "Perfil",
          tabBarLabelStyle: {
            color: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
}
