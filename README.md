# Notes
I'm just doing tests with some libraries that interest me.
The main function of this program is to generate multiplication tables, the program allows you to:
1.- Enter a base to multiply.
2.- Viewing the table from the console is optional (includes colors).
3.- Put a limit to the results.
4.- Save the results in txt files.

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     La base de la tabla a multiplicar          [número] [requerido]
  -l, --list     Para mostrar en pantalla la lista de la tabla
                                                     [booleano] [defecto: false]
  -m, --maximum  Para hacer la tabla con un maximo != 10  [número] [defecto: 10]
```

```
Ejemplo: npm start -b 10 -l -m 12
```
