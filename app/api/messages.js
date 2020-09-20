import client from "./client";

const send = (message, listingId) => {
	try {
		return client.post("/messages", {
			message: message,
			listingId: listingId,
		});
	} catch (error) {
		console.log("unable to post the message", error);
	}
};

export default {
	send,
};
