import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ProjectActions } from "./actions/actions-contacts";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<Dispatch<ProjectActions>>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector