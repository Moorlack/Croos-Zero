import { fields } from '../../../style/style';
import field from '../../../../assets/images/field.png';
import { ImageBackground } from "react-native";

function Background({children}) {
    return (<ImageBackground source={field} style={fields.field} resizeMode='contain'>{children}</ImageBackground>)
}

export default Background