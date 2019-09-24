import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import {View, Text} from 'react-native'

const TabarBottomCustom = (props) => {
  <TabBar>
            <TabBar.Item
                icon={require('~/assets/images/football.png')}
                selectedIcon={require('~/assets/images/football.png')}
                title="Tab1"
                screenBackgroundColor={{ backgroundColor: '#008080' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('~/assets/images/football.png')}
                selectedIcon={require('~/assets/images/football.png')}
                title="Tab2"
                screenBackgroundColor={{ backgroundColor: '#F08080' }}
            >
                <View>
                    {/*Page Content*/}
                </View>
            </TabBar.Item>
            <TabBar.Item
                icon={require('~/assets/images/football.png')}
                selectedIcon={require('~/assets/images/football.png')}
                title="Tab3"
                screenBackgroundColor={{ backgroundColor: '#485d72' }}
            >
              <View>
                  {/*Page Content*/}
              </View>
            </TabBar.Item>
          </TabBar>
};

export default TabarBottomCustom;