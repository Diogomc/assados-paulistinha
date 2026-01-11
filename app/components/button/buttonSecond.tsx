type Props = {
    name:string;
    link?:string
}


export const ButtonSecond = ({name, link}: Props) => {
    return (
        <div>
            <button className="border border-[#f8cb38] rounded-md p-2 cursor-pointer transition duration-300 hover:bg-amber-500 hover:text-white"><a href={link}>{name}</a></button>
        </div>
    )
}