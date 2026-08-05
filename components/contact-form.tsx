"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Please enter your company name."),
  phone: z.string().optional(),
  subject: z.string().min(3, "Please enter a subject."),
  message: z.string().min(20, "Please share a few details about your project."),
  website: z.string().max(0, "Spam protection triggered.")
});

type FormValues = z.infer<typeof schema>;

const formSubmitEndpoint = "https://formsubmit.co/ajax/khababmahboobbutt@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      website: ""
    }
  });

  async function onSubmit(data: FormValues) {
    setStatus("idle");
    setStatusMessage("");
    try {
      if (data.website) {
        setStatus("error");
        setStatusMessage("Spam protection was triggered. Please email us directly.");
        return;
      }

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          _replyto: data.email,
          company: data.company,
          phone: data.phone || "Not provided",
          subject: data.subject,
          message: data.message,
          _subject: `New Business Central inquiry: ${data.subject}`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed.");
      }

      reset();
      setStatus("success");
      setStatusMessage(
        "Thank you. Your message has been sent successfully, and we will respond within one business day."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not send your message from the form. Please email khababmahboobbutt@gmail.com directly."
      );
    }
  }

  return (
    <form
      className="soft-card p-6 md:p-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-describedby="contact-form-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
            autoComplete="name"
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
            autoComplete="email"
          />
        </Field>
        <Field label="Company Name" error={errors.company?.message}>
          <input
            {...register("company")}
            className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
            autoComplete="organization"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
            autoComplete="tel"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Subject" error={errors.subject?.message}>
          <input
            {...register("subject")}
            className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={6}
            className="focus-ring w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm"
          />
        </Field>
      </div>
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input {...register("website")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0078D4] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0F6CBD] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="mr-2" size={17} aria-hidden="true" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
      {status === "success" ? (
        <p
          id="contact-form-status"
          className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p
          id="contact-form-status"
          className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#101827]">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
