import { StatusBar } from "react-native";
import  Navigation  from "./src/routes/Navigation"

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Navigation />
    </>
  );
}