import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./imageInput";

export default function ImageInputList({
	imageUris = [],
	onAddImage,
	onRemoveImage,
}) {
	const scrollView = useRef();
	return (
		<View>
			<ScrollView
				horizontal
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<ImageInput
							imageUri={uri}
							key={uri}
							onChangeImage={() => onRemoveImage(uri)}
						/>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
});
