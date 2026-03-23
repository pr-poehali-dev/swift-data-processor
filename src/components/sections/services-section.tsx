import { useReveal } from "@/hooks/use-reveal"

const categories = [
  {
    title: "Закуски и салаты",
    description: "Лёгкие начала для большого вечера — тартары, карпаччо, сезонные салаты",
    direction: "top",
  },
  {
    title: "Горячие блюда",
    description: "Мясо, рыба и птица — приготовленные по авторским рецептам шефа",
    direction: "right",
  },
  {
    title: "Паста и ризотто",
    description: "Свежая паста ручной работы и кремовые ризотто с трюфелем и грибами",
    direction: "left",
  },
  {
    title: "Десерты и вино",
    description: "Изысканные десерты и подобранная карта вин от сомелье",
    direction: "bottom",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Категории
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Разделы меню</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {categories.map((category, i) => (
            <CategoryCard key={i} category={category} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({
  category,
  index,
  isVisible,
}: {
  category: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (category.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{category.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{category.description}</p>
    </div>
  )
}
