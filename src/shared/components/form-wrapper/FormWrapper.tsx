import { ReactNode } from 'react';
import { 
    UseFormReturn, 
    FieldValues, 
    SubmitHandler, 
    useForm, 
    DefaultValues 
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
    ZodType, 
    ZodTypeDef 
} from 'zod';

interface IFormWrapper<T extends FieldValues, Schema> {
    children: (methods: UseFormReturn<T>) => ReactNode;
    onSubmit: SubmitHandler<T>;
    schema: Schema;
    defaultValues?: DefaultValues<T>;
    className?: string;
}

const FormWrapper = <T extends FieldValues, Schema extends ZodType<T, ZodTypeDef, T>>({
    children,
    onSubmit,
    schema,
    defaultValues,
    className = ''
}: IFormWrapper<T, Schema>) => {

    const methods = useForm<T>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    return (
        <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
            {children(methods)}
        </form>
    );
};

export default FormWrapper;