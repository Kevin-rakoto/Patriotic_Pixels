import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// type the useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
