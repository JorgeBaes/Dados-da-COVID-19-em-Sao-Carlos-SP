const internados = [0, 0, 0, 3, 8, 9, 8, 9, 19, 19, 22, 24, 24, 27, 29, 25, 26, 27, 29, 23, 22, 25, 25, 32, 31, 29, 27, 28, 25, 24, 23, 22, 21, 13, 17, 24, 23, 25, 20, 20, 17, 15, 16, 13, 18, 20, 11, 12, 10, 11, 5, 8, 7, 12, 15, 15, 13, 12, 5, 9, 10, 13, 16, 19, 16, 16, 20, 16, 20, 24, 25, 19, 17, 19, 18, 15, 13, 14, 16, 15, 19, 22, 22, 29, 33, 37, 34, 35, 41, 39, 39, 34, 29, 32, 32, 34, 34, 35, 40, 34, 27, 31, 27, 29, 27, 27, 35, 33, 33, 34, 32, 36, 30, 35, 34, 32, 39, 38, 34, 39, 36, 38, 38, 35, 32, 33, 33, 31, 30, 28, 29, 30, 36, 38, 41, 35, 38, 36, 38, 41, 37, 36, 35, 34, 44, 45, 36, 34, 34, 32, 30, 39, 31, 34] // INTERNADOS
const notificacoesDeSindromeGripalAcumulada = [null, null, null, null, null, null, null, null, null, null, null, 482, 530, 573, 614, 734, 765, 819, 875, 884, 892, 940, 1088, 1154, 1170, 1193, 1201, 1217, 1245, 1291, 1301, 1317, 1340, 1365, 1375, 1413, 1429, 1513, 1538, 1615, 1635, 1647, 1678, 1788, 1806, 1840, 1862, 1880, 1916, 1974, 2046, 2073, 2085, 2113, 2130, 2155, 2161, 2252, 2303, 2325, 2356, 2364, 2364, 2402, 2429, 2464, 2486, 2538, 2542, 2547, 2556, 2587, 2621, 2656, 2684, 2694, 2710, 2750, 2816, 2851, 2886, 2932, 2953, 2973, 3050, 3103, 3172, 3191, 3221, 3239, 3249, 3310, 3359, 3425, 3523, 3592, 3615, 3644, 3724, 3833, 3906, 3986, 4069, 4087, 4116, 4202, 4261, 4310, 4401, 4470, 4491, 4518, 4640, 4736, 4831, 4911, 5018, 5054, 5054, 5216, 5336, 5446, 6469, 6637, 6676, 6718, 6853, 6980, 7128, 7256, 7401, 7451, 7488, 7913, 8117, 8246, 8370, 8488, 8517, 8558, 8900, 9081, 9294, 9420, 9537, 9583, 9625, 9782, 9948, 10109, 10268, 10397, 10453, 10488]
const notificacoesDeSindromeGripalInstantaneo = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 443, 384, 361, 273, 335, 314, 300, 278, 257, 260, 250, 257, 249, 280, 273, 268, 261, 332, 325, 343, 333, 336, 339, 375, 420, 409, 398, 393, 362, 347, 314, 359, 371, 354, 350, 329, 298, 311, 311, 319, 298, 322, 311, 285, 268, 268, 290, 302, 299, 299, 288, 317, 353, 365, 370, 363, 361, 353, 353, 420, 420, 444, 445, 440, 414, 444, 449, 463, 522, 567, 557, 537, 571, 631, 662, 705, 838, 731, 717, 765, 745, 721, 767, 765, 713, 672, 728, 751, 790, 800, 863, 848, 848, 908, 969, 1010, 1494, 1578, 1518, 1462, 1500, 1531, 1571, 1575, 1604, 1544, 1430, 1717, 1811, 1797, 1792, 1794, 1696, 1567, 1786, 1819, 1816, 1810, 1769, 1697, 1584, 1643, 1683, 1656, 1671, 1661, 1574, 1456]


const mediaMovel = (array, range, aprox = 0) => array.map( (el , index, ar) => {
        if( index - range >= 0 && index + range < array.length){
            const media = (ar
                .slice(index - range, index + range + 1)
                .reduce((acc, el) => acc + el, 0)) / (2 * range + 1)
            return parseFloat(media.toFixed(aprox))
        }else 
        if( index - range < 0){
            const media = (ar
                .slice(0, 2*range + 1)
                .reduce((acc, el) => acc + el, 0)) / (2 * range + 1)
            return parseFloat(media.toFixed(aprox))
        } else 
        if (index + range >= array.length) {
            const media = (ar
                .slice(array.length - 1 - 2 * range)
                .reduce((acc, el) => acc + el, 0)) / (2 * range + 1)
            return parseFloat(media.toFixed(aprox))
        }
    })
    
function printArray(array , name = ''){
    var string = ''
    if(name != ''){
        string += `const ${name} = [`
    }else{
        string += `[`
    }
    array.forEach( ( el , index , arr ) => {
        if (index == arr.length - 1){
            string+=`${el}`
        }else{
            string += `${el},`
        }
    })
    string += ']'
    console.log(string)
}

// const internadosMediaMovel = mediaMovel(internados, 3)
// printArray(internadosMediaMovel, 'notificacoesDeSindromeGripalAcumulada')
// console.log(mediaMovel(notificacoesDeSindromeGripalAcumulada, 3))
// console.log(mediaMovel(notificacoesDeSindromeGripalInstantaneo, 3))

printArray(mediaMovel(internados, 3), 'internadosMediaMovel')
printArray(mediaMovel(notificacoesDeSindromeGripalAcumulada, 3), 'sindromeGripalAcMediaMovel')
printArray(mediaMovel(notificacoesDeSindromeGripalInstantaneo, 3), 'sindromeGripalInsMediaMovel')
