import { combineReducers, } from "redux"
import { contactsReducer } from "./contacts-reducer/contacts-reducer";
import { favoritesReducer } from "./favorite-reducer/favorite-reducer";
import { groupsReducer } from "./groups-reducer/groups-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { groupsApiSlice } from "./groups-api";
import { contactsApiSlice } from "./contacts-api";
import { favoriteSlice } from "./favorite-slice";


const rootReducer = combineReducers({
	favorites: favoriteSlice.reducer,
	[groupsApiSlice.reducerPath]: groupsApiSlice.reducer,
	[contactsApiSlice.reducerPath]: contactsApiSlice.reducer
});

export const store = configureStore(
	{
		reducer: rootReducer,
		devTools: true,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(groupsApiSlice.middleware, contactsApiSlice.middleware),
	}
)

export type RootState = ReturnType<typeof store.getState>
