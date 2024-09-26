export class Util {
	static obtenerValoresAleatorios<T>(items: T[], count: number): T[] {
        // Mezclar el array aleatoriamente usando sort y Math.random
        const arrayMezclado = items.sort(() => Math.random() - 0.5);
        // Retornar los primeros 'cantidad' elementos
        return arrayMezclado.slice(0, count);
    }
}

export default Util;