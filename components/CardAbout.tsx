type CardProps = {
    step: number;
    title: string;
    text: string;
};

export default function CardAbout ({step, title, text}:CardProps) {
    return(
        <div className=" shadow-[0_-6px_0_0_#D9D9D9] w-59 h-40 bg-[#F0F0F0] p-4 rounded-xl flex flex-col gap-1 justify-center">
            <span className="text-sm font-bold ">Шаг {step}</span>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-[#A2A2A2]">{text}</p>
        </div>
    )
}
