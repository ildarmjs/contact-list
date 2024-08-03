import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ProjectActions, SET_GROUP_CONTACTS } from "../actions/actions-contacts";
import { DATA_GROUP_CONTACT } from "src/__data__";

const initialState: GroupContactsDto[] = DATA_GROUP_CONTACT; // Начальное состояние - пустой массив групп контактов

export const groupsReducer = (state = initialState, action: ProjectActions) => {
	switch (action.type) {
		case SET_GROUP_CONTACTS:
			return action.payload; // Возвращаем новые группы из действия
		default:
			return state; // Возвращаем текущее состояние, если действие не распознано
	}
};