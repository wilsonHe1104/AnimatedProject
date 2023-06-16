import React, { useRef } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const RNAnimated = () => {

    const position = useRef(
        Array(200)
            .fill(0)
            .map(
                () =>
                    new Animated.ValueXY({
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 900 - 450,
                    }),
            ),
    ).current;

    const movingTo = () => {
        position.forEach((p) => {
            Animated.timing(
                p, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: true }, // Back to zero
            ).start(({ finished }) => {
                if (finished) {
                    movingOut();
                }
            });
        });
    };

    const movingOut = () => {
        position.forEach((p) => {
            Animated.timing(
                p, // Auto-multiplexed
                {
                    toValue: {
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 900 - 450,
                    },
                    useNativeDriver: true,
                }, // Back to zero
            ).start(({ finished }) => {
                if (finished) {
                    movingTo();
                }
            });
        });
    };

    return (
        <View style={styles.container}>
            {position.map((p, index) => (
                <Animated.View
                    key={index}
                    style={[
                        { transform: [{ translateX: p.x }, { translateY: p.y }] },
                        styles.springBox,
                    ]}
                />
            ))}
            <View style={styles.buttonRow}>
                <Button title="Moving To" onPress={movingTo} />
                <Button title="Moving Out" onPress={movingOut} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
    },
    fadingText: {
        fontSize: 28,
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
    },
    box: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
    },
    springBox: {
        position: 'absolute',
        backgroundColor: 'black',
        height: 20,
        width: 20,
        borderRadius: 8,
    },
});

export default RNAnimated;