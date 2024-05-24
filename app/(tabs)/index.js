import TabRoutes from "./routes/tab.routes";
import { StatusBar } from 'expo-status-bar';
export default function Index(){
  return (
        <TabRoutes style={{height:'100%',}}>
          <StatusBar hidden />
        </TabRoutes>

  )
}
