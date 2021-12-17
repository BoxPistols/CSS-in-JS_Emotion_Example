import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { info } from './index.module.css'
import './styles.css'

export default function App() {
    const cssView = (x) => {
        return x
    }
    return (
        // Normal CSS
        <div className="App">
            {/* etmotion css */}
            <h1 className={em__tex}>Hello Etmotion CSS</h1>↑{cssView(em__tex)}
            {/* etmotion css & extend */}
            <h2 className={em__bg}>Start editing Etmotion CSS</h2>↑
            {cssView(em__bg)}
            {/* Emotion styled */}
            <EmParam>
                <h1>Emotion Styled</h1>
                <p>
                    Dicta et sit omnis enim sed et molestias adipisci et velit
                    eligendi dolores.
                </p>
            </EmParam>
            ↑{cssView('`<p class="css-1uvlzxd">...</p>`')}
            {/* css module */}
            <div className={info}>
                <h1>CSS Module</h1>
                <p>
                    Dicta et sit omnis enim sed et molestias adipisci et velit
                    eligendi dolores.
                </p>
            </div>
            ↑{cssView(info)}
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
const EmParam = styled.p`
    border: 2px solid teal;
    padding: 1em 0.5em;
`
