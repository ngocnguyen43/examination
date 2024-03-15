"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { LoaderCircle } from "lucide-react"

const formSchema = z.object({
    email: z.string().min(1, {
        message: "Username is required.",
    }).email({ message: "Username is invalid" }),
    password: z.string().min(1, {
        message: "Password is required.",
    }),
})

export function LoginForm({ email, password, button }: { email: string, password: string, button: string }) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    const { formState } = form
    const { isSubmitting, isDirty, isValid } = formState;
    const localActive = useLocale();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const { email, password } = values
        // router.push(`${localActive}/profile`)
        const response = await fetch('https://frontend-exam.digitalfortress.dev/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        // console.log(response);
        if (response.ok) {
            // const json = await response.body
            const data: { "access_token": string, "refresh_token": string } = await response.json()
            const { access_token, refresh_token } = data
            localStorage.setItem("__ac", access_token)
            localStorage.setItem("__rc", refresh_token)
            router.push(`/${localActive}/projects`,)
            router.refresh()
        }

    }
    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[25%]" >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{email}</FormLabel>
                            <FormControl className="h-14">
                                <Input placeholder="example@email.com" {...field} className="text-xl" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{password}</FormLabel>
                            <FormControl className="h-14">
                                <Input  {...field} type="password" className="text-xl" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="h-12 disabled:cursor-not-allowed w-[150px]" type="submit" disabled={!isDirty || !isValid || isSubmitting}
                >{isSubmitting ? <LoaderCircle className="animate-spin" />
                    : button}</Button>
            </form>
        </Form>
    )
}
