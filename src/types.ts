export type FieldType = "text" | "textArea" | "file" | "dropdown" | "checkbox"

export type SelectMenuOption = { id: string; name: string | number }

export type TField = {
    name: string
    title: string
    placeholder: string
    type: FieldType
    options?: SelectMenuOption[]
    validationRules?: string[]
}