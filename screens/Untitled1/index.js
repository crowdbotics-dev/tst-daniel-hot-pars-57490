import { updateItem } from "../../modules/faq/store/index.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><Pressable onPress={onSubmit}><Text style={styles.EDOFptUa}> </Text></Pressable></Pressable></ScrollView>
    </SafeAreaView>;

  const onSubmit = () => {
    dispatch(updateItem({
      lorem,
      email: localEmail
    }));
  };
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  EDOFptUa: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;