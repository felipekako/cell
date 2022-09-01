import react from "react";
import { View,Text, TouchableOpacity,StyleSheet } from "react-native";


function ListItem(){
    return(
        <TouchableOpacity>
        <View style={styles.itemWrapper}>
          <View style={styles.leftWrapper}>
            <Image source= {{uri: logoUrl}} style={styles.image}/>
            <View style= {styles.titlesWrapper}>
              <Text style={styles.title}>Etherium</Text>
              <Text style={styles.subtitle}>ETH</Text>
            </View>
          </View>
          <View style={styles.rightWrapper}>
          <Text style={styles.title}>Etherium</Text>
              <Text style={styles.subtitle}>ETH</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal:16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent:"space-between",
        alingnItems:'center',
    },
    leftWrapper:{
        flexDirection: "row",
        alingnItems:'center',
    },
    rightWrapper:{
        alingnItems:'flex-end',
    },
    Image:{},
    titlesWrapper:{},
    title:{},
    subtitle:{},
})
export default ListItem