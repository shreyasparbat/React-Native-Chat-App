import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native'

import { 
    List, 
    ListItem 
} from "react-native-elements";

import {
    Actions
} from 'react-native-router-flux'

export default class ChatRoomList extends React.Component {

    state = {
        rowData:[{id: "ChatRoom1"}, {id: "ChatRoom2"}, {id: "ChatRoom3"}, {id: "ChatRoom4"}],
    };

    render() {
        return (
            <List>
                <FlatList
                    data={this.state.rowData}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={`${item.id}`} 
                            avatar={{ uri: "https://www.gravatar.com/avatar/" }}
                            onPress={() => { 
                                Actions.chat({
                                    chatRoomId: item.id,
                                });
                            }}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </List>           
        );
    }
}







// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ListView,
//   Image,
//   Button,
//   TextInput
// } from "react-native";

// import firebase from "firebase";
// import Spinner from "react-native-loading-spinner-overlay";

// //import Chat from "./Chat";

// import {
//     Actions
// } from 'react-native-router-flux'

// var name, chatRoomId;

// export default class ChatRoomList extends React.Component {
//   state = {
//     chatRoomId:"",
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2
//       }),
//       loading: true
//     };
//     this.chatRoomListRef = firebase.database().ref();
//   }


// //   listenForItems(chatRoomListRef) {
// //     var user = firebase.auth().currentUser;

// //     chatRoomListRef.on("value", snap => {
// //       // get children as an array
// //       var items = [];
// //       snap.forEach(child => {
// //         if (child.val().email != user.email)
// //           items.push({
// //             name: child.val().name,
// //             uid: child.val().uid,
// //             email: child.val().email
// //           });
// //       });

// //       this.setState({
// //         dataSource: this.state.dataSource.cloneWithRows(items),
// //         loading: false
// //       });
// //     });
// //   }

// //   componentDidMount() {
// //     this.listenForItems(this.chatRoomListRef);
// //   }

//   static navigationOptions = {
//     headerStyle: {
//       backgroundColor: "#16a085",
//       elevation: null
//     },
//   };

//   renderRow = rowData => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//             chatRoomId = rowData.chatRoomId;
            
//             Actions.chatRoomList({
//                 name: this.props.name,
//                 chatRoomId: chatRoomId,
//             });
//         }}
//       >
//         <View style={styles.profileContainer}>
//           <Image
//             source={{
//               uri: "https://www.gravatar.com/avatar/"
//             }}
//             style={styles.profileImage}
//           />
//           <Text style={styles.profileName}>{rowData.chatRoomId}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.topGroup}>
//           <Text style={styles.myFriends}>My Friends</Text>
//         </View>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={this.renderRow}
//         />
//         <Spinner visible={this.state.loading} />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "stretch",
//     marginRight: 10,
//     marginLeft: 10
//   },
//   rightButton: {
//     marginTop: 10,
//     marginLeft: 5,
//     marginRight: 10,
//     padding: 0
//   },
//   topGroup: {
//     flexDirection: "row",
//     margin: 10
//   },
//   myFriends: {
//     flex: 1,
//     color: "#3A5BB1",
//     tintColor: "#fff",
//     //secondaryColor: '#E9E9E9',
//     //grayColor: '#A5A5A5',
//     fontSize: 16,
//     padding: 5
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 8,
//     marginLeft: 6,
//     marginBottom: 8
//   },
//   profileImage: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     marginLeft: 6
//   },
//   profileName: {
//     marginLeft: 6,
//     fontSize: 16
//   }
// });