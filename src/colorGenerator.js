import chroma from 'chroma-js'

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export const colorGenerator = Palette => {

    let newPalette = {
        paletteName: Palette.paletteName,
        id: Palette.id,
        emoji: Palette.emoji,
        colors: {}
    }

    for( let level of levels ){
        newPalette.colors[level] = []
    }

    for( let color of Palette.colors ){
        let scale = generateScale( color.color, 10 ).reverse()
        for( let key in scale ){
            newPalette.colors[levels[key]].push({
                name: `${color.name} ${levels[key]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[key],
                rgb: chroma(scale[key]).css(),
                rgba: chroma(scale[key]).css()
                .replace('rgb', 'rgba')
                .replace(")", ",1)")
            })
        }
    }

    return newPalette
}

const getRange = hexColor => {
    const end = "#fff";
    return [
      chroma(hexColor)
        .darken(1.4)
        .hex(),
      hexColor,
      end
    ];
  }
  
  const generateScale = ( hexColor, numberOfColors ) => {
    return chroma
      .scale(getRange(hexColor))
      .mode("lab")
      .colors(numberOfColors);
  }