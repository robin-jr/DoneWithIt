import React, { useState } from "react";
import { FlatList } from "react-native";
import Screen from "./screen";
import {
	ListItem,
	ListItemSeparator,
	ListItemDeleteAction,
} from "../components/list";

export default function MessagesScreen() {
	const initialMessages = [
		{
			id: 1,
			title: "I am Mosh",
			subtitle: "d",
		},
		{ id: 2, title: "I am Also Mosh ", subtitle: "d2" },
	];
	const [refreshing, setRefreshing] = useState(false);
	const handlePress = () => {
		alert("pressed");
	};
	const [messages, setMessages] = useState(initialMessages);
	const handleDelete = (item) => {
		setMessages(messages.filter((m) => m.id !== item.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(messages) => messages.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						onPress={handlePress}
						title={item.title}
						showChevron
						subtitle={item.subtitle}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
						image={require("../assets/mosh.jpg")}
					/>
				)}
				ItemSeparatorComponent={() => <ListItemSeparator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([{ id: 1, title: "I am Mosh", subtitle: "d" }]);
				}}
			/>
		</Screen>
	);
}
