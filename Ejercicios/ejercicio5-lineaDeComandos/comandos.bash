sudo - Comando para iniciar la aplicacion sudo la cual nos da los permisos de administrador
rm -r - Para borrar directorios
df - Para saber el espacio en el disco
cat [OPTION] [FILE]
    - Crear un archivo: 
        cat > filename.txt
    - Ver el contenido de un archivo:
        cat filename.txt | more
    - Redirigir contenido de un archivo a otro: 
        cat filename.txt > destination.txt
    - Redirigir contenido de un archivo sin sobrescribirlo: 
        cat filename.txt >> destination.txt
    - Concatenar archivos en uno solo: 
        cat filename.txt filename.txt > destination.txt
    - Conocer cuantas lineas tiene un archivo: 
        cat -n filename.txt
    - Suprimir lineas vacias: 
        cat -s filename.txt
head - comando para mostrar las primeras lineas del archivo: 
    head -n 10 filename.txt
tail - para mostrar las ultimas lineas de un finchero: 
    tail-10 filename.txt
curl [OPTION] [URL] - Otros usuos, curl para cookies y ftp
    -Mostrar el contenido de una pagina: 
        curl domain.com
    -descargar archivos y dejarlos en la carpeta raiz del comando:
        curl -O domain.com
    -descargar archivos pero especificarle un nombre/direccion
        curl -o assets/newFile domain.com
    -listar todo lo descargado
        xargs –n 1 curl -O < allUrls.txt
    -descargar encabezado de un sitio web
        curl -I www.testdomain.com
grep [options] pattern [FILE]
    -Buscar una palabra en un archivo
        grep palabraBuscada filename.txt
    -Buscar una palabra sin tener en cuenta mayusculas y minusculas
        grep -i palabraBuscada filename.txt
    -Contar cuantas palabras son parecidad
        grep -c palabraBuscada filename.txt
    -Buscar en varios archivos
        grep palabraBuscada filename.txt | grep palabraBuscada filename.txt
grep pipe - grep tambien funciona como pipe por ejemplo podemos unir los dos comandos tail y grep
    -tail -f index.html | grep html


    
    