import { useController } from "react-hook-form";
import { FormInputComponentErrors } from "./FormComponentError";
import CreatableSelect from "react-select/creatable";

export const CreatableMultiSelectForm = ({
    name,
    options = [],
    placeholder,
  }: {
    name: string;
    options?: { label: string; value: string | number }[];
    placeholder: string;
  }) => {
    const {
      field: { value, onChange: handleValueChange },
      fieldState,
    } = useController({ name });
  
    return (
      <>
        <p className="bg-white px-1 text-gray-900 pb-2 text-sm font-medium">{placeholder}</p>
        <CreatableSelect
          isMulti
          options={options}
          onChange={handleValueChange}
          value={value}
        />
        <div className="h-6 flex items-center">
          {fieldState.error?.message && (
            <FormInputComponentErrors errorMessage={fieldState.error?.message} />
          )}
        </div>
      </>
    );
  };
  