import React, { useState, useEffect } from "react";
import {StyleSheet, Platform, View, Image  } from "react-native";
import MapView ,{Marker} from "react-native-maps";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { Icon } from "react-native-elements";
import mapStyle from "./json/mapStyle.json";
import metroJson from "./json/metro.json";
import ubike from "./json/ubike.json";
import axios from "axios";
const UBIKE_URL =
  "https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview";


const App = () => {
  let [region , setRegion] = useState({
    longitude: 121.459465,
    latitude: 25.008798, 
    longitudeDelta: 0.01,
    latitudeDelta: 0.02,
  });

  const [marker , setMarker] = useState({
    coord:{
      longitude: 121.459465,
      latitude: 25.008798, 
    },
    name:"捷運府中站",
    address:"新北市板橋區縣民大道1段193號",
  });
  const [onCurrentLocation, setOnCurrentLocation] = useState(false);
  const [metro, setMetro] = useState(metroJson);
  const [ubike, setUbike] = useState([]);

  const onRegionChangeComplete = (rgn) => {
    if (
      Math.abs(rgn.latitude - region.latitude) > 0.002 ||
      Math.abs(rgn.longitude - region.longitude) > 0.002
    ) { 
      setRegion(rgn);
      setOnCurrentLocation(false);
    }
  };
  

  const getUbikeAsync = async () => {
    let response = await axios.get(UBIKE_URL);
    setUbike(response.data);
  };

  const setRegionAndMarker = (location) => {
    setRegion({
      ...region,
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    setMarker({
      ...marker,
      coord: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    });
  };

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setRegionAndMarker(location);
    setOnCurrentLocation(true);
  };

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      getLocation();
      getUbikeAsync();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        region={region}
        style={{ flex: 1 }}
        showsTraffic
        provider="google"
        onRegionChangeComplete={onRegionChangeComplete}
        customMapStyle={mapStyle}
      >
         <Marker
          coordinate={marker.coord}
          title={marker.name}
          description={marker.address}
        >
          <View style={styles.ring} />
        </Marker>
      {metro.map((site) => (
          <Marker
            coordinate={{ latitude: site.latitude, longitude: site.longitude }}
            key={`${site.id}${site.line}`}
            title={site.name}
            description={site.address}
          >
            <Image
              source={require("./imgs/metro1.png")}
              style={{ width: 26, height: 28 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
      {ubike.map((site) => (
          <Marker
            coordinate={{
              latitude: Number(site.lat),
              longitude: Number(site.lng),
            }}
            key={site.sno}
            title={`${site.sna} ${site.sbi}/${site.tot}`}
            description={site.ar}
            >
              <Image 
              source={require("./imgs/ubike.png")}
              style={{ width: 26, height: 28 }}
              resizeMode="contain"
            />
              </Marker>
        ))}
      </MapView>
      {!onCurrentLocation && (
        <Icon
          raised
          name="ios-locate"
          type="ionicon"
          color="black"
          containerStyle={{
            backgroundColor: "#517fa4",
            position: "absolute",
            right: 20,
            bottom: 40,
          }}
          onPress={getLocation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ring:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor: "rgba(270,5,152,0.3)",
    borderWidth: 10,
    borderColor:"rgba(280,5,180,0.5)",
  },
});

export default App;
