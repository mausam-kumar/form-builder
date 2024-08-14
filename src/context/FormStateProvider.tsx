"use-client"
import {
    createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from "react";
import { TField } from "../types";

type FormState = {
    formState: TField[];
    setFormState: Dispatch<SetStateAction<TField[]>>;
}

const FormStateContext = createContext<FormState>(null!);

export const FormStateProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [formState, setFormState] = useState<TField[]>([]);
    return (
        <FormStateContext.Provider
            value={{
                formState,
                setFormState,
            }}
        >
            {children}
        </FormStateContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormStateContext = () => {
    const context = useContext(FormStateContext);
    if (!context) {
        throw new Error(
            "useFormStateContext must be used within a FormStateContext",
        );
    }
    return context;
};