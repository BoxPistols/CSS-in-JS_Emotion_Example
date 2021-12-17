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
            <h1 className={em__tex}>Hello CodeSandbox</h1>↑{cssView(em__tex)}
            {/* etmotion css & extend */}
            <h2 className={em__bg}>Start editing to see some magic happen!</h2>↑
            {cssView(em__bg)}
            {/* Emotion styled */}
            <EmParam>
                Dicta et sit omnis enim sed et molestias adipisci et velit
                eligendi dolores.
            </EmParam>
            {/* css module */}
            <div className={info}>
                Dicta et sit omnis enim sed et molestias adipisci et velit
                eligendi dolores.
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
    border: 1px solid teal;
    padding: 1em 0.5em;
`
