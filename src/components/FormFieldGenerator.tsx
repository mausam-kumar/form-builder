/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { SelectMenu } from "./forms/SelectMenu";
import { availableFields } from "../utils/constant";
import Button from "./Button";
import InputForm from "./forms/InputForm";
import { useFormStateContext } from "../context/FormStateProvider";
import { CreatableMultiSelectForm } from "./forms/CreatableMultiSelectForm";

const FormFieldGenerator = () => {
    const { setFormState, formState } = useFormStateContext()
    const methods = useForm({
        defaultValues: {
            title: "",
            placeholder: "",
            type: {} as any,
            options: [],
            name: ""
        },
        mode: "onSubmit",
    });
    const { handleSubmit, resetField, control } = methods;

    const fileType = useWatch({
        name: "type",
        control,
    });
    
    const showOptionField = fileType?.id === "dropdown"
    const handleFormSubmit = (formData: unknown) => {
        const { type: fileType, placeholder, title, options, name } = formData as any
        
        setFormState([...formState, { title, placeholder, type: fileType?.id, options: options?.map((option: any) => ({  id: option.label, name: option.value}) ), name }])
        resetField("placeholder")
        resetField("title")
        resetField("type")
        resetField("options")
        resetField("name")
    }

    return <div className="w-full sm:min-w-96 p-4 border rounded-lg shadow-lg">
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full">
                <SelectMenu options={availableFields} name="type" title="Choose Input field type" />
                <InputForm name="name" title="Name" placeholder="Name *Should be unique across form." />
                <InputForm name="title" title="Write title for your Input field" placeholder="Add title" />
                <InputForm name="placeholder" title="Write placeholder for your Input field" placeholder="Add placeholder" />
                {showOptionField && <CreatableMultiSelectForm name="options" placeholder="Start typing to add options for dropdown" />}
                <Button type="submit" text="Add" />
            </form>
        </FormProvider>
    </div>
};

export default FormFieldGenerator