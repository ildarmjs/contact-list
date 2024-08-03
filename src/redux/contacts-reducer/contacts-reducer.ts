import { ContactDto } from "src/types/dto/ContactDto";
import { ProjectActions, SET_CONTACTS } from "../actions/actions-contacts";
import { DATA_CONTACT } from "src/__data__";

const initialState: ContactDto[] = DATA_CONTACT;

export const contactsReducer = (state = initialState, action: ProjectActions) => {
	switch (action.type) {
		case SET_CONTACTS:
			return action.payload;
		default:
			return state;
	}
};