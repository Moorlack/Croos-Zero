import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { useEffect, useState } from "react";
import config from "../../../config";

function useAppLoad() {
    const [isAppReady, setIsAppReady] = useState(false);
    const [isFontsLoaded] = useFonts(config.fonts);

    useEffect(() => {
        if(isFontsLoaded) preventAutoHideAsync().catch(console.warn).finally(() => setIsAppReady(true));
    }, [isFontsLoaded]);

    useEffect(() => {
        isAppReady && hideAsync().catch(console.warn)
    }, [isAppReady])

    return [isAppReady]
}

export default useAppLoad