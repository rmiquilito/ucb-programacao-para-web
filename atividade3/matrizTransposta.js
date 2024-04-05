function transporMatriz(A) {

    let matrix = '[ ';

    for (let i = 0; i < A.length; i++) {
        matrix += '[';

        for (let j = 0; j < A[0].length; j++) {
            matrix += ' ' + A[i][j];

            if (j + 1 != A[0].length) {
                matrix += ',';
            }
            else {
                matrix += ' ';
            }
        }

        matrix += '] ';

        if (i + 1 == A.length) {
            matrix += ']';
        }
    }

    let matrix_t = '[ ';

    for (let i = 0; i < A[0].length; i++) {
        matrix_t += '[';

        for (let j = 0; j < A.length; j++) {
            matrix_t += ' ' + A[j][i];

            if (j + 1 != A.length) {
                matrix_t += ',';
            }
            else {
                matrix_t += ' ';
            }
        }

        matrix_t += '] ';

        if (i + 1 == A[0].length) {
            matrix_t += ']';
        }
    }

    console.log(matrix);
    console.log(matrix_t);
}

let matrix = [[1, 2], [3, 4], [5, 6]];

transporMatriz(matrix);