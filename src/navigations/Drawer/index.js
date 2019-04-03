import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Button } from 'native-base';
import { icons, images } from '../../utils';
const { width, height } = Dimensions.get("window");

export default class Drawer extends Component {
    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'transparent',
            }}>
                <ImageBackground source={images.drawer_image} style={{ width: width * 0.74, height: "100%" }} resizeMode="cover">
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "52%", alignItems: 'center' }}>
                                <View style={{
                                    backgroundColor: "#fff",
                                    width: 100,
                                    height: 100,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 1000,
                                }}>
                                    <Thumbnail large source={{ uri: uri }} />

                                </View>

                                <View>
                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                        HIII
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View style={{ flex: 0.7, justifyContent: "flex-start", alignItems: 'center', marginTop: 50 }}>
                            <View style={{ flex: 1, width: "65%" }}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            source={icons.Home}
                                            style={{
                                                width: "14%",
                                                height: "80%"
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> Home </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flex: 1, width: "65%" }}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            source={icons.history}
                                            style={{
                                                width: "14%",
                                                height: "80%"
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> History </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flex: 1, width: "65%" }}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            source={icons.help}
                                            style={{
                                                width: "14%",
                                                height: "80%"
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> Notifications </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                            <View style={{ flex: 1, width: "65%" }}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            source={icons.refer}
                                            style={{
                                                width: "14%",
                                                height: "80%"
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> Refer a friend </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                            <View style={{ flex: 1, width: "65%" }}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            source={icons.heart}
                                            style={{
                                                width: "14%",
                                                height: "80%"
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> Comingoo & you </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                            <View style={{ flex: 1, width: "65%" }}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                        <Image
                                            source={icons.help}
                                            style={{
                                                width: "14%",
                                                height: "80%"
                                            }}
                                            resizeMode="contain"
                                        />
                                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> Help </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                        </View>


                        <View style={{
                            backgroundColor: "#fff",
                            height: 3,
                            width: width * 0.68
                        }} />

                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: "center", }}>

                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={{ flexDirection: "row", paddingRight: "35%", width: '65%' }}>
                                    <Image
                                        source={icons.logout}
                                        style={{
                                            width: "14%",
                                            height: "80%"
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }}> Help </Text>
                                </View>
                            </TouchableOpacity>



                        </View>

                    </View>


                </ImageBackground>
            </View >
        )
    }
}