"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { optional, z } from "zod";
import { defaultValues } from "../../../../constants";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomField } from "./CustomField";
import { ReactNode } from "react";

export const formSchema = z.object({
    title: z.string(),
    aspectRatio: z.string().optional(),
    color: z.string().optional(),
    prompt: z.string().optional(),
    publicId: z.string(),
});

const TransformationForm = ({
    action,
    data = null,
}: TransformationFormProps) => {
    const initialValues =
        data && action === "Update"
            ? {
                  title: data?.title,
                  aspectRatio: data?.aspectRatio,
                  color: data?.color,
                  prompt: data?.prompt,
                  publicId: data?.publicId,
              }
            : defaultValues;

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <CustomField
                    control={form.control}
                    render={({ field }) => (
                        <Input {...field} className='input-field' />
                    )}
                    name='title'
                    formLabel='Image Title'
                    className='w-full'
                />
            </form>
        </Form>
    );
};

export default TransformationForm;
