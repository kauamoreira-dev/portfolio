export type ContactInput = { name: string; email: string; message: string };

export type FieldError = "nameRequired" | "nameLong" | "emailInvalid" | "messageShort" | "messageLong";

export type FieldErrors = Partial<Record<keyof ContactInput, FieldError>>;

export const LIMITS = { name: 100, email: 200, messageMin: 10, messageMax: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shared by the form (instant feedback) and the API route (source of truth)
export function validateContact({ name, email, message }: ContactInput): FieldErrors {
  const errors: FieldErrors = {};
  if (!name) errors.name = "nameRequired";
  else if (name.length > LIMITS.name) errors.name = "nameLong";
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) errors.email = "emailInvalid";
  if (message.length < LIMITS.messageMin) errors.message = "messageShort";
  else if (message.length > LIMITS.messageMax) errors.message = "messageLong";
  return errors;
}

export function readContact(data: Record<string, unknown>): ContactInput {
  return {
    name: String(data.name ?? "").trim(),
    email: String(data.email ?? "").trim(),
    message: String(data.message ?? "").trim(),
  };
}
