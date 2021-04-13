const venom = require('venom-bot'); //libreria del bot
const boneless = require('./boneless');

venom
  .create() //para la sesion 
  .then((client) => start(client)) //para ver si el cliente inicio
  //.then((client) => menus(client))
  .catch((erro) => {
    console.log(erro);
  });

//Variables globales
let count = false; //definido en 0 

function start(client) {
  client.onMessage((message) => {
    if (count == false){
      if (message.body && message.isGroupMsg === false) {
       client //funciones promesas
         .sendText(message.from, 'Bienvenido al restaurante! yo sere tu bot guía \n\n 1)Realizar un pedido \n 2) Donde estan ubicados \n 3) Horarios \n 4) Quejas y sugerencias')
          .then((result) => {     
            count = true;
            console.log(count);
            console.log("cambie " + count);
          })
          .catch((erro) => {
            console.log('Error when sending: ', erro); //return object error
          });
        }
    }if (count == true){
        if(message.body && message.isGroupMsg === false){
          switch(message.body){
            case '1':
              menus(client, message);
            break;
            case '2':
              ubicacion(client, message);
            break;

            case '3':
              horarios(client, message);
            break;

            case '4':
              quejasYsugerencias(client, message);
            break;
            default:
              opvalida1(client);
            break;
          }
        }
    }
  
  });
}

//async es para que sea asincrono para esperar el mensaje del cliente

/*async*/ function menus (client, message){
  var constinit = "b)Hamburguesas\
                   c)Hot-dogs\
                   f)Alitas\
                   g)Pizzas\
                   h)Bebidas\
                   i)Snakcs";
 
  console.log('estoy jalando perru') //ES PARA QUE TODO ANDE FUNCIONANDO

  client
   .onMessage((message) =>)
   .sendText(message.from, 'a)Boneless \n' + constinit)
   .then((result) => 
   {
     //var imprimir = message.body;
     switch(message.body){
       case 'a':
         menuboneless(client,message);
         console.log("yo soy bonneles")
       break;

       case 'b':
         menuHamburguesas(client,message);
       break

       case 'c':
         menuHotdogs(client, message);
       break;

       case 'd':
         menuAlitas(client, message);
       break;

       case 'e':
         menuPizzas(client,message);
       break;

       case 'h':
         menuBebidas(client,message);
       break;
       case 'i':
         menuSnakcs(client,message);
       break;

       default:
         opvalida1(client);
     }
   })
   .catch((erro) => {
    console.log('Error when sending: ', erro);
     //return object error
     throw new Error('exception!');
  });

}

function ubicacion (client, message){
  console.log('la ubicacion jala perru')
  client
   .sendText(message.from, 'Estamos ubicados en Avenida Guerrero #103 \n Entre: Hidalgo y ocampo \n Referencia: Justo enfrente de comapa(dodne se paga el agua)<3')
    .then((result) => {     
})
}

function horarios (client, message){
  client
  .sendText(message.from, 'Lunes a Domingo \n 12:00 pm a 10:00 pm')
   .then((result) => {     
})
}

function quejasYsugerencias (client, message){
  var cons= 'Gracias por hacer esto posible \n #TeamPaisa';
  client
  .sendText(message.from,'Hacemos lo mejor posible para brindarte un servicio de excelencia \ndanos tu opinion para seguir mejorando para ti\n' + cons)
   .then((result) => {
  })
}

function opvalida1(client)
{
  client
    .sendText('Dame una opcion valida')
}

function menuboneless (client, message){
  var ordenfinal;
  console.log('boneles');
  var const1 = "Boneless en precio regular \
                1) 6  pz  boneless $70   (2 salsas) \
                2) 12 pz  boneless $110  (3 salsas) \
                3) 18 pz  boneless $150  (4 salsas) \
                4) 24 pz  boneless $200  (5 salsas) \
                5) 40 pz  boneless $300  (6 salsas) \
                \n---- Boneless en precio combo ----\n \
                6) 6  pz  Boneless + 1/2 papas + té  $95 (2 salsas) \
                7) 12 pz  Boneless + 1 papas + té  $145 (3 salsas) \
                8) 18 pz  Boneless + 1 1/2 papas + 2 té  $200 (4 salsas) \
                9) 24 pz  Boneless + 2 papas + 3 té  $320 (5 salsas)";
  client
   .sendText(message.from, 'Escoje una opción del 1 al 9\n\n ' + const1)
    .then(async(result) => {
      console.log(message.body);

      var option = await boneless.init(message.body);
      
      if(!option || option == undefined){
        return;
      }
      var bon1 = "6  pz  boneless $70   (2 salsas)";
      var bon2 = "12 pz  boneless $110  (3 salsas)";
      var bon3 = "18 pz  boneless $150  (4 salsas)";
      var bon4 = "24 pz  boneless $200  (5 salsas)";
      var bon5 = "40 pz  boneless $300  (6 salsas)";
      var bonesp1 = "6  pz  Boneless + 1/2 papas + té  $95 (2 salsas)";
      var bonesp2 = "12 pz  Boneless + 1 papas + té  $145 (3 salsas)";
      var bonesp3 = "18 pz  Boneless + 1 1/2 papas + 2 té  $200 (4 salsas)";
      var bonesp4 = "24 pz  Boneless + 2 papas + 3 té  $320 (5 salsas)";
      let opvalidar =false;
      


  })
   .catch((erro) => {
    console.log(erro);
  })}

function menuHamburguesas(client, message){
  console.log(hamburguesas)

  var const2 = "Especialidades de la casa \
                1)Robertina      $100: \n \
                inigualable conbinación de carne al pastor, \
                queso mozarella, cebolla morada curtida con habanero, \
                piña, acompañada de lechuga italiana, aguacate y bañada en salsa robertina \n \
                2)Selena tex-mex $90: \n \
                se luce con una espectacular carne de arrachera cubierta con especaialidad chili de la casa, tocino ahumado, \
                aros de cebolla bañados en queso derretido amarillo, lechuga italiana, tomate, capsup, mayonesa, mostaza \n \
                3)Bongleburguer  $90: \n \
                Se presenta con una jugosa carne de arrachera acompañada con 3 grandes y deliciosos boneless bañados en salsa \
                de su preferencia, queso amarillo, lechuga italiana, tomate, cebolla morada, capsup, mayonesa, mostaza \n \
                4)Pizzaburguer   $90: \n \
                Espectacular conbinación de salsa para pizza, queso mozzarella con peperonis y hamburguesa\
                clasicas de arrachera con lechuga italiana, cebolla morada y tomate\n \
                \n ---Especialidades clásicas--- \n \
                5)Hawaiana       $85: \n \
                Nuestra inigualabe hamburguesa hawaiana nos ofrece una jugosa y crujiente carne de arrachera acompañada de queso manchejo, \
                jamon y una rebanada de piña sazonada en salsa teriyaki de la casa acompañado de lechuga italiana, tomate, cebolla morada, \
                apsup, mayonesa y mostaza\n \
                6)Guacamole      $85: \n \
                Nuestra grandiosa hamburguesa de guacamole se presenta con una jugosa carne de arrachera, acompañada de queso amarillo, \
                tocino ahumado, un grandioso guacamole a la mexicana, lechuga, italiana, tomate, cebolla morada, capsup, mayonesa y mostaza \n \
                7)Salchiburguer  $85: \n \
                Nuestra salchiburguer denota personalidad con las dos mitades de salchichón a la plancha,que la acompañan en conjunto de jamón, \
                queso amarillo, crane de arrachera, lechuga italiana, tomate, cebolla morada, capsup, mayonesa y mostaza \n \
                8)Doble carne    $85: \n \
                Nuestra clásica doble carne es una gran aliada para los amantes de la carne y las burguers, doble porción de queso, tocino ahumado \
                y jugosa carne de arrachera, acompañada de lechuga, italiana, cebolla morada, tomate, capsup, mayonesa y mostaza \n \
                \n ----- Clásicas ----- \n \
                9)Clasica de pollo $75: \n \
                Nuestra jugosa clásica de pollo deleita con su jugosa carde de fajita de pollo, queso manchego, compañado de lechuga italiana, \
                tomate, cebolla morada, capsup, mayonesa y mostaza\
                10) Clásica        $65: \n \
                Nuestra hamburguesa clásica deleita con su jugosa carne de arrachera, tocino ahumado, queso amarillo,acompañado de lechuga italiana, \
                cebolla orada, tomate, capsup, mayonesa y mostaza'";
  client
   .sendText(message.from, 'Escoje una opción del 1 al 10 \n'+ const2)
    .then((result) => { 
  })
}

function menuHotdogs (client, message){
  console.log(hotdogs)
  var const3 = "Escoje una opción del 1 al 4 \n \
                1)Chilidog      $45: \n \
                Esponjoso pan de hot-dog, con salchicha y tocino ahumado, acompañado de la especialidad \
                chili de la casa, cebolla morada y mostaza \n \
                \n 2)Salchichón    $30: \n \
                Esponjoso pan de hotdog, con salchichón, jamón y queso amarillo, acompañado de tomate \
                cebolla morada, capsup, mostaza y mayonesa \n \
                \n 3)Clásico doble   $25: \n \
                Esponjoso pan de hot-dog con doble salchicha y tocino ahumado, acompañado de tomate \
                cebolla morada, capsup, mayonesa y mostaza \n \
                \n 4)Clasico         $20: \n \
                Esponjoso pan de hot-dog con salchicha y tocino ahumado, acompañado de tomate \
                cebolla morada, capsup, mostaza y mayonesa";
  client
  .sendText(message.from, 'Escoje una opción del 1 al 4 \n' + const3)
   .then((result) => { 
})
}

function menuSnakcs (client, message){
  console.log(Snaks)
  var const4 = " 1)Chilipapas          $75: \n \
                Orden papa blanca corte recto frita, sazonada acompañada de especialidad chili de la casa cn bacon bits\
                y bañado en queso amarillo derretido \n \
                \n 2)Papas Bacon&Chesse  $60: \n \
                orden papa blanca corte recto frita, sazonada bañadas en queso amarillo derretido \
                y acompañada de bacon bits\n \
                \n 3)Dedos de queso      $60: \n \
                6 pz de queso mozarella empanizado acompañado de salsa de tomate \n \
                \n 4)Aros de cebolla     $60: \n \
                12 pz de aros de cebolla blanca empanizada crujientes\n \
                \n 5)Papas gajo          $50: \n \
                Orden papa gajo frita y sazonada, se acompaña con capsup\n \
                \n 6)Papas francesas     $45: \n \
                Orden papa blanca corte recto frita, sazonada, se acompaña con capsup";
  client
  .sendText(message.from, 'Escoje una opción del 1 al 6\n' + const4 )
   .then((result) => { 
})
}

function menuAlitas (client, message){
  var const5 = "1)Small     $95 \
                330grs de alitas pesadas en crudo, pueden ser empanizadas o naturales con posibilidad \
                con posibilidad de bañarse en 2 salsas \n \
                \n 2)Medium    $150: \n \
                660grs de alitas pesadas en crudo, pueden ser empanizadas o naturales con posibilidad \
                de bañarse en 2 salsas \
                \n 3)Large     $220: \n \
                660grs de alitas pesadas en crudo, pueden ser empanizadas o naturales con posibilidad \
                de bañarse en 2 salsas";
  client
  .sendText(message.from, 'Escoje una opción del 1 al 3 \n' + const5)
  .then((result) => { 
})
}

function menuPizzas (client, message){
  var const6 = "---Especialidades--- \n \
                1)Robertina     $169: \n \
                Deliciosa pizza de masa delgada cubierta de queso mozarella, carne al pastor\
                jugosos cuantos de piña, julianas de cebolla morada y bañada en salsa robertina de la casa \n \
                2)Boneless      $149: \n \
                Deliciosa pizza de masa delgada cubierta de queso mozzarella y trocitos de boneless \
                bañados en 2 salsas de elección y salsa ranch \n \
                3)Hawaiana      $119: \n \
                Deliciosa pizza de masa delgada cubierta de queso mozzarella, jamón rebanado y piña en trocitos \
                Deliciosa pizza de masa delgada, cubierta con queso mozzarella y rodajas de peperonis";
  client
  .sendText(message.from, 'Escoje una opción del 1 al 4' + const6)
   .then((result) => {     
})
}

function menuBebidas (client, message){
  var const7 = "1)Strawberry milk shake     $45 \
                2)Hershey milk shake        $45 \
                3)Sweet vainilla milk shake $45 \
                4)Te helado                 $25 \
                5)Lemmon cucumber           $35 \
                6)Limonada natural          $25 \
                7)Limonada mineral          $35 \
                8)Refresco                  $25";
  client
  .sendText(message.from, 'Escoje una opción del 1 al 8 \n' + const7)
   .then((result) => { 
})
}