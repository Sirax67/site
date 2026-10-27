type CardProps = {
    title: string;
    text: string;
};

export default function CardServices ({title, text}:CardProps) {
    return(
        <div className="cursor-pointer hover:-translate-y-2 hover:shadow-[0_-6px_0_0_#32B8C6,0_7px_9px_0_#00000030] shadow-[0_-6px_0_0_#32B8C6] w-66 h-41 bg-white p-4 rounded-xl flex flex-col gap-1 justify-center transition duration-300">
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs text-[#A2A2A2]">{text}</p>
        </div>
    )
}
