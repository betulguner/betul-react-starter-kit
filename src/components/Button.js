import classNames from "classnames"

function Button({text, variant = 'default'})
{
    return(
        <button className = {classNames({
            "p-4 h-10 flex items-center rounded": true,
            "bg-gray-300": variant == 'default',
            "bg-green-600": variant == 'success',
            "bg-red-600": variant == 'danger',
            "bg-yellow-400": variant == 'warning',
        })} >{text} {variant}</button>
    )
}
export default Button