import { createSlice } from "@reduxjs/toolkit";
import { DATA_CONTACT } from "src/__data__";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { ProjectActions } from "./actions/actions-contacts";

const initialState: FavoriteContactsDto = [
	DATA_CONTACT[0].id,
	DATA_CONTACT[1].id,
	DATA_CONTACT[2].id,
	DATA_CONTACT[3].id
]

export const favoriteSlice = createSlice({
	name: 'favorite-slice',
	initialState,
	reducers: {
		getFavorites(state) {
			return state
		}
	}
})

export const { getFavorites } = favoriteSlice.actions