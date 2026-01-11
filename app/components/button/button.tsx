type Props = {
    name:string;
    link?:string
}


export const Button = ({name, link}: Props) => {
    return (
        <div>
            <button className="bg-[#f8cb38] rounded-md p-2 cursor-pointer text-white transition duration-300 hover:bg-amber-500"><a href={link}>{name}</a></button>
        </div>
    )
}