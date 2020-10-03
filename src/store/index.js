import axios from "axios";
import { atom } from "recoil";
import { selector } from "recoil";

const theme = atom({
	key: "default-theme",
	default: "dark",
});

const authUser = selector({
	key: "auth-user",
	get: async () => {
		let user = null;

		try {
			let { data } = await axios.get("http://jsonplaceholder.typicode.com/users/2");
			user = { user: data };
		} catch (error) {
			user = { user: error };
		}

		return user;
	},
});

export { authUser, theme };
