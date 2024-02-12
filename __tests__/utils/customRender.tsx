import { CityProvider } from "@contexts/CityContext";
import { RenderOptions, render } from "@testing-library/react-native";
import {ReactElement} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function Providers({children}:React.ReactNode){
    return(
        <SafeAreaView>
            <CityProvider>
                {children}
            </CityProvider>
        </SafeAreaView>
    )
}

const customRender =
  (  ui:ReactElement,
    options?:Omit<RenderOptions,'wrapper'>
)=> render(
    ui,
{wrapper:Providers,...options}
)

export * from '@testing-library/react-native'
export { customRender as render,Providers}