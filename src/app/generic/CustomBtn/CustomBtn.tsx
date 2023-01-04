import React from 'react'
import {observer} from 'mobx-react-lite'
import {Button} from 'react-bootstrap'
import electivesStore from "../../lib/store/pages/Electives-store";
import './CustomBtn.scss'

interface ICustomBtn {
    href: string,
    dataTitle: string
    text: any
}

export default observer(({href, dataTitle, text}: ICustomBtn) => {
    const [coords, setCoords] = React.useState({x: -1, y: -1});
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({x: -1, y: -1});
    }, [isRippling]);


    return (
        <Button
            className="ripple-button"
            onClick={e => {
                // @ts-ignore
                const rect = e.target.getBoundingClientRect();
                setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
            }}
            variant={electivesStore.toastBtn == dataTitle ? "outline-primary" : "outline-secondary"}
            href={href}
            style={{fontSize: '1.5rem'}}
        >

            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                />
            ) : (
                ''
            )}
            <span className="content">{text}</span>
        </Button>
    )
})
