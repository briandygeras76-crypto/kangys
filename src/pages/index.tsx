import { Phone, Instagram, Globe, Utensils, Monitor, Package, Star, ArrowRight, Code2, Zap, Users, ChevronDown } from "lucide-react";

const openLink = (url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

const Index = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="noise-overlay" />

            {/* NAV */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: "hsl(var(--background) / 0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid hsl(var(--border))" }}>
                <div className="flex items-center gap-2">
                    <Code2 size={22} style={{ color: "hsl(var(--neon))" }} />
                    <span className="font-['Syne'] font-800 text-lg tracking-tight text-foreground">
                        B<span className="neon-text">&</span>T Dev
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    {["sobre", "servicos", "equipe", "contato"].map((id) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="capitalize hover:text-foreground transition-colors duration-200 tracking-wide"
                        >
                            {id === "servicos" ? "Serviços" : id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    ))}
                </div>
                <button onClick={() => scrollTo("contato")} className="btn-neon text-sm px-4 py-2">
                    Contato
                </button>
            </nav>

            {/* HERO */}
            <section className="hero-bg grid-bg min-h-screen flex items-center justify-center relative pt-20">
                <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                    <div className="animate-fade-in-up animate-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "hsl(var(--neon) / 0.1)", border: "1px solid hsl(var(--neon) / 0.25)" }}>
                        <Zap size={14} style={{ color: "hsl(var(--neon))" }} />
                        <span className="text-sm font-medium" style={{ color: "hsl(var(--neon))" }}>
                            Sites personalizados · Alta qualidade · Praticidade
                        </span>
                    </div>

                    <h1 className="animate-fade-in-up animate-delay-2 font-['Syne'] font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
                        Seu site,{" "}
                        <br />
                        <span className="gradient-text">do seu jeito.</span>
                    </h1>

                    <p className="animate-fade-in-up animate-delay-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Criamos sites únicos e personalizados que refletem a identidade da sua empresa — com facilidade, praticidade e muito estilo.
                    </p>

                    <div className="animate-fade-in-up animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => scrollTo("servicos")} className="btn-neon text-base px-8 py-3">
                            Nossos Serviços
                            <ArrowRight size={18} />
                        </button>
                        <button onClick={() => scrollTo("contato")} className="btn-outline-neon text-base px-8 py-3">
                            Falar Conosco
                        </button>
                    </div>

                    <div className="animate-fade-in-up animate-delay-5 mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto">
                        {[{ value: "100%", label: "Personalizado" }, { value: "2x", label: "Mais Rápido" }, { value: "24h", label: "Suporte" }].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="font-['Syne'] font-bold text-2xl md:text-3xl neon-text">{stat.value}</div>
                                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => scrollTo("sobre")}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
                >
                    <ChevronDown size={28} />
                </button>
            </section>

            {/* SOBRE */}
            <section id="sobre" className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="section-divider mb-6" />
                            <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl leading-tight mb-6 text-foreground">
                                Quem somos
                                <br />
                                <span className="gradient-text">nós?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                Somos a <strong style={{ color: "hsl(var(--foreground))" }}>B&T Dev</strong>, uma dupla apaixonada por tecnologia e design. Desenvolvemos sites que vão muito além do básico — cada projeto é pensado do zero, do jeito que você quer.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nossa missão é transformar a sua ideia em uma presença digital poderosa, com mais facilidade e praticidade para você e seus clientes.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <Star size={22} />, title: "Alta Qualidade", desc: "Cada detalhe é pensado com cuidado e precisão." },
                                { icon: <Zap size={22} />, title: "Entrega Rápida", desc: "Projetos ágeis sem abrir mão da qualidade." },
                                { icon: <Users size={22} />, title: "Personalizado", desc: "Do seu jeito, com a sua cara, para o seu público." },
                                { icon: <Globe size={22} />, title: "Moderno", desc: "Tecnologia de ponta e design de tendência." },
                            ].map((item) => (
                                <div key={item.title} className="service-card p-5">
                                    <div className="mb-3" style={{ color: "hsl(var(--neon))" }}>{item.icon}</div>
                                    <h4 className="font-['Syne'] font-semibold text-sm mb-1 text-foreground">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVIÇOS */}
            <section id="servicos" className="py-24 md:py-32" style={{ background: "hsl(var(--surface))" }}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <div className="section-divider mx-auto mb-6" />
                        <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
                            O que <span className="gradient-text">oferecemos</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Soluções digitais completas para qualquer tipo de negócio, feitas sob medida.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Monitor size={32} />,
                                title: "Sites Personalizados",
                                desc: "Sites únicos que refletem a identidade da sua empresa, desenvolvidos de acordo com o seu gosto e necessidade.",
                                tag: "Principal",
                            },
                            {
                                icon: <Utensils size={32} />,
                                title: "Cardápios Digitais",
                                desc: "Cardápios online modernos e elegantes para restaurantes, bares e lanchonetes. Facilidade para seus clientes.",
                                tag: "Popular",
                            },
                            {
                                icon: <Package size={32} />,
                                title: "Vitrine de Produtos",
                                desc: "Apresente seus produtos com um visual incrível. Páginas de demonstração que vendem por você.",
                                tag: "Destaque",
                            },
                            {
                                icon: <Globe size={32} />,
                                title: "Sites Empresariais",
                                desc: "Páginas profissionais para empresas de todos os tamanhos. Transmita credibilidade e conquiste mais clientes.",
                                tag: "Empresas",
                            },
                        ].map((service) => (
                            <div key={service.title} className="service-card p-7 flex flex-col gap-4">
                                <div className="flex items-start justify-between">
                                    <div style={{ color: "hsl(var(--neon))" }}>{service.icon}</div>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "hsl(var(--neon) / 0.1)", color: "hsl(var(--neon))" }}>
                                        {service.tag}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-['Syne'] font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EQUIPE */}
            <section id="equipe" className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <div className="section-divider mx-auto mb-6" />
                        <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
                            Nossa <span className="gradient-text">Equipe</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Dois criadores dedicados prontos para transformar sua ideia em realidade digital.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* Brian */}
                        <div className="team-card">
                            <div className="h-2 w-full" style={{ background: "var(--gradient-neon)" }} />
                            <div className="p-8">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 font-['Syne'] font-extrabold text-2xl" style={{ background: "hsl(var(--neon) / 0.15)", color: "hsl(var(--neon))", border: "1px solid hsl(var(--neon) / 0.3)" }}>
                                    B
                                </div>
                                <h3 className="font-['Syne'] font-bold text-2xl mb-1 text-foreground">Brian</h3>
                                <p className="text-sm font-medium mb-5" style={{ color: "hsl(var(--neon))" }}>Co-fundador & Desenvolvedor</p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    Especialista em criar experiências digitais únicas e personalizadas. Transforma visões em realidade com código e criatividade.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <a href="tel:+5517920030905" className="contact-link text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                                        <Phone size={15} style={{ color: "hsl(var(--neon))" }} />
                                        (17) 92003-0905
                                    </a>
                                    <button
                                        onClick={() => openLink("https://instagram.com/brian_18939")}
                                        className="contact-link text-sm"
                                        style={{ color: "hsl(var(--muted-foreground))" }}
                                    >
                                        <Instagram size={15} style={{ color: "hsl(var(--neon))" }} />
                                        @brian_18939
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Thales */}
                        <div className="team-card">
                            <div className="h-2 w-full" style={{ background: "var(--gradient-gold)" }} />
                            <div className="p-8">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 font-['Syne'] font-extrabold text-2xl" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold))", border: "1px solid hsl(var(--gold) / 0.3)" }}>
                                    T
                                </div>
                                <h3 className="font-['Syne'] font-bold text-2xl mb-1 text-foreground">Thales</h3>
                                <p className="text-sm font-medium mb-5" style={{ color: "hsl(var(--gold))" }}>Co-fundador & Designer · 14 anos</p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    Com 14 anos e talento incrível, Thales traz frescor e inovação para cada projeto. Prova que a idade não limita o talento.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <a href="tel:+5517997343854" className="contact-link text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                                        <Phone size={15} style={{ color: "hsl(var(--gold))" }} />
                                        (17) 99734-3854
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTATO / CTA */}
            <section id="contato" className="py-24 md:py-32" style={{ background: "hsl(var(--surface))" }}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="section-divider mx-auto mb-6" />
                        <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl mb-4 text-foreground">
                            Vamos criar algo
                            <br />
                            <span className="gradient-text">incrível juntos?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
                            Entre em contato e diga como imagina seu site. A gente cria do zero, do seu jeito.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            <button
                                onClick={() => openLink("https://wa.me/5517920030905")}
                                className="service-card p-6 flex items-center gap-4 group cursor-pointer text-left w-full"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--neon) / 0.15)" }}>
                                    <Phone size={20} style={{ color: "hsl(var(--neon))" }} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Brian</p>
                                    <p className="font-['Syne'] font-semibold text-foreground">(17) 92003-0905</p>
                                    <p className="text-xs text-muted-foreground mt-1">Toque para chamar no WhatsApp</p>
                                </div>
                            </button>

                            <button
                                onClick={() => openLink("https://wa.me/5517997343854")}
                                className="service-card p-6 flex items-center gap-4 group cursor-pointer text-left w-full"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--gold) / 0.15)" }}>
                                    <Phone size={20} style={{ color: "hsl(var(--gold))" }} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Thales</p>
                                    <p className="font-['Syne'] font-semibold text-foreground">(17) 99734-3854</p>
                                    <p className="text-xs text-muted-foreground mt-1">Toque para chamar no WhatsApp</p>
                                </div>
                            </button>
                        </div>

                        <button
                            onClick={() => openLink("https://instagram.com/brian_18939")}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer"
                            style={{ background: "hsl(var(--neon) / 0.08)", border: "1px solid hsl(var(--neon) / 0.2)", color: "hsl(var(--neon))" }}
                        >
                            <Instagram size={18} />
                            <span className="font-medium">@brian_18939</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 text-center" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                <p className="text-sm text-muted-foreground">
                    © 2025 <span className="neon-text font-semibold">B&T Dev</span> · Brian & Thales · Todos os direitos reservados
                </p>
            </footer>
        </div>
    );
};

export default Index;
