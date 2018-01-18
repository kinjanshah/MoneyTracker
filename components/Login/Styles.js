import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#3498db',
        flex:1
    },
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
    },
    logo:{
        height:100,
        width: 100
    },
    logoTitle:{
        textAlign:'center',
        color:'#FFF',
        marginTop:10,
        fontSize:30
    },
    container: {
        padding:20
    },
    input:{
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'#FFF',
        marginBottom:20,
        paddingLeft:15,
        borderRadius:10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15,
        marginBottom:15,
        borderRadius:10
    },
    buttonText:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'bold'
    },
    forgotPasswordContainer:{
        alignItems:'flex-end'
    },
    forgotPassword:{
        color:'blue',
        marginBottom:10
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30
      },
});

export default styles;