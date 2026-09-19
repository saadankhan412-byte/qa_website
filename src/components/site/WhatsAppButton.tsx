import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { whatsappUrl } from "@/data/site";

interface Props extends Omit<ButtonProps, "asChild"> {
  message?: string;
  label?: string;
}

export function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  variant = "whatsapp",
  ...rest
}: Props) {
  return (
    <Button asChild variant={variant} {...rest}>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden />
        {label}
      </a>
    </Button>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-13 w-13 items-center justify-center rounded-full bg-success text-success-foreground shadow-card transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
