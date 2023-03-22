import { useEffect } from "react"

function Fonts({ fonts = ['ENL', 'ENN', 'ENB', 'CNL', 'CNN', 'CNB'], onLoadComplete }) {

    const task = setInterval(() => {
        if (document.fonts.check('10px ' + fonts.join(', '))) {
            clearInterval(task)
            onLoadComplete()
        }
    }, 1000)

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