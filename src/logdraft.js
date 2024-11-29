


export function checkWidthAndLog(message1, message2, minWidth) {
   if (window.innerWidth <= minWidth) {
      console.log(message1);
   } else if (window.innerWidth > minWidth) {
      console.log(message2);
   }
}

const message1 = `
════.✵.════════════════════════════════════════════════════════════════

               🗿🗿 Welcomme to my Blog Project !🗿🗿 
   
         I'm Davy ROBERT and I would like to inform you that 

      some "Console logs" are left on voluntarily for the moment !

          Thank you for visiting https://github.com/DavyR01

═════════════════════════════════════════════════════════.✵.═══════════
`;

const message2 = `
╔════.✵.══════════════════════════════════════════════════════════════════════════════════╗

       __     __     ______     __         ______     ______     __    __     ______    
      /\\ \\  _ \\ \\   /\\  ___\\   /\\ \\       /\\  ___\\   /\\  __ \\   /\\ "-./  \\   /\\  ___\\   
      \\ \\ \\/ ".\\ \\  \\ \\  __\\   \\ \\ \\____  \\ \\ \\____  \\ \\ \\/\\ \\  \\ \\ \\-./\\ \\  \\ \\  __\\   
       \\ \\__/".~\\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\ \\ \\_\\  \\ \\_____\\ 
        \\/_/   \\/_/   \\/_____/   \\/_____/   \\/_____/   \\/_____/   \\/_/  \\/_/   \\/_____/ 

                                 to my Blog Project ! 
                  
                  I'm Davy ROBERT and I would like to inform you that 

              some "Console logs" are left on voluntarily for the moment !

                  Thank you for visiting https://github.com/DavyR01


╚═══════════════════════════════════════════════════════════════════════════.✵.═══════════╝
`;



checkWidthAndLog(``, message1, 770);

checkWidthAndLog(message2, '', 770);