import { InputHTMLAttributes } from 'react';
import { 
    useController, 
    Control, 
    FieldValues, 
    Path 
} from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'> {
    id: string;
    label: string;
    control: Control<T>;
    name: Path<T>;
}

const InputField = <T extends FieldValues>({
    id,
    label,
    control,
    name,
    type = 'text',
    disabled = false,
    ...props
}: InputFieldProps<T>) => {

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <input
                    {...field}
                    {...props}
                    type={type}
                    id={id}
                    className={`p-[10px] text-sm rounded-lg w-full ${error ? 'border-red-500' : ''
                        }`}
                    disabled={disabled}
                />
            </div>
            {error && (
                <span className="text-red-500 text-sm">{error.message}</span>
            )}
        </div>
    );
};

export default InputField;