import { combineReducers } from "redux";
import { gameFieldReducer } from "./game-field/game-field";


export const rootReducer = combineReducers({
    gameField: gameFieldReducer,
//   ingredients: ingredientsReducer,
//   burgerConstructor: constructorReducer,
//   orderElement: orderElementReducer,
//   modal: modalReducer,
//   tabBar: tabBarReducer,
//   login: loginReducer,
//   register: registerReducer,
//   forgotPassword: forgotPasswordReducer,
//   resetPassword: resetPasswordReducer,
//   token: tokenReducer,
//   profile: profileReducer,
//   ws: wsReducer,
});