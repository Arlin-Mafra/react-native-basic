import React,{Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';


 

export default class PrimeiroTeste extends Component{


  constructor(props){
    super(props);
    
    this.state={
      nome:'',
      texto:''
    };

    this.apertaBotao = this.apertaBotao.bind(this);
  }


  apertaBotao(){

    let s = this.state;

    if(s.texto == 'Arlin'){
      s.nome = 'Voce acertou!!';
    }else{
      s.nome = 'Voce errou! Tente Outro nome';

    }
   
    
    this.setState(s);
  }
  


  render(){
    return(

      <View style={styles.principal}>  
      
    <Text style={styles.welcome}>Code! Evento de Programação</Text>
     <TextInput style={styles.inputTexto}  onChangeText={(texto)=>{this.setState({texto})} } placeholder='Advinhe meu nome...'/>
     <Button title='Aperte Aqui' color='#000000' onPress={this.apertaBotao} />

     <Text style={styles.welcome}>{this.state.nome}</Text>
      <Image source={require('./imagens/codeorg2019_social.png')} 
      style={styles.imagem} />
         
      </View>
      
    );
  }

}

const styles = StyleSheet.create({

principal:{
  justifyContent:"center",
  alignItems:"center",
  marginTop:50
  

},

welcome:{
  textDecorationColor:'white',
  justifyContent:"center",
  alignContent:"center",
  alignItems:"center",
  fontSize:25,
},

imagem:{
  marginTop:100,
  marginLeft:130,
  marginRight:100,
  width:150,
  height:150,
  justifyContent:"center",
  alignContent:"center",

},

inputTexto:{
  borderColor:'#000000',
  borderWidth:1,
  marginTop:20,
  marginBottom:20,
  height:50,
  width:300,
  marginTop:30,
  fontSize:20
}





}
)