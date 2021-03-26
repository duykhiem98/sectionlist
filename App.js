import React,{useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,TouchableOpacity } from "react-native";
import styled from "styled-components";

const DATA = [
  {
    title: "Thit bo",
    data: ["Bo my", "Bo VietNam", "Bo uc"]
  },
  {
    title: "Thit ga",
    data: ["Ga my", "Ga ta", "ga gô"]
  },
  {
    title: "Drinks",
    data: ["Cocacola", "Pepsi", "Bia"]
  },
  {
    title: "Sua",
    data: ["Sữa bò", "Sữa dừa"]
  }
];
const Item = ({ title }) => {
  const [isShowInfo,setIsShowInfo] = useState(false);
   const onPress = () => {
      setIsShowInfo(isShowInfo ? false : true)
   }
  return(
   <> 
  <Istyled onPress={onPress}>
    <Stitle>{title}</Stitle>
  </Istyled>
  {
    
    isShowInfo 
   ? <Stitle>ok men</Stitle>
   : null
  }
  </>
)};

const App = () => (
  <View style={{flex:1,backgroundColor:'white'}}> 
  <Sviewup>
    <Text style={{fontSize:30,fontWeight:'bold'}}>MENU</Text>
    
  </Sviewup>

  <Sview>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Sheader>{title}</Sheader>
      )}
    />
  </Sview>
  </View>
);
const Sview=styled.SafeAreaView`
  flex:9;
  padding:20px;


`;
const Istyled=styled.TouchableOpacity`
  background-color:white;
  padding:20px 10px 0 10px;
  border-bottom-width:0.7px;
  border-bottom-color:#A1A1A1
`;
const Sheader=styled.Text`
    font-size:32px;
    padding:20px 20px 20px 0;
    background-color:#fff

`;
const Stitle =styled.Text`
    font-size:24px
`;
const Sviewup=styled.View`
    flex:1;
    background-color:white;
    align-items:center;
    justify-content:flex-end;
    border-bottom-width:0.7px;
    border-bottom-color:#A1A1A1
`;

export default App;