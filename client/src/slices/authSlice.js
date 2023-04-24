import {url} from "./api";
import jwtDecode from "jwt-decode";



const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    _id: "",
    isAdmin: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
};

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (user, {refectWithValue}) => {
        try {
            const token = await axios.post(`${url}/register`, {
                name: user.name,

            })
        }
    }
)

const authSlice = createSlice({
    name= "auth",
    initialState,
    reducers: {
        loadUser(state,action){
            const token = state.token;

            if (token) {
                const user = jwtDecode(token);

                return {
                    ...state,
                    token,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    isAdmin: user.isAdmin,
                    userLoaded: true,
                };
            }
        },

        logoutUser(state,action) {
            localStorage.removeItem("token");

            return {
                ...state,
                token: "",
                name: "",
                email: "",
                _id: "",
                registerStatus: "",
                registerError: "",
                loginStatus: "",
                loginError: "",
                userLoaded: false,
            };
        },
    },
})