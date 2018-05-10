/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image, ScrollView, TouchableOpacity,Linking
} from 'react-native';
import { RkButton, RkCard, RkTabView } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

let Header_main = "โรงพยาบาลศูนย์แพทย์แม่ฟ้าหลวง";
let img1 = "./img/mfu1.jpg";
let Content1 = "เป็นโรงพยาบาลขนาด 400 เตียง ที่สามารถบำบัดรักษา วิจัย โรคในสาขาต่างๆ โดยครบถ้วน ของการบริการทางสาธารณสุขของภาคเหนืออีกแห่งหนึ่งอย่างไรก็ตามด้วยความเป็นโรงพยาบาลศูนย์การแพทย์ของโรงเรียนแพทย์แห่งใหม่ของประเทศ จึงต้องการบุคลากรร่วมโครงการ โดยเฉพาะแพทย์และพยาบาลในสาขาวิชาอื่นที่เกี่ยวข้องอยู่อีกจำนวนมาก ดังนั้นแพทย์พยาบาลและบุคลากรทางการแพทย์ที่สนใจร่วมโครงการสามารถติดต่อสมัครเข้าเป็นพนักงานได้ตั้งแต่บัดนี้เป็นต้นไป " +
  "โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยแม่ฟ้าหลวง มีความมุ่งมั่น ปรารถนาอย่างแรงกล้าที่จะพัฒนาและเติบโตต่อไปให้เป็นโรงเรียนแพทย์ชั้นนำ มีบริการชั้นเยี่ยม แก่พี่น้องประชาชนทั่วไปทุกระดับ ในทุกโรค โดยตั้งเป้าหมายไว้ว่าจะไม่มีผู้ป่วยคนใดที่ถูกปฎิเสธการรักษาเพราะความยากจน โดยมุ่งหมายที่จะสนองพระราชปณิธานทางด้านการแพทย์และสาธารณสุขของ สมเด็จพระมหิตลาธิเบศร อดุลยเดชวิกรม พระบรมราชชนก และสมเด็จพระศรีนครินทราบรมราชชนนี สอบถามข้อมูลเพื่อสมัครร่วมงานหรือบริจาค ติดต่อ มหาวิทยาลัยแม่ฟ้าหลวง 0-5391-6000 หรือ  ";
let Content2 = "สร้างแพทย์ชั้นนำ สร้างคุณธรรมในใจแพทย์ วิจัยและพัฒนาเพื่อความก้าวหน้าทางการแพทย์ ให้บริการรักษาและสาธารณสุขที่ดีที่สุดแก่ผู้เจ็บป่วยทุกระดับ โดยมีพันธกิจ เป็นสถานศึกษา วิจัย ฝึกอบรม และฝึกปฏิบัติของนักศึกษาแพทย์และบุคลากรทางการแพทย์ชั้นนำ, ปฏิบัติภารกิจในการบริการทางการแพทย์โดยครบถ้วน, ให้บริการบำบัดรักษาผู้ป่วยด้วยเทคโนโลยีทางการแพทย์ที่ดีที่สุดแก่ผู้ป่วยทุกระดับ, ให้บริการผู้ป่วยทุกระดับด้วยน้ำใจและไมตรี อย่างมีคุณภาพและคุณธรรม";
let Content3 ="“ 1.เป็นสถานที่ศึกษา วิจัย และผึกปฏิบัติงานของนักศึกษา แพทย์และบุคลากรทางการแพทย์ชั้นนำ"+'\n'+
"2.ปฏิบัติภารกิจในการใหการบริการทางการแพทย์โดย"+'\n'+"ครบถ้วน"+'\n'+
"3.ให้บริการบำบัดรักษาผู้ป่วยด้วยเท¬คโนโลยีทางการแพทย์ที่ดีที่สุดแก่ผู้ป่วยทุกระดับ"+'\n'+
"4.ให้บริการผู้ป่วยทุกระดับด้วยน้ำใจไมตรี อย่างมีคุณภาพและคุณธรรม”"; 
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RkTabView>
        <RkTabView.Tab title={'โรงพยาบาล'}>
          <ScrollView>
            <RkCard>
              <View rkCardHeader>
              {/* <Icon name="bell" size={30} color="#4F8EF7" /> */}
                <Text style={styles.header}>{Header_main}</Text>
              </View>
              <TouchableOpacity>
                <Image rkCardImg source={require(img1)} />
              </TouchableOpacity>
              <View rkCardContent>
                <Text>{Content1}</Text>
                <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://www.medicalcenter.mfu.ac.th')}>
  www.medicalcenter.mfu.ac.th
</Text>
              </View>
              <View rkCardFooter>
                <Text></Text>
              </View>
            </RkCard>
          </ScrollView>
        </RkTabView.Tab>

        <RkTabView.Tab title={'วิสัยทัศน์'}>
          <ScrollView>
            <RkCard>
              <View rkCardHeader>
                <Text style={styles.header}>{Header_main}</Text>
              </View>
              <TouchableOpacity>
                <Image rkCardImg source={require(img1)} />
              </TouchableOpacity>
              <View rkCardContent>
                <Text>{Content2}</Text>
              </View>
              <View rkCardFooter>
                <Text></Text>
              </View>
            </RkCard>
          </ScrollView>
        </RkTabView.Tab>


        <RkTabView.Tab title={' พันธกิจ'}>
          <ScrollView>
            <RkCard>
              <View rkCardHeader>
                <Text style={styles.header}>{Header_main}</Text>
              </View>
              <TouchableOpacity>
                <Image rkCardImg source={require(img1)} />
              </TouchableOpacity>
              <View rkCardContent>
                <Text>{Content3}</Text>
              </View>
              <View rkCardFooter>
                <Text></Text>
              </View>
            </RkCard>
          </ScrollView>
        </RkTabView.Tab>
      </RkTabView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    //backgroundColor: 'red',
    // padding: 25,
  },
  title: {
    textAlign: 'center',
    color: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
