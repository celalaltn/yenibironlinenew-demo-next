import BackToTop from "./backToTop";
import HomePage from "./yenibironline/page";

export const metadata = {
  title: "Yeni Bir Online",
  description: "Yeni Bir Online",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
