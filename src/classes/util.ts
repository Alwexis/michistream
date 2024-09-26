export class Util {
	static obtenerValoresAleatorios(array: [], cantidad: number) {
        // Mezclar el array aleatoriamente usando sort y Math.random
        const arrayMezclado = array.sort(() => Math.random() - 0.5);
        // Retornar los primeros 'cantidad' elementos
        return arrayMezclado.slice(0, cantidad);
    }
}

export default Util;