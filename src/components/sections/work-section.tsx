import { useReveal } from "@/hooks/use-reveal"

const menuItems = [
  {
    number: "01",
    title: "Тартар из лосося",
    category: "Холодные закуски",
    price: "890 ₽",
    direction: "left",
  },
  {
    number: "02",
    title: "Утиная грудка конфи",
    category: "Горячие блюда",
    price: "1 490 ₽",
    direction: "right",
  },
  {
    number: "03",
    title: "Крем-брюле с ванилью",
    category: "Десерты",
    price: "490 ₽",
    direction: "left",
  },
  {
    number: "04",
    title: "Трюфельная паста",
    category: "Паста и ризотто",
    price: "1 190 ₽",
    direction: "right",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Меню
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Избранные блюда</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {menuItems.map((item, i) => (
            <MenuCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuCard({
  item,
  index,
  isVisible,
}: {
  item: { number: string; title: string; category: string; price: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {item.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {item.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{item.category}</p>
        </div>
      </div>
      <span className="font-mono text-sm text-foreground/70 md:text-base">{item.price}</span>
    </div>
  )
}
