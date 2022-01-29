import Constants from "./auth.constants";

const INITIAL_STATE = {

}



const authReducer = (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case Constants.SIGN_UP_USER_START:
			
			return {
				...state
			};
	
		default:
			return state;
	}
}


export default authReducer