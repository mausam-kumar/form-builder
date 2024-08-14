import { useController } from "react-hook-form";
import { FormInputComponentErrors } from "./FormComponentError";

const CheckboxInputForm = ({ name }: { name: string }) => {
    const {
        field: { value: selected, onChange: handleValueChange },
        fieldState,
    } = useController({ name });

    return <div>
        <div className="relative flex items-start">
            <div className="flex h-6 items-center">
                <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    checked={selected}
                    onChange={handleValueChange}
                    aria-describedby="comments-description"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
            </div>
            <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                    New comments
                </label>{' '}
                <span id="comments-description" className="text-gray-500">
                    <span className="sr-only">New comments </span>so you always know what's happening.
                </span>
            </div>
        </div>
        {fieldState.error?.message && (
          <FormInputComponentErrors errorMessage={fieldState.error?.message} />
        )}
    </div>
};

export default CheckboxInputForm