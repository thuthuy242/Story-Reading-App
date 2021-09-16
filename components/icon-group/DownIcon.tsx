import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="none"
            viewBox="0 0 18 18"
            {...props}
        >
            <path
                stroke="#22201E"
                d="M9 15.75a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z"
            />
            <path stroke="#22201E" d="M11.531 8.156L9 10.97 6.469 8.156" />
        </svg>
    )
}

export default SvgComponent