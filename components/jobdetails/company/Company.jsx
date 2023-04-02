import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

import styles from "./company.style";

const Company = ({ companyName, jobTitle, location, companyLogo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          // resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} </Text>
      </View>
      <View
        style={{
          display:'flex',
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
          marginTop: 4
        }}
      >
        <Image
          source={icons.location}
          resizeMode="contain"
          style={styles.locationImage}
        />
        <Text style={styles.locationName}>{location}</Text>
      </View>
    </View>
  );
};

export default Company;
