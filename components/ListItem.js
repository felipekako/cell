import react from "react";
import { View,Text, TouchableOpacity,StyleSheet, Image } from "react-native";
import icon from '../imagens/price.png'
const priceCangeColor = priceCangePercentaage7d > 0 ? 'green' : 'red'

function ListItem({name, symbol,currentPrice, priceCangePercentaage7d,logoUrl}){
    return(
        <TouchableOpacity>
        <View style={styles.itemWrapper}>
          <View style={styles.leftWrapper}>
            <Image source= {icon} style={styles.Image}/>
            <View style= {styles.titlesWrapper}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{symbol.touppe}</Text>
            </View>
          </View>
          <View style={styles.rightWrapper}>
          <Text style={styles.title}>{currentPrice}</Text>
              <Text style={[styles.subtitle,{color:red}]}>{priceCangePercentaage7d} </Text>
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
    Image:{
      width:47,
      height:47,
    },
    titlesWrapper:{
      marginLeft:8
    },
    title:{},
    subtitle:{},
})
export default ListItem