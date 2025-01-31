import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@app/index";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
