import { SubmitHandler } from "react-hook-form";
import { ApplyFormFields, ApplyFormSchema } from "../../models/applyFormSchema";
import FormWrapper from "@/shared/components/form-wrapper/FormWrapper";
import InputField from "@/shared/components/input-field/InputField";
import Button from "@/shared/components/buttons/Button";

interface IApplyForm {
    onSubmit: SubmitHandler<ApplyFormFields>;
    defaultValues?: Partial<ApplyFormFields>;
}

const ApplyForm = ({
    onSubmit,
    defaultValues
}: IApplyForm) => {
    return (
        <FormWrapper
            onSubmit={onSubmit}
            schema={ApplyFormSchema}
            defaultValues={defaultValues}
            className="grid grid-cols-2 gap-4 mt-12"
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
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        control={control}
                    />
                    <Button 
                    type="submit"
                    className="col-span-2"
                    >
                        Submit Application
                    </Button>
                </>
            )}
        </FormWrapper>
    )
}

export default ApplyForm