import Image from "next/image";
import { useTranslations } from 'next-intl';
import { LoginForm } from "../../components/LoginForm";

import { useRouter } from "next/router"

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="flex flex-col items-center p-16 py-8">
      <LoginForm />
    </main>
  );
}
