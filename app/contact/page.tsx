import type { Metadata } from "next"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact - FernandoBDAF",
  description: "Get in touch with me for collaborations, opportunities, or just to say hello.",
}

export default function ContactPage() {
  return <ContactClientPage />
}
