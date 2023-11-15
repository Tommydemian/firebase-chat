import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { COLORS } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps & {
  children: React.ReactNode;
  customStyles?: object; 
}

export const MainContainer: React.FC<Props> = ({children, customStyles, ...rest}) => {
    return (
    <SafeAreaView {...rest} style={[styles.container, customStyles]}>
        {children}
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20, 
    backgroundColor: COLORS.white
  }
})