export default function Skills() {
  return (
    <section id="contact" className="flex flex-col h-screen relative py-24 sm:py-32">
      {/* Detalhes Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>
      
      <h2 className="font-semibold text-3xl xl:text-4xl text-center">Vamos conversar? </h2>
      <p className="mt-1 text-center">Não precisa ser tímido, me mande uma mensagem.</p>

    </section>
  );
}