        function calcular(operacion) {
            // Obtener valores
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const resultadoDiv = document.getElementById('resultado');
            const mensajeResultado = document.getElementById('mensajeResultado');

            // Validaciones
            if (isNaN(num1) || isNaN(num2)) {
                mensajeResultado.textContent = 'Por favor, ingrese ambos números.';
                resultadoDiv.classList.remove('hidden');
                resultadoDiv.classList.add('bg-red-100');
                return;
            }

            let resultado;
            let simbolo;

            // Operaciones
            switch (operacion) {
                case 'suma':
                    resultado = num1 + num2;
                    simbolo = '+';
                    break;
                case 'resta':
                    resultado = num1 - num2;
                    simbolo = '-';
                    break;
                case 'multiplicacion':
                    resultado = num1 * num2;
                    simbolo = '×';
                    break;
                case 'division':
                    if (num2 === 0) {
                        mensajeResultado.textContent = 'Error: No se puede dividir por cero.';
                        resultadoDiv.classList.remove('hidden');
                        resultadoDiv.classList.add('bg-red-100');
                        return;
                    }
                    resultado = num1 / num2;
                    simbolo = '÷';
                    break;
                default:
                    return;
            }

            // Mostrar resultado
            mensajeResultado.textContent = `${num1} ${simbolo} ${num2} = ${resultado.toFixed(2)}`;
            resultadoDiv.classList.remove('hidden', 'bg-red-100');
            resultadoDiv.classList.add('bg-green-100');
        }