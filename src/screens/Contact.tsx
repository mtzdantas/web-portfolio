import { useState, useEffect, useRef } from "react";
import { SendHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Olá Mateus! Estou precisando falar com você." },
    { sender: "mateus", text: "Olá! Claro, por onde você prefere entrar em contato?" },
  ]);
  const [input, setInput] = useState("");
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email" | null>(null);
  const [hasSentMessage, setHasSentMessage] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (contactMethod) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || !contactMethod || hasSentMessage) return;

    setMessages(prev => [
      ...prev,
      { sender: "user", text: input },
      { sender: "mateus", text: "Em breve estarei te respondendo, obrigado por entrar em contato!" }
    ]);

    const encodedMessage = encodeURIComponent(input);

    if (contactMethod === "whatsapp") {
      const whatsappNumber = "5584998018880"; 
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    }

    if (contactMethod === "email") {
      const email = "mtzdantas@gmail.com";
      const subject = encodeURIComponent("Suporte | Contato via Portfolio");
      window.open(`mailto:${email}?subject=${subject}&body=${encodedMessage}`, "_blank");
    }

    setInput("");
    setHasSentMessage(true);
  };

  const chooseContactMethod = (method: "whatsapp" | "email") => {
    setContactMethod(method);

    setMessages(prev => [
      ...prev,
      { sender: "user", text: method === "whatsapp" ? "Whatsapp" : "E-mail" },
      { sender: "mateus", text: "Entendi, agora me fala, do que você precisa?" }
    ]);
  };

  return (
    <section id="contact" className="flex flex-col h-screen items-center relative py-24 sm:py-32">
      {/* Detalhes Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
      </div>
      
      <h2 className="font-semibold text-3xl xl:text-4xl text-center">Vamos conversar?</h2>
      <p className="mt-1 text-center">Não precisa ser tímido, me mande uma mensagem.</p>
      
      <div className="flex flex-col mt-12 p-4 w-full sm:w-[600px] h-[400px] bg-white/10 border border-white/10 hover:border-white/20 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-200">
        <div className="flex items-center gap-4 w-full border-b border-white/10 pb-4 mb-4">
          <img src="me.png" alt="Foto de perfil" className="h-10 w-10" />
          <div>
            <p>Mateus Dantas</p>
            {
              !hasSentMessage ? (
                <p className="text-sm opacity-60">Online</p>
              ) : (
                <p className="text-sm opacity-60">Offline</p>
              )
            }
          </div>
        </div>
        
        <div className="flex flex-1 flex-col gap-4 overflow-hidden text-white">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={msg.sender === "user" ? { opacity: 0, x: 30 } : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5,}}
              className={`p-3 rounded-lg max-w-60 sm:max-w-xs ${
                msg.sender === "user"
                  ? "self-end bg-indigo-600/70"
                  : "bg-white/10"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}

          {!contactMethod && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6,}}
              className="flex self-end gap-4"
            >
              <button
                onClick={() => chooseContactMethod("whatsapp")}
                className="bg-emerald-600/70 p-3 rounded-lg max-w-xs hover:bg-emerald-700/70 transition-colors duration-300 cursor-pointer"
              >
                Whatsapp
              </button>
              <button
                onClick={() => chooseContactMethod("email")}
                className="bg-indigo-600/70 p-3 rounded-lg max-w-xs hover:bg-indigo-700/70 transition-colors duration-300 cursor-pointer"
              >
                E-mail
              </button>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex bg-white/20 px-3 py-2 rounded-xl w-full mt-4 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-transparent text-white outline-none placeholder-white/50"
            disabled={!contactMethod || hasSentMessage}
          />
          <button onClick={sendMessage} disabled={!contactMethod || hasSentMessage}>
            <SendHorizontal className="text-white/70" />
          </button>
        </div>
      </div>
    </section>
  );
}
