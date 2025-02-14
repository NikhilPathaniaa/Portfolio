import { Suspense } from "react";
import { ContactForm } from "@/components/Contact/ContactForm";

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
