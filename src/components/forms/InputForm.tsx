import { useController } from "react-hook-form";
import { FormInputComponentErrors } from "./FormComponentError";

const InputForm = ({
    name,
    prefix
}: {
    name: string;
    prefix: string
}) => {
    const { field, fieldState } = useController({ name });

    return (
        <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {prefix}
        </label>
        <div className="mt-2">
          <input
            {...field}
            placeholder="you@example.com"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="h-5 flex items-center">
        {fieldState.error?.message && (
          <FormInputComponentErrors errorMessage={fieldState.error?.message} />
        )}
      </div>
      </div>
    );
};

export default InputForm