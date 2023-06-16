import { View } from "react-native";

const ReactSpringAnimated = () => {
    const [movingBoxs, boxsApi] = useSprings(
        200,
        () => ({
            from: { top: Math.random() * 900, left: Math.random() * 400 },
            to: { top: 350, left: 190 },
            // delay: 2000,
            // loop: true,
            // reverse: true,
            onRest: (result, spring) => {
                if (result.value.top !== 350 && result.value.left !== 190) {
                    spring.start({
                        to: { top: 350, left: 190 },
                        from: { ...result.value },
                    });
                } else {
                    spring.start({
                        to: { top: Math.random() * 900, left: Math.random() * 400 },
                        from: { ...result.value },
                    });
                }
            },
        }),
        [],
    );

    return (
        <View>
            {movingBoxs.map((props) => (
                <animated.View
                    style={{
                        ...props,
                        ...styles.springBox,
                    }}
                />
            ))}
            <View style={styles.buttonRow}>
                <Button
                    title="Resume"
                    onPress={() => {
                        boxsApi.resume();
                    }}
                />
                <Button
                    title="Stop"
                    onPress={() => {
                        boxsApi.pause();
                    }}
                />
            </View>
        </View>
    )
}

export default ReactSpringAnimated