import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
  } from 'react-native';

  const image = { uri: "fundo.PNG" };


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ' Lá vamos nós',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      
      'Parabéns pra você - cantiga de aniversário',
      'Cai cai balão - música infantil',
      'Que país é esse? - Leião Urbana',
      'Por Onde Andei - Nando Reis',
      'Malandragem - Cássia Eller',
      'Singular - Anavitória',
      'Entra na minha casa - Régis Danese',
      'Pais e Filhos - Legião Urbana',
      'Tempos modernos - Lulu Santos',
      'Meu erro - Paralamas do Sucesso',
      'Gostava Tanto de Você - Tim Maia',
      'Só hoje - Jota Quest',
      'Hello -Adelle',
      'And I Love Her - The Beatles',
      'Nobody’s home - Avril Lavigne',
      'Your Body Is a Wonderland - John Mayer',
      'Against all odds - Mariah Carey',
      'Just the Way Your Are - Bruno Mars',
      'Smells like teen spiri - Nirvana',
      'Oceans - Hillsong United',
      'Ele é exaltado - Adhemar de Campos',
      'Porque dele por Ele - Ana Paula Valadão',
      'Volte a sonhar - Elaine Martins',
      'Digno de Glória - Asaph Borba',
      'Aquieta a minha alma - Ministério Zoé',
      'Em teus braços - Laura Souguellis',
      'Galileu - Fernandinho ',
      'Lugar secreto - Gabriela Rocha',
      'Ninguém explica Deus - Preto no branco',
      'Eu sei que vem - Isadora Pompeo',
      'Não pare- Midian Lima',
      'A casa é sua- Casa Worship',
      'Hey pai -Isadora Pompeo',
      'Me Namora – Natiruts (2 acordes)',
      'Flores – Titãs (2 acordes)',
      'Asa Branca – Luiz Gonzaga (2 acordes)',
      'Velha Infância – Tribalistas (2 acordes)',
      'Anjos – O Rappa (2 acordes)',
      'Menino da Porteira – Sérgio Reis (2 acordes)',
      'Que País É Este? – Legião Urbana (2 acordes)',
      'La Belle De Jour – Alceu Valença (5 acordes)',
      'Anunciação – Alceu Valença (5 acordes)',
      'Sutilmente – Skank (5 acordes)',


    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
    });
  
  }


  render(){
    return(
      <ImageBackground  source={require('./fundo.png')} style={styles.fundo}  >
      
        <View style={styles.container} > 

        <Text style={styles.textoF}>Musicas para tocar</Text>

        <Image  source={require('./fone.png')} style={styles.fone} >
        </Image>
            <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

            <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
              <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Sortear música</Text>
              </View>
            </TouchableOpacity>  
        </View>    
        </ImageBackground>

    );
  }

}

const styles = StyleSheet.create({

  fundo:{
    flex:1,
  },

  fone:{
    width:400,
    height:270,
  },


  container:{

    alignItems: 'center',
    justifyContent: 'center',
  },

  textoF:{
    fontSize: 30,
    color: 'white',
    margin: 30,
    marginTop:110,
    fontStyle: 'normal',
    textAlign: 'center'
  },

  img:{
    width: 250,
    height: 250,
  },


  textoFrase:{
    fontSize: 25,
    color: 'white',
    margin: 30,
    fontStyle: 'normal',
    textAlign: 'center'
  },

  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10 
  },


  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },


  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default App;