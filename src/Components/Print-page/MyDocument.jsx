import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

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
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    name: {
        fontSize: "32px",
        marginBottom: 10,
    },
    position: {
        fontSize: "18px",
        color: "#434343",
        marginBottom: 10,
    },
    message: {
        fontSize: "16px",
        color: "#73738c",
    },
    image: {
        width: 200,  // Adjust the width as needed
        height: 200, // Adjust the height as needed
    },
});

// Create Document Component
const MyDocument = ({ name, position, message, image }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                {/* <Image src={image} cache={false} style={styles.image} /> */}
                <View style={styles.section}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.position}>{position}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                {/* <Image src={image} style={styles.image} cache={false} /> */}
            </View>
        </Page>
    </Document>
);

export default MyDocument;