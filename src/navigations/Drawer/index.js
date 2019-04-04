import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Button } from 'native-base';
import { icons, images } from '../../utils';
import styles from './styles';
const { width, height } = Dimensions.get("window");

export default class Drawer extends Component {


    homeNavigation = () => {
        this.props.navigation.navigate("DrawerHome");
    }


    historyNavigation = () => {
        this.props.navigation.navigate("DrawerHistory");
    }

    notificationsNavigation = () => {
        this.props.navigation.navigate("DrawerNotifications");
    }

    referNavigation = () => {
        this.props.navigation.navigate("DrawerReferAFriend");
    }

    comingooNavigation = () => {
        this.props.navigation.navigate("DrawerComingooAndYou");
    }

    helpNavigation = () => {
        this.props.navigation.navigate("DrawerHelp");
    }

    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        return (
            <View style={styles.container}>
                <ImageBackground source={images.drawer_image} style={styles.backgroundDrawerImage} resizeMode="cover">
                    <View style={styles.innerContainer}>
                        <View style={styles.innerViewContainer}>
                            <View style={styles.innerThumbnailAndTextContainer}>
                                <View style={styles.thumbnailContainer}>
                                    <Thumbnail large source={{ uri: uri }} />

                                </View>

                                <View>
                                    <Text style={styles.textContainer}>
                                        Comingoo
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.middleContainer}>
                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={this.homeNavigation}>
                                    <View style={styles.mainContainerImageAndText}>
                                        <Image
                                            source={icons.Home}
                                            style={styles.mainContainerStyles}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.mainContainerTextStyles}> Home </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={this.historyNavigation}>
                                    <View style={styles.mainContainerImageAndText}>
                                        <Image
                                            source={icons.history}
                                            style={styles.mainContainerStyles}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.mainContainerTextStyles}> History </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={this.notificationsNavigation}>
                                    <View style={styles.mainContainerImageAndText}>
                                        <Image
                                            source={icons.notification}
                                            style={styles.mainContainerStyles}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.mainContainerTextStyles}> Notifications </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={this.referNavigation}>
                                    <View style={styles.mainContainerImageAndText}>
                                        <Image
                                            source={icons.refer}
                                            style={styles.mainContainerStyles}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.mainContainerTextStyles}> Refer a friend </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={this.comingooNavigation}>
                                    <View style={styles.mainContainerImageAndText}>
                                        <Image
                                            source={icons.heart}
                                            style={styles.mainContainerStyles}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.mainContainerTextStyles}> Comingoo & you </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={this.helpNavigation}>
                                    <View style={styles.mainContainerImageAndText}>
                                        <Image
                                            source={icons.help}
                                            style={styles.mainContainerStyles}
                                            resizeMode="contain"
                                        />
                                        <Text style={styles.mainContainerTextStyles}> Help </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>


                        </View>


                        <View style={styles.underline} />

                        <View style={styles.bottomContainer}>

                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={styles.bottomInnerContainer}>
                                    <Image
                                        source={icons.logout}
                                        style={styles.bottomImageStyle}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.bottomImageTextStyle}> Logout </Text>
                                </View>
                            </TouchableOpacity>



                        </View>

                    </View>


                </ImageBackground>
            </View >
        )
    }
}