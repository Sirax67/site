import { LucideIcon } from "lucide-react"

type CardProps = {
    icon: LucideIcon,
    title: string,
    text: string,
};

export default function CardHero ({icon: Icon, title, text}:CardProps) {
    return(
        <div className="w-34 bg-white/10 p-3 rounded-xl flex flex-col gap-1">
            <Icon/>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs">{text}</p>
        </div>
    )
}
