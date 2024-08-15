//* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormStateContext } from "../context/FormStateProvider";
import { TField } from "../types";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./forms/InputForm";
import { SelectMenu } from "./forms/SelectMenu";
import UploadFromDevice from "./forms/UploadFromDevice";
import CheckboxInputForm from "./forms/CheckboxInputForm";
import { FormProvider, useForm } from "react-hook-form";
import Button from "./Button";
import { useCookies } from "react-cookie";

const FormMapper = () => {
    const { formState } = useFormStateContext()
    const methods = useForm({
        defaultValues: {},
        mode: "onSubmit",
    });
    const { handleSubmit, formState: formProviderState } = methods;

    const [cookies, setCookie] = useCookies(["templates"]);

    const renderAction = (data: TField) => {
        const { title, placeholder, options = [], name } = data || {}
        switch (data.type) {
            case "text":
                return <InputForm key={name} name={name} title={title} placeholder={placeholder} />
            case "dropdown":
                return <SelectMenu key={name} name={name} title={title} options={options} />
            case "file":
                return <UploadFromDevice key={name} name={name} title={title} />
            case "checkbox":
                return <CheckboxInputForm key={name} name={name} title={title} />
            case "textArea":
                return <UploadFromDevice key={name} name={name} title={title} />
        }
    }

    const handleFormSubmit = () => {
        const prevTemplates = cookies.templates || []
        setCookie("templates", [...prevTemplates, { id: uuidv4(), config: formState }])
    }

    return <div className="w-full sm:min-w-96 p-4 border rounded-lg shadow-lg">
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full">
                {
                    formState.map((state) => renderAction(state))
                }
                {!!formState?.length && <Button disabled={!!formProviderState.isSubmitSuccessful} type="submit" text="Save Template" />}
            </form>
        </FormProvider>
    </div>
};

export default FormMapper