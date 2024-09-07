import { ApplyFormFields, ApplyFormSchema } from '../../model/applyFormSchema';
import { SubmitHandler } from "react-hook-form";
import Button from '@/shared/components/buttons/Button';
import FormWrapper from '@/shared/components/form-wrapper/FormWrapper';
import InputField from '@/shared/components/input-field/InputField';
import TextareaField from '@/shared/components/text-area-field/TextAreaField';

interface IApplyForm {
    onSubmit: SubmitHandler<ApplyFormFields>;
    defaultValues?: Partial<ApplyFormFields>;
}

const ApplyForm = ({ onSubmit, defaultValues }: IApplyForm) => {
    return (
        <FormWrapper<ApplyFormFields, typeof ApplyFormSchema>
            onSubmit={onSubmit}
            schema={ApplyFormSchema}
            defaultValues={defaultValues}
            className="grid grid-cols-2 gap-4"
        >
            {({ control }) => (
                <>
                    <InputField<ApplyFormFields>
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        type="text"
                        placeholder="Enter your full name"
                        control={control}
                    />
                    <InputField<ApplyFormFields>
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        control={control}
                    />
                    <InputField<ApplyFormFields>
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        type="tel"
                        placeholder="Enter your phone number"
                        control={control}
                    />
                    <InputField<ApplyFormFields>
                        id="dateOfBirth"
                        name="dateOfBirth"
                        label="Date of Birth"
                        type="date"
                        control={control}
                    />
                    <TextareaField<ApplyFormFields>
                        id="description"
                        name="description"
                        label="Describe yourself"
                        className='col-span-2'
                        control={control}
                    />
                    <Button
                        type="submit"
                        className='col-span-2 mt-8'
                    >
                        Submit Application
                    </Button>
                </>
            )}
        </FormWrapper>
    );
};

export default ApplyForm;