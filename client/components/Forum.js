import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import axios from "axios";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './Authentification/CredentialsContext.js';

const Forum = () => {
  const navigation = useNavigation();
  const [subjects, setData] = useState([
    {
      ownerName: "user",
      title: "Oxygéne machine",
      createdAt: "04-01-2022",
      text: "bla bala blaaa blaaa bla",
      numberOfComments: 23,
      likesCount: 10,
      comments: [
        { By: "lofi", body: "nice", createdAt: "04-01-2022", likes: 4 },
        { By: "sick", body: "bullshit", createdAt: "04-01-2022", likes: 5 },
      ],
    },
    {
      ownerName: "user2",
      title: "Oxygéne machine",
      createdAt: "04-01-2022",
      text: "bla bala blaaa blaaa bla",
      numberOfComments: 23,
      likesCount: 10,
      comments: [],
    },
    {
      ownerName: "user3",
      title: "Oxygéne machine",
      createdAt: "04-01-2022",
      text: "bla bala blaaa blaaa bla",
      numberOfComments: 23,
      likesCount: 10,
      comments: [],
    },
  ]);
  // useEffect(async () => {
  //   const result = await axios("./forum");
  //   setData(result.data);
  // }, []);

 

  return (
    <View style={styles.container}>
      <ScrollView>
      <Button
                title="write a blog"
                onPress={() => navigation.navigate("AddBlog")}
              />
        {subjects.map((item, index) => {
          return (
            <View key={index} style={styles.item}>
              <Text> {item.title}</Text>
              <Text> By:{item.ownerName}</Text>
              <Text>Posted At : {item.createdAt}</Text>
              <Text>Posted At : {item.text}</Text>
              <Text> {item.numberOfComments} Comments</Text>
              <Text> {item.likesCount} Likes</Text>
              <Button
                title="more details"
                onPress={() => navigation.navigate("ForumPost", item)}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
export default Forum;
