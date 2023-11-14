import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "",
        drawerActiveTintColor: "red", // muda a cor do bg dos itens
        headerStyle: {
          backgroundColor: "#121214", // muda a cor do bg do header
        },
        headerTintColor: "white", // muda a cor do ícone do cabeçalho
        drawerStyle: {
            backgroundColor: "#121214"
        }, // muda a cor do bg do drawer de dentro todo
      }}
    >
      <Drawer.Screen
        name="minhaconta"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => (
            <Feather name="home" color="white" size={size} />
          ),
          drawerLabel: "Minha conta",
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="meusdados"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => (
            <Feather name="user" color="white" size={size} />
          ),
          drawerLabel: "Meus dados",
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="meuspedidos"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => (
            <Feather name="gift" color="white" size={size} />
          ),
          drawerLabel: "Meus pedidos",
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="avaliações"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => (
            <Feather name="thumbs-up" color="white" size={size} />
          ),
          drawerLabel: "Avaliações",
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="protocolos"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => (
            <Feather name="archive" color="white" size={size} />
          ),
          drawerLabel: "Protocolos e atendimentos",
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
      <Drawer.Screen
        name="favoritos"
        component={TabRoutes}
        options={{
          drawerIcon: ({ size }) => (
            <Feather name="heart" color="white" size={size} />
          ),
          drawerLabel: "Favoritos",
          drawerLabelStyle: {
            color: "white",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
