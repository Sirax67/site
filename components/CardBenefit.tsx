type CardProps = {
    title: string,
    text: string,
};

export default function CardBenefit ({title, text}:CardProps) {
    return(
        <div className="w-51 bg-white/10 px-3 py-8 rounded-xl flex flex-col gap-3">
            <p className="font-bold">{title}</p>
            <p className="text-xs">{text}</p>
        </div>
    )
}
