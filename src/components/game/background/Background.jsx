import { ImageBackground } from "react-native";
import { background } from '../../../style/background';
import field from '../../../../assets/images/field.png';

function Background({children}) {
    return (<ImageBackground source={field} style={background.field} resizeMode='contain'>{children}</ImageBackground>)
}

export default Background