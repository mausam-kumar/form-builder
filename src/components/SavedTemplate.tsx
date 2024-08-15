/* eslint-disable @typescript-eslint/no-explicit-any */
import { TField } from "../types";
import InputForm from "./forms/InputForm";
import { SelectMenu } from "./forms/SelectMenu";
import UploadFromDevice from "./forms/UploadFromDevice";
import CheckboxInputForm from "./forms/CheckboxInputForm";
import { FormProvider, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import TextArea from "./forms/TextArea";

const SavedTemplates = () => {
    const methods = useForm({
        defaultValues: {},
        mode: "onSubmit",
    });
    const { handleSubmit } = methods;

    const [cookies] = useCookies(["templates"]);


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
            case "textarea":
                return <TextArea key={name} name={name} title={title} />
        }
    }

    const templates = cookies.templates || []
    console.log(templates)
    const handleFormSubmit = () => {
        // setCookie("templates", [...prevTemplates, { id: uuidv4(), config: formState }])
    }

    return <div className="w-full sm:min-w-96 p-4 border rounded-lg shadow-lg">
        <p className="pb-4 font-medium leading-6 text-gray-900">
            Saved Templates
        </p>
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-full space-y-8">
                {
                    templates.map((state: any) => <div>
                        <p className="pb-4 font-medium leading-6 text-gray-900">
           {state.id}
        </p>
                        {
                        state.config.map((value: any) => renderAction(value))
                    }</div>)
                }
                {/* {!!formState?.length && <Button disabled={!!formProviderState.isSubmitSuccessful} type="submit" text={formProviderState.isSubmitSuccessful ? "Saved" : "Save Template"} />} */}
            </form>
        </FormProvider>
    </div>
};

export default SavedTemplates