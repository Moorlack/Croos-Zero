import React from "react";
import { Modal, View, Text, TouchableOpacity} from "react-native";
import { alert } from "../../style/style";

const MyAlert = ({ modalVisible, modalMessage, onClick }) => {
    return (<Modal animationType='fade' transparent={true} visible={modalVisible}>
        <View style={alert.all}>
          <View style={alert.window}>
            <Text style={alert.text}>{modalMessage}</Text>
            <TouchableOpacity style={alert.button} onPress={onClick}>
              <Text style={alert.textbutton}>NEW GAME</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>)
}

export default MyAlert;