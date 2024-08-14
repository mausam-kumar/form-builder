import { FormProvider, useForm } from "react-hook-form";
import { SelectMenu } from "./forms/SelectMenu";
import { availableFields } from "../utils/constant";
import Button from "./Button";
import InputForm from "./forms/InputForm";
import { useFormStateContext } from "../context/FormStateProvider";
import { TField } from "../types";

const FormFieldGenerator = () => {
    const { setFormState, formState } = useFormStateContext()
    const methods = useForm({
        defaultValues: {
            title: "",
            placeholder: "",
            type: ""
        },
        mode: "onSubmit",
    });
    const { handleSubmit, resetField } = methods;

    const handleFormSubmit = (formData: unknown) => {
        const { type, placeholder, title } = formData as TField
        setFormState([...formState, { title, placeholder, type }])
        resetField("placeholder")
        resetField("title")
        resetField("type")
    }

    return <div className="min-w-64 p-4 border rounded-lg shadow-lg">
        <FormProvider {...methods} >
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full space-y-4">
            <SelectMenu options={availableFields} name="type" title="Choose Input field type" />
            <InputForm name="title" title="Write title for your Input field" placeholder="Add title" />
            <InputForm name="placeholder" title="Write placeholder for your Input field" placeholder="Add placeholder" />
            <Button type="submit" text="Add" />
        </form>
    </FormProvider>
    </div>
};

export default FormFieldGenerator