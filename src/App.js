import './styles.css'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { info } from './index.module.css'

export default function App() {
    const cssView = (x) => {
        return x
    }
    return (
        // Normal CSS
        <div className="App">
            {/* etmotion css */}
            <h1 className={em__tex}>Hello Etmotion CSS</h1>
            <div className="em">↑{cssView(em__tex)}</div>
            {/* etmotion css & extend */}
            <h2 className={em__bg}>Start editing Etmotion CSS</h2>
            <div className="em">↑{cssView(em__bg)}</div>
            {/* Emotion styled */}
            <EmParam>
                <h1>Emotion Styled</h1>
                <p>
                    Dicta et sit omnis enim sed et molestias adipisci et velit
                    eligendi dolores.
                </p>
            </EmParam>
            <div className="em">↑{'`<div class="css-1uvlzxd">...</div>`'}</div>
            {/* css module */}
            <div className={info}>
                <h1>CSS Module</h1>
                <p>
                    Dicta et sit omnis enim sed et molestias adipisci et velit
                    eligendi dolores.
                </p>
            </div>
            <div className="em">↑{cssView(info)}</div>
        </div>
    )
}

/* ===== Styling on Emotion ===== */
//  Emotion css
const em__tex = css`
    color: hotpink;
`
const em__bg = css`
    ${em__tex}; // extend
    background: dimgray;
    padding: 0.5em;
`
//  Emotion styled
const EmParam = styled.div`
    border: 2px solid teal;
    padding: 1em 0.5em;
    margin-bottom: 1em;
`
