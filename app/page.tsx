import { About, Hero, Header, Price, Faq, HowWorks, Footer, Form } from "@/components";

export default function Home() {
  return (
    <main className="lg:mt-10 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 rounded">
      <Header />
      <Hero />
      <About />
      <HowWorks />
      <Faq />
      <Form />
      <Footer />
    </main>
  );
}
