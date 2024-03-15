import Image from "next/image";
import { LoginForm } from "../../components/LoginForm";
import { useTranslations } from "next-intl";


export default function Home() {
  // unstable_setRequestLocale(locale);
  const l = useTranslations("Login")
  return (
    <main className="flex flex-col items-center p-16 py-8">
      <LoginForm email={l("email")} password={l("password")} button={l("button")} />
    </main>
  );
}
