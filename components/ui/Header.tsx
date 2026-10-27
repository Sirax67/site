import Link from "next/link";

export default function Header () {
    return(
        <header className="bg-white w-full py-4 px-4 fixed top-0 flex justify-between items-center">
            <Link href="" className="text-[#1A2A52] font-bold">BOXPACK</Link>
            <nav className="flex items-center gap-4">
                <Link href="" className="hover:underline text-sm font-medium">Услуги</Link>
                <Link href="" className="hover:underline text-sm font-medium">Как это работает</Link>
                <Link href="" className="hover:underline text-sm font-medium">Видеофиксация</Link>
                <Link href="" className="hover:underline text-sm font-medium">Калькулятор</Link>
                <Link href="" className="hover:underline text-sm font-medium">Кейсы</Link>
                <Link href="" className="hover:underline text-sm font-medium">Контакты</Link>
            </nav>
        </header>
    )
}