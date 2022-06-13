import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas,fab)

import ClimateApp from './ClimateApp'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <StrictMode>
        <ClimateApp />
    </StrictMode>
)

