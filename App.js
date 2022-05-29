import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends react.Component {
  constructor() {
    super();
    this.state = {
      boxCount: 2,
      widthCon:100,
      heightCon:380,
      width: 50,
      height: 190,
      arr: [],
      flag:true
    

    }

  }
  componentDidMount=()=>{

  }
  
  automatic=(trueFlase)=>{
    if(trueFlase){
      for (let i = 0; i < (this.state.boxCount * this.state.boxCount); i++) {
        this.state.arr.push(i);
        console.log("shashiranjan",this.state.boxCount )
      }
        this.setState({flag:false,boxCount:this.state.boxCount+1})
     
    }

    
  }
 
  onClick = () => {
   
    this.setState({arr:[]})
      this.setState({flag:true})

    this.setState({
      width: ((this.state.widthCon) / this.state.boxCount),
      height: ((this.state.heightCon) / this.state.boxCount)
    })
    
  }

  render() {
   
    return (
      <View style={styles.container}>
        {this.state.arr.map(() => {
          return (
            
            <TouchableOpacity onPress={this.onClick} style={[styles.box,{width:`${this.state.width}%`},{height:this.state.height}]}>
           
            </TouchableOpacity>
          
          
          )
        })}
        {this.automatic(this.state.flag)}

      </View>

    );
  }
}


const styles = StyleSheet.create({

  container: {
   
    height: 400,
    width:"95%",
    marginTop: 150,
    marginHorizontal:10,
    flexDirection: "row",
    flexWrap: 'wrap',
  
  
  },
  box: {
     
    backgroundColor: "red",
    borderWidth: 3,
    borderColor: "white",
    justifyContent: "space-around",
    alignItems: 'center',
    margin:0,
   
  },

});
