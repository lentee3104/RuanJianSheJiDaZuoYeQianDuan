import {defineConfig, presetIcons, presetUno} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    presets:[
        presetUno(),
        presetIcons({
            //cdn: 'https://esm.sh/'
            autoInstall: true
        })
    ],
    transformers: [
        transformerDirectives(),
    ],
})
