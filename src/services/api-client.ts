import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "c9e70daadb754ca38c23ff082d5a5455",
	},
});
