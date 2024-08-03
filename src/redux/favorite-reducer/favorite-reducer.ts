import { DATA_CONTACT } from "src/__data__";
import { ProjectActions, SET_FAVORITE_CONTACTS } from "../actions/actions-contacts";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

const initialState: FavoriteContactsDto = [
	DATA_CONTACT[0].id,
	DATA_CONTACT[1].id,
	DATA_CONTACT[2].id,
	DATA_CONTACT[3].id
]

export const favoritesReducer = (state = initialState, action: ProjectActions) => {
	switch (action.type) {
		case SET_FAVORITE_CONTACTS:
			return action.payload
		default:
			return state
	}
};