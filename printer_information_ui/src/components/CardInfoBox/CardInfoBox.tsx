import type { IconType } from "react-icons";


export type CardInfoBoxProps = {
    title: string;
    value: string | number
    description: string;
    iconCard: IconType;
    percent: number;
    colorful?: boolean;
}

export const CardInfoBox = ({description, title, value, iconCard: Icon, percent, colorful=true}: CardInfoBoxProps) => {
    // const [theme, setTheme] = useState<string>("");
    // console.log(colorful);
    // console.log(percent);

    const colorThemeInfo: {normal: string, alert: string, error: string} = {
        normal: "text-green-500",
        alert: "text-yellow-400",
        error: "text-red-500"
    }

    const theme =
        percent >= 75
        ? colorThemeInfo.normal
        : percent >= 55
        ? colorThemeInfo.alert
        : colorThemeInfo.error;

    return (
        <div className="
            bg-white p-5
            rounded-lg
            border border-zinc-300
            w-full
            flex
            flex-col
            
            gap-2
            "
        >
            <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-slate-900 ">
                    {title}
                </span>
                
                <Icon className={colorful ? theme : "text-zinc-500"}/>
            </div>
            
            <div className="">
                <span className={`text-2xl font-bold ${colorful ? theme : ""}`}>
                    {value}
                </span>
                <p className="text-zinc-500 text-md">
                    {description}
                </p>
            </div>
        </div>
    )
}