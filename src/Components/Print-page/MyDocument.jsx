import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import printImage from "./../../Assets/Images/user-1.jpg";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: '#E4E4E4',
        textAlign: "center",
    },
    section: {
        margin: 30,
        padding: "100px 20px",
        flexGrow: 1,
        backgroundColor: '#f9f0ff',
        borderRadius: "15px",
    },
    name: {
        fontSize: "32px",
        marginBottom: 10,
    },
    position: {
        fontSize: "18px",
        color: "#434343",
        marginBottom: 20,
    },
    message: {
        fontSize: "16px",
        color: "#73738c",
        lineHeight: 1.7,
    },
    image: {
        width: 150,  // Adjust the width as needed
        height: 150, // Adjust the height as needed
        objectFit: "cover",
        borderRadius: "50%",
        margin: "0 auto 20px",
    },
});

// Create Document Component
const MyDocument = ({ name, position, message, image }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                {<Image src={{ uri: printImage, method: 'GET', headers: {}, body: '' }} style={styles.image} />}
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.position}>{position}</Text>
                <Text style={styles.message}>{message}</Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;