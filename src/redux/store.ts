import { applyMiddleware, combineReducers, createStore } from "redux"
import { contactsReducer } from "./contacts-reducer/contacts-reducer";
import { favoritesReducer } from "./favorite-reducer/favorite-reducer";
import { groupsReducer } from "./groups-reducer/groups-reducer";





const rootReducer = combineReducers({
	contacts: contactsReducer,
	favorites: favoritesReducer,
	groups: groupsReducer,
});

export const store = createStore(
	rootReducer
)

export type RootState = ReturnType<typeof store.getState>
