import { useEffect } from "react"

function Fonts({ fonts, onLoadComplete }) {

    useEffect(() => {
        const task = setInterval(() => {
            if (document.fonts.check('10px ' + fonts.join(', '))) {
                clearInterval(task)
            } else {
                onLoadComplete()
            }
        }, 10)
    }, [])

    return (
        <div style={{
            position: 'fixed',
            color: '#00000000',
            zIndex: -1
        }}>
            {
                fonts.map((font) => <div key={font} style={{ fontFamily: font }}>{font}</div>)
            }
        </div>
    )
}

export default Fonts