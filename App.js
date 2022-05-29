import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends react.Component {
  constructor() {
    super();
    this.state = {
      boxCount: 2,
      widthContainer:100,
      heightContainer:380,
      width: 50,
      height: 190,
      arr: [],
      flag:true
    

    }

  }
  componentDidMount=()=>{

  }
  
  updateArr=(trueFlase)=>{
    if(trueFlase){
      for (let i = 0; i < (this.state.boxCount * this.state.boxCount); i++) {
        this.state.arr.push(i);
      
      }
        this.setState({flag:false,boxCount:this.state.boxCount+1})
     
    }

    
  }
 
  onClick = () => {
   
    this.setState({arr:[]})
      this.setState({flag:true})

    this.setState({
      width: ((this.state.widthContainer) / this.state.boxCount),
      height: ((this.state.heightContainer) / this.state.boxCount)
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
        {this.updateArr(this.state.flag)}

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
