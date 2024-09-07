import { TextareaHTMLAttributes } from 'react';
import { 
    useController, 
    Control, 
    FieldValues, 
    Path 
} from 'react-hook-form';

interface ITextArea<T extends FieldValues> extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'name'> {
    id: string;
    label: string;
    control: Control<T>;
    name: Path<T>;
}

const TextareaField = <T extends FieldValues>({
    id,
    label,
    control,
    name,
    className,
    disabled = false,
    ...props
}: ITextArea<T>) => {

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <label className="text-sm font-medium" htmlFor={id}>
                {label}
            </label>
            <div className="relative">
                <textarea
                    {...field}
                    {...props}
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

export default TextareaField;