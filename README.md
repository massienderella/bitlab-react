# Bitlap
 BitLab offers complete cryptocurrency management, with easy to use tools to keep track of all your cryptocurrency investments. Get detailed price and market information for individual currencies and your entire portfolio all in one place

### Como acceder a BitLab
* Debe hacer click aqui ACA VA EL LINK 
* Para ingresar a BitLab debe hacerlo con su cuenta  gmail asociada a Google.
 Ejemplo: ejmplo@gmail.com

### Levantamiento del Ambiente de **Desarrollo**
1- Hacer un fork del siguiente repo: https://github.com/massienderella/bitlab-react.git 

2- Luego abra la carpeta en su editor favorito, le recomendamos **Visual Studio Code**

3- Debe dirigirse a la carpeta componentes y visualizara los componentes que integran **BitLap**

### CLI 
* $ npm install 
* $ npm install --save firebase
* $ npm install --save materialize
* $ npm install --save prop-types
* $ npm install --save gh-pages
* $ npm install --seve deploy

### Como visualizarlo en el navegador 
Modificar el el  package.json:
* Despues de private:true debe colocar  "homepage":https://myusername.github.io/my-app",
* Luego dentro de script al ultimo, copiar lo siuiente:
  * "predeploy": "npm run build",
  * "deploy": "gh-pages -d build",
* Debe correr en CLI los siguientes comandos:
  * git status
  * git add .
  * git push origin master
  * git checkout -b gh-pages
  * git checkout master
  * npm run buil
  * git checkout gh-pages
  * git merge master
  * mv build/* ./
  * git add .
  * git commit -m "build"
  * git push origin gh-pages
  * git remote -v

### API
Si desea visualzar el API haga click aqui www.coindesk.com.

### Licencia 
MIT © Sindre Sorhus

